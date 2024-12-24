import { AboutUs } from "widgets/AboutUs/AboutUs";
import { Hero } from "widgets/Hero/Hero";
import { LegislativeNews } from "widgets/LegislativeNews/LegislativeNews";
import { Service } from "widgets/Service/Service";



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

