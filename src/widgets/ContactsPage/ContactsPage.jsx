import { useMemo } from "react";
import { Container } from "shared/ui/Container/Container";
import { Clock } from "shared/assets/icons/Clock";
import { EmailCon } from "shared/assets/icons/EmailCon";
import { PhoneCon } from "shared/assets/icons/PhoneCon";
import { Address } from "shared/assets/icons/Address";
import { useFooterStore } from "entities/store/footerStore/footerStore";
import { Typography } from "shared/ui/Typography/Typography";
import styles from "./ContactsPage.module.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

const center = {
  lat: 42.872,
  lng: 74.6099,
};

export const ContactsPage = () => {
  const {
    phone_numbers,
    emails,
    error,
    address,
    google_map_address,
    open_hours,
    isLoading,
  } = useFooterStore();

  const mapCenter = useMemo(() => center, []);

  const handleMapClick = () => {
    if (google_map_address) {
      window.open(google_map_address, "_blank");
    }
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: true,
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <Container>
      <Typography className={styles.title} variant="h3" weight="semibold">
        Контакты
      </Typography>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles.time}>
            <Clock />
            <div className={styles.text}>
              <Typography variant="bodyXL" weight="semibold" color="white">
                Время работы:
              </Typography>
              <Typography variant="bodyL" color="white" weight="regular">
                {open_hours}
              </Typography>
            </div>
          </div>

          <div className={styles.phone}>
            <PhoneCon />
            <div className={styles.text}>
              <Typography variant="bodyXL" weight="semibold" color="white">
                Номер телефона:
              </Typography>
              {phone_numbers.map((phone) => (
                <Typography
                  variant="bodyL"
                  weight="regular"
                  color="white"
                  key={phone.id}
                >
                  {phone.formatted_phone_number}
                </Typography>
              ))}
            </div>
          </div>

          <div className={styles.email}>
            <EmailCon />
            <div className={styles.text}>
              <Typography variant="bodyXL" weight="semibold" color="white">
                Электронная почта:
              </Typography>
              {emails.map((item, index) => (
                <Typography
                  variant="bodyL"
                  weight="regular"
                  color="white"
                  key={index}
                >
                  {item.email}
                </Typography>
              ))}
            </div>
          </div>

          <div className={styles.address}>
            <Address />
            <div className={styles.text}>
              <Typography variant="bodyXL" weight="semibold" color="white">
                Адрес:
              </Typography>
              <Typography variant="bodyL" weight="regular" color="white">
                {address}
              </Typography>
            </div>
          </div>
        </div>

        <div>
          {GOOGLE_MAPS_API_KEY ? (
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerClassName={styles.map}
                center={mapCenter}
                zoom={16}
                options={mapOptions}
                onClick={handleMapClick}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          ) : (
            <div>Ошибка:Google Maps не найден</div>
          )}
        </div>
      </div>
    </Container>
  );
};
