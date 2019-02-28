export const findNodeByAttribute = (
    startNode: HTMLElement,
    attributeName: string,
): HTMLElement => {
    let node: HTMLElement | null = startNode;

    do {
        if (node.getAttribute(attributeName) !== null) {
            return node;
        }

        node = node.parentElement;
    } while (node !== null);

    throw new Error(`Couldn't find node with attribute ${attributeName}`);
};
