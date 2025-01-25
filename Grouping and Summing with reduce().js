let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let categoryCount = categories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

let sortedCategoryCount = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

console.log(sortedCategoryCount);