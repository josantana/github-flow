
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
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700');

    // ...

</style>
