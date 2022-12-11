import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountryList } from './renderCountryList';
import { renderOneCountry } from './renderOneCountry';

export { checkLength };

function checkLength(countries) {
  if (countries.length >= 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (countries.length > 1 && countries.length < 10) {
    return renderCountryList(countries);
  }
  const [oneCountry] = countries;
  return renderOneCountry(oneCountry);
}
