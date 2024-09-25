import { createBrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HelloWorld />
    }
]);

export default router