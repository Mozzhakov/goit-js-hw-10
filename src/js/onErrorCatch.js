import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { onErrorCatch };

function onErrorCatch(error) {
  console.error(error);
  Notify.failure('Oops, there is no country with that name');
}
