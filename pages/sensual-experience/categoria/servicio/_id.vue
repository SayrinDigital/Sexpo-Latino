<template lang="pug">

    div.say-background-primary
        Navigator
        .say-main-container(v-if="servicio", class="uk-child-width-1-2@m uk-grid", uk-grid)
            div
                client-only 
                    .uk-position-relative.uk-visible-toggle(uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 1500;")  
                        ul.uk-slideshow-items.main-cover(uk-height-viewport, uk-sticky="bottom: true; media: @m;")
                            li(v-for="fotografia in servicio.fotografias")
                                img(:src="$axios.defaults.baseURL + fotografia.imagen.url", uk-cover)

            div
                .uk-container(v-if="servicio.contenido")
                    .uk-section.uk-section-large
                        div.content-service(v-if="servicio.contenido",v-html="$md.render(servicio.contenido)")

</template>

<script>
import Navigator from '~/components/MainUI/Navigator'

//GQL
import Service from '~/apollo/queries/sensualexperience/services/service.gql'

export default {
    components: {
        Navigator
    },
    data(){
        return{
            servicio: null
        }
    },
    apollo: {
        servicio: {
            prefetch: true,
            query: Service,
            variables () {
             return { id: this.$route.params.id }
            }
        }
    }
}
</script>

<style lang="scss">

    .slider-action{
        background-color: $say-basedark-color;
        color: $say-mainaccent-color;
        padding: 20px;
        &:focus{
            color: rgba($say-base-color, 0.5);
        }
    }

    .main-cover{
        z-index: 0;
    }

    .content-service{
        p{
            color: $say-text-color;
            line-height: 1.65rem;
            letter-spacing: 0.05rem;
            font-size: 1rem;
        }
        
        img{
            width: 100%;
        }

        ul{
            li{
                color: $say-text-color;
                line-height: 1.65rem;
                letter-spacing: 0.05rem;
                font-size: 1rem;
                font-family: $say-p-base-font;
            }
        }
        
    }

</style>