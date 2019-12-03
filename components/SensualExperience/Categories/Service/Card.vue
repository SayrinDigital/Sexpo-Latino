<template lang="pug">

    div
        nuxt-link(tag="div", :to="'/sensual-experience/categoria/servicio/' + 1").uk-inline.uk-position-relative.category-card.uk-width-1-1
            img.uk-width-1-1.uk-background-cover(:src="service.cover")
            .uk-position-cover.overlay
            div.uk-position-bottom-left
                div.uk-padding
                    h3.title Lucía



</template>

<script>
export default {
    props: ['service']
}
</script>

<style lang="scss" scoped>

    .category-card{
        border-radius: $say-border-radius;
        overflow: hidden;
        .title{
            display: block;
        }
        .overlay{
            background: rgba(0,0,0,0.4);
        }
    }

</style>
