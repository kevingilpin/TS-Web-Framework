import { join } from 'path';
import { User } from './models/User';

const user = new User({ id: 1, name: 'kevin', age: 99 });

// user.set({ name: 'KEVIN GILPS', age: 99 });

// user.save();

user.events.on('change', () => {
  console.log(user);
});

// user.events.trigger('change');

// user.set({ name: 'Kevin' });

// console.log(user.get('name'));

user.fetch();

user.set({ name: 'brian' });

console.log(user.get('name'));

user.save();
user.fetch();
