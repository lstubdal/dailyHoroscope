<template>
  <!-- show horoscope based on users click -->
  <div class="zodiacPage" v-if="correctSlug">
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

    }
</script>

<style>

</style>