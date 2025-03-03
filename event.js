// background colour

function changeBackground() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById("themeButton").addEventListener("click", changeBackground);