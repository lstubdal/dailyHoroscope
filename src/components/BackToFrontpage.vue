<template>
    <RouterLink :to="{ name: 'home' }" class="zodiacPage__back">
        <svg width="40" height="40" viewBox="0 0 104 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M93.6 34.65V42.35H31.2L52 57.75L46.8 65.45L10.4 38.5L46.8 11.55L52 19.25L31.2 34.65H93.6Z" fill="white"/>
        </svg>
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
        color: var(--highlight);
    }

   .zodiacPage__back:hover path {
        fill: var(--highlight);
   }

    .zodiacPage__back > p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 200;
        font-size: 0.7em;
    }

    /********* RESPONSIVE MOBILE ********/
    @media screen and (max-width: 800px) {
        .zodiacPage__back > p {
            display: none;
        }

        .zodiacPage__back > svg {
            height: 40;
            width: 40;
        }
    }
</style>