
<template>

    <div class="GithubAnimation u-relative">
        <icon class="GithubAnimation-body" :glyph="icons.github.body" width="124px" height="124px" />
        <icon class="GithubAnimation-head u-absolute" :glyph="icons.github.head" width="124px" height="124px" />
        <icon class="GithubAnimation-tail u-absolute" :glyph="icons.github.tail" width="124px" height="124px" />
    </div>

</template>
<script>

    import icon from '~/components/utils/icon';
    import bodyIcon from '~/static/vectors/icon-github-body.svg';
    import headIcon from '~/static/vectors/icon-github-head.svg';
    import tailIcon from '~/static/vectors/icon-github-tail.svg';

    export default {
        name: 'github-animation',
        components: {
            icon,
        },
        data() {
            return {
                icons: {
                    github: {
                        body: bodyIcon,
                        head: headIcon,
                        tail: tailIcon,
                    },
                },
            };
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .GithubAnimation {
        height: 124px;
        transform: translateY(-1px);
    }

    .GithubAnimation-body {
        fill: $primary-color;
    }

    .GithubAnimation-head,
    .GithubAnimation-tail {
        left: 0;
        top: 0;
    }

    .GithubAnimation-head {
        animation: cupheadLikeHead 1s infinite;
    }

    .GithubAnimation-tail {
        animation: cupheadLikeTail 1s infinite;
        opacity: .85;
    }

    @keyframes cupheadLikeHead {
        0% { transform: translateY(3px); }
        50% { transform: translateY(0); }
        100% { transform: translateY(3px); }
    }

    @keyframes cupheadLikeTail {
        0% { transform: translateY(-2px) rotate(-3deg); }
        50% { transform: translateY(0) rotate(3deg); }
        100% { transform: translateY(-2px) rotate(-3deg); }
    }

</style>
