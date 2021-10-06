import { join } from 'path';
import { User, UserProps } from './models/User';
import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';

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

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
