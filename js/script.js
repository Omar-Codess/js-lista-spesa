const list = ["mele", "pere", "pane", "pasta", "latte", "avena"]
console.log(list);

let i = 0;

while (i < list.length){
    console.log(list[i]);
    const result = document.querySelector("li");
    result.innerHTML = list[i]
    i++;

}
