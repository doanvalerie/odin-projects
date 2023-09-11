import TeaPartyImg from '../assets/about/tea-party.jpg';
import CinnamorollCookingImg from '../assets/about/cinnamoroll-cooking.jpg';
import PompompurinEatingImg from '../assets/about/pompompurin-eating.jpg';
import SanrioBakingImg from '../assets/about/sanrio-baking.jpg';

const content = document.getElementById('content');

export default function loadAbout() {
	appendMainContent();
	appendGallery();
}

function appendMainContent() {
	const about = document.createElement('div');
	about.setAttribute('id', 'about');

	const teaParty = new Image();
	teaParty.src = TeaPartyImg;

	const text = document.createElement('div');
	text.classList.add('text');

	const h1Text = ['Our Story', 'Our Commitment'];
	const h2Text = [
		"Founded on a passion for spreading joy and smiles, Sanrio Cafe is a labor of love that began with a simple idea: to bring the magic of Sanrio to life through delicious food, enchanting decor, and a warm, inviting atmosphere. Our journey started with a dream of sharing the charm of Hello Kitty, My Melody, and other iconic Sanrio characters with the world.",
		"At Sanrio Cafe, we are committed to providing you with the highest quality of service and an unforgettable dining experience. Whether you're visiting us for a special occasion or simply stopping by for a cup of coffee, we aim to make every moment memorable."
	];

	for (let i = 0; i < h1Text.length; ++i) {
		const h1 = document.createElement('h1');
		h1.textContent = h1Text[i];
		
		const h2 = document.createElement('h2');
		h2.textContent = h2Text[i];

		text.append(h1, h2);
	}

	about.append(teaParty, text);
	content.append(about);
}

function appendGallery() {
	const gallery = document.createElement('div');
	gallery.setAttribute('id', 'gallery');

	const cinnamorollCookingImg = new Image();
	cinnamorollCookingImg.src = CinnamorollCookingImg;

	const pompompurinEatingImg = new Image();
	pompompurinEatingImg.src = PompompurinEatingImg;

	const sanrioBakingImg = new Image();
	sanrioBakingImg.src = SanrioBakingImg;

	gallery.append(cinnamorollCookingImg, pompompurinEatingImg, sanrioBakingImg);
	content.append(gallery);
}