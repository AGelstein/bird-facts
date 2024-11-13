import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserRepository } from '../../repository/user.repository';
import { UserService } from '../../api/user.service';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  private userRepository = inject(UserRepository)
  private userService = inject(UserService)

  ngOnInit(): void {
    this.userService.getUsers().subscribe()
    this.userRepository.selectAllUsers().subscribe(users => console.log(users))
  }

}


