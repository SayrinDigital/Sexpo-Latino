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
                        div.uk-text-center.uk-margin
                            a.contact-button(target="_blank" :href="'https://wa.me/'+servicio.whatsapp+'text=Hola%20te%20vi%20en%20Sexpositive.%20Me%20gustaría%20consultar%20por%20tus%20servicios.'") #[span(class="uk-icon uk-margin-small-right" uk-icon="phone")] {{ servicio.whatsapp }}
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

    .contact-button{
        background-color: $say-mainaccent-color;
        border-radius: 170px;
        padding: 15px 20px;
        color: #fff;
        transition: all 200ms ease-in-out;
        &:hover{
            color: rgba(255,255,255,0.5);
        }
    }

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