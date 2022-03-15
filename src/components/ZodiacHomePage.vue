<template>
  <div class="zodiac">
      <src class="zodiac__symbol"  :src="zodiac.symbol" :alt="zodiac.description"/>
      <div class="zodiac__name"> </div>
      <div class="zodiac__date"></div>
  </div>
</template>

<script>
    export default {
        props: {
            zodiac: {
                type: Object
            }
        }
    }
</script>

<style>

</style>