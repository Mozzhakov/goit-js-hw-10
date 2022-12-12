import './css/styles.css';
import { onInputChange } from './js/onInputChange';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener(
  'input',
  debounce(onInputChange, DEBOUNCE_DELAY)
);
