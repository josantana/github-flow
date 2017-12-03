
<template>

    <section class="PageContainer">
        <div :class="['FlowProcess', `FlowProcess-${step}`]">
            <div class="FlowProcess-mask u-layout-horizontal">
                <flow-start :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 1 }]" @updateStep="updateStep" />
                <flow-end :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 2 }]" @updateStep="updateStep" />
                <div :class="['FlowProcess-step', 'u-flex', { 'is-active': step === 3 }]">
                    END
                </div>
            </div>
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
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .FlowProcess {
        overflow: hidden;
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

</style>
