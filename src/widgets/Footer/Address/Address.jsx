import s from './Address.module.scss'
import { Email } from 'shared/assets/icons/Email';
import { Phone } from 'shared/assets/icons/Phone';
import { Typography } from 'shared/ui/Typography/Typography';

export const Address = () => {
    const contacts = [
        { type: 'phone', value: '+996 (550) 18-87-77' },
        { type: 'phone', value: '+996 (702) 18-87-77' },
        { type: 'email', value: 'N.pravo2018@gmail.com' },
    ]
    return (
        <div className={s.middle}>
            <Typography
                variant='bodyXL'
                weight='bold'
                color='black'>
                КОНТАКТЫ
            </Typography>
            {contacts.map((contact, index) => {
                if (contact.type === 'phone' && index === 0) {
                    return (
                        <div className={s.contactItem} key={index}>
                            <Phone />
                            <a href={`tel:${contact.value.replace(/[\s()]/g, '')}`}
                                className={s.contactLink}>
                                <Typography
                                    variant="bodyM"
                                    weight="regular">
                                    {contact.value}
                                </Typography>
                            </a>
                        </div>
                    );
                }
                if (contact.type === 'phone' && index > 0) {
                    return (
                        <div className={s.contactWithoutIcon} key={index}>
                            <div className="emptySpace"></div>
                            <a href={`tel:${contact.value.replace(/[\s()]/g, '')}`} className={s.contactLink}>
                                <Typography
                                    variant="bodyM"
                                    weight="regular">
                                    {contact.value}
                                </Typography>
                            </a>
                        </div>
                    );
                }
                if (contact.type === 'email') {
                    return (
                        <div className={s.contactItem} key={index}>
                            <Email />
                            <a href={`mailto:${contact.value}`}
                                className={s.contactLink}>
                                <Typography
                                    variant="bodyM"
                                    weight="regular">
                                    {contact.value}
                                </Typography>
                            </a>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
