import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {

  email = 'vulcano@ayuda.com';
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}

openInstagram() {
  window.open('https://www.instagram.com/vulcan.makers/', '_blank');
}
}
