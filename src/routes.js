import HomeView from './views/HomeView.vue';
import ZodiacView from './views/ZodiacView.vue';

export default [
	{ name: 'home', 		path: '/', 					component: HomeView },
	{ name: 'zodiac', 		path: '/:zodiac_sign', 		component: ZodiacView, 	props: true }

];

