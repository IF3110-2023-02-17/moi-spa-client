import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/layouts/AppLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/login/Login";
import MovieAdd from "./pages/movies/MovieAdd";
import MoviesPage from "./pages/movies/Movies";
import PostForm from "./pages/posts/PostForm";
import PostHome from "./pages/posts/PostHome";
import PostPage from "./pages/posts/PostPage";
import Register from "./pages/register/Register";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";
import MenfessPage from "./pages/fans-message/MenfessPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "",
            element: <PostHome />,
          },
          {
            path: "posts/new/",
            element: <PostForm />,
          },
          {
            path: "posts/:postId",
            element: <PostPage />,
          },
          {
            path: "subscription",
            element: <SubscriptionPage />,
          },
          {
            path: "menfess",
            element: <MenfessPage />,
          },
          {
            path: "movies/",
            children: [
              {
                path: "",
                element: <MoviesPage />,
              },
              {
                path: "new/",
                element: <MovieAdd />,
              },
            ],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
