export default {
    state() {
        return {
            zodiacSigns: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'], // create array because API don't include zodiacnames],
            zodaicData: [],
            totalSigns: 12,
            error: '',
        }
    },

    mutations: { // endrer state 
        setZodiacData(state, zodaicData) {
            state.zodaicData = zodaicData; // oppdatere zodiac data list
        },
        setError(state, error) {    // oppdatere error verdi
            state.error = error;
        }
    },

    actions: {   // selve prosessen
        async fetchZodiacData(state) {
            state.zodiacSigns.forEach(zodiacSign => {
                /* state.commit('setZodiacData', zodiacSign) */
                console.log(zodiacSign);
            })
        }
    },

    getters: {
        getZodiacData(state) {
            return state.zodiacData
        }
    }
}