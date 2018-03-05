let idIndex = 2;

export function uniqueID(prefix) {
    return `${prefix}-${idIndex++}`;
}
