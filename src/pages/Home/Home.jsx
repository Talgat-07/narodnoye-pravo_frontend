import { AboutUs } from "widgets/AboutUs/AboutUs";
import { Hero } from "widgets/Hero/Hero";
// import { LegislativeNews } from "widgets/LegislativeNews/LegislativeNews";   
import { Service } from "widgets/Service/Service";
import { useAboutUsStore } from 'entities/store/aboutUsStore/aboutUsStore';
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';
import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { CircleLoader } from 'shared/ui/Loader/CircleLoader';
import { useEffect } from "react";
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { useFooterStore } from "entities/store/footerStore/footerStore";



export const Home = () => {
    const { fetchAboutUs, isLoading: aboutLoading } = useAboutUsStore()
    const { fetchServices, isLoading: servicesLoading } = useServicesStore()
    const { fetchAllNews, isLoading: newsLoading } = useNewsStore()
    const { fetchFooterIcons, isLoading: footerIconLoading } = useFooterIconStore()
    const { fetchFooter, isLoading: footerLoading } = useFooterStore()

    useEffect(() => {
        fetchAboutUs();
        fetchServices()
        fetchAllNews()
        fetchFooterIcons()
        fetchFooter()
    }, [fetchAboutUs, fetchServices, fetchAllNews, fetchFooterIcons, fetchFooter])
    const pageIsLoading = aboutLoading || servicesLoading || newsLoading || footerIconLoading || footerLoading

    if (pageIsLoading) {
        return <CircleLoader />;
    }

    return (
        <div>
            <Hero />
            <AboutUs />
            <Service />
            {/* <LegislativeNews /> */}
        </div>
    );
};

