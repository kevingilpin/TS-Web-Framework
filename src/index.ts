import { User } from './models/User';

const user = new User({ name: 'Kevin', age: 35 });

console.log(user.get('name'));
console.log(user.get('age'));
