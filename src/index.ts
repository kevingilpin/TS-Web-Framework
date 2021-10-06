import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'brian', age: 12 });

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

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
