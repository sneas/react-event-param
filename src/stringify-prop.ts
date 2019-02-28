export const stringifyProp = (propName: string) => (value: any) => {
    return {
        [propName]: JSON.stringify(value),
    };
};
