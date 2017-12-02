
<template>

    <div class="FlowStart">
        <smart-input type="text"
            v-model="firstName"
            label="First Name"
            @input="clearErrorMessagesOnInput"
        />
        <smart-input type="text"
            v-model="lastName"
            label="Last Name"
            @input="clearErrorMessagesOnInput"
        />
        <smart-input type="text"
            v-model="githubUsername"
            label="Github Username"
            @input="clearErrorMessagesOnInput"
        />
    </div>

</template>
<script>

    import SmartInput from '~/components/smart-input.vue';

    export default {
        name: 'flow-start',
        components: {
            SmartInput,
        },
        data() {
            return {
                error: null,
                firstName: null,
                lastName: null,
                githubUsername: null,
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
