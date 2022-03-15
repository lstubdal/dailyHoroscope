import HomeView from './views/HomeView.vue';
import ZodiacView from './views/ZodiacView.vue';

export default [
	{ name: 'home', 		path: '/', 					component: HomeView },
	{ name: 'zodiac', 		path: '/:zodiac_slug', 		component: ZodiacView,		props: true } // set as prop to access correct zodiac info on fullopage
];

