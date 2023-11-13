import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Login from './pages/login/Login';
import Register from "./pages/register/Register";
// import Register from './pages/register/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                {/* <h1>Hello</h1> */}
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "/",
                element: <h1>home</h1>,
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

function App() {
    return <RouterProvider router={router} />;
}

export default App;
