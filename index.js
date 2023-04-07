var count1=0;
var deg1=10;
function conic1(){
    let gradient =document.getElementById("conic1");
    let percentage=document.getElementById("pass1");
    count1=count1+10;
    if(count1<=100){
        percentage.innerHTML=count1+"%";             
    }
    else if(deg1<=360){
        deg1=deg1+5;
        gradient.style.background="conic-gradient(#e51212 "+deg1+"deg,#5c5c5c 0deg)";
    }
    else{
        clearInterval(start());
    }
    start();
}
// ***************************************************************************************************************
var count2=0;
var deg2=10;
function conic2(){
    let gradient =document.getElementById("conic2");
    let percentage=document.getElementById("pass2");
    count2=count2+10;
    if(count2<=73){
        percentage.innerHTML=count2+"%";             
    }
    else if(deg2<=250){
        deg2=deg2+5;
        gradient.style.background="conic-gradient(#e51212 "+deg2+"deg,#5c5c5c 0deg)";
    }
    else{
        clearInterval(start());
    }
    start();
}
// ***************************************************************************************************************
var count3=0;
var deg3=10;
function conic3(){
    let gradient =document.getElementById("conic3");
    let percentage=document.getElementById("pass3")
    count3=count3+10;
    if(count3<=35){
        percentage.innerHTML=count2+"%";             
    }
    else if(deg3<=160){
        deg3=deg3+5;
        gradient.style.background="conic-gradient(#e51212 "+deg3+"deg,#5c5c5c 0deg)";
    }
    else{
        clearInterval(start());
    }
    start();
}
//****************************************************************************************************************
var count4=0;
var deg4=10;
function conic4(){
    let gradient =document.getElementById("conic4");
    let percentage=document.getElementById("pass4")
    count4=count4+10;
    if(count4<=60){
        percentage.innerHTML=count4+"%";             
    }
    else if(deg4<=210){
        deg4=deg4+5;
        gradient.style.background="conic-gradient(#e51212 "+deg4+"deg,#5c5c5c 0deg)";
    }
    else{
        clearInterval(start());
    }
    start();
}
//****************************************************************************************************************
function start(){
    setInterval(function(){conic1()},950);
    setInterval(function(){conic2()},950);
    setInterval(function(){conic3()},950);
    setInterval(function(){conic4()},950);
}
start();