export default {
    state() {
        return {
            zodiacSigns: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'], // create array because API don't include zodiacnames
            zodiacData: []  // gets zodiac objects from fetchZodiacData() 
            
        }
    },

    mutations: {
        addZodiac(state, zodiac) {
/*             console.log('STORE: ', state.zodiacData ); */
            state.zodiacData.push(zodiac);
        }
    },

    getters: {
        getZodiacSigns(state) {
            return state.zodiacSigns
        },

        getZodiacData(state) {
            return state.zodiacData;
        }
    },
}