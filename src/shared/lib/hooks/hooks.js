import { useState, useEffect } from "react";

export function useClickOutside(
    mainRef,
    handler,
    ignoreRef
) {
    useEffect(() => {
        const listener = (e) => {
            if (!mainRef.current) return;
            if (mainRef.current.contains(e.target)) return;
            if (ignoreRef?.current?.contains(e.target)) return;
            if (typeof handler === 'function') {
                handler(e);
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [mainRef, handler, ignoreRef]);
}


export const useContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
        console.log(1)
        setIsOpen(true);
    }
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };
};

