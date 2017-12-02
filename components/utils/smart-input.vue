
<template>

    <div class="SmartInput">
        <label :class="['SmartInput-label', 'u-absolute', { 'is-focused' : dirty, 'is-validated' : validated }]">
            {{ label }}
        </label>
        <transition name="fade-fast">
            <span v-if="placeholder && focused && !value" class="SmartInput-placeholder u-absolute">
                {{ placeholder }}
            </span>
        </transition>
        <masked-input v-if="mask"
            class="SmartInput-field"
            :type="type"
            v-model="maskedValue"
            :mask="mask"
            :guide="false"
            @focus="emit($event)"
            @blur="emit($event)"
            @keypress="emit($event)"
        />
        <input v-else
            ref="input"
            class="SmartInput-field"
            :type="type"
            :value="maskedValue"
            @input="updateValue"
            @focus="emit($event)"
            @blur="emit($event)"
            @keypress="emit($event)"
        />
        <transition name="fade">
            <icon v-if="validated" class="SmartInput-icon u-absolute" :glyph="icons.check" width="48px" height="48px" />
        </transition>
    </div>

</template>
<script>

    import MaskedInput from 'vue-text-mask';
    import icon from '~/components/utils/icon';
    import checkIcon from '~/static/vectors/icon-check.svg';

    export default {
        name: 'smart-input',
        props: ['filter', 'label', 'mask', 'placeholder', 'type', 'validated', 'value'], // Filter is valid for single input, only
        components: {
            icon,
            MaskedInput,
        },
        data() {
            return {
                focused: false,
                icons: {
                    check: checkIcon,
                },
            };
        },
        computed: {
            dirty() {
                return this.value || this.focused;
            },
            maskedValue: {
                get() {
                    return this.value;
                },
                set(newValue) {
                    this.$emit('input', newValue);
                },
            },
        },
        methods: {
            format(value) {
                if (this.filter === 'digits') return value.replace(/\d+/g, ''); // Remove digits
                return value;
            },
            updateValue() {
                this.$refs.input.value = this.format(this.$refs.input.value);
                this.$emit('input', this.$refs.input.value);
            },
            emit(event) {
                this.focused = event.type !== 'blur';
                this.$emit(event.type, event);
            },
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .SmartInput {
        padding-bottom: 3px;
        position: relative;
        width: 100%;
    }

    .SmartInput-label {
        color: color($grey, 400);
        font-size: 16px;
        left: 12px;
        top: 16px;
        transition: all .1s $easing;

        &.is-focused {
            color: color($grey, 500);
            font-size: 11px;
            left: 13px;
            top: 3px;
        }

        &.is-focused.is-validated {
            color: $secondary-color;
        }
    }

    .SmartInput-label,
    .SmartInput-placeholder {
        font-size: 16px;
        left: 12px;
        top: 16px;
    }

    .SmartInput-field {
        border: solid 1px color($grey, 200);
        border-radius: 3px;
        font-size: 16px;
        padding: 22px 36px 6px 12px;
        transition: border .1s $easing;
        width: 100%;

        &:focus {
            border-color: color($grey, 300);
        }
    }

    .SmartInput-placeholder {
        color: color($grey, 300);
        left: 13px;
        top: 23px;
    }

    .SmartInput-icon {
        fill: $secondary-color;
        right: 0;
        top: 0;
        transform: scale(.5) translate(12px, 12px);
    }

    .SmartInput-label,
    .SmartInput-placeholder,
    .SmartInput-icon {
        pointer-events: none;
    }

</style>
