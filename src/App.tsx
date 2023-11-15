import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/layouts/AppLayout";
import Login from "./pages/login/Login";
import PostForm from "./pages/posts/PostForm";
import PostHome from "./pages/posts/PostHome";
import PostPage from "./pages/posts/PostPage";
import Register from "./pages/register/Register";

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
        ],
      },
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
