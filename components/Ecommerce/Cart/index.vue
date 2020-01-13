<template lang="pug">

    div
        div(uk-grid)
            div(class="uk-width-3-5@m")
                ul(v-if="selectedProducts.length > 0")
                    li(class="uk-flex uk-flex-middle product-container", uk-grid, v-for="item in selectedProducts")
                        div(class="uk-width-1-5@m")
                            img(:src="$axios.defaults.baseURL + item.cover.url", v-if="item.cover")
                        div(class="uk-width-3-5@m")
                            div.product-content
                                div.uk-margin
                                    h4.uk-margin-remove {{ item.nombre }}
                                    p {{ item.descripcion }}

                                div.uk-margin.uk-flex.uk-flex-middle.controllers-quantity                                  
                                    button.uk-button(@click="removeFromCart(item)", uk-icon="icon: minus; ratio: 0.75;")
                                    span {{ item.quantity }}
                                    button.uk-button(@click="addToCart(item)", uk-icon="icon: plus; ratio: 0.75;")        
                        div(class="uk-width-1-5@m")
                            div
                h3(v-else) Oh oh! No tienes ningún producto en tu canasta de compras.
                    span.uk-margin-small-left 
                        nuxt-link.buy-link(to="/tienda") Ir a Comprar 🍆
            div(class="uk-width-2-5@m")
                div(v-if="selectedProducts.length > 0")
                    .total-to-pay-container.uk-text-center(class="uk-margin-auto uk-width-medium@m")
                        .uk-margin-small
                            h2.title Total a Pagar
                        .uk-margin-small
                            h3.price {{ price | currency }}
                        .uk-margin-small
                            input.uk-input.uk-form-large.usermail-input(type="email", v-model="userMail", placeholder="Ingrese su email")
                        .uk-margin-small(v-if="userMail")
                            a.uk-button.proceed-to-pay(href="#", @click="createOrder") 
                                span.uk-margin-small-right(uk-spinner, v-if="isProcessingSale") Procesando Compra 
                                span(v-else)  Pagar por Webpay
                        hr.uk-hr
                        .coupon-container
                            h5 Cupón de Descuento
                            .uk-margin
                                input.uk-form-large.coupon-input.uk-input(type="text", v-model="couponDiscount", placeholder="CMEHJ3A")
                            .uk-margin(v-if="couponDiscount")
                                a.uk-text-link.apply-coupon Aplicar Cupón
    
</template>

<script>  
import { mapMutations } from 'vuex'


export default {  
    data(){
        return{
            couponDiscount: '',
            baseUrl: 'https://sexpositive.cl/api',
            userMail: '',
            isProcessingSale: false
        }
    },
    methods:{
        ...mapMutations({
        removeFromCart: 'cart/remove',
        addToCart: 'cart/add',
        }),
        generateOrderContent(){
            var order = this.selectedProducts
            var orderContent = ''
            for(var i=0; i<order.length; i++){
                orderContent += 'ID: ' + order[i].id + '\n'
                orderContent += 'Nombre: ' + order[i].nombre + '\n'
                orderContent += 'Precio: ' + order[i].precio + '\n'
                orderContent += 'Cantidad: ' + order[i].quantity + '\n'
                orderContent += '\n'
            }
            return orderContent
        },
        createOrder(){
            this.isProcessingSale = true
            this.$axios.post('/ventas',{
                articulos: this.generateOrderContent(),
                estado: 'generada'
            })
            .then(response => {
                this.payTotal(response.data.id)
            })
            .catch(error => {
                console.log(error)
            })
        },
        payTotal(orderId){
            
            this.$axios.post(this.baseUrl + '/flow/create_order',{
                price: this.price,
                email: this.userMail,
                id: orderId
            })
            .then(response => {
                this.$store.commit('localStorage/setSaleToken', response.data.token)
                window.location.replace(response.data.redirect);
            })
            .catch(response => {
                this.isProcessingSale = false
            })
           
        }
    },
    computed: {
        selectedProducts() {
        return this.$store.getters['cart/items']
        },
        price() {
        return this.$store.getters['cart/price']
        },
        numberOfItems() {
        return this.$store.getters['cart/numberOfItems']
        }
    }
}
</script> 

<style lang="scss" scoped>

    .buy-link{
        color: $say-mainaccent-color;
    }

    .total-to-pay-container{
        background-color: $say-base-color;
        padding: 30px;
        border-radius: $say-border-radius;
        .title{
            color: $say-basedark-color;
        }
        .price{
            color: $say-mainaccent-color;
        }

        .proceed-to-pay{
            background-color: $say-mainaccent-color; 
            color: $say-default-color;
            padding: 5px 20px;
            text-transform: none;
            font-family: $say-p-base-font;
            border-radius: 180px;
        }
        .coupon-container{
            h5{
                color: $say-dark-text-color;
            }
            .coupon-input{
                border-radius: $say-border-radius;
                font-family: $say-base-font;
                &:focus{
                    border-color: transparent;
                }
            }

            .apply-coupon{
                font-family: $say-p-base-font;
                color: $say-dark-text-color;
                text-decoration: underline;
            }
        }
    }

    .usermail-input{
        border-radius: $say-border-radius;
                font-family: $say-p-base-font;
                background-color: $say-base-color;
                border: 1px solid $say-base-hover-color;
                font-size: .9rem;
                &:focus{
                    /*border-color: transparent;*/
                }
    }

    .product-container{
        border-radius: $say-border-radius;
        background-color: #250E36;
        padding: 20px;
        .product-content{
            p{
                color: $say-text-color;
                font-size: 0.85rem;
                line-height: 1.4rem;
                letter-spacing: .02rem;
                margin: 0;
            }
            .controllers-quantity{
                button{
                    color: $say-base-color;
                    background: transparent;
                    transition: all 200ms ease-in-out;
                    &:hover{
                        color: $say-mainaccent-color;
                    }
                }

                span{
                    background-color: $say-base-color;
                    padding: 3px 25px;
                    border-radius: $say-border-radius;
                    color: $say-dark-text-color;
                    font-family: $say-p-base-font;
                }
            }
        }
    }

</style>