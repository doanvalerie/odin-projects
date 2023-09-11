import TuxedoSam from '../assets/footer/tuxedo-sam.webp';
import Cinnamoroll from '../assets/footer/cinnamoroll.png';
import Pompompurin from '../assets/footer/pompompurin.png';

export default function loadFooter() {
	const footer = document.createElement('footer');

	appendAboutUs(footer);
	appendPolicies(footer);

	document.body.append(footer);
}

function appendAboutUs(footer) {
	const aboutUs = document.createElement('div');
	aboutUs.setAttribute('id', 'about-us');

	const tuxedoSamImage = new Image();
	tuxedoSamImage.src = TuxedoSam;
	const cinnamorollImage = new Image();
	cinnamorollImage.src = Cinnamoroll;
	const pompompurinImage = new Image();
	pompompurinImage.src = Pompompurin;
	const images = [tuxedoSamImage, cinnamorollImage, pompompurinImage];

	const cardClasses = ['address', 'phone', 'hours'];
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
		'<span class="emphasis">Sun</span>: Closed'
	];

	for (let i = 0; i < cardTitles.length; ++i) {
		const card = document.createElement('div');
		card.classList.add('card', `${cardClasses[i]}`);

		const text = document.createElement('div');

		const title = document.createElement('p');
		title.classList.add('title');
		title.textContent = cardTitles[i];

		const caption = document.createElement('p');
		caption.innerHTML = cardCaptions[i];

		text.append(title, caption);
		card.append(images[i], text);
		aboutUs.append(card);
	}

	footer.append(aboutUs);
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