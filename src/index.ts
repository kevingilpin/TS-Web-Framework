import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Ryan', age: 20 });

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

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
