export const objectToParams = (object) => {
    Object.entries(object).map(([key, val]) => !val && delete object[key]);

    if (Object.keys(object).length > 0) {
        return new URLSearchParams(object).toString();
    } else {
        return '';
    }
};

export default objectToParams;