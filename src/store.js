export default {
    state() {
        return {
            zodiacNames: [
                'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 
                'virgo', 'libra', 'scorpio', 'saggitarius', 'capricorn'
            ]
        }
    },

    getters: {
        getZodiacNames(state) {
            return state.zodiacNames;
        }
    }
}