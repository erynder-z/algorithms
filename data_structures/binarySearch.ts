const binarySearch = (target: number, list: number[]): number | null => {
  let low: number = 0;
  let high: number = list.length - 1;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);
    const guess: number = list[mid];

    if (guess === target) {
      return mid; // index of target
    }

    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null; // if not found;
};

const someArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foundIndex: number | null = binarySearch(9, someArray);

foundIndex ? console.log(someArray[foundIndex]) : console.log('no such item');
