import styles from './CircleLoader.module.scss';

export const CircleLoader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.circleLoader} />
        </div>
    );
};
