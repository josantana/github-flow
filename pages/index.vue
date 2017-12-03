
<template>

    <section class="Page">
        <picture>
            <source srcset="/images/intro.webp" type="image/webp">
            <source srcset="/images/intro.jpg" type="image/jpeg"> 
            <img class="u-responsive" src="/images/intro.jpg" alt="Join our team">
        </picture>
        <flow-intro />
        <h3 class="u-center">Apply now</h3>
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

    import FlowIntro from '~/components/flow/intro.vue';
    import FlowStart from '~/components/flow/start.vue';
    import FlowEnd from '~/components/flow/end.vue';
    import FlowComplete from '~/components/flow/complete.vue';

    export default {
        components: {
            FlowIntro,
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

    .Page {
        padding-top: 64px;
    }

    h3 {
        font-size: 16px;
        padding: 24px 0 12px;
        text-transform: uppercase;
    }

    .FlowProcess {
        overflow: hidden;
        padding-bottom: 0 36px 24px;
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
