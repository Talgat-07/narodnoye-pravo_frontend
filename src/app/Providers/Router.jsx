import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { path } from "../../shared/constants/constants";
import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";
import { Services } from "pages/Services/Services";
import { LegislativeNews } from "pages/LegislativeNews/LegislativeNews";
import { AnalyticAndPublications } from "pages/AnalytAndPublic/AnalytAndPublic";
import { Education } from "pages/Education/Education";
import { BankVacancy } from "pages/BankVacancy/BankVacancy";
import { Contacts } from "pages/Contacts/Contacts";


export const Router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: path.home,
                    element: <Home />,
                },
                {
                    path: path.about,
                    element: <About />,
                },
                {
                    path: path.services,
                    element: <Services />,
                },
                {
                    path: path.legislativenews,
                    element: <LegislativeNews />,
                },
                {
                    path: path.analyticandpublications,
                    element: <AnalyticAndPublications />,
                },
                {
                    path: path.education,
                    element: <Education />,
                },
                {
                    path: path.bankvacancy,
                    element: <BankVacancy />,
                },
                {
                    path: path.contacts,
                    element: <Contacts />,
                }
            ]
        }
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    }
);