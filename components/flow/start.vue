
<template>

    <div class="FlowStart">
        <div :class="['FlowStart-avatar', `is-step-${step}` ]">
            <avatar :source="image" />
        </div>
        <smart-input type="text"
            v-model="githubUsername"
            label="Github Username"
            @input="validateGithubUsername"
            :validated="isValid.githubUsername"
        />
        <transition name="fade">
            <div v-show="active" class="FlowProcess-actions">
                <button class="u-primaryButton" @click="nextStep">Confirm</button>
                <error-tooltip :message="error" @dismissError="clearErrorMessagesOnInput" />
            </div>
        </transition>
        <transition name="fade">
            <div v-if="!active" :class="['FlowStart-overlay', 'u-absolute', 'u-fit', `is-step-${step}`]"></div>
        </transition>
    </div>

</template>
<script>

    import { mapActions } from 'vuex';
    import Avatar from '~/components/avatar.vue';
    import SmartInput from '~/components/utils/smart-input.vue';
    import ErrorTooltip from '~/components/utils/error-tooltip.vue';

    export default {
        name: 'flow-start',
        props: ['active', 'step'],
        components: {
            Avatar,
            SmartInput,
            ErrorTooltip,
        },
        data() {
            return {
                delay: 750,
                error: null,
                firstName: null,
                githubUsername: null,
                lastName: null,
                timeout: null,
            };
        },
        computed: {
            image() {
                return this.$store.state.profile && this.$store.state.profile.github && this.$store.state.profile.github.avatar_url;
            },
            isValid() {
                return {
                    githubUsername: this.$store.state.profile && this.$store.state.profile.github,
                };
            },
        },
        methods: {
            clearErrorMessagesOnInput() {
                this.error = null;
            },
            debounce() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(async () => {
                    await this.getGithubData(this.githubUsername);
                }, this.delay);
            },
            validateGithubUsername() {
                this.clearErrorMessagesOnInput();
                this.resetGithubData();
                this.debounce();
            },
            nextStep() {
                if (!this.isValid.githubUsername) {
                    this.error = 'A Github account is mandatory.';
                    return false;
                }
                return this.$emit('updateStep', 2);
            },
            ...mapActions([
                'getGithubData',
                'resetGithubData',
                'updateProfile',
            ]),
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    @media (min-width: 768px) {
        .FlowStart-avatar {
            position: relative;
            transform: translateX(0);
            transition: transform .25s $easing;
            z-index: 3;

            &.is-step-2 {
                transform: translateX(120%);
            }

            &.is-step-3 {
                transform: translateX(240%);
            }
        }

        .FlowStart-overlay {
            background: color($white);
            opacity: .75;
            transition: right .25s $easing;

            &.is-step-2 {
                right: 50%;
            }

            &.is-step-3 {
                right: 33.3333%;
            }
        }
    }

</style>
