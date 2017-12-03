
<template>

    <div class="FlowStart u-center" v-if="profile">
        <avatar :source="image" :class="[{ 'is-active': active }]" />
        <p>Thanks for your application,<br><strong>{{ fullname }}</strong>!</p>
        <p class="FlowStart-text">You'll receive the contact of our HR team in a few days at <a :href="profile.email">{{ profile.email }}</a>.</p>
        <p>Stay tunned!</p>
        <div class="FlowProcess-actions u-layout-horizontal">
            <div class="u-flex">
                <button class="u-secondaryButton" @click="prevStep">Back</button>
            </div>
        </div>
    </div>

</template>
<script>

    import Avatar from '~/components/avatar.vue';

    export default {
        name: 'flow-complete',
        props: ['active'],
        components: {
            Avatar,
        },
        computed: {
            profile() {
                return this.$store.state.profile;
            },
            fullname() {
                return this.profile && `${this.profile.firstName} ${this.profile.lastName}`;
            },
            image() {
                return this.profile && this.profile.github && this.profile.github.avatar_url;
            },
        },
        methods: {
            prevStep() {
                return this.$emit('updateStep', 2);
            },
        },
    };

</script>
<style scoped lang="scss">

    @import '~assets/scss/variables';

    .Avatar {
        opacity: 0;
        transform: translateY(-128px);
        transition: all 1s $easing;

        &.is-active {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .FlowStart-text {
        padding: 12px 0;
    }

</style>
