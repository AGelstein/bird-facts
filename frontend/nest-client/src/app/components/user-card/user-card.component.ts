import { Component, inject, OnInit } from '@angular/core';
import { UserRepository } from '../../repository/user.repository';
import { UserService } from '../../api/user.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  private userRepository = inject(UserRepository)
  private userService = inject(UserService)

  ngOnInit(): void {
    this.userService.getUsers().subscribe()

    //todo fix leaky subscription
    this.userRepository.selectAllUsers().subscribe(users => console.log(users))
  }

}


