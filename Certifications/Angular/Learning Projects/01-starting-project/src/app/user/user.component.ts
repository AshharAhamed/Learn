import { 
  Component, 
  computed, 
  EventEmitter, 
  input, 
  Input, 
  Output, 
  output, 
  signal 
} from '@angular/core';
import { User } from './user.model';

// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);


  /* get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  } */
  /* get imagePath() {
    return `assets/users/${this.selectedUser().avatar}`;
  } */
  /* imagePath = computed(() => {
    return `assets/users/${this.selectedUser().avatar}`;
  }); */

  /* onSelectUser() {
    const randomIndex2 = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex2];
  } */
  /* onSelectUser() {
    const randomIndex2 = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex2]);
  } */

  // --------------------------------- INPUT -------------------------------------------------------

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter<string>();
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
// --------------------------------- INPUT function by signal -------------------------------------
  /* avatar = input<string>();
  name = input.required<string>(); // but in this type of signal we cant call set function of signal

  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  }); */

// --------------------------------- OUTPUT -------------------------------------------------------
  onSelectUser() {
    this.select.emit(this.user.id);
  }
 
}
