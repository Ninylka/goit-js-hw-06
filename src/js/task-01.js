const listCategories = document.querySelectorAll(".item")
console.log(`Numbers of categories : ${listCategories.length}`);
listCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});