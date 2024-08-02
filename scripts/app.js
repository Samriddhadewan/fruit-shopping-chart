const Btns = document.getElementsByClassName("add-btn");
let count = 0;
for(let btn of Btns){
    btn.addEventListener('click', function(element){
        count = count + 1;
        setElementById("chart-number", count);

        const fruitName = element.target.parentNode.childNodes[1].innerText;
        const fruitPrice = element.target.parentNode.childNodes[5].childNodes[1].innerText;

        const li = document.createElement("p");
        const p = document.createElement("p");
        const p2 = document.createElement("p");

        p.innerText = fruitName;
        p2.innerText = fruitPrice;
        li.appendChild(p);
        li.appendChild(p2);

        const chartBox = document.getElementById("chart-box");
        chartBox.appendChild(li);




    })
}







function setElementById(element, value){
    document.getElementById(element).innerText = value;
}
function convertToInt(element){
    const value = document.getElementById(element).innerText;
    const newValue = parseInt(value);
    return newValue;
}



