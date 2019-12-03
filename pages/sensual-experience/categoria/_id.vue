<template lang="pug">

    div.say-background-primary
        Navigator
        .uk-container(v-if="secategoria")   
            section.uk-section              
                h1.styled.heading {{ secategoria.nombre }}
                div.uk-margin(class="uk-child-width-1-5@l uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid", uk-grid="masonry: true;")
                    ServiceCard(v-for="(item,index) in secategoria.servicios || []", :service="item", :key="index")

</template>

<script>
import Navigator from '~/components/MainUI/Navigator'
import ServiceCard from '~/components/SensualExperience/Categories/Service/Card'
import SECategory from '~/apollo/queries/sensualexperience/category.gql'

export default {
    components: {
        Navigator,
        ServiceCard
    },
    data(){
        return{
            secategoria: []
        }
    },
    apollo:{
        secategoria:{
            prefetch: true,
            query: SECategory,
            variables () {
             return { id: this.$route.params.id }
            }
        }
    }
}
</script>

