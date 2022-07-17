import { useState } from 'react';

export default function useBoolean(
    bdefault?: boolean
): [boolean, { toggle: () => void; on: () => void; off: () => void }] {
    const [state, setState] = useState<boolean>(bdefault || false);

    const toggle = () => setState((s) => !s);
    const on = () => setState(true);
    const off = () => setState(false);

    return [state, { toggle, on, off }];
}
