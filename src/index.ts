import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

// const user = User.buildUser({ id: 5 });
// user.fetch();
// user.set({ name: 'KEVIN GILPS', age: 99 });

// user.save();

// user.on('change', () => {
//   console.log('yellow!');
// });

// user.events.trigger('change');

// user.set({ name: 'Kevin' });

// console.log(user.get('name'));

// user.set({ name: 'bib' });
// user.save().then(() => user.fetch());

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const root = document.getElementById('root');
const rootUrl = 'http://localhost:3000/users';

if (root) {
  let users = new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
    User.buildUser(json)
  );
  users.fetch();
  users.on('change', () => {
    new UserList(root, users).render();
  });
  // const userEdit = new UserEdit(root, user);
  // userEdit.render();
} else {
  throw new Error('Root element not found');
}
