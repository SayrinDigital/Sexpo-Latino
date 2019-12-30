<template lang="pug">

    div(v-if="category.imagen")
        nuxt-link(:to="'/sex-trainer/categoria/' + category.id").uk-display-inline-block.uk-inline.uk-position-relative.category-card.uk-width-1-1
            img.uk-width-1-1.uk-background-cover(:src="$axios.defaults.baseURL + category.imagen.url")
            .uk-position-cover.overlay
            .uk-position-center-left
                .uk-padding
                    h2.title {{ category.nombre }}
                    h3.subtitle {{ category.subtitulo }}



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
