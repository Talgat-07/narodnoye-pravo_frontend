import { Typography } from 'shared/ui/Typography/Typography';
import s from './Hero.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { useContactModal } from 'features/ContactModal/model/useContactModal';
import { ContactModal } from 'features/ContactModal/ui/ContactModal/ContactModal';

export const Hero = () => {
    const { isOpen, openModal, closeModal } = useContactModal();
    return (
        <section className={s.hero}>
            <div className={s.wrap}>
                <div className={s.left}>
                    <div className={s.title}>
                        <Typography
                            variant='h1'
                            weight='bold'
                            color='blue'>
                            Народное право
                        </Typography>
                        <Typography
                            variant='h4'
                            weight='regular'
                            color='blue'>
                            доступно всем!
                        </Typography>
                    </div>
                    <Button onClick={openModal}
                        className='buttonSendHero'
                        variant='span'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='white'>
                        Оставить заявку
                    </Button>
                </div>
            </div>
            <ContactModal isOpen={isOpen} closeModal={closeModal} />
        </section>
    );
};
