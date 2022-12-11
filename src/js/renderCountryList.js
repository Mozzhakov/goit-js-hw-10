import { refs } from './refs';
import { clearCountryList } from './clearCountryList';

export { renderCountryList };

function renderCountryList(countries) {
  clearCountryList();
  const countryList = countries
    .map(
      country =>
        `<li class='country-list__item'>
            <img
              src='${country.flags.svg}'
              alt='${country.name.official}'
              width=50
              height=25
            />
            <p>${country.name.official}</p>
          </li>`
    )
    .join('');

  refs.countryList.innerHTML = countryList;
}
