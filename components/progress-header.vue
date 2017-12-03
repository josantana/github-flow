
<template>

    <div class="ProgressHeader-container u-fixed">
        <div class="ProgressHeader">
            <div class="ProgressHeader-wrapper">
                <icon :glyph="logo.homeday" height="32px" />
            </div>
        </div>
    </div>

</template>
<script>

    import Icon from '~/components/utils/icon';
    import homedayLogo from '~/static/vectors/logo-homeday.svg';

    export default {
        name: 'progress-header',
        components: {
            Icon,
        },
        data() {
            return {
                logo: {
                    homeday: homedayLogo,
                },
            };
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .ProgressHeader-container {
        width: 100%;
        z-index: 5;
    }

    .ProgressHeader {
        background: color($white);
        box-shadow: 0 1px 4px rgba(color($black), .1);
        padding: 12px 32px 16px;
        width: 100%;

        &::before,
        &::after {
            border-radius: 100px / 10px;
            box-shadow: 0 0 20px rgba(color($black), .25);
            bottom: 0;
            content: '';
            left: 10px;
            position: absolute;
            right: 10px;
            top: 50%;
            z-index: -1;
        }

        &::after {
            left: auto;
            right: 10px;
            transform: skew(8deg) rotate(3deg);
        }
    }

    @media (min-width: 768px) {
        .ProgressHeader-wrapper {
            margin: 0 auto;
            max-width: 1140px;
        }
    }

</style>
