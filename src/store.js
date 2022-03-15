export default {
    state() {
        return {
            zodiacNames: [
                {sign: 'aquarius', symbol: '/images/aquarius.svg'},
                {sign: 'pisces', symbol: '/images/pisces.svg'},
                {sign: 'aries', symbol: '/images/aries.svg'},
                {sign: 'taurus', symbol: '/images/taurus.svg'},
                {sign: 'gemini', symbol: '/images/gemini.svg'},
                {sign: 'cancer', symbol: '/images/cancer.svg'},
                {sign: 'leo', symbol: '/images/leo.svg'},
                {sign: 'virgo', symbol: '/images/virgo.svg'},
                {sign: 'libra', symbol: '/images/libra.svg'},
                {sign: 'scorpio', symbol: '/images/scorpio.svg'},
                {sign: 'saggitarius', symbol: '/images/saggitarius.svg'},
                {sign: 'capricorn', symbol: '/images/capricorn.svg'},
            ]
        }
    },

    getters: {
        getZodiacNames(state) {
            return state.zodiacNames;
        }
    }
}