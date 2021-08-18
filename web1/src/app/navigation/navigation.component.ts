import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  mouseOverNav(box: string, p: string) {

    let boxBgy = document.querySelector(box);
    let pColoury = document.querySelector(p);

    boxBgy?.classList.toggle('removeBlur');
    pColoury?.classList.toggle('hidden');
  }
  mouseOutNav(box: string, p: string) {

    let boxBgx = document.querySelector(box);
    let pColourx = document.querySelector(p);

    boxBgx?.classList.toggle('removeBlur');

    pColourx?.classList.toggle('hidden');
  }
}


