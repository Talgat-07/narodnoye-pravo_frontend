import { Typography } from 'shared/ui/Typography/Typography';
import aboutUs from '../../shared/assets/img/aboutUsImg.png'
import s from './AboutUs.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Arrow } from 'shared/assets/icons/Arrow';


export function AboutUs() {
    return (
        <div className={s.aboutUs}>
            <Typography
                variant='h3' 
                weight='bold'>
                    О нас 
            </Typography>

            <img className={s.image} src={aboutUs} alt='весы, рукопожатие'/>

            <Typography 
                className={s.text}
                variant='p' 
                styleType='Medium' 
                weight='regular'>

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Suscipit recusandae cupiditate pariatur exercitationem harum rem explicabo, 
                    ullam vitae ad quos, modi consequatur quo rerum labore tempora veniam velit 
                    blanditiis expedita vel quod! 
                    Qui porro et itaque fugit,
                    corporis facere mollitia hic! Quibusdam sequi optio consectetur?
                    Ab hic eligendi cupiditate officia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae magni consectetur ex magnam aliquam corrupti 
                    qui asperiores iure, praesentium quasi dolor autem! Odio eveniet amet, perspiciatis rerum quidem voluptatibus! Laudantium 
                    vero recusandae quia consequatur iusto ea et ut pariatur ratione libero, aliquam officiis ipsa iste dignissimos accusamus mollitia maxime? 
                    Sequi, dolor cumque non voluptatibus obcaecati explicabo facilis esse laudantium facere, rerum nisi nobis deleniti iure modi vero enim dolore 
                    similique nostrum assumenda commodi nemo quo dignissimos? Hic eius fuga voluptate at temporibus? Obcaecati modi soluta, molestias dolor
                     cupiditate fugit praesentium! Voluptas modi eos esse mollitia voluptatum quis excepturi sit.
                    
            </Typography>

            <Link to={path.about}>
                <Typography
                    className={s.arrow}
                    variant='p'
                    styleType='Medium'
                    lineHeight='lineLittle'
                    color='blue'>
                    Узнать подробнее
                    <Arrow />
                </Typography>
            </Link>

                

        </div>
    );
}

