const remToPx = () => {
    const value = document.getElementById("remtopx-val").value;
    const result = (value * 16).toFixed(2);
    document.getElementById('remtopx').innerText = result + "px";
}

const pxToRem = () => {
    const value = document.getElementById("remtopx-val").value;
    const result = (value/16).toFixed(2);
    document.getElementById('remtopx').innerText = result + "rem";
}