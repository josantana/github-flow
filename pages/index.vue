
<template>

    <section class="PageContainer">
        <div>
            <flow-start />
            <flow-end />
        </div>
    </section>

</template>
<script>

    import FlowStart from '~/components/flow/start.vue';
    import FlowEnd from '~/components/flow/end.vue';

    export default {
        components: {
            FlowStart,
            FlowEnd,
        },
    };

</script>
<style scoped lang="scss">

    // ...

</style>
