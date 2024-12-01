/**
 * Sorts an array of numbers in ascending order using a basic comparison-based approach.
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array.
 */
const sort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        // swap compared items
        let currentItem = arr[i];
        let comparedItem = arr[j];

        arr[i] = comparedItem;
        arr[j] = currentItem;
      }
    }
  }

  return arr;
};

/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * @param arr - The array of numbers to sort.
 * @returns The sorted array.
 */
const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap items
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

/**
 * Searches for a target value in a sorted array of numbers using the Binary Search algorithm.
 *
 * @param arr - The sorted array of numbers to search within.
 * @param target - The number to search for.
 * @returns The index of the target value if found, or -1 if not found.
 */
const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/** array to sort */
const initArray = [7, 5, 0, -1, 99];

const bubbleSortArr = bubbleSort(initArray);
const sortArr = bubbleSort(initArray);

console.log("Bubble Sorted Array:", bubbleSortArr);
console.log("Sorted Array:", sortArr);

/** target to find in sorted array */
const targetValue = 7;
const foundIndex = binarySearch(sortArr, targetValue);

console.log(foundIndex);
