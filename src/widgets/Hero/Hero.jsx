import { Typography } from 'shared/ui/Typography/Typography';
import s from './Hero.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { ContactModal } from 'features/СontactModal/ui/ContactModal/ContactModal';
import { useContactModal } from 'features/СontactModal/model/useContactModal';

export const Hero = () => {
    const { isOpen, openModal, closeModal } = useContactModal();
    return (
        <section className={s.hero}>
            <div className={s.wrap}>
                <div className={s.left}>
                    <div className={s.title}>
                        <Typography
                            className={s.h1}
                            variant='h1'
                            weight='bold'
                            color='blue'>
                            Народное право
                        </Typography>
                        <Typography
                            className={s.h4}
                            variant='h4'
                            weight='regular'
                            color='blue'>
                            - доступно всем!
                        </Typography>
                    </div>
                    <Typography
                        className={s.text}
                        variant='bodyL'
                        weight='regular'
                        lineHeight='lineBig'
                        color='black'>
                        Мы оказываем качественные юридические услуги по доступной цене.
                    </Typography>
                    <Button onClick={openModal}
                        className={`${s.btnHero}`}
                        variant='span'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='white'
                        children=' Оставить заявку' />
                </div>
            </div>
            <ContactModal isOpen={isOpen} closeModal={closeModal} />
        </section>
    );
};
