<template>
    <div class="home">
        <div class="home__title"> {{ title }}</div>
        
        <main class="zodiacBoard">
            <div v-for="zodiacSign in zodiacData" class="zodiacBoard__sign">
                <RouterLink :to="{ name: 'zodiac', params: { zodiac_slug: zodiacSign.name }}" class="zodiacBoard__routerlink">
                    <img v-if="!error" :src="zodiacSign.symbol" :alt="zodiacSign.name">
                    <h3 v-if="!error"> {{ zodiacSign.name }} </h3>
                    <p v-if="!error"> {{ zodiacSign.dateRange }}</p>
                </RouterLink>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'DAILY HOROSCOPE',
                totalSigns: 12, // avoid double fetching when returning to homepage
                error: ''
            }
        },
        
        created() {
            this.fetchZodiacData()
        },

        computed: {
            zodiacSigns() {
                return this.$store.getters.getZodiacSigns;
            },

            zodiacData() {
                return this.$store.getters.getZodiacData;
            }
        },

        methods: {
            async fetchZodiacData() {
                this.zodiacSigns.forEach(zodiac => {
                    if (this.zodiacData.length < this.totalSigns) { 

                        // make async function when fetching inside loop/function
                        let response = '';
                        const fetchData = async (response, zodiac) => {     
                            const url = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`;
                            const options = {method: 'POST'} // uses post, get is default
                            response = await fetch(url, options);

                            try {
                                this.handleResponse(response, zodiac);
                            } catch(error) {
                                this.error = error.message
                            }
                        }
                        fetchData(response, zodiac) // call function
                    }
                })
            },

            async handleResponse(response, zodiac) {
                // create zodiac object and push to store if fetch OK
                if (response.ok) {
                    const results = await response.json(); 
                    this.createZodiacObject(results, zodiac);
                    
                } else {
                    if (response.status === 404) {
                        throw new Error("Can't find url")
                    } else if (response.status === 500) {
                        throw new Error("Server error")
                    } else {
                        throw new Error("something went wrong");
                    }
                }
            },

            async createZodiacObject(results, zodiac) {
                const zodiacSign = {
                    'name': zodiac,
                    'symbol': `/images/${zodiac}.svg`,
                    'dateRange': results.date_range,
                    'description': results.description,
                    'compatibility': results.compatibility,
                    'mood': results.mood,
                    'luckyNumber': results.lucky_number
                }
                this.$store.dispatch('addZodiacObject', zodiacSign) //add complete zodiac object to array in store
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

    .zodiacBoard__routerlink:hover {
        background-color: var(--hover);
    }
 
    .zodiacBoard__sign img {
        height: var(--symbol-size);
        width:  var(--symbol-size);
    }


    /********* RESPONSIVE TABLET ********/
    @media screen and (max-width: 800px) {
        .zodiacBoard {
            grid-template-columns: repeat(3, 1fr);
        }

        .home__title {
            font-size: 3em;
            text-align: center;
            margin-bottom: var(--padding-medium);
        }
    }

    /********* RESPONSIVE MOBILE ********/
    @media screen and (max-width: 600px) {
        .zodiacBoard {
            grid-template-columns: repeat(2, 1fr);
        }

        .home__title {
            font-size: 2.5em;
            text-align: center;
            margin-bottom: var(--padding-medium);
        }
    }
</style>
