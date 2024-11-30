import { Typography } from 'shared/ui/Typography/Typography';
import aboutUs from '../../shared/assets/img/aboutUsImg.png'

export function AboutUs() {
    return (
        <div>
            <Typography
                variant='h3'
                weight='bold'
                color='black'>О нас </Typography>

            <img src={aboutUs} />

            <Typography
                variant='p'
                styleType='Medium'
                weight='regular'
                lineHeight='lineBig'
                fontFamily='second'
                color='black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit recusandae cupiditate pariatur exercitationem harum rem explicabo,
                ullam vitae ad quos, modi consequatur quo rerum labore tempora veniam velit
                blanditiis expedita vel quod!
                Qui porro et itaque fugit,
                corporis facere mollitia hic! Quibusdam sequi optio consectetur?
                Ab hic eligendi cupiditate officia.</Typography>

        </div>
    );
}

