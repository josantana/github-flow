
<template>

    <div class="FlowEnd">
        <smart-input type="email"
            v-model="email"
            label="E-mail"
            @input="clearErrorMessagesOnInput"
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
        methods: {
            clearErrorMessagesOnInput() {
                this.error = null;
            },
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/variables';
    
    // ...

</style>
