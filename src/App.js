
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/routes/privateRoute";
import { LoadingSpin } from './components/UI/LoadingSpin';
const ErrorPage = lazy(() => import('./pages/errorPage'));
const HomePage = lazy(() => import("./pages/Home"));
const Workspace2 = lazy(() => import("./components/ExpNo2/workspace2"));
const TestPage2 = lazy(() => import("./components/ExpNo2/testPage2"));

function App() {
  return (
    <Routes>
      <Route
        path="exp2"
        element={
          <Suspense fallback={<LoadingSpin />}>
            <Workspace2 />
          </Suspense>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route
          path=""
          element={
            <Suspense fallback={<LoadingSpin />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/test2"
          element={
            <Suspense fallback={<LoadingSpin />}>
              <TestPage2 />
            </Suspense>
          }
        />

      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpin />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;

