document.getElementById("stopgo").addEventListener("click", startRace);//begins race
document.getElementById("winner").addEventListener("click", reset);//restart race
document.getElementById("startgarry").addEventListener("click", boom);//click on garry to blow up
function boom(){//blow up garry
    clearInterval(timeGarry);//garry stops
    document.getElementById("startgarry").src = "boomgarry.png";//garry blows up
}
function reset(){//restart race
    document.getElementById("winner").setAttribute("data-count-number", "0");   //
    document.getElementById("winner").innerHTML = "0";                          //
    document.getElementById("stopgo").src = "stop.png";                         //
    document.getElementById("startCoachspng").src = "spngstart.png";            //
    document.getElementById("startgarry").src = "startgarry.png";               //
    document.getElementById("startgarry").style.left = "";                      //reset everything
    document.getElementById("startsqdsnail").style.left = "";                   //
    document.getElementById("rock").style.left = "";                            //
    document.getElementById("startCoachspng").style.display = "";               //
    document.getElementById("startCoachsqd").style.display = "";                //
    document.getElementById("startCoachpat").style.display = "";                //
}
function startRace(){//begins race
    document.getElementById("stopgo").src = "start.png";//change snail stoplight to green
    document.getElementById("startCoachspng").src = "agressivespng.png";//change spongebob pic
    timer = setInterval(timing, 1000);//rock funct timer
    timeGarry = setInterval(racingGarry, 20);//garry funct timer
    timeSqdsnail = setInterval(racingSqdsnail, 20);//sqdsnail timer
}
function racingGarry(){//garry logic
    spngSnail = Math.ceil((Math.random() * 10));//pixels to move for iteration 
    spngSnailLoc = document.getElementById("startgarry").offsetLeft;//postion of garry from left in pixels
    sqdSnailLoc = document.getElementById("startsqdsnail").offsetLeft;//position of sqdsnail from left in pixels
    garry = document.getElementById("startgarry");//assign a variable to garry 
    if(`${spngSnailLoc}` < (window.innerWidth - 100)){//loop until garry reaches width of window = 100 pixels
        garry.style.left = `${spngSnailLoc + spngSnail}px`;//moves garry right by the random pixel number
    }
    else{
        clearInterval(timer);       //
        clearInterval(timeGarry);   //clear intervals
        clearInterval(timeSqdsnail);//
        document.getElementById("winner").innerHTML = "<img src='spngwinner.png'>" + "Winner!";//spongebob wins
        document.getElementById("startCoachspng").style.display = "none";//remove starting pic
    }
}
function racingSqdsnail(){//sqdsnail logic
    sqdSnail = Math.ceil((Math.random() * 10));//pixels to move for iteration 
    spngSnailLoc = document.getElementById("startgarry").offsetLeft;//postion of garry from left in pixels
    sqdSnailLoc = document.getElementById("startsqdsnail").offsetLeft;//position of sqdsnail from left in pixels
    squidSnail = document.getElementById("startsqdsnail");//assign a variable to sqdsnail
    if(`${sqdSnailLoc}` < (window.innerWidth - 100)){//loop until sqdsnail reaches width of window = 100 pixels
        squidSnail.style.left = `${sqdSnailLoc + sqdSnail}px`;//moves sqdsnail right by the random pixel number
    }
    else{
        clearInterval(timer);       //
        clearInterval(timeGarry);   //clear intervals
        clearInterval(timeSqdsnail);//        
        document.getElementById("winner").innerHTML = "<img src='winward.png'>" + "Winner!";//squidward wins
        document.getElementById("startCoachsqd").style.display = "none";//remove starting pic
    }
}
function timing(){//rock logic
    num = document.getElementById("winner").getAttribute("data-count-number");//change attribute number
    num = Number(num);//change number to int
    if ( num < 10){//loop until counter is 10
        num = num + 1;//add iteration
        document.getElementById("winner").innerText = num;//displayed timer
        document.getElementById("winner").setAttribute("data-count-number", num);//update attribute
    }
    else{
        clearInterval(timer);       //
        clearInterval(timeGarry);   //clear intervals
        clearInterval(timeSqdsnail);//
        document.getElementById("rock").style.left = `${window.innerWidth - 100}px`;//rock to finish line
        document.getElementById("winner").innerHTML = "<img src='winnerpatrick.png'>" + "Winner!";//pat wins
        document.getElementById("startCoachpat").style.display = "none";//remove start pic
    }
}