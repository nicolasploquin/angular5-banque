import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'app';
  username: string;
  showAuthForm = false;

  connexion() {
    this.showAuthForm = !this.showAuthForm;
  }
  deconnexion() {
    this.username = "";
    this.showAuthForm = false;
  }
  authentification(user) {
    this.username = user;
    this.showAuthForm = false;
  }

}
