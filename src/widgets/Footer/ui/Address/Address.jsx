import styles from './Address.module.scss';
import { Email } from 'shared/assets/icons/Email';
import { Phone } from 'shared/assets/icons/Phone';
import { Typography } from 'shared/ui/Typography/Typography';
import { useFooterStore } from 'entities/store/footerStore/footerStore';
import { useEffect } from "react";

export const Address = () => {
    const { phone_numbers, emails, error, fetchFooter } = useFooterStore()

    useEffect(() => {
        fetchFooter()
    }, [fetchFooter])

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className={styles.middle}>
            <Typography
                variant='bodyXLL'
                weight='bold'
                color='black'>
                КОНТАКТЫ
            </Typography>
            {phone_numbers.map((contact, index) => (
                <div
                    className={`${styles.contactItem} ${index === 1 ? styles.secondContactItem : ''
                        }`}
                    key={contact.id}
                >
                    {contact.id === 1 && <Phone />}
                    <a
                        href={`tel:${contact.formatted_phone_number.replace(/[\s()]/g, '')}`}
                        className={styles.contactLink}
                    >
                        <Typography
                            variant="bodyLL"
                            weight="regular">
                            {contact.formatted_phone_number}
                        </Typography>
                    </a>
                </div>
            ))
            }
            {emails.map((email) => (
                <div className={`${styles.contactItem} ${styles.contactEmal}`} key={email.id}>
                    <Email />
                    <a
                        href={`mailto:${email.email}`}
                        className={styles.contactLink}
                    >
                        <Typography
                            variant="bodyLL"
                            weight="regular">
                            {email.email}
                        </Typography>
                    </a>
                </div>
            ))
            }
        </div>
    );
};
