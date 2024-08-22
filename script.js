// binary searching
const array = [10, 20, 30, 40, 50];

function binarySearching(array, item) {
  let startValue = 0;
  let endValue = array.length - 1;

  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2);

    if (array[mid] === item) return mid;
    else if (item < array[mid]) endValue = mid - 1;
    else startValue = mid + 1;
  }

  return -1;
}
console.log(binarySearching(array, 40));

// Deleting using binary search
function deleteItem(array, item) {
  const index = binarySearching(array, item);

  if (index !== -1) {
    array.splice(index, 1);
    console.log(`Item deleted at index ${index}:, array`);
  } else {
    console.log("Item not found in the array.");
  }
}

const itemToDelete = 30;
deleteItem(array, itemToDelete);
console.log(array);

// Update using binary search
function updateItem(array, oldItem, newItem) {
  const index = binarySearching(array, oldItem);

  if (index !== -1) {
    array[index] = newItem;
    console.log(`Item updated at index ${index}:, array`);
  } else {
    console.log("Item not found in the array.");
  }
}

const oldItem = 40;
const newItem = 35;

updateItem(array, oldItem, newItem);
console.log(array);
