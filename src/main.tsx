import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./styles/index.css";
// import "./styles/global.css";
import Layout from "./components/Layout";
import ErrorPage from "./pages/error/ErrorPage";
const Content = lazy(() => import("./components/Content"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div />}>
                <Content />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
