
<template>

    <div class="FlowComplete u-center" v-if="profile">
        <avatar :source="image" :class="[{ 'is-active': active }]" />
        <div class="FlowComplete-location u-center u-layout-horizontal">
            <div class="u-flex"></div>
            <icon v-if="location" :glyph="icons.location" width="24px" height="24px" />
            <span>{{ location }}</span>
            <div class="u-flex"></div>
        </div>
        <p>Thanks for your application,<br><strong>{{ fullname }}</strong>!</p>
        <p class="FlowComplete-text">You'll receive the contact of our HR team in a few days at <a :href="profile.email">{{ profile.email }}</a>.</p>
        <p>Stay tuned!</p>
        <div class="FlowProcess-actions u-layout-horizontal">
            <div class="u-flex">
                <button class="u-secondaryButton" @click="prevStep">Back</button>
            </div>
        </div>
    </div>

</template>
<script>

    import Icon from '~/components/utils/icon.vue';
    import Avatar from '~/components/avatar.vue';
    import locationPinIcon from '~/static/vectors/icon-location-pin.svg';

    export default {
        name: 'flow-complete',
        props: ['active'],
        components: {
            Icon,
            Avatar,
            locationPinIcon,
        },
        data() {
            return {
                icons: {
                    location: locationPinIcon,
                },
            };
        },
        computed: {
            profile() {
                return this.$store.state.profile;
            },
            fullname() {
                return this.profile && `${this.profile.firstName} ${this.profile.lastName}`;
            },
            github() {
                return this.profile && this.profile.github;
            },
            image() {
                return this.github && this.github.avatar_url;
            },
            location() {
                return this.github && this.github.location;
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

    @import '~assets/scss/colors';
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

    .FlowComplete-location {
        color: color($grey, 400);
        fill: color($grey, 400);
        line-height: 26px;
        margin: -12px 0 24px;

        span {
            display: inline-block;
            padding: 0 3px;
        }
    }

    .FlowComplete-text {
        padding: 12px 0;
    }

</style>
