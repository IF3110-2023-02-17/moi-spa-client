import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/layouts/AppLayout";
import Login from "./pages/login/Login";
import PostHome from "./pages/posts/PostHome";
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
