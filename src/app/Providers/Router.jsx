import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { path } from "../../shared/constants/constants";
import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";


export const Router = createBrowserRouter(
    [
        {
            element: <Layout/>,
            children: [
                {
                    path: path.home,
                    element: <Home/>,
                },
                {
                    path: path.about,
                    element: <About/>,
                }, 

            ]
        }
    ]
)