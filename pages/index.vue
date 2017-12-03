
<template>

    <section class="PageContainer">
        <div :class="['FlowProcess', `FlowProcess-${step}`]">
            <div class="FlowProcess-mask u-layout-horizontal">
                <flow-start :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 1 }]" @updateStep="updateStep" />
                <flow-end :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 2 }]" @updateStep="updateStep" />
                <flow-complete :active="step === 3" :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 3 }]" @updateStep="updateStep" />
            </div>
        </div>
    </section>

</template>
<script>

    import FlowStart from '~/components/flow/start.vue';
    import FlowEnd from '~/components/flow/end.vue';
    import FlowComplete from '~/components/flow/complete.vue';

    export default {
        components: {
            FlowStart,
            FlowEnd,
            FlowComplete,
        },
        data() {
            return {
                step: 1,
            };
        },
        methods: {
            updateStep(to) {
                this.step = to;
            },
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .PageContainer {
        padding-top: 64px;
    }

    .FlowProcess {
        overflow: hidden;
        padding: 36px 0 24px;
        width: 100%;
    }

    .FlowProcess-2 .FlowProcess-mask {
        transform: translateX(-33.3333%);
    }

    .FlowProcess-3 .FlowProcess-mask {
        transform: translateX(-66.6666%);
    }

    .FlowProcess-mask {
        transition: transform .75s $easing;
        width: 300%;
    }

    .FlowProcess-step {
        padding: 0 32px;
    }

    .FlowProcess-actions {
        margin-top: 12px;
    }

</style>
