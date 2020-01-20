<template lang="pug">
    div
        .product-card.uk-text-center.uk-position-relative
            
            div.uk-position-relative.uk-visible-toggle(uk-slideshow="autoplay: true; autoplay-interval: 1500;")
                ul.uk-slideshow-items
                    li( v-if="product.cover")
                        img(:src="$axios.defaults.baseURL + product.cover.url", width="90", uk-img)
                    li(v-for="photo in product.fotos", v-if="product.fotos")
                        img(:src="$axios.defaults.baseURL + photo.imagen.url", v-if="photo.imagen", width="90", uk-img)
            .body
                h3.product-name {{ product.nombre }}
                p.content {{ product.descripcion }}
                .uk-margin
                    h4.price {{ product.precio | currency  }}
            .add-to-cart.uk-position-top-right
                a.uk-icon-button(uk-icon="icon: plus-circle; ratio: 0.8;", href="#", @click="emitToCart(product)")

</template>

<script>

import { mapMutations } from 'vuex' 
export default {

props: ['product'],
methods:{
    ...mapMutations({
      removeFromCart: 'cart/remove',
      addToCart: 'cart/add',
    }),
    emitToCart(product){
        this.$emit('productAddedToCart', product)
        this.addToCart(product)
    }
}
    
}
</script>

<style lang="scss" scoped>

    .product-card{
        background-color: #250E36;
        border-radius: $say-border-radius;
        padding: 25px 10px;
        .body{
            margin-top: 20px;
            .product-name{
                margin: 0;
            }
            .content{
                color: $say-text-color;
                font-size: .85rem;
                margin: 0;
            }
            .price{
                color: $say-mainaccent-color;
            }
        }
        .add-to-cart{
            padding: 10px;
            a{
                background-color: $say-mainaccent-color;
                color: $say-default-color;
                &:hover{
                    background-color: rgba($say-mainaccent-color, 0.6);
                }
            }
        }
    }

    @media(max-width: 640px){
        .product-card{
            padding: 10px;
            .body{
                .product-name{
                    font-size: 1rem;
                }
                .content{
                    font-size: .8rem;
                }
                .price{
                    
                }
            }
        }
    }

</style>