import { Container } from "shared/ui/Container/Container";
import { ServicePage } from "widgets/ServicePage/ServicePage";
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';
import { CircleLoader } from 'shared/ui/Loader/CircleLoader';
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { useFooterStore } from "entities/store/footerStore/footerStore";
import { useEffect } from "react";

export const Services = () => {
    const { fetchServices, isLoading: servicesLoading } = useServicesStore()
    const { fetchFooterIcons, isLoading: footerIconLoading } = useFooterIconStore()
    const { fetchFooter, isLoading: footerLoading } = useFooterStore()
    useEffect(() => {
        fetchServices()
        fetchFooterIcons()
        fetchFooter()
    }, [fetchServices, fetchFooterIcons, fetchFooter]);

    const pageIsLoading = servicesLoading || footerIconLoading || footerLoading

    if (pageIsLoading) {
        return <CircleLoader />;
    }
    return (
        <Container>
            <ServicePage />
        </Container>
    );
};