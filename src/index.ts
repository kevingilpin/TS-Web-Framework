import { User } from './models/User';

const user = new User({ name: 'Kevin', age: 35 });

user.set({ name: 'newname' });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('test', () => {});

console.log(user);
