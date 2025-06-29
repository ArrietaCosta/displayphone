import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './index.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'display_phone_state';
}
