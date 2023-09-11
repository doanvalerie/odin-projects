import GIF from '../assets/home/cooking.gif';
import MyMelodyHead from '../assets/home/my-melody-head.png';
import KuromiHead from '../assets/home/kuromi-head.png';

const content = document.getElementById('content');

export default function loadHome() {
	appendHero();
	document.body.append(content);
}

function appendHero() {
	const hero = document.createElement('div');
	hero.setAttribute('id', 'hero');

	appendMainContent(hero);
	appendActions(hero);

	content.append(hero);
}

function appendMainContent(hero) {
	const mainContent = document.createElement('div');

	const cookingGIF = new Image();
	cookingGIF.src = GIF;

	const heading = document.createElement('div');
	heading.setAttribute('id', 'heading');
	heading.innerHTML = 'The Sanrio Experience in <span id="location">Kawaii Town, Dreamland.</span>';

	const description = document.createElement('div');
	description.setAttribute('id', 'description');
	description.textContent = 'A life-changing experience to fulfill your grandest dreams.'

	mainContent.append(cookingGIF, heading, description);
	hero.append(mainContent);
}

function appendActions(hero) {
	const actions = document.createElement('div');
	actions.setAttribute('id', 'actions');
	const actionTitles = ['RESERVE TABLE', 'ORDER ONLINE'];

	const myMelodyHeadIcon = new Image();
	myMelodyHeadIcon.src = MyMelodyHead;

	const kuromiHeadIcon = new Image();
	kuromiHeadIcon.src = KuromiHead;

	const icons = [kuromiHeadIcon, myMelodyHeadIcon];
	icons.forEach(icon => icon.classList.add('icon'));

	for (let i = 0; i < actionTitles.length; ++i) {
		const button = document.createElement('button');
		button.append(icons[i], actionTitles[i]);
		actions.append(button);
	}

	hero.append(actions);
}