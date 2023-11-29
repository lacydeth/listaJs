const firstUl = document.querySelector(".firstUl"),
    secondUl = document.querySelector(".secondUl");

function Move(event) {

    if (firstUl.contains(event)) {
        const node = document.createElement("li");
        node.innerHTML = event.textContent;
        node.addEventListener('click', function(event){Move(event.target)});
        secondUl.appendChild(node);
        event.remove(); 
    }
    else if (secondUl.contains(event)) {
        const node = document.createElement("li");
        node.innerHTML = event.textContent;
        node.addEventListener('click', function(event){Move(event.target)});
        firstUl.appendChild(node);
        event.remove(); 
    }
}

document.querySelectorAll(".firstUl li, .secondUl li").forEach((item) => {
    item.addEventListener('click', function(event){Move(event.target)});
});
