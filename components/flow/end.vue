
<template>

    <div class="FlowEnd">
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
            };
        },
        computed: {
            isValid() {
                return {
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
    
    // ...

</style>
