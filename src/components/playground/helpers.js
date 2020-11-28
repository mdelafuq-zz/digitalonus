const maxLimit = 35;
const minLimit = -35;

export function delimit(distance) {
    if(distance < minLimit) {
        return minLimit
    }

    if(distance > maxLimit) {
        return maxLimit;
    }

    return distance;
}