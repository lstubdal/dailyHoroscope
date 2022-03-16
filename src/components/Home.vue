<template>
    <!-- legge inn errorhandleresponse message -->
    <div class="home">
        <div class="home__title"> {{ title }}</div>
        
        <main class="zodiacBoard">
            <div v-for="zodiacSign in zodiacData" class="zodiacBoard__sign">
                <RouterLink :to="{ name: 'zodiac', params: { zodiac_slug: zodiacSign.name }}" class="zodiacBoard__routerlink">
                    <img :src="zodiacSign.symbol" :alt="zodiacSign.name">
                    <h3> {{ zodiacSign.name }} </h3>
                    <p> {{ zodiacSign.dateRange }}</p>
                </RouterLink>
            </div>
        </main>
        <!-- <Footer /> -->
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';

    export default {
        data() {
            return {
                title: 'DAILY HOROSCOPE',
                zodiacSigns: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
            }
        },

        created() {
            this.fetchZodiacData()
        },

        computed: {
            zodiacData() {
                return this.$store.getters.getZodiacData;
            }
        },

        components: {
            Footer
        },

        methods: {
            async fetchZodiacData() {   // iterate through loop with zodiac name because API only allows single fetching
                this.zodiacSigns.forEach(zodiac => {
                    // make async function when fetching inside loop/function
                    const createZodiacObject = async () => {     
                        const url = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`;
                        const options = {method: 'POST'} // uses post, get is default
                        const response = await fetch(url, options);

                        if (response.ok) {
                            const results = await response.json(); 
                            // create complete zodiac objects with data from store and api, then push into empty array
                            const zodiacSign = {
                                'name': zodiac,
                                'symbol': `/images/${zodiac}.svg`,
                                'dateRange': results.date_range,
                                'description': results.description,
                                'compatibility': results.compatibility,
                                'mood': results.mood,
                                'luckyNumber': results.lucky_number
                            }
                            this.$store.commit('addZodiac', zodiacSign) //add complete zodiac object to array in store
       
                        } else {
                            throw new Error('Error fetching', response.status); 
                        }
                    }

                    try {
                        createZodiacObject();
                    } catch(err) {
                        console.log(err); 
                    }
                })

            }
        }
    }
</script>

<style>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        background-image: url('/images/background-home.jpg');
        background-size: cover;
        padding: var(--super-large);
    }

    .home__title {
        font-size: 3.5em;
        font-family: var(--font-title);
        color: var(--light);
    }

    .zodiacBoard {
       display: grid;
       gap: var(--grid-gap);
       grid-template-columns: repeat(4, 1fr);
       padding-top: var(--padding-medium);
    }

    .zodiacBoard__sign {
        background-color: var(--dark);
        border-radius: 8px;
        font-family: var(--font-body);
        font-weight: 300;
    }

    .zodiacBoard__routerlink {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: var(--zodiac-size);
        width: var(--zodiac-size);
        text-decoration: none;
        color: var(--light);
    }
 
    .zodiacBoard__sign img {
        height: var(--symbol-size);
        width:  var(--symbol-size);
    }
</style>
