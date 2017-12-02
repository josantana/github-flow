
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

    // ...

</style>
