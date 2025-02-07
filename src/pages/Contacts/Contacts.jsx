import { Container } from "shared/ui/Container/Container";
import { CircleLoader } from "shared/ui/Loader/CircleLoader";
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { useFooterStore } from "entities/store/footerStore/footerStore";
import { useEffect } from "react";
import { ContactsPage } from "widgets/ContactsPage/ContactsPage";
import { useCallback } from "react";






export const Contacts = () => {

    const { fetchFooterIcons, isLoading: footerIconLoading } = useFooterIconStore()
    const { fetchFooter, isLoading: footerLoading } = useFooterStore()
   

    const fetchData = useCallback(() => {
        fetchFooterIcons();
        fetchFooter();
      
    }, [fetchFooterIcons, fetchFooter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
        const pageIsLoading =  footerIconLoading || footerLoading 

        if (pageIsLoading) {
            return <CircleLoader />
        }

    return (
        <Container>
           <ContactsPage/>
        </Container>
    );
};