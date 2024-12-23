import { Breadcrumbs } from "shared/ui/Breadcrumbs/Breadcrumbs";
import { Container } from "shared/ui/Container/Container";
import { AboutPage } from "widgets/AboutPage/AboutPage";


export const About = () => {
    return (
        <Container>
            <Breadcrumbs />
            <AboutPage />
        </Container>
    );
};

