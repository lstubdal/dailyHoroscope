<template>
  <RouterLink :to="{ name: 'home' }" class="zodiacPage__back">
      <img src="/images/back.svg" alt="back to homepage">
      <p>Back to homepage</p>
    </RouterLink>
</template>

<script>
export default {

}
</script>

<style>
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
</style>