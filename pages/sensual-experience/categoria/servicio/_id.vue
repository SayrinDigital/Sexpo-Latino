<template lang="pug">

    div.say-background-primary
        Navigator
        .say-main-container(class="uk-child-width-1-2@m uk-grid", uk-grid)
            client-only  
                div.uk-background-cover.main-cover(uk-sticky="bottom: true; media: @m;", uk-img, data-src="https://images.unsplash.com/photo-1566113519555-06cab56beed8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
            div
                .uk-container
                    .uk-section.uk-section-large
                        div.content-service(v-if="servicio.contenido", v-html="$md.render(servicio.contenido)")

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

    .main-cover{
        height: 100vh;
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