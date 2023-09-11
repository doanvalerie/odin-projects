import './style.css';
import loadNavigation from './modules/navigation';
import loadHome from './modules/home';
import loadAbout from './modules/about';
import loadMenu from './modules/menu';
import loadFooter from './modules/footer';

loadNavigation();
loadFooter();
loadHome();
addTabListener();

function addTabListener() {
	const logo = document.getElementById('logo');
	const tabsNL = document.querySelectorAll('#tabs>button');

	const tabLoaders = [loadHome, loadAbout, loadMenu];
	const tabsArr = Array.from(tabsNL);
	for (let i = 0; i < tabsArr.length; ++i) {
		tabsArr[i].addEventListener('click', () => {
			wipeContent();
			tabLoaders[i]();
		});
	}

	logo.addEventListener('click', () => {
		wipeContent();
		loadHome();
	});
}

function wipeContent() {
	const content = document.getElementById('content');

	let child = content.lastElementChild;
	while (child) {
		content.removeChild(child);
		child = content.lastElementChild;
	}
}