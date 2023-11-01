import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello</h1>
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "test",
                element: <h1>Hello studio</h1>,
            },
            {
                path: "teot",
                element: <h1>Hello Teot</h1>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
