import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CompanyPage from "./pages/CompanyPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import QuestionPage from "./pages/QuestionPage";
import TauraExpressPage from "./pages/TauraExpressPage";

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="services/" element={<ServicesPage />} />
        <Route path="company/" element={<CompanyPage />} />
        <Route path="news/" element={<NewsPage />} />
        <Route path="contact/" element={<ContactPage />} />
        <Route path="question/" element={<QuestionPage />} />
        <Route path="tauraexpress/" element={<TauraExpressPage />} />
      </Routes>
    </>
  );
}

export default Router;
