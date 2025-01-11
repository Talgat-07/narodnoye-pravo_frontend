import { useState } from "react";
import styles from "./LanguageDropdown.module.scss";
import { useRef } from "react";
import { useClickOutside } from "shared/lib/hooks/hooks";

export default function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Ru');

    const containerRef = useRef(null);

    useClickOutside(containerRef, () => {
        setIsOpen(false);
    });


    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <div
                className={styles.toggleButton}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={styles.selectedText}>{selected}</span>
                <div className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    {['Ru', 'Kg'].map((lang, index) => (
                        <div
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleSelect(lang)}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}