import Home from './views/Home.vue';
import Zodiac from './views/Zodiac.vue';

export default [
	{ 
		name: 'home', 		
		path: '/', 					
		component: Home
	},
	{ 
		name: 'zodiac', 		
		path: '/:zodiac_slug', 		
		component: Zodiac,		
	} 
];

