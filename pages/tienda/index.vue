<template lang="pug">
    
    div.say-background-primary(uk-height-viewport)
        Navigator
        .uk-container   
            section.uk-section              
                h1.styled.heading Nuestra Tienda  
                section(v-if="configuracions[0]")
                    img.uk-width-1-1(:src="$axios.defaults.baseURL + configuracions[0].banner_tienda.url", v-if="configuracions[0].banner_tienda" alt="alt")
                div(uk-grid,uk-scrollspy="cls: uk-animation-slide-bottom-small; target: >div; delay: 100; repeat: true", class="uk-grid-small uk-grid-match uk-grid uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2")
                    ProductCard(v-for="(product, index)  in products", :product="product", :key="product.id", @productAddedToCart="onProductAddedToCart")
        transition(name="fade")
                div#modal-product-added-to-cart(v-if="selectedProduct")
                    .container            
                        div
                            div(class="uk-width-medium@m uk-margin-auto")
                                h3.title.uk-text-center Producto Agregado a Tu Carro de Compras
                            div(class="uk-width-medium@m uk-margin-auto").uk-margin-top
                                div(uk-grid, class="uk-child-width-1-2 uk-flex uk-flex-middle")
                                    div(v-if="selectedProduct.cover")
                                        .image-container
                                            img(:src="$axios.defaults.baseURL + selectedProduct.cover.url")
                                    div    
                                        div
                                            div
                                                h4.name {{ selectedProduct.nombre }}
                                            div
                                                h5.price {{ selectedProduct.precio | currency }}
                            .uk-margin-top.uk-text-center
                                button.keep-buying-button.uk-button(@click="keepBuying") Seguir Comprando
                                nuxt-link.uk-margin.checkout-button.uk-button(to="/tienda/carro") Ir a Pagar
                

</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
import ProductCard from '~/components/Ecommerce/Product/Card'
import { mapMutations } from 'vuex'  

//gql
import ProductsQuery from '~/apollo/queries/tienda/products.gql'
import ConfiguracionQuery from '~/apollo/queries/configuracion/configuracion.gql'

export default {
    components: {
        Navigator,
        ProductCard
    },
    data(){
        return{
            products: [],
             configuracions: [],
            selectedProduct: null
        }
    },
    apollo: {
        products: {
            prefetch: true,
            query: ProductsQuery
        },
        configuracions:{
            prefetch: true,
            query: ConfiguracionQuery
        }
    },
     methods:{
        keepBuying(){
            this.selectedProduct = null
        },
         //Trigger each time a new product is added to cart ($emit event from Card)
        onProductAddedToCart(product){
            this.selectedProduct = product
            //UIkit.modal('#modal-product-added-to-cart').show()
        },
        ...mapMutations({
            
            removeFromCart: 'cart/remove'
        }),
  }
}
</script>

<style lang="scss">

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    #modal-product-added-to-cart{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba($say-basedark-color, 0.9);
            .container{
                position: absolute;
                transform: translate(-50%, -50%);
                width: 450px;
                max-width: calc(100% - 0.01px) !important;
                top: 50%;
                left: 50%;
                padding: 30px;
                background-color: $say-base-color;
                border-radius: $say-border-radius;
                .title{
                    color: $say-basedark-color;
                }
                .image-container{
                    background: $say-default-color;
                    padding: 20px;
                    border-radius: $say-border-radius;
                }

                .name{
                    color: $say-basedark-color;
                }

                .price{
                    color: $say-mainaccent-color;
                }
                .uk-button{
                    color: $say-default-color;
                    font-family: $say-p-base-font;
                    text-transform: none;
                    border-radius: 120px;
                    padding: 5px 20px;
                    &.keep-buying-button{
                        background-color: $say-mainaccent-color;
                        
                    }
                    &.checkout-button{
                        background-color: transparent;
                        border: 1px solid $say-mainaccent-color;
                        color: $say-mainaccent-color;
                        margin-left: 10px;
                    }
                }
            }
    }

    @media(max-width: 640px){
        #modal-product-added-to-cart{
            .container{
                width: 250px;
            }
        }
    }

</style>