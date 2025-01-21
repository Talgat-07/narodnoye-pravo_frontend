import { AboutUs } from "widgets/AboutUs/AboutUs";
import { Hero } from "widgets/Hero/Hero";
import { LegislativeNews } from "widgets/LegislativeNews/LegislativeNews";
import { Service } from "widgets/Service/Service";
import { useAboutUsStore } from 'shared/store/aboutUsStore';
import { useServicesStore } from 'shared/store/servicesStore';
import { useNewsStore } from 'shared/store/newsStore';
import { CircleLoader } from 'shared/ui/Loader/CircleLoader';
import { useEffect } from "react";
import { useFooterIconStore } from "shared/store/footerIconStore";
import { useFooterStore } from "shared/store/footerStore";



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
            <LegislativeNews />
        </div>
    );
};

