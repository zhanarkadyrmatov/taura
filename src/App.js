import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();
function App() {
  const { t, i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default function WrappeApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
