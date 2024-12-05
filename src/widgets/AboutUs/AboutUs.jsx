import { Typography } from 'shared/ui/Typography/Typography';
import aboutUs from '../../shared/assets/img/aboutUsImg.png'
import s from './AboutUs.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
// import { Arrow } from 'shared/assets/icons/Arrow';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';


export function AboutUs() {
    return (
        <div className={s.aboutUs}>
            <Typography
                className={s.title}
                variant='h3'
                weight='bold'>
                О нас
            </Typography>

            <img className={s.image} src={aboutUs} alt='весы, рукопожатие' />

            <Typography
                className={s.text}
                variant='bodyM'
                weight='regular'
                color='black'
                lineHeight='lineBig'>

                Lorem ipsum dolor sit amet consectetur. Nunc auctor tempor urna enim quis hendrerit. Metus sed quisque mattis interdum justo id turpis tempus. Sodales risus pellentesque odio nisl. At sit ultricies mi non. Vel massa arcu ut bibendum nisi aenean pellentesque. Donec interdum malesuada leo tristique tellus massa tempus nunc. Lobortis elit tortor fames sollicitudin tellus. At mi vitae enim quisque lectus ipsum lorem. Tellus id condimentum ornare eu et. Metus gravida lectus cras sit turpis ornare nunc varius. Cursus molestie ipsum urna eu id arcu fames nulla. Maecenas lectus est ullamcorper nullam. Nisl eget aliquam nunc in faucibus. Sed morbi enim ut eget maecenas ut egestas interdum sed. Lorem ipsum dolor sit amet consectetur. Nunc auctor tempor urna enim quis hendrerit. Metus sed quisque mattis interdum justo id turpis tempus. Sodales risus pellentesque odio nisl. At sit ultricies mi non. Vel massa arcu ut bibendum nisi aenean pellentesque.
            </Typography>

            <Link to={path.about}>
                <ButtonLink />
            </Link>



        </div>
    );
}

