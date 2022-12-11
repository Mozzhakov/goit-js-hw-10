import { clearCountryList } from './clearCountryList';
import { fetchCountries } from './fetchCountries';

export { onInputChange };

function onInputChange(e) {
  if (!e.target.value) {
    clearCountryList();
  }
  return fetchCountries(e.target.value.trim());
}
