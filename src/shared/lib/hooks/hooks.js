import { useEffect, useState } from 'react';

export function useClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}



export const useContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };
};