<template>
    <div class="home">
        <div class="home__title"> {{ title }}</div>
        <div class="home__zodiac-signs">
            zodiac grid here
        </div>

        <Footer />

    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';

    export default {
        data() {
            return {
                title: 'DAILY HOROSCOPE'
            }
        },

        components: {
            Footer
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
    }

    .home__title {
        font-size: var(--size-title);
        font-family: var(--font-title);
        color: var(--light);
    }

    .zodiac-board {

    }
</style>
