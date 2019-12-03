<template lang="pug">
    
    div.say-background-primary
        Navigator
        .uk-container   
            section.uk-section              
                h1.styled.heading Nuestra Tienda  
                section
                    img.uk-width-1-1(src="/imgs/ecommerce/banner.png", alt="alt")
                div(uk-grid, class="uk-grid-small uk-grid uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2")
                    ProductCard(v-for="(product, index)  in productos", :product="product", :key="product.id")

</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
import ProductCard from '~/components/Ecommerce/Product/Card'


//gql
import ProductosQuery from '~/apollo/queries/tienda/products.gql'

export default {
    components: {
        Navigator,
        ProductCard
    },
    data(){
        return{
            productos: []
        }
    },
    apollo: {
        productos: {
            prefetch: true,
            query: ProductosQuery
        }
    }
}
</script>