/**
 * Accessing deeply nested object properties safely,
 * No need to manually check for undefined and null
 * @param {*} path example ['user', 'posts', 0, 'comments']
 * @param {*} object the object being accessed
 */
export default function getProp(path, object){
    const property = path.reduce((xs, x) =>
            (xs && xs[x]) ? xs[x] : null, object)
    return property;
}
