exports.min = function min(array) {
    if (!array) {
        return 0;
    } else {
        if (array.length !== 0) {
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (min > array[i]) {
                    min = array[i];
                }
            }
            return min;
        }
        else{
            return 0;
        }
    }
}

exports.max = function max(array) {
    if (!array) {
        return 0;
    } else {
        if (array.length !== 0) {
            let max = array[0];
            for (let i = 1; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                }
            }
            return max;
        } else {
            return 0;
        }
    }
}

exports.avg = function avg(array) {
    if (!array) {
        return 0;
    } else {
        if (array.length !== 0) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            let avg = sum / array.length;
            return avg;
        } else {
            return 0;
        }
    }
}

