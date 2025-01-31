import { useEffect, useRef } from "react";
import { Container } from "shared/ui/Container/Container";
import { Clock} from 'shared/assets/icons/Clock'
import { EmailCon } from 'shared/assets/icons/EmailCon';
import { PhoneCon } from 'shared/assets/icons/PhoneCon';
import { Address } from 'shared/assets/icons/Address';
import { useFooterStore } from "entities/store/footerStore/footerStore";
import { Typography } from "shared/ui/Typography/Typography";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ContactsPage.module.scss";

export const ContactsPage = () => {
    const { phone_numbers, emails, error, address, isLoading } = useFooterStore(); 

    const mapRef = useRef(null);
    const mapInstance = useRef(null); 

    useEffect(() => {
        if (!mapRef.current || mapInstance.current) return; 
       
        mapInstance.current = L.map(mapRef.current, {
            center: [42.8722, 74.6102], 
            zoom: 16,
        });
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        }).addTo(mapInstance.current);

        L.marker([42.8722, 74.6102])
            .addTo(mapInstance.current)
            .openPopup();
    }, []);

    const handleMapClick = () => {
        window.open("https://2gis.kg/bishkek/geo/15763234351116522", "_blank");
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <Container>
            <Typography  className={styles.title} variant="h3" weight="semibold">
                Контакты
            </Typography>
            <div className={styles.content}>

             <div className={styles.contacts}>
             <div className={styles.time}>
              <Clock/>
              <div className={styles.text}>
              <Typography variant='bodyXL' weight='semibold' color='white' >Время работы:</Typography>
              <Typography variant='bodyL' color='white' weight='regular' >c 9:00  до 18:00</Typography>
              </div>
              </div>

                <div className={styles.phone}>
                <PhoneCon/>
                <div className={styles.text}>
                <Typography variant='bodyXL' weight='semibold' color='white' >Номер телефона:</Typography>
                {phone_numbers.map((phone) => (
                <Typography variant='bodyL' weight='regular' color='white'  key={phone.id}>{phone.formatted_phone_number}</Typography>
                 ))}
                </div>
                </div>

                <div className={styles.email}>
                <EmailCon/>
                <div className={styles.text}>
                <Typography variant='bodyXL' weight='semibold' color='white' >Электронная почта</Typography>
                {emails.map((item, index) => (
                <Typography variant='bodyL' weight='regular'  color='white'key={index}>{item.email}</Typography>
                ))}
                </div>
                </div>

                <div className={styles.address}>
                <Address/>
                <div className={styles.text}>
                <Typography variant='bodyXL' weight='semibold'color='white' >Адрес</Typography>
                <Typography  variant='bodyL' weight='regular' color='white' >{address}</Typography>
                </div>
                </div>
             </div>
                <div className={styles.mapCont} onClick={handleMapClick}>
                    <div className={styles.map} ref={mapRef} />
                </div>
            </div>
        </Container>
    );
};
