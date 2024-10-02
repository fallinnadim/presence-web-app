import { createBrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <Login />
            },
        ]
    },
    {
        path: '/',
        element: <PrivateRoute />,
        children: [
            // {
            //     path: '',
            //     element: <Layout />,
            //     children: [
            //         {
            //             path: 'talents',
            //             element: <ListTalent />
            //         },
            //     ]
            // }
        ]
    },
    {
        path: '*',
        element: <HelloWorld />
    }
]);

export default router