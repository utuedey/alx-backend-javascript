import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((msg) => {
      console.log(`${msg[0].body} ${msg[1].firstName} ${msg[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
