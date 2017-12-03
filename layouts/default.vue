
<template>

    <div class="Layout Layout-default">
        <progress-header />
        <nuxt/>
    </div>

</template>
<script>

    import ProgressHeader from '~/components/progress-header';

    export default {
        components: {
            ProgressHeader,
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/base';

</style>
