
<template>

    <div class="FlowStart">
        <avatar :source="image" />
        <smart-input type="text"
            v-model="githubUsername"
            label="Github Username"
            @input="validateGithubUsername"
            :validated="isValid.githubUsername"
        />
        <button class="u-primaryButton" @click="nextStep">Confirm</button>
        <error-tooltip :message="error" @dismissError="clearErrorMessagesOnInput" />
    </div>

</template>
<script>

    import { mapActions } from 'vuex';
    import Avatar from '~/components/avatar.vue';
    import SmartInput from '~/components/utils/smart-input.vue';
    import ErrorTooltip from '~/components/utils/error-tooltip.vue';

    export default {
        name: 'flow-start',
        components: {
            Avatar,
            SmartInput,
            ErrorTooltip,
        },
        data() {
            return {
                delay: 500,
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

    @import '~assets/scss/variables';

    // ...

</style>
