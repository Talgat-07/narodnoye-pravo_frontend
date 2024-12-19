import { AboutUs } from "widgets/AboutUs/AboutUs";
import { Hero } from "widgets/Hero/Hero";
import { LegislativeNews } from "entities/LegislativeNews/LegislativeNews";
import { Service } from "entities/Service/Service";



export const Home = () => {

    return (
        <div>
            <Hero />
            <AboutUs />
            <Service weight='bold' />
            <LegislativeNews />
        </div>
    );
};

