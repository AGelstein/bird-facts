import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './api/user.service';
import { UserCardComponent } from "./components/user-card/user-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  searchNameService = inject(UserService);

  ngOnInit(): void {
    this.searchNameService.fetchUsers().subscribe({
      next: (users) => {
        console.log(users);
      },
      error: (err) => {
        if (err.status === 0) {
          console.error('Service is offline');
        } else {
          console.error('An error occurred:', err);
        }
      }
    });
  }

  title = 'nest-client';
}