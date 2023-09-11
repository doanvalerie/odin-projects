import './style.css';
import loadNavigation from './modules/navigation';
import loadHome from './modules/home';
import loadFooter from './modules/footer';

loadNavigation();
loadHome();
loadFooter();
addTabListener();

function addTabListener() {
	const tabs = document.querySelectorAll('#tabs>button');
	console.log(tabs);
	tabs.forEach(tab => {
		tab.addEventListener('click', switchContent);
	});
}

function switchContent(e) {
	const content = document.querySelector('#content');

	let child = content.lastElementChild;
	while (child) {
		content.removeChild(child);
		child = content.lastElementChild;
	}
}