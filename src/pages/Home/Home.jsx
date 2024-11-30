import { AboutUs } from "widgets/AboutUs/AboutUs";
import { Hero } from "widgets/Hero/Hero";
import { Service } from "widgets/Service/Service";



export const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Service />
        </div>
    );
};

