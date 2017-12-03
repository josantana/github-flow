
<template>

    <div class="FlowTopics">
        <ul class="FlowTopics-grid u-layout-wrap u-center">
            <li class="FlowTopics-gridItem">
                <icon :glyph="icons.topics.rocket" width="64px" height="64px" />
                <span>A fast growing start-up company</span>
            </li>
            <li class="FlowTopics-gridItem">
                <icon :glyph="icons.topics.bulb" width="64px" height="64px" />
                <span>Great openness for your ideas and suggestions</span>
            </li>
            <li class="FlowTopics-gridItem">
                <icon :glyph="icons.topics.clock" width="64px" height="64px" />
                <span>Family-friendly, flexible time management</span>
            </li>
            <li class="FlowTopics-gridItem">
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
        name: 'flow-topics',
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

    .FlowTopics {
        padding: 0 32px;
    }

    .FlowTopics-grid {
        list-style: none;
    }

    .FlowTopics-gridItem {
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

    @media (min-width: 768px) {
        span {
            font-size: 16px;
        }

        .FlowTopics {
            margin: 0 auto;
            max-width: 1140px;

            .FlowTopics-gridItem {
                width: 25%;
            }
        }
    }

</style>
