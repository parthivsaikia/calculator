const btns = document.querySelector(".numbersAndOp").children;
for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener("click",(event) => {
        screen.textContent += event.target.textContent;
    });
}
const screen = document.querySelector(".screen");




