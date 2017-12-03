
<template>

    <div class="FlowIntro">
        <h1>Join our team</h1>
        <h2>Let's redefine the real estate market together.</h2>
        <p>Our goal is to make the sale of real estate as simple as possible. We remove unnecessary hurdles, ensure transparency and offer services that speed up the process. In this way, we help both the seller and the buyer to achieve a satisfactory result in the transaction. Help us redefine a traditional market and become part of the team!</p>
        <p>Our team is internationally oriented and brings together a wide range of specialist areas and nationalities such as Brazil, Slovenia, France, Turkey, Ukraine and Germany. This diversity enriches our daily work routine every day anew. Listen to what your new colleagues tell you about their experiences at Homeday!</p>
        <h3 class="u-center">We offer you the following</h3>
        <ul class="FlowIntro-grid u-layout-wrap u-center">
            <li class="FlowIntro-gridItem">
                <icon :glyph="icons.topics.rocket" width="64px" height="64px" />
                <span>A fast growing start-up company</span>
            </li>
            <li class="FlowIntro-gridItem">
                <icon :glyph="icons.topics.bulb" width="64px" height="64px" />
                <span>Great openness for your ideas and suggestions</span>
            </li>
            <li class="FlowIntro-gridItem">
                <icon :glyph="icons.topics.clock" width="64px" height="64px" />
                <span>Family-friendly, flexible time management</span>
            </li>
            <li class="FlowIntro-gridItem">
                <icon :glyph="icons.topics.coffee" width="64px" height="64px" />
                <span>As much coffee, fruit and sweets as your heart desires</span>
            </li>
        </ul>
    </div>

</template>
<script>

    import Icon from '~/components/utils/icon.vue';
    import topicsBulbIcon from '~/static/vectors/icon-topics-bulb.svg';
    import topicsClockIcon from '~/static/vectors/icon-topics-clock.svg';
    import topicsCoffeeIcon from '~/static/vectors/icon-topics-coffee.svg';
    import topicsRocketIcon from '~/static/vectors/icon-topics-rocket.svg';

    export default {
        name: 'flow-complete',
        props: ['active'],
        components: {
            Icon,
        },
        data() {
            return {
                icons: {
                    topics: {
                        bulb: topicsBulbIcon,
                        clock: topicsClockIcon,
                        coffee: topicsCoffeeIcon,
                        rocket: topicsRocketIcon,
                    },
                },
            };
        },
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

    .FlowIntro-grid {
        list-style: none;
    }

    .FlowIntro-gridItem {
        fill: $secondary-color;
        width: 50%;

        &:nth-child(even) {
            padding-left: 12px;
        }

        &:nth-child(odd) {
            padding-right: 12px;
        }

        span {
            display: block;
        }
    }

</style>
