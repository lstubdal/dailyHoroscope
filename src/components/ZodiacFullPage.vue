<template>
  <!-- show horoscope based on users click -->
  <div class="zodiacPage" v-if="zodiacSign">
    <RouterLink :to="{ name: 'home' }" class="zodiacPage__back">
      <img src="/images/back.svg" alt="back to homepage">
      <span>Back to homepage</span>
    </RouterLink>

    <div class="zodiacPage__overlay">
      <h1 class="zodiacPage__title"> {{ zodiacSign.name }}</h1>
      <img class="zodiacPage__symbol" :src="zodiacSign.symbol" :alt="zodiacSign.name">
      <p class="zodiacPage__date">{{ zodiacSign.dateRange}}</p>
      
      <main class="horoscope">
        <p class="horoscope__description"> {{ zodiacSign.description }}</p>

        <section class="horoscope__information">
            <span class="horoscope__details"> {{ zodiacSign.luckyNumber}}
              <p class="horoscope__detail">Lucky number</p>
            </span>

            <span class="horoscope__details"> {{ zodiacSign.mood }}
              <p class="horoscope__detail">Mood</p>
            </span>

            <span class="horoscope__details"> {{ zodiacSign.compatibility }}
              <p class="horoscope__detail">Compatibility</p>
            </span>
        </section>
      </main>
    </div>
  </div>
</template> 

<script>
    export default {
      props: {
          zodiac_slug: {
              type: String
          },
      },

      computed: {
        zodiacData() {
            return this.$store.getters.getZodiacData;
        }
      },
     created() {                                                                                 
          return this.zodiacSign = this.zodiacData.find(zodiac => zodiac.name === this.zodiac_slug)     /* return slug to the current article (give value to slug prop) source: https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode */
      } 

    }
</script>

<style>
  .zodiacPage {
    width: 100vw;
    background-image: url('/images/zodiac-background.png');
    color: var(--light);
  }

  .zodiacPage__back {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-medium);
    font-size: 1.5em;
    cursor: pointer;
    color: var(--light);
    text-decoration: none;
  }

  .zodiacPage__back:hover {
    text-decoration: underline;
    color: var(--highlight);
  }

  .zodiacPage__overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--dark);
    padding: var(--padding-large);
  }

  .zodiacPage__title {
    font-family: var(--font-title);
    font-size: 3em;
    font-weight: 300;
  }

  .zodiacPage__symbol {
    width: var(--symbol-size-fullpage);
    height: var(--symbol-size-fullpage);
    margin: 0.5%;
  }

  .zodiacPage__date {
    font-size: 1.7em;
    font-family: var(--font-body);
    padding: 0.8%
  }

  .horoscope {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .horoscope__description {
    line-height: 1;
    font-size: 2em;
    padding: var(--padding-medium) var(--padding-xlarge) var(--padding-large) var(--padding-xlarge);
  }

  .horoscope__information {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-bottom: var(--padding-small);
  }

  .horoscope__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: var(--highlight);
  }

  .horoscope__detail {
    font-size: 0.6em;
    color: var(--light); 
  }
</style>