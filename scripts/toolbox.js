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

const convertCSSToTW = () => {
    const value = document.getElementById('csstotw-val').value;
    const result = transformToTW(value);
    document.getElementById('css-tw').innerText = "class=" + result;
    document.getElementById('react-tw').innerText = "className=" + result;
}