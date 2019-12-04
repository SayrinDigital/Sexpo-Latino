<template lang="pug">
    div
        Navigator.say-background-primary 
        section.uk-section.say-background-primary  
            .uk-container.uk-container-small            
                h1.styled.heading ¿Quiénes Somos?
        section.uk-section-small.uk-background-default(v-if="configuracions[0]")
            .uk-container.uk-container-small
                div.content(v-if="configuracions[0].quienes_somos",v-html="$md.render(configuracions[0].quienes_somos)")
</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
import ConfiguracionQuery from '~/apollo/queries/configuracion/configuracion.gql'

export default {
    components: {
        Navigator,
    },
    data(){
        return{
            configuracions: []
        }
    },
    apollo: {
        configuracions:{
            prefetch: true,
            query: ConfiguracionQuery
        }
    }
}
</script>

<style lang="scss">
    .content{
            p{
            line-height: 2rem;
            letter-spacing: 0.05rem;
            font-size: 1.1rem;
            color: $say-dark-text-color;
            margin-bottom: 3rem;
        }
        @media(max-width: 640px){
            p{
                font-size: .98rem;
                line-height: 1.8rem;
            }
        }

    h2,h3,h4,h5,h6{
        color: $say-basedark-color;
        &:after{
            content: '';
            position: absolute;
            width: 50%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: $say-mainaccent-color;
        }
    }
    }
</style>