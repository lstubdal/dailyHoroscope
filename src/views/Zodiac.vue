<template>
  <div class="zodiacPage" v-if="!error">
    <BackToFrontpage />

    <div class="zodiacPage__overlay">
      <h1 class="zodiacPage__title"> {{ zodiacSign.name }}</h1>
      <img class="zodiacPage__symbol" :src="zodiacSign.symbol" :alt="zodiacSign.name">
      <p class="zodiacPage__date">{{ zodiacSign.dateRange}}</p>
      
      <div class="horoscope">
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
      </div>
    </div>
  </div>
</template> 

<script>
  import BackToFrontpage from '../components/BackToFrontpage.vue';

  export default {
    data() {
      return {
          zodiacSign: null,
          error: ''
      }
    },

    components: {
      BackToFrontpage
    },

    // fetch again if page reloaded, but only current zodiac sign
    async created() {
      const url = `https://aztro.sameerkumar.website/?sign=${this.zodiac_slug}&day=today`;
      const options = {method: 'POST'};
      
      try {
          const response = await fetch(url, options);
          this.handleResponseData(response);
      } catch(error) {
          this.error = error.message;
      }
    },

    props: {
      zodiac_slug: {
          type: String
      }
    },

    computed: {
      zodiacData() {
          return this.$store.getters.getZodiacData;
      }
    },

    methods: {
      async handleResponseData(response) {
          if (response.ok) {
              const results = await response.json(); 
              this.createZodiacObject(results)    
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

      async createZodiacObject(results) {
        return this.zodiacSign = {
                'name': `${this.zodiac_slug}`,
                'symbol': `/images/${this.zodiac_slug}.svg`,
                'dateRange': results.date_range,
                'description': results.description,
                'compatibility': results.compatibility,
                'mood': results.mood,
                'luckyNumber': results.lucky_number  
            }
      }
    }
  }
</script>

<style>
  .zodiacPage {
    width: 100vw;
    height: 100vh;
    background-image: url('/images/zodiac-background.png');
    color: var(--light);
  }

  .zodiacPage__overlay {
    height: inherit;
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
    font-size: 1.7em;
    text-align: center;
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
    padding: 2% 0%;
  }

  .horoscope__detail {
    font-size: 0.8em;
    color: var(--light); 
  }

  /********* RESPONSIVE ********/
  @media screen and (max-width: 800px) {
    .zodiacPage__title {
      font-size: 2.4em;
      margin-top: var(--margin-small);
    }

    .zodiacPage__date {
      font-size: 1.4em;
    }

    .horoscope__information {
      justify-content: center;
      flex-direction: column;
    }

    .zodiacPage__symbol {
      width: var(--symbol-size-responsive);
      height: var(--symbol-size-responsive);
      margin: var(--margin-small);
    }

    .horoscope__description {
      font-size: 1.5em;
      padding: 3%;
    }

    .horoscope__details {
      font-size: 1.5em;
    }
  }
</style>