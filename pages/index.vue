
<template>

    <section :class="['Page', isWebpSupported]">
        <canvas class="Page-start u-responsive" height="1" width="1"></canvas>
        <flow-intro />
        <h3 class="u-center">We offer you the following</h3>
        <flow-topics />
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
    import FlowTopics from '~/components/flow/topics.vue';
    import FlowStart from '~/components/flow/start.vue';
    import FlowEnd from '~/components/flow/end.vue';
    import FlowComplete from '~/components/flow/complete.vue';

    export default {
        components: {
            FlowIntro,
            FlowTopics,
            FlowStart,
            FlowEnd,
            FlowComplete,
        },
        data() {
            return {
                step: 1,
                isWebpSupported: null,
            };
        },
        methods: {
            updateStep(to) {
                this.step = to;
            },
        },
        beforeMount() {
            const webp = new Image();
            webp.onload = () => { this.isWebpSupported = 'webp'; };
            webp.onerror = () => { this.isWebpSupported = 'no-webp'; };
            webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
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
        padding: 0 0 24px;
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

    .Page-start {
        background: no-repeat center 45%;
        background-size: cover;
        max-height: 360px;
    }

    .no-webp .Page-start {
        background-image: url('/images/intro.jpg');
    }

    .webp .Page-start {
        background-image: url('/images/intro.webp');
    }

    @media (min-width: 768px) {
        .FlowProcess {
            margin: 0 auto;
            width: 50%;
        }
    }

</style>
