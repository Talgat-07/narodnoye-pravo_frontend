import { useEffect } from "react";
import { useSliderStore } from "entities/store/sliderStore/sliderStore";
import { Container } from "shared/ui/Container/Container";
import { CircleLoader } from "shared/ui/Loader/CircleLoader";
import { AboutPage } from "widgets/AboutPage/AboutPage";
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { useFooterStore } from "entities/store/footerStore/footerStore";


export const About = () => {
    const { fetchSlider, isLoading: sliderLoading } = useSliderStore()
    const { fetchFooterIcons, isLoading: footerIconLoading } = useFooterIconStore()
    const { fetchFooter, isLoading: footerLoading } = useFooterStore()

    useEffect(() => {
        fetchSlider()
        fetchFooterIcons()
        fetchFooter()
    }, [fetchSlider, fetchFooterIcons, fetchFooter])

    const pageIsLoading = sliderLoading || footerIconLoading || footerLoading

    if (pageIsLoading) {
        return <CircleLoader />
    }

    return (
        <Container>
            <AboutPage />
        </Container>
    );
};

