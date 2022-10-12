import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

////suppose to be a data that from fetching from API
// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Max",
//     text: "Learning React is fun!",
//   },
//   {
//     id: "q2",
//     author: "Nut",
//     text: "Learning React is GREAT!",
//   },
// ];

export const QuoteDetail = (props) => {
  const params = useParams();
  //const routeMatch = useRouteMatch();

  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // console.log(routeMatch);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  let content = <NoQuotesFound />;

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!!loadedQuote) {
    content = (
      <>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        {/* <Route path={`/quotes/${params.quoteId}`} exact>
            OR
        */}
        <Outlet />
        {/* <Route path={`${routeMatch.path}`} exact>
          <div className="centered">
            <Link to={`${routeMatch.url}/comments`} className="btn">
              Comment
            </Link>
            <button className="btn" onClick={() => history.goBack()}>
              Back
            </button>
          </div>
        </Route>
        <Route path={`${routeMatch.path}/comments`}> */}
        {/* OR
        if Route not Link
         <Route path="/quotes/:quoteId/comments">
          <Comments />
        </Route>*/}
      </>
    );
  }

  return content;
};
