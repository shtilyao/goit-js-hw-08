const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categorie => {
    const title = categorie.querySelector("h2").textContent;
    const elements = categorie.querySelectorAll("li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});