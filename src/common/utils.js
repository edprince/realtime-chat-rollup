import moment from 'moment';
import faker from 'faker';

export function formatDate(date) {
  return moment.unix(date).format('MMM Do HH:mm');
}

export function fakeAvatar() {
  return faker.internet.avatar();
}

export function fakeName() {
  return faker.name.firstName() + ' ' + faker.name.lastName();
}

export function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    console.log("Doing");
    return num * factorial( num - 1 );
  }
}
