
<template>

    <svg class="Icon" :viewBox="glyph.viewBox" :width="width" :height="height">
        <use :xlink:href="`#${glyph.id}`" />
    </svg>

</template>
<script>

    export default {
        name: 'icon',
        props: ['glyph', 'width', 'height'],
    };

</script>
<style scoped>

    .Icon {
        background-color: transparent;
        background-repeat: no-repeat;
        display: inline-block;
    }

</style>
