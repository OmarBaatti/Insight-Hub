import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticleDetails";
import Resources from "../pages/Resources";
import Team from "../pages/Team";
import AskMentor from "../pages/AskMentor";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// Dashboard pages
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import SavedArticles from "../pages/dashboard/SavedArticles";
import MyQuestions from "../pages/dashboard/MyQuestions";
import Settings from "../pages/dashboard/Settings";
import ManageArticles from "../pages/dashboard/ManageArticles";
import ManageResources from "../pages/dashboard/ManageResources";
import ManageQuestions from "../pages/dashboard/ManageQuestions";
import ManageTeam from "../pages/dashboard/ManageTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:id", element: <ArticleDetails /> },
      { path: "resources", element: <Resources /> },
      { path: "team", element: <Team /> },
      { path: "ask", element: <AskMentor /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "profile", element: <Profile /> },
          { path: "saved", element: <SavedArticles /> },
          { path: "questions", element: <MyQuestions /> },
          { path: "settings", element: <Settings /> },

          // Admin pages
          { path: "manage-articles", element: <ManageArticles /> },
          { path: "manage-resources", element: <ManageResources /> },
          { path: "manage-questions", element: <ManageQuestions /> },
          { path: "manage-team", element: <ManageTeam /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;