
<template>

    <transition name="fade">
        <div class="ErrorTooltip" v-if="message">
            <p class="ErrorTooltip-message">{{ message }}</p>
            <button class="ErrorTooltip-message--close" @click="closeError">
                <icon :glyph="icons.close" width="18px" height="18px"></icon>
            </button>
        </div>
    </transition>

</template>
<script>

    import Icon from '~/components/utils/icon';
    import closeIcon from '~/static/vectors/icon-close.svg';

    export default {
        name: 'error-tooltip',
        props: ['message'],
        components: {
            Icon,
        },
        data() {
            return {
                icons: {
                    close: closeIcon,
                },
            };
        },
        methods: {
            closeError() {
                this.$emit('dismissError');
            },
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/mixins';

    .ErrorTooltip {
        background: color($red, 500);
        border-radius: 3px;
        margin: 0px auto;
        padding: 5px;
        position: relative;
        top: 10px;
        width: 90%;

        &::after {
            border: solid transparent;
            border-bottom-color: color($red, 500);
            border-width: 0 8px 8px;
            content: '';
            display: block;
            height: 0;
            left: 0;
            margin: auto;
            position: absolute;
            transform: rotate(360deg);
            right: 0;
            top: -6px;
            width: 0;
        }
    }

    .ErrorTooltip-message {
        color: color($white);
        font-size: 12px;
        line-height: 14px;
        padding: 3px 26px 3px 12px;
        text-align: left;
    }

    .ErrorTooltip-message--close {
        fill: color($white);
        position: absolute;
        right: 5px;
        top: 5px;
    }

</style>
