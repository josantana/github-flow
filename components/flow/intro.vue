
<template>

    <div class="FlowIntro">
        <h1>Join our team</h1>
        <h2>Let's redefine the real estate market together.</h2>
        <p>Our goal is to make the sale of real estate as simple as possible. We remove unnecessary hurdles, ensure transparency and offer services that speed up the process. In this way, we help both the seller and the buyer to achieve a satisfactory result in the transaction. Help us redefine a traditional market and become part of the team!</p>
        <p>Our team is internationally oriented and brings together a wide range of specialist areas and nationalities such as Brazil, Slovenia, France, Turkey, Ukraine and Germany. This diversity enriches our daily work routine every day anew. Listen to what your new colleagues tell you about their experiences at Homeday!</p>
    </div>

</template>
<script>

    export default {
        name: 'flow-intro',
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    h1,
    h2 {
        color: $primary-color;
    }

    h1 {
        font-size: 36px;
        font-weight: 100;
        padding-bottom: 12px;
    }

    h2 {
        padding-bottom: 24px;
    }

    p {
        padding-bottom: 12px;
    }

    .FlowIntro {
        padding: 36px; 
    }

    @media (min-width: 768px) {
        p {
            font-size: 16px;
        }

        .FlowIntro {
            margin: 0 auto;
            max-width: 1024px;
        }
    }

</style>
