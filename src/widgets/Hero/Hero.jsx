import { Typography } from 'shared/ui/Typography/Typography';
import styles from './Hero.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { useContactModal } from 'shared/lib/hooks/hooks';
import { ContactModal } from 'shared/ui/ContactModal/ContactModal/ContactModal';
import { Container } from 'shared/ui/Container/Container';

export const Hero = () => {
    const { isOpen, openModal, closeModal } = useContactModal();
    return (
        <Container noPadding>
            <section className={styles.hero}>
                <div className={styles.wrap}>
                    <div className={styles.left}>
                        <div className={styles.title}>
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
        </Container>
    );
};
