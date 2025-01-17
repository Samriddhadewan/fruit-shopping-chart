const Btns = document.getElementsByClassName("add-btn");
let count = 0;
for(let btn of Btns){
    btn.addEventListener('click', function(element){
        count = count + 1;
        setElementById("chart-number", count);

        const fruitName = element.target.parentNode.childNodes[1].innerText;
        const fruitPrice = element.target.parentNode.childNodes[5].childNodes[1].innerText;

        const li = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");

        p.innerText = fruitName;
        p2.innerText = fruitPrice;
        li.appendChild(p);
        li.appendChild(p2);

        const chartBox = document.getElementById("chart-box");
        chartBox.appendChild(li);

        const fruitPriceNumber = stringToNumber(fruitPrice);
        const totalCostValue = document.getElementById("total-cost").innerText;
        const totalCost = stringToNumber(totalCostValue);
        finalCost = fruitPriceNumber + totalCost;


        setElementById("total-cost", finalCost);
        setElementById("grand-final-price", finalCost);   
    })
}

function grandFinal(element){
    const finalValue = document.getElementById("grand-final-price").innerText;

    if(element === 'busket'){
        setElementById("grand-final-price", finalCost + 50);
    }
    else if(element === "bag"){
        setElementById("grand-final-price", finalCost + 20)
    }
    else if(element === "minus"){
        setElementById("grand-final-price", finalValue -100);
    }
    else{
        setElementById("grand-final-price", finalCost);
    }

}




function setElementById(element, value){
    document.getElementById(element).innerText = value;
}
function stringToNumber(element){
    const value = parseInt(element);
    return value;
}



