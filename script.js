function femaleTheme(){
    document.body.style.backgroundColor = "#FFC0CB";
    let paragraph = document.getElementById("intro")
    paragraph.style.backgroundColor ="#FF8DA1";
    paragraph.style.color = "#000000";
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "#EBFFC0";
    let header =document.getElementsByClassName("greeting");
    Array.from(header).forEach((element,index)=>{
        element.style.color = "#EBFFC0";
    });
    cards = document.getElementsByClassName("card")
    Array.from(cards).forEach((element,index)=>{
        element.style.backgroundColor = "#FF8DA1"
        element.style.color = "#000000"
    });
    cardTitle = document.getElementsByClassName("cardTitle")
    Array.from(cardTitle).forEach((element,index)=>{
        element.style.color = "#EBFFC0";
    });
    let bmiImage = document.getElementById("bmiPhoto");
    bmiImage.src = "images/Bmi female.jpg";
}


function maleTheme(){
    document.body.style.backgroundColor = null;
    let paragraph = document.getElementById("intro")
    paragraph.style.backgroundColor =null;
    paragraph.style.color = null;
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = null;
    let header =document.getElementsByClassName("greeting");
    Array.from(header).forEach((element,index)=>{
        element.style.color = null;
    });
    cards = document.getElementsByClassName("card")
    Array.from(cards).forEach((element,index)=>{
        element.style.backgroundColor = null
        element.style.color = null
    });
    cardTitle = document.getElementsByClassName("cardTitle")
    Array.from(cardTitle).forEach((element,index)=>{
        element.style.color = null;
    });
    let bmiImage = document.getElementById("bmiPhoto");
    bmiImage.src = "images/bmi male.jpg";
}