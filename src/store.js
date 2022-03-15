export default {
    state() {
        return {
            zodiacData: []  // gets zodiac objects from fetchZodiacData() 
            
        }
    },

    getters: {
        getZodiacData(state) {
            return state.zodiacData;
        }
    },

    mutations: {
        addZodiac(state, zodiac) {
/*             console.log('STORE: ', state.zodiacData ); */
            state.zodiacData.push(zodiac);
        }
    }
}