import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterViewInit {

  message = "message à afficher...";

  ajd = new Date();

//  console.dir(window["ENI"].afficheListe());

  constructor() { }

  infoClick() {
    alert(this.message);
  }

  ngOnInit(): void {
   // this.monDiv.nativeElement.innerHTML

  }

  ngAfterViewInit() {
    document.querySelector('#monDiv').appendChild(window["ENI"].afficheListe());
    //   `
    //   <ul>
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    //   </ul>
    // `;
    //
  }

}
