import { refs } from './refs';
export { clearCountryList };

function clearCountryList() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
