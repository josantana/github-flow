
<template>

    <div class="ProgressHeader">
        <icon :glyph="logo.homeday" height="32px" />
    </div>

</template>
<script>

    import icon from '~/components/utils/icon';
    import homedayLogo from '~/static/vectors/logo-homeday.svg';

    export default {
        name: 'progress-header',
        components: {
            icon,
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

    .ProgressHeader {
        background: color($white);
        box-shadow: 0 1px 4px rgba(color($black), .1);
        margin-bottom: 36px;
        padding: 12px 32px 16px;
        position: relative;

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

</style>
