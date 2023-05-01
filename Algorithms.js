

function LinearSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}

const result = LinearSearch(arr, 6)
console.log(result);





function BinarySearch(arr, target) {
    let min = 0
    let max = arr.length
    let middle = Math.floor((min + max) / 2)

    while (min <= max) {
        if (arr[middle] == target) { return middle }
        else if (arr[middle] < target) { min = middle + 1; }
        else if (arr[middle] > target) { max = middle - 1; }
        middle = Math.floor((min + max) / 2)
    }
    return -1
}
console.log(BinarySearch(arr, 8));




let arr2 = [1, 4, 6, 7, 8, 9]


function BinarySearch(arr, target, min = 0, max = arr.length - 1) {
    let mid = Math.floor((min + max) / 2)

    if (min > max) return -1
    if (arr[mid] === target) {
        return mid
    }
    else if (arr[mid] > target) {
        max = mid - 1
        return BinarySearch(arr, target, min, max)
    }
    else if (arr[mid] < target) {
        min = mid + 1
        return BinarySearch(arr, target, min, max)
    }
}

console.log(BinarySearch(arr2, 6));


let arr3 = [222, 3, 21, 42, 61, 27, 18, 99]


function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let num = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = num
            }
        }
    }
    return arr
}

console.log(BubbleSort(arr3))

function InsertionSort(arr3) {
    for (let i = 1; i < arr3.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr3[j] > currentVal) {
            arr3[j + 1] = arr[j];
            j--;
        }
        arr3[j + 1] = currentVal;
    }
    return arr3;
}



function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

let arr = [1, 3, 5, 6, 8, 20]

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

