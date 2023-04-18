const result = document.querySelector('.result--score')
let total = 0
let items = 0

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => 
    json.forEach(element => {
        total = total + element.score
        items += 1
    })).then(() => {
        result.innerText = Math.round(total/items)
    });
