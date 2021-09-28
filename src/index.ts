import { User } from './models/User';

const user = new User({ name: 'Alice', age: 30 });

// user.set({ name: 'KEVIN GILPS', age: 99 });

// user.save();

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
