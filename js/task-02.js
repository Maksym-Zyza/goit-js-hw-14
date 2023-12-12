const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const list = document.createElement("li");

const listItems = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.className = item;
  return listItem;
});

listItems.forEach((item) => ingredientsList.append(item));

[...ingredientsList.children].forEach((el) => {
  console.log(el.outerHTML);
});
