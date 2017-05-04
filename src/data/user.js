export class Admin extends Object {}
export class User extends Object {}

export const admin = new Admin();

admin.id = 'admin';
admin.version = '0.0.0';

admin.users = [
  new User({
    id: '1001',
    name: 'User1',
    email: 'user1@admin.com'
  }),
  new User({
    id: '1002',
    name: 'user2',
    email: 'user2@admin.com'
  })
];

admin.userMap = {};
admin.users.forEach(user => (admin.userMap[user.id] = user));

export const invalidUser = new User({status: 'invalid user id'});

export function getAdmin() {
  return admin;
}

export function getUser(id) {
  return admin.userMap[id];
}

export function getUsers() {
  return admin.users;
}

export function getInvalidUser() {
  return invalidUser;
}
