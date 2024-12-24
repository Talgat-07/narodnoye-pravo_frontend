import { Location } from 'shared/assets/icons/Location';
import style from './Map.module.scss'
import { Typography } from '../../../../shared/ui/Typography/Typography';


export const Map = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/Rj2MmFEyRoTXYVdk6`;
    return (
        <div className={style.right}>
            <Typography
                variant='bodyXL'
                weight='bold'
                color='black'>
                АДРЕС
            </Typography>
            <a href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={style.addressWrap}>
                <Location />
                <Typography
                    variant="bodyM"
                    weight="regular"
                    lineHeight='lineModerate'
                    color='black'>
                    Кыргызская Республика,
                    город Бишкек,<br />
                    ул. Токтогула, 87,<br />
                    4 этаж
                </Typography>
            </a>
        </div>
    );
};