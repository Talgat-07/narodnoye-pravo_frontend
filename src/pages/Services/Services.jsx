import { Breadcrumbs } from "shared/ui/Breadcrumbs/Breadcrumbs";
import { Container } from "shared/ui/Container/Container";
import { Service } from "widgets/Service/Service";



export const Services = () => {
    return (
        <Container>
            <Breadcrumbs />
            <Service weight='semibold'
                withButton={false}
                cardWrapClassName='cardWrapPage' />
        </Container>
    );
};