import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})


export class HomePageComponent implements OnInit {

  name: string;
  constructor() {
    this.name = "Ekow`s Domain!";


  }

  ngOnInit(): void {
    //console.log(this.name);
    animateWelcome();
    moveArrows();
    //blink arrow 
    blinkArrow();
  }
  mouseOver(box: string, p: string) {

    let boxBgy = document.querySelector(box);
    let pColoury = document.querySelector(p);

    boxBgy?.classList.toggle('blur');
    pColoury?.classList.toggle('hidden');
  }
  mouseOut(box: string, p: string) {

    let boxBgx = document.querySelector(box);
    let pColourx = document.querySelector(p);

    boxBgx?.classList.toggle('blur');
    pColourx?.classList.toggle('hidden');
  }
  viewContainer1() {
    var container1 = document.getElementById("toolbar")!;
    container1.scrollIntoView();

  }
   viewContainer2() {
  var container2 = document.getElementById("container2");
  if (container2 !== null) {
    container2.scrollIntoView();
  }
  else {
    alert('error!')
  }


}
 viewContainer3() {
  var container3 = document.getElementById("container3");
  if (container3 !== null) {
    container3.scrollIntoView();
  }
  else {
    alert('error!')
  }

}
displayNav(navbar: string) {

  let bar = document.getElementById(navbar);
  if (bar !== null) {
    bar.style.display = (bar.style.display == 'initial' ? '' : 'initial');
  }
  else {
    alert('error!');
  }



}
hideNav(navbar: string) {

  let bar = document.getElementById(navbar)!;
  bar.style.display = (bar.style.display == 'none' ? '' : 'none');
  if (bar !== null) {
    
  }
  else {
    alert('error!');
  }



}
mouseOverNav(box:string, p:string) {

  let boxBgy = document.querySelector(box);
  let pColoury = document.querySelector(p);

  boxBgy?.classList.toggle('removeBlur');
  pColoury?.classList.toggle('hidden');
}
mouseOutNav(box:string, p:string) {

  let boxBgx = document.querySelector(box);
  let pColourx = document.querySelector(p);

  boxBgx?.classList.toggle('removeBlur');

  pColourx?.classList.toggle('hidden');
}
}


function displaySomething2(name: string) {
  console.log(name);
}
function blinkArrow() {
  //var f = document.getElementById('arrow');



  setInterval(function () {
    //blink()
  }, 1200);
  setInterval(function () {
    gradient();

  }, 1200);

  function blink() {
    var arr1 = document.getElementById('arrow1');
    var arr2 = document.getElementById('arrow2');
    var arr3 = document.getElementById('arrow3');

    var delayMs = 0;

    const incR = 400;

    if (arr1 !== null && arr2 !== null && arr3 !== null) {

      arr1.style.display = (arr1.style.display == 'none' ? '' : 'none');
      arr2.style.display = (arr2.style.display == 'none' ? '' : 'none');
      arr3.style.display = (arr3.style.display == 'none' ? '' : 'none');

      setTimeout(function () {
        if (arr1 !== null) {
          arr1.style.display = (arr1.style.display == 'initial' ? '' : 'initial');


        }
      }, delayMs);


      delayMs += incR;
      setTimeout(function () {
        if (arr2 !== null && arr1 !== null) {
          arr2.style.display = (arr2.style.display == 'initial' ? '' : 'initial')!;
          arr1.style.display = (arr1.style.display == 'none' ? '' : 'none')!;


        }
      }, delayMs);
      delayMs += incR;
      //console.log("Colour delay = " + cDelayMs + " Delay = " + delayMs);
      setTimeout(function () {
        if (arr3 !== null && arr2 !== null) {
          arr3.style.display = (arr3.style.display == 'initial' ? '' : 'initial')!;
          arr2.style.display = (arr2.style.display == 'none' ? '' : 'none')!;


        }
      }, delayMs);

    }











  }
  function gradient() {
    var arr1 = document.getElementById('arrow1')!;
    //var arrows = document.querySelectorAll("h3");
    var cDelayMs = 0;
    const cIncR = 100;
    let colors = ['#FFFFFF', '#f2eeee', '#e4dede', '#d7cecd', '#cabebd', '#bdaead', '#b19e9e', '#a48f8f', '#978080', '#8b7171', '#7e6363', '#725555', '#664747'];

    colors.forEach(
      function (color) {

        if (cDelayMs >= 1200) {
          cDelayMs = 0;
        }

        setTimeout(function () {
          arr1.style.color = color;
          // arr2.style.color = color;
          // arr3.style.color = color;
          //console.log(color);

        }, cDelayMs);
        cDelayMs += cIncR;



      }
    );

  }

}
function moveArrows() {
  var delay = 0;
  const increment = 60;
  var arr1 = document.getElementById('arrow1')!;
  var arrows = document.querySelectorAll("h3");
  arrows.forEach(function (item) { console.log(item) });
  arr1.style.display = (arr1.style.display == 'initial' ? '' : 'initial');
  //arr2.style.display = (arr2.style.display == 'initial' ? '' : 'initial');
  //arr3.style.display = (arr3.style.display == 'initial' ? '' : 'initial');

  setInterval(function () { move(); }, 500);

  function move() {



    for (let x = 75; x < 84; x++) {

      //console.log();

      setTimeout(function () {



        arrows.forEach(function (item) { item.style.top = x + "vh"; });







      }, delay);
      delay += increment;
      //if (delay > 1200) { delay = 0; }
    }


  }


}
function animateWelcome() {
  let welcomeTimer = null;
  const welcome = document.getElementById('welcome')!;
  //clearInterval(welcomeTimer);
  setInterval(frame, 3900);

  function frame() {
    var delayMs = 0;
    const incR = 150;
    welcome.style.color = '#FFFFFF';
    setTimeout(function () {
      welcome.style.color = "#f2eeee";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#e4dede";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#d7cecd";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#cabebd";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#bdaead";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#b19e9e";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#a48f8f";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#978080";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#8b7171";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#7e6363";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#725555";
    }, delayMs);//
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#664747";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#725555";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#7e6363";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#8b7171";
    }, delayMs);

    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#978080";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#a48f8f";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#b19e9e";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#bdaead";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#cabebd";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#d7cecd";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#e4dede";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#f2eeee";
    }, delayMs);
    delayMs += incR;
    setTimeout(function () {
      welcome.style.color = "#FFFFFF";
    }, delayMs);

  }


}





