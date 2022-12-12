import { refs } from './refs';
import { clearCountryList } from './clearCountryList';

export { renderOneCountry };

function renderOneCountry({ name, capital, population, flags, languages }) {
  clearCountryList();
  refs.countryInfo.innerHTML = `<ul class='country-main-list'>
      <li class='country-main-list__header'>
        <img
          src='${flags.png}'
          alt='${name.official}'
          width=100
        />
        <h2>${name.official}</h2>
      </li>
      <li><b>Capital</b>: ${capital}</li>
      <li><b>Population</b>: ${population}</li>
      <li><b>Languages</b>: ${Object.values(languages)}</li>
    </ul>`;
}
