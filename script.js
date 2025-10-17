
function stringChop(str, size) {
  // Handle null or invalid inputs
  if (!str) return [];

  size = parseInt(size);
  if (isNaN(size) || size <= 0) return [];

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
