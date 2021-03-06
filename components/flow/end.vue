
<template>

    <div class="FlowEnd u-relative">
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
        <transition name="fade">
            <div v-if="active" class="FlowProcess-actions u-layout-horizontal">
                <div class="u-flex">
                    <button class="u-secondaryButton" @click="updateStep(1)">Back</button>
                </div>
                <div class="u-flex">
                    <button class="u-primaryButton" @click="updateStep(3)">Complete</button>
                    <error-tooltip :message="error" @dismissError="clearErrorMessagesOnInput" />
                </div>
            </div>
            <div v-else class="FlowProcess-actionsEmptyState"></div>
        </transition>
        <transition name="fade">
            <div v-if="!active" class="FlowEnd-overlay u-absolute u-fit"></div>
        </transition>
    </div>

</template>
<script>

    import { mapActions } from 'vuex';
    import * as validate from '~/assets/scripts/validate';
    import CheckInput from '~/components/utils/check-input.vue';
    import SmartInput from '~/components/utils/smart-input.vue';
    import ErrorTooltip from '~/components/utils/error-tooltip.vue';

    export default {
        name: 'flow-end',
        props: ['active'],
        components: {
            CheckInput,
            SmartInput,
            ErrorTooltip,
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
                    return this.firstName === '' ? '' : (this.firstName || name);
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
                    return this.lastName === '' ? '' : (this.lastName || name);
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
            async updateStep(step) {
                if (step > 2) {
                    if (!this.isValid.firstName) {
                        this.error = 'What\'s your name?';
                        return false;
                    }
                    if (!this.isValid.lastName) {
                        this.error = 'Your last name, please.';
                        return false;
                    }
                    if (!this.isValid.email) {
                        this.error = 'Invalid email.';
                        return false;
                    }
                    if (!this.agreement) {
                        this.error = 'Do you agree to our terms?';
                        return false;
                    }
                    await this.updateProfile({
                        agreement: this.agreement,
                        email: this.email,
                        firstName: this.firstNameVal,
                        lastName: this.lastNameVal,
                    });
                }
                return this.$emit('updateStep', step);
            },
            ...mapActions([
                'updateProfile',
            ]),
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/colors';
    @import '~assets/scss/variables';

    .u-div {
        width: 4px;
    }

    @media (min-width: 768px) {
        .FlowEnd {
            padding-top: 170px;
        }

        .FlowProcess-actionsEmptyState {
            height: 60px;
        }

        .FlowEnd-overlay {
            background: color($white);
            opacity: .75;
        }
    }

</style>
