import { Component, input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  user = input<User>()

  ngOnInit(): void {
    console.log('user in focus ', this.user())
  }

}


