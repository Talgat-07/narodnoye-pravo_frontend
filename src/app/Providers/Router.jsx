import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { path } from "../../shared/constants/constants";
import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";
import { Services} from "../../pages/Services/Services";
import { Legislativenews } from "../../pages/Legislativenews/Legislative.news";
import { AnalyticsandPublications } from "pages/Anal&publ/analyt&public";
import { Education } from "../../pages/Education/Education";
import { BankVacancy } from "../../pages/BankVacancy/BankVacancy";
import { Contacts } from "../../pages/Contacts/Contacts";



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
                {
                    path: path.services,
                    element: <Services/>,
                },
                {
                    path: path.legislativenews,
                    element: <Legislativenews/>,
                },
                {
                    path: path. analyticandspublications,
                    element: <AnalyticsandPublications/>,
                },
                {
                    path: path.education,
                    element: <Education/>,
                },
                {
                    path: path.bankvacancy,
                    element: <BankVacancy/>,
                },
                {
                    path: path.contacts,
                    element: <Contacts/>,
                }
            ]
        }
    ]
)