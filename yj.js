let strings = ["apple", "banana", "orange", "cookie"]
let n = 0;


function solution(strings, n) {





    strings.sort(
        (a, b) => {

            if (a[n] < b[n]) {
                return -1;
            } else if (a[n] > b[n]) {
                return 1;
            } else if (a[n] === b[n]) {
                if (a < b) {
                    return -1;
                } else {
                    return 1;
                }
            }
            return 0;
        }

    );

    return strings;






}
