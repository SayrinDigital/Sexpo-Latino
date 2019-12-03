<template lang="pug">
    
    div.say-background-primary
        Navigator
        .uk-container   
            section.uk-section              
                h1.styled.heading Sensual Experience
                div.uk-section.uk-section-small
                    h3 Categorías
                    div.uk-margin(class="uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid", uk-grid="masonry: true;")
                        CategoryCard(v-for="item in secategorias", :category="item", :key="item.slug")

</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
import CategoryCard from '~/components/SensualExperience/Categories/Card'
import SECategories from '~/apollo/queries/sensualexperience/categories.gql'

export default {
    components: {
        Navigator,
        CategoryCard
    },
    data(){
        return{
            secategorias: []
        }
    },
    apollo:{
      secategorias: {
        prefetch: true, 
        query: SECategories
      }
    },
}
</script>