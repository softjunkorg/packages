import { useState } from 'react';

export default function useMediaQuery(listeners: string | string[]) {
    var activeListeners: any;

    const handleWatchMedia = (media: string) => {
        const [active, setActive] = useState<boolean>(
            window.matchMedia(media).matches
        );

        const handleChangeActive = (e: MediaQueryListEvent) =>
            setActive(e.matches);

        window.matchMedia(media).addEventListener('change', handleChangeActive);

        return active;
    };

    if (Array.isArray(listeners)) {
        activeListeners = listeners.map((l) => {
            return handleWatchMedia(l);
        });
    }

    if (typeof listeners === 'string') {
        activeListeners = [handleWatchMedia(listeners)];
    }

    return activeListeners;
}
