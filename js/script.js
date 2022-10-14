const list = ["mele", "pere", "pane", "pasta", "latte", "avena"]
console.log(list);

let i = 0;

while (i < list.length){
    console.log(list[i]);
    const result = document.querySelector(".lista-spesa");
    result.innerHTML += `<li>${list[i]}</li>`
    i++;

}
