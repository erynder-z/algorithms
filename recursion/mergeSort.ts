export const mergeSort = (arr: number[]): number[] => {
  const merge = (
    leftArray: number[] | any[],
    rightArray: number[] | any[]
  ): number[] => {
    let sorted: number[] = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) {
        sorted.push(leftArray.shift());
      } else {
        sorted.push(rightArray.shift());
      }
    }
    return [...sorted, ...leftArray, ...rightArray];
  };

  const halfArray = arr.length / 2;

  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, halfArray);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
};

/* console.log(mergeSort([8, 4, 1, 3, 9, 69, 999, 45654, 111, 0]));  */
