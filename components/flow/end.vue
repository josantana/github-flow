
<template>

    <div class="FlowEnd">
        <div class="u-layout-auto-vertical">
            <div class="u-flex">
                <smart-input type="text"
                    v-model="firstNameVal"
                    label="First Name"
                    @input="clearErrorMessagesOnInput"
                    :validated="isValid.firstName"
                />
            </div>
            <div class="u-div"></div>
            <div class="u-flex">
                <smart-input type="text"
                    v-model="lastNameVal"
                    label="Last Name"
                    @input="clearErrorMessagesOnInput"
                    :validated="isValid.lastName"
                />
            </div>
        </div>
        <smart-input type="email"
            v-model="email"
            label="E-mail"
            @input="clearErrorMessagesOnInput"
            :validated="isValid.email"
        />
        <check-input id="agreement"
            v-model="agreement"
            @input="clearErrorMessagesOnInput"
        >
            I agree to the <a href="#">terms of service</a>
        </check-input>
    </div>

</template>
<script>

    import { mapActions } from 'vuex';
    import * as validate from '~/assets/scripts/validate';
    import CheckInput from '~/components/utils/check-input.vue';
    import SmartInput from '~/components/utils/smart-input.vue';

    export default {
        name: 'flow-end',
        components: {
            CheckInput,
            SmartInput,
        },
        data() {
            return {
                agreement: false,
                email: null,
                error: null,
                firstName: null,
                lastName: null,
            };
        },
        computed: {
            github() {
                return this.$store.state.profile && this.$store.state.profile.github;
            },
            firstNameVal: {
                get() {
                    let name = this.github && this.github.name;
                    name = name && name.split(' ')[0];
                    return this.firstName || name;
                },
                set(newVal) {
                    this.firstName = newVal;
                },
            },
            lastNameVal: {
                get() {
                    let name = this.github && this.github.name;
                    name = name && name.split(' ');
                    name = (name && name.length > 1 && name[name.length - 1]) || null;
                    return this.lastName || name;
                },
                set(newVal) {
                    this.lastName = newVal;
                },
            },
            isValid() {
                return {
                    firstName: validate.name(this.firstNameVal),
                    lastName: validate.name(this.lastNameVal),
                    email: validate.email(this.email),
                };
            },
        },
        methods: {
            clearErrorMessagesOnInput() {
                this.error = null;
            },
            ...mapActions([
                'updateProfile',
            ]),
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/variables';

    .u-div {
        width: 4px;
    }

</style>
