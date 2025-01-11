import { Location } from 'shared/assets/icons/Location';
import styles from './Map.module.scss'
import { Typography } from '../../../../shared/ui/Typography/Typography';
import { useFooterStore } from 'shared/store/footerStore';


export const Map = () => {
    const { address, error } = useFooterStore()

    if (error) return <div>Ошибка: {error}</div>

    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    return (
        <div className={styles.right}>
            <Typography
                variant='bodyL'
                weight='bold'
                color='black'>
                АДРЕС
            </Typography>
            <a href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressWrap}>
                <Location />
                <Typography
                    className={styles.addressText}
                    variant="bodyM"
                    weight="regular"
                    lineHeight='lineModerate'
                    color='black'
                >
                    {address}
                </Typography>
            </a>
        </div>
    );
};