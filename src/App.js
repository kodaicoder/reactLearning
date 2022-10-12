import React, { Suspense } from "react";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";

//import { AllQuotes } from "./pages/AllQuotes";
//import { QuoteDetail } from "./pages/QuoteDetail";
// import { NewQuote } from "./pages/NewQuote";
//import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

///Lazy load a component
///if you using name export it require to using
///'.then((module) => ({ default: module.%name_of_component% }))'
///after import component with react.lazy
/// DON'T FORGET !! to using <Suspense> (from React) to cover the lazy load component too.
const AllQuotes = React.lazy(() =>
  import("./pages/AllQuotes").then((module) => ({ default: module.AllQuotes }))
);
const QuoteDetail = React.lazy(() =>
  import("./pages/QuoteDetail").then((module) => ({
    default: module.QuoteDetail,
  }))
);
const NewQuote = React.lazy(() =>
  import("./pages/NewQuote").then((module) => ({ default: module.NewQuote }))
);
const NotFound = React.lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);

function App() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route
          path="/quotes"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner />
                </div>
              }
            >
              <AllQuotes />
            </Suspense>
          }
        />
        <Route
          path="/quotes/:quoteId/*"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner />
                </div>
              }
            >
              <QuoteDetail />
            </Suspense>
          }
        >
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
                <button className="btn" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>

        <Route
          path="/new-quote"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner />
                </div>
              }
            >
              <NewQuote />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner />
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
