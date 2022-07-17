import { Children, isValidElement, cloneElement, ReactNode } from 'react';

export default function usePropsProvider(
    children: ReactNode,
    props = {}
): ReactNode {
    const provided = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, props);
        }

        return child;
    });

    return provided;
}
