import { Component, inject } from '@angular/core';
import { UserRepository } from '../../repository/user.repository';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userRepository = inject(UserRepository);
  users = toSignal(this.userRepository.selectAllUsers());
}


