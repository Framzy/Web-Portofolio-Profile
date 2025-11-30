import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import "./styles/global.css";
// remove global import of icons that pulls full pack here
// import "./fontawesome/icons"; // <- jangan import paket besar di awal
import Layout from "./components/Layout";
import ErrorPage from "./pages/error/ErrorPage";
// lazy load main content
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
