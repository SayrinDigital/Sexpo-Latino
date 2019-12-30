<template lang="pug">
    div
        Navigator.say-background-primary 
        section.uk-section.say-background-primary  
            .uk-container.uk-container-small            
                h1.styled.heading Aviso Legal
        section.uk-section-small.uk-background-default(v-if="configuracions[0]")
            .uk-container.uk-container-small
                div.content(v-if="configuracions[0].aviso_legal",v-html="$md.render(configuracions[0].aviso_legal)")
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
            p, li{
            line-height: 2rem;
            letter-spacing: 0.05rem;
            font-size: 1.1rem;
            color: $say-dark-text-color;
            margin-bottom: .5rem;
            text-align: justify;
        }
        @media(max-width: 640px){
            p, li{
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