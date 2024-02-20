import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'volvoApp';
  data: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data.json').subscribe(data => {
      this.data = data;
    });
  }
}
