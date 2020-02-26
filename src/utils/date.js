export function getDate() {
    const today = new Date(Date.now()).toLocaleString();
    const commaIdx = today.indexOf(',');
    const todayWithoutTime = today.slice(0, commaIdx);
    return todayWithoutTime;
}
