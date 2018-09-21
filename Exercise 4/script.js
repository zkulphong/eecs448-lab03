function changeParagraph(){
    var redBorder = document.getElementById("redBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
    var widthBorder = document.getElementById("widthBorder").value;
    var redBackground = document.getElementById("redBackground").value;
    var greenBackground = document.getElementById("greenBackground").value;
    var blueBackground = document.getElementById("blueBackground").value;

    var text = document.getElementById("text");
    text.style.borderStyle = "solid";
    text.style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";
    text.style.borderWidth = widthBorder + "px";
    text.style.background = "rgb(" + redBackground + "," + greenBackground + "," + blueBackground + ")";
}