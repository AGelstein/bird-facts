import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  searchNameService = inject(UserService);

  ngOnInit(): void {
    // this.searchNameService.fetchUsers().subscribe((users) => {
    //   console.log(users);
    // });
  }

  title = 'nest-client';
}
