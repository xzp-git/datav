import Pages from "@/pages";
import Home from "@/pages/home";
import { Navigate, useRoutes } from "react-router-dom";

function Route() {
    const element = useRoutes([
        {
            path: '/',
            element: <Pages />,
            children:[
                {
                    path:'/',
                    element: <Navigate to="/home" />
                },
                {
                    path:'/home',
                    element: <Home />
                }
            ]
        }
    ])
    return element
}


export default Route