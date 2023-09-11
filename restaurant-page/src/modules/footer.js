import TuxedoSamIcon from '../assets/footer/tuxedo-sam.jpg';
import CinnamorollIcon from '../assets/footer/cinnamoroll.jpg';
import PompompurinIcon from '../assets/footer/pompompurin.jpg';

export default function loadFooter() {
	const footer = document.createElement('footer');

	appendInformation(footer);
	appendPolicies(footer);

	document.body.append(footer);
}

function appendInformation(footer) {
	const information = document.createElement('div');
	information.setAttribute('id', 'informational');

	const tuxedoSamIcon = new Image();
	tuxedoSamIcon.src = TuxedoSamIcon;

	const cinnamorollIcon = new Image();
	cinnamorollIcon.src = CinnamorollIcon;

	const pompompurinIcon = new Image();
	pompompurinIcon.src = PompompurinIcon;

	const icons = [tuxedoSamIcon, cinnamorollIcon, pompompurinIcon];

	const cardTitles = ['Address', 'Contact', 'Hours'];
	const cardCaptions = [
		'Hello Kitty Cafe<br>' + 
		'1234 Cuddle Lane<br>' +
		'Kawaii Town, Dreamland<br>' +
		'Sanrioville, Smile 27381<br>',

		'(555) 123-4567<br>' +
		'contact@sanriocafe.com<br>',

		'<span class="emphasis">Mon - Fri</span>: 11:00 to 18:00<br>' +
		'<span class="emphasis">Sat</span>: 10:00 to 19:00<br>' +
		'<span class="emphasis">Sun</span>: Closed<br>'
	];

	for (let i = 0; i < cardTitles.length; ++i) {
		const card = document.createElement('div');
		card.classList.add('card');

		const text = document.createElement('div');
		text.classList.add('text');

		const title = document.createElement('p');
		title.classList.add('title');
		title.textContent = cardTitles[i];

		const caption = document.createElement('p');
		caption.innerHTML = cardCaptions[i];

		text.append(title, caption);
		card.append(icons[i], text);
		information.append(card);
	}

	footer.append(information);
}

function appendPolicies(footer) {
	const policies = document.createElement('div');
	policies.setAttribute('id', 'policies');

	const linkNames = ['Refund Policy', 'Privacy Policy', 'Terms and Conditions'];

	for (let i = 0; i < linkNames.length; ++i) {
		const link = document.createElement('a');
		link.href = '';
		link.textContent = linkNames[i];
		policies.append(' | ', link);
	}
	policies.append(' |');

	footer.append(policies);
}