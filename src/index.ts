import { join } from 'path';
import { User } from './models/User';

const user = new User({ name: 'Alice', age: 30 });

// user.set({ name: 'KEVIN GILPS', age: 99 });

// user.save();

user.events.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

// user.events.trigger('change');

user.set({ name: 'Kevin' });

console.log(user.get('name'));
