import { NewsPage } from "widgets/NewsPage/NewsPage";
import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { CircleLoader } from 'shared/ui/Loader/CircleLoader';
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { useFooterStore } from "entities/store/footerStore/footerStore";
import { useEffect } from "react";


export const LegislativeNews = () => {
    const { fetchAllNews, isLoading: newsLoading } = useNewsStore()
    const { fetchFooterIcons, isLoading: footerIconLoading } = useFooterIconStore()
    const { fetchFooter, isLoading: footerLoading } = useFooterStore()

    useEffect(() => {
        fetchAllNews()
        fetchFooterIcons()
        fetchFooter()
    }, [fetchAllNews, fetchFooterIcons, fetchFooter]);

    const pageIsLoading = newsLoading || footerIconLoading || footerLoading

    if (pageIsLoading) {
        return <CircleLoader />;
    }

    return (
        <NewsPage />
    );
};