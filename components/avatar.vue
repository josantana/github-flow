
<template>

    <div :class="['Avatar', { 'is-flipped': source }]">
        <div class="Avatar-container">
            <div class="Avatar-front">
                <github-animation />
            </div>
            <div class="Avatar-back">
                <img v-if="source" :src="source" :height="size" :width="size" />
            </div>
        </div>
    </div>

</template>
<script>

    import GithubAnimation from '~/components/github-animation.vue';

    export default {
        name: 'avatar',
        props: ['source'],
        components: {
            GithubAnimation,
        },
        data() {
            return {
                size: '124px',
            };
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .Avatar {
        margin: 0 auto 24px;
        position: relative;
        perspective: 1000px;
        z-index: 3;

        &.is-flipped .Avatar-container { transform: rotateY(180deg); }
    }

    .Avatar,
    .Avatar-front,
    .Avatar-back {
        height: 146px;
        width: 146px;
    }

    .Avatar-front,
    .Avatar-back {
        border: solid 1px color($grey, 200);
        box-shadow: 0 0 5px rgba(color($black), .05);
        padding: 10px;

        &,
        img {
            border-radius: 50%;
        }

        img {
            background: color($grey, 100);
        }
    }

    .Avatar-container {
        transition: .6s;
        transform-style: preserve-3d;
        position: relative;
    }

    .Avatar-front,
    .Avatar-back {
        backface-visibility: hidden;
        left: 0;
        position: absolute;
        top: 0;
    }

    .Avatar-front {
        transform: rotateY(0deg);
        z-index: 2;
    }

    .Avatar-back {
        transform: rotateY(180deg);
    }

</style>
