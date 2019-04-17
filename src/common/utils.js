import moment from 'moment';
import faker from 'faker';

// TODO: Can be optimized by swapping moment for date-fns/format
export function formatDate(date) {
  return moment.unix(date).format('MMM Do HH:mm');
}

// TODO: Can be optimized by getting fake data from an API like randomuser.me
// rather than bundling the entire faker module with your app (it's 1mb).
export function fakeAvatar() {
  return faker.internet.avatar();
}

// TODO: Can be optimized by getting fake data from an API like randomuser.me
// rather than bundling the entire faker module with your app (it's 1mb).
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
