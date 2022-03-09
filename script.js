// const h1 = document.querySelector('h1');

// const response = fetch('example.txt')
// .then(response => {
//     return response.text();
// })
// .then(text => {
//     h1.textContent = text;
// })
fetch('./article.json')
.then(response => {
    return response.json();
})
.then(article => {
 document.querySelector('atricle h2').textContent = article.title;
 document.querySelector('atricle p').textContent = article.description;
 document.querySelector('atricle img').textContent = article.image;
});