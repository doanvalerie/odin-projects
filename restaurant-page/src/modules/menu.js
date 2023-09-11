import PancakeImg from '../assets/menu/pancakes.jpg';
import ToastImg from '../assets/menu/toast.jpg';
import FlanImg from '../assets/menu/flan.jpg';


const content = document.getElementById('content');

export default function loadMenu() {
	appendMenu();
}

function appendMenu() {
	const menu = document.createElement('div');
	menu.setAttribute('id', 'menu');

	const menuTitle = document.createElement('div');
	menuTitle.setAttribute('id', 'menu-title');
	menuTitle.textContent = 'Sanrio Grand Cafe';
	menu.append(menuTitle);

	const dishNames = [
		'Butterscotch Mochi Pancakes <span class="price">$18</span>',
		'Egg Bacon Toast with Jelly Boba <span class="price">$20</span>',
		'Carmelized Flan <span class="price">$12</span>'
	];

	const dishDescriptions = [
		'Fluffy rice pancakes with fresh fruit, butterscotch drizzle, and bubblegum cream',
		'Toasted milk bread with a runny egg, crispy bacon, and jelly boba delight.',
		'Soft caramel egg flan w/ fresh cream and condensed milk.'
	];

	const pancakeImg = new Image();
	pancakeImg.src = PancakeImg;

	const toastImg = new Image();
	toastImg.src = ToastImg;

	const flanImg = new Image();
	flanImg.src = FlanImg;

	const foodImages = [pancakeImg, toastImg, flanImg];

	for (let i = 0; i < dishNames.length; ++i) {
		const option = document.createElement('div');
		option.classList.add('option');

		const name = document.createElement('div');
		name.classList.add('name');
		name.innerHTML = dishNames[i];

		const description = document.createElement('div');
		description.classList.add('description');
		description.textContent = dishDescriptions[i];

		option.append(name, description, foodImages[i]);
		menu.append(option);
	}

	content.append(menu);
}