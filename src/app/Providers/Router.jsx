import { createBrowserRouter } from "react-router-dom";
import { Layout } from "app/Layout/Layout";
import { path } from "shared/constants/constants";
import { Home } from "pages/Home/Home";
import { About } from "pages/About/About";
import { Services } from "pages/Services/Services";
import { LegislativeNews } from "pages/LegislativeNews/LegislativeNews";
import { AnalyticAndPublications } from "pages/AnalytAndPublic/AnalytAndPublic";
import { Education } from "pages/Education/Education";
import { BankVacancy } from "pages/BankVacancy/BankVacancy";
import { Contacts } from "pages/Contacts/Contacts";
import { ServiceDetail } from "widgets/ServiceDetail/ServiceDetail";
import { ScrollToTop } from "shared/ui/ScrollToTop/ScrollToTop";
import { NewsDetail } from "widgets/NewsDetail/NewsDetail";


export const Router = createBrowserRouter(
    [
        {
            element: (
                <>
                    <ScrollToTop />
                    <Layout />
                </>
            ),
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
                    path: path.serviceDetail,
                    element: <ServiceDetail />,
                },
                {
                    path: path.legislativeNews,
                    element: <LegislativeNews />,
                },
                {
                    path: path.legislativeNewsDetail,
                    element: <NewsDetail />
                },
                {
                    path: path.analyticAndPublications,
                    element: <AnalyticAndPublications />,
                },
                {
                    path: path.education,
                    element: <Education />,
                },
                {
                    path: path.bankVacancy,
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