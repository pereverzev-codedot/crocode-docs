import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "@pages/AuthPage";
import DocumentPage from "pages/DocumentPage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DocumentPage />} />
      <Route element={<DocumentPage />} path="/:documentId" />
    </Routes>
  );
};
