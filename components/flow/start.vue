
<template>

    <div class="FlowStart">
        <avatar :source="image" />
        <div class="u-layout-auto-vertical">
            <div class="u-flex">
                <smart-input type="text"
                    v-model="firstName"
                    label="First Name"
                    @input="clearErrorMessagesOnInput"
                    :validated="isValid.firstName"
                />
            </div>
            <div class="u-div"></div>
            <div class="u-flex">
                <smart-input type="text"
                    v-model="lastName"
                    label="Last Name"
                    @input="clearErrorMessagesOnInput"
                    :validated="isValid.lastName"
                />
            </div>
        </div>
        <smart-input type="text"
            v-model="githubUsername"
            label="Github Username"
            @input="validateGithubUsername"
            :validated="isValid.githubUsername"
        />
    </div>

</template>
<script>

    import { mapActions } from 'vuex';
    import * as validate from '~/assets/scripts/validate';
    import Avatar from '~/components/avatar.vue';
    import SmartInput from '~/components/utils/smart-input.vue';

    export default {
        name: 'flow-start',
        components: {
            Avatar,
            SmartInput,
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
                    firstName: validate.name(this.firstName),
                    lastName: validate.name(this.lastName),
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
    
    .u-div {
        width: 3px;
    }

</style>
