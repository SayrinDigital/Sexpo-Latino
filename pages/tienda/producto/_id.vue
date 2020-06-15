<template lang="pug">

    div.say-background-primary
        Navigator
        .say-main-container(v-if="product", class="uk-child-width-1-2@m uk-grid", uk-grid)
            div
                div.uk-cover-container(uk-height-viewport, v-if="product.cover")
                    img(:src="$axios.defaults.baseURL + product.cover.url", uk-cover)
                //-client-only 
                    .uk-position-relative.uk-visible-toggle(uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 1500;")  
                        ul.uk-slideshow-items.main-cover(uk-height-viewport, uk-sticky="bottom: true; media: @m;")
                            li(v-for="fotografia in producto.fotografias")
                                img(:src="$axios.defaults.baseURL + fotografia.imagen.url", uk-cover)

            div
                .uk-container(v-if="product.descripcion")
                    .uk-section.uk-section-large
                        h1 {{ product.nombre }}
                        p.content-service.uk-light {{ product.descripcion }}
                        div(v-if="product.fotos && product.fotos.length > 0")
                            div(uk-slider)
                                ul.uk-slider-items(class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid")
                                    li(v-for="foto in product.fotos")
                                        img.say-border-radius(:src="$axios.defaults.baseURL + foto.imagen.url")

                        .descripcion-container.uk-margin
                            div(class="uk-grid uk-grid-small uk-flex uk-flex-middle", uk-grid)
                                div(class="uk-width-3-5@m")
                                    div
                                        div.content-service(v-if="product.descripcionVenta",v-html="$md.render(product.descripcionVenta)")
                                div(class="uk-width-2-5@m")
                                    div
                                        div
                                            h4.uk-display-block Cómpralo a solo
                                            h2.final-price {{ product.precio | currency }}
                        .uk-margin
                            button.uk-button.uk-width-1-1.uk-button.accept-button(@click="onProductAddedToCart(product)") Comprar este pack
                        //div.uk-text-center.uk-margin
                            a.contact-button(target="_blank" :href="'https://wa.me/'+producto.whatsapp+'text=Hola%20te%20vi%20en%20Sexpositive.%20Me%20gustaría%20consultar%20por%20tus%20productos.'") #[span(class="uk-icon uk-margin-small-right" uk-icon="phone")] {{ producto.whatsapp }}


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
import { mapMutations } from 'vuex'  
//GQL
import Product from '~/apollo/queries/tienda/producto/product.gql'

export default {
    components: {
        Navigator
    },
    data(){
        return{
            product: null,
            selectedProduct: null
        }
    },
    apollo: {
        product: {
            prefetch: true,
            query: Product,
            variables () {
                return { id: this.$route.params.id }
            }
        }
    },
    methods:{
        keepBuying(){
            this.selectedProduct = null
        },
         //Trigger each time a new product is added to cart ($emit event from Card)
        onProductAddedToCart(product){
            this.addToCart(product)
            this.selectedProduct = product
            //UIkit.modal('#modal-product-added-to-cart').show()
        },
        ...mapMutations({
            addToCart: 'cart/add',
            removeFromCart: 'cart/remove'
        }),
    }
}
</script>

<style lang="scss">

    .uk-button{
                color: $say-default-color;
                font-family: $say-p-base-font;
                text-transform: none;
                border-radius: 120px;
                padding: 5px 20px;
                &.accept-button{
                    background-color: $say-mainaccent-color;
                    
                }
                &.close-button{
                    background-color: transparent;
                    border: 1px solid $say-default-color;
                    margin-left: 10px;
                }
            }

    .final-price{
        font-size: 4rem;
    }

    .descripcion-container{
        background-color: $say-mainaccent-color;
        border-radius: $say-border-radius;
        padding: 1rem;
    }

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