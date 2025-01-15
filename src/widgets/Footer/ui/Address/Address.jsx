import styles from './Address.module.scss';
import { Email } from 'shared/assets/icons/Email';
import { Phone } from 'shared/assets/icons/Phone';
import { Typography } from 'shared/ui/Typography/Typography';
import { useFooterStore } from 'shared/store/footerStore';

export const Address = () => {
    const { formatted_phone_number, emails, error } = useFooterStore();

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className={styles.middle}>
            <Typography
                variant='bodyL'
                weight='bold'
                color='black'>
                КОНТАКТЫ
            </Typography>
            {formatted_phone_number.map((contact, index) => (
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
                            variant="bodyM"
                            weight="regular">
                            {contact.formatted_phone_number}
                        </Typography>
                    </a>
                </div>
            ))
            }
            {emails.map((email) => (
                <div className={styles.contactItem} key={email.id}>
                    <Email />
                    <a
                        href={`mailto:${email.email}`}
                        className={styles.contactLink}
                    >
                        <Typography
                            variant="bodyM"
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
