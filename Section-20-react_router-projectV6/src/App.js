import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import { AllQuotes } from "./pages/AllQuotes";
import { QuoteDetail } from "./pages/QuoteDetail";
import { NewQuote } from "./pages/NewQuote";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

function App() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
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
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
