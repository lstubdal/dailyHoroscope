export default {
    state() {
        return {
            zodiacData: [ 
                // zodiac data missing in API
                {sign: 'aries', symbol: './images/aries.svg'},
                {sign: 'taurus', symbol: './images/taurus.svg'},
                {sign: 'gemini', symbol: './images/gemini.svg'},
                {sign: 'cancer', symbol: './images/cancer.svg'},
                {sign: 'leo', symbol: './images/leo.svg'},
                {sign: 'virgo', symbol: './images/virgo.svg'},
                {sign: 'libra', symbol: './images/libra.svg'},
                {sign: 'scorpio', symbol: './images/scorpio.svg'},
                {sign: 'sagittarius', symbol: './images/sagittarius.svg'},
                {sign: 'capricorn', symbol: './images/capricorn.svg'},
                {sign: 'aquarius', symbol: './images/aquarius.svg'},
                {sign: 'pisces', symbol: './images/pisces.svg'},
            ]
        }
    },

    getters: {
        getZodiacData(state) {
            return state.zodiacData;
        }
    }
}