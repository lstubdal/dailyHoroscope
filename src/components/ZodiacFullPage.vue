<template>
  <!-- show horoscope based on users click -->
  <div class="zodiacPage" v-if="zodiacSign">
    <h1 class="zodiacPage__title"> {{ zodiacSign.name }}</h1>
    <img :src="zodiacSign.symbol" :alt="zodiacSign.name">
    <p class="zodiacPage__date">{{ zodiacSign.dateRange}}</p>
    <main>
      <p class="horoscope"> {{ zodiacSign.description }}</p>

      <section>
        <div class="horoscope__information">
          <span class="horoscope__luckyNumber"> {{ zodiacSign.luckyNumber}} Lucky number</span>
          <span class="horoscope__mood"> {{ zodiacSign.mood }} Mood </span>
          <span class="horoscope__compatibility"> {{ zodiacSign.compatibility }} Compatibility</span>
        </div>
      </section>
    </main>
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
    background-color: var(--dark);
  }

</style>