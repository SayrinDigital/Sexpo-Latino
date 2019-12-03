<template lang="pug">

    div
        nuxt-link(tag="div", :to="'/sensual-experience/categoria/' + 1").uk-inline.uk-position-relative.category-card.uk-width-1-1
            img.uk-width-1-1.uk-background-cover(:src="category.cover")
            .uk-position-cover.overlay
            div.uk-position-center-left
                div.uk-padding
                    h2.title SCORTS PROFESIONALES
                    h3.subtitle Slogan del Servicio



</template>

<script>
export default {
    props: ['category']
}
</script>

<style lang="scss" scoped>

    .category-card{
        border-radius: $say-border-radius;
        overflow: hidden;
        .title, .subtitle{
            display: block;
        }
        .subtitle{
            opacity: 0.65;
        }
        .overlay{
            background: rgba(0,0,0,0.4);
        }
    }

</style>
