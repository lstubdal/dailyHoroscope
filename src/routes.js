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
		props: true	// declare as prop when routing to specific zodiac sign
	} 
];

