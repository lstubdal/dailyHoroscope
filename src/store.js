export default {
    state() {
        return {
            zodiacSigns: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'], // create array because API don't include zodiacnames
            zodiacData: []  // gets zodiac objects from fetchZodiacData() 
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

    mutations: {
        addZodiac(state, zodiac) {
            state.zodiacData.push(zodiac);
        }
    },

    actions: {
        addZodiacObject({ commit }, zodiac) {
            commit('addZodiac', zodiac)
        }
    }
}