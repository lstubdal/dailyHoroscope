<template>
    <div class="home">
        <div class="home__title"> {{ title }}</div>
        
        <div class="zodiac-board">
            <button @click="fetchZodiacData"> click click</button>
        </div>

        <Footer />

    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';

    export default {
        data() {
            return {
                title: 'DAILY HOROSCOPE',
                zodiacName: '',
                zodiacDate: '',
                zodiacHoroscope: '',
            }
        },

        computed: {
            zodiacNames() {
                return this.$store.getters.getZodiacNames;
            }
        },

        components: {
            Footer
        },

        methods: {
            async fetchZodiacData() {   /* iterate through loop with zodiac name because the API only shows one zodiac sign at the time  */
                /* zodiacNames.forEach(name => { */

                    const url = '';
                    const response = await fetch(url);
                    const data = await response.json();

                    console.log('SIGN: ', );

              /*   }); */
            }
        }
    }
</script>

<style>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-image: url('/images/background-home.jpg');
        background-size: cover;
        padding: var(--super-large);
    }

    .home__title {
        font-size: var(--size-title);
        font-family: var(--font-title);
        color: var(--light);
    }

    .zodiac-board {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--grid-gap);
    }

    .zodiac-board__sign {
        height: var(--zodiac-size);
        width: var(--zodiac-size);
        border: 2px solid white;
    }
</style>
