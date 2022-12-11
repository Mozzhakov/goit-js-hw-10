import './css/styles.css';
import { onInputChange } from './js/onInputChange';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;
refs.searchInput.addEventListener('input', onInputChange);
