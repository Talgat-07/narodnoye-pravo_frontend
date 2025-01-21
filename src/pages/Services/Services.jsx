import { Container } from "shared/ui/Container/Container";
import { ServicePage } from "widgets/ServicePage/ServicePage";
import { useServicesStore } from 'shared/store/servicesStore';
import { CircleLoader } from 'shared/ui/Loader/CircleLoader';
import { useFooterIconStore } from "shared/store/footerIconStore";
import { useFooterStore } from "shared/store/footerStore";
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