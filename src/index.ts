const PROP_NAME = 'event-param';

export const setEventParam = (value: any) => {
    return {
        [PROP_NAME]: JSON.stringify(value),
    };
};

export const getEventParam = <T>(startNode: HTMLElement): T => {
    let node: HTMLElement | null = startNode;

    do {
        if (node.getAttribute(PROP_NAME) !== null) {
            return <T>JSON.parse(<string>node.getAttribute(PROP_NAME));
        }

        node = node.parentElement;
    } while (node !== null);

    throw new Error(`Couldn't find node with attribute ${PROP_NAME}`);
};
