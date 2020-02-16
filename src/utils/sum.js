/**
 * Sum an array of cards based on their quantity properties
 */
export default function getSum(list) {
    let sum = 0;
    if(list) {
        list.forEach(item => {
        sum += item.quantity;
    })}

    return sum;
}
