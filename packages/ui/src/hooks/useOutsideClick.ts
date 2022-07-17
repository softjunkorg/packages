import { useEffect } from 'react';

export default function useOutsideClick(ref: HTMLElement, handler: Function) {
    useEffect(() => {
        const listener = (event) => {
            if (ref && ref?.contains(event.target)) return;
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
