
<template>

    <div class="CheckInput u-relative">
        <input
            ref="input"
            class="CheckInput-input"
            type="checkbox"
            :id="id"
            :name="name"
            :value="value"
            :disabled="disabled"
            @change="changeValue"
        />
        <label :for="id" class="CheckInput-label">
            <transition name="fade-fast">
                <icon v-if="value" class="CheckInput-icon u-absolute" :glyph="icons.check" width="32px" height="32px" />
            </transition>
            <slot></slot>
        </label>
    </div>

</template>
<script>

    import Icon from '~/components/utils/icon';
    import checkIcon from '~/static/vectors/icon-check.svg';

    export default {
        name: 'check-input',
        props: ['checked', 'disabled', 'id', 'name', 'value'],
        components: {
            Icon,
        },
        data() {
            return {
                icons: {
                    check: checkIcon,
                },
            };
        },
        methods: {
            changeValue() {
                this.$emit('input', !this.value);
            },
        },
        beforeMount() {
            if (this.checked && !this.value) this.value = true;
        },
    };

</script>
<style lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .CheckInput {
        position: relative;
    }

    .CheckInput-input {
        height: 0;
        opacity: 0;
        text-indent: -9999px;
        width: 0;

        & + label::before {
            background: color($white);
            border: 1px solid color($grey, 200);
            border-radius: 3px;
            content: '';
            height: 32px;
            left: 0;
            position: absolute;
            top: 0;
            width: 32px;
        }

        &:disabled + label {
            &::before {
                border: 1px dashed color($grey, 300);
            }

            .CheckInput-icon {
                fill: color($grey, 200);
            }
        }
    }

    .CheckInput-label {
        line-height: 32px;
        padding-left: 42px;
    }

    .CheckInput-icon {
        left: 0;
        top: 0;
    }

    .CheckInput-icon {
        fill: $secondary-color;
    }

</style>
