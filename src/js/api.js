import { createEl, clearHtml } from './renderApp';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputValue = document.querySelector('.form__input');
const form = document.querySelector('.form');
const key = '38303120-77261ecd691aecbe62c4afdac';
const url = `https://pixabay.com/api/?key=${key}`;

async function fetchDataWithLoader(value) {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  
  try {
    form.appendChild(loader);

    const response = await fetch(`${url}&q=${value}&orientation=horizontal`);
    if (!response.ok) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.hits.length === 0) {
      throw new Error('No img found');
    }
    createEl(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  } finally {
    if (form.contains(loader)) {
      form.removeChild(loader); 
    }
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const value = inputValue.value;
  clearHtml();
  await fetchDataWithLoader(value); 
});

