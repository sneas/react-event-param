import { findNodeByAttribute } from './find-node-by-attribute';

export const parseTargetProp = (propName: string) => <T>(
    target: HTMLElement,
): T => {
    return <T>(
        JSON.parse(
            findNodeByAttribute(target, propName).getAttribute(propName) || '',
        )
    );
};
