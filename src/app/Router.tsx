import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";

const Content = lazy(() => import("./Content"));

export default function AppRouter() {
  return (
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
  );
}
