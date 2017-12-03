
<template>

    <transition name="fade">
        <div class="FlowComplete u-center" v-if="profile && active">
            <avatar class="FlowComplete-avatar" :source="image" :class="[{ 'is-active': active }]" />
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
        <div v-else class="FlowComplete-waiting">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </transition>

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
        transform: scale(0);
        transition: all 1s $easing;

        &.is-active {
            opacity: 1;
            transform: scale(1);
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

    @media (min-width: 768px) {
        .FlowComplete {
            padding-top: 170px;
        }

        .FlowComplete-avatar {
            display: none;
        }

        .FlowComplete-waiting {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .spinner {
            margin: 100px auto 0;
            width: 70px;
            text-align: center;

            & > div {
                animation: waiting 1.4s infinite ease-in-out both;
                background-color: color($grey, 300);
                border-radius: 100%;
                display: inline-block;
                height: 18px;
                width: 18px;
            }
        }

        .spinner .bounce1 {
            animation-delay: -.32s;
        }

        .spinner .bounce2 {
            animation-delay: -.16s;
        }

        @keyframes waiting {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }
    }

</style>
