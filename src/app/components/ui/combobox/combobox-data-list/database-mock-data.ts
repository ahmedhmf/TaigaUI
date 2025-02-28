import { User } from './user';

export const databaseMockData: readonly User[] = [
  new User(
    'Roman',
    'Sedov',
    'https://avatars.githubusercontent.com/u/10106368'
  ),
  new User('Alex', 'Inkin', `https://taiga-ui.dev/assets/images/avatar.jpg`),
];
