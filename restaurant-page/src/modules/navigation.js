export default function loadNavigation() {
	const content = document.getElementById('content');
	const nav = document.createElement('nav');

	const logo = document.createElement('div');
	logo.setAttribute('id', 'logo');
	logo.textContent = 'Sanrio Grand Cafe';

	const tabTitles = ['MAIN', 'ABOUT', 'MENU'];
	const tabs = document.createElement('div');
	tabs.setAttribute('id', 'tabs');
	for (let i = 0; i < tabTitles.length; ++i) {
		const button = document.createElement('button');
		button.textContent = tabTitles[i];
		tabs.append(button);
	}

	nav.append(logo, tabs);
	document.body.insertBefore(nav, content)
}