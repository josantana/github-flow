
<template>

    <div class="FlowStart">
        <smart-input type="text"
            v-model="firstName"
            label="First Name"
            @input="clearErrorMessagesOnInput"
            :validated="isValid.firstName"
        />
        <smart-input type="text"
            v-model="lastName"
            label="Last Name"
            @input="clearErrorMessagesOnInput"
            :validated="isValid.lastName"
        />
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
    import SmartInput from '~/components/utils/smart-input.vue';

    export default {
        name: 'flow-start',
        components: {
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
                this.debounce();
            },
            ...mapActions([
                'getGithubData',
                'updateProfile',
            ]),
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/variables';
    
    // ...

</style>
