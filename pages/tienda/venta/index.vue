<template lang="pug">

    div
        .result-screen
        #result-modal-success.uk-flex-top(uk-modal="esc-close: false; bg-close: false;")
            .uk-modal-dialog.uk-margin-auto-vertical
                div
                    .uk-text-center.uk-margin
                        h2.uk-margin-remove Gracias por tu compra!
                        p(class="uk-width-medium@m uk-margin-auto uk-margin-remove-top") Procesamos tu pago y nos comunicaremos contigo a la brevedad.

                    .uk-margin.uk-text-center
                        nuxt-link.home-link(to="/") #[span.uk-margin-small-right(uk-icon="icon: chevron-left; ratio: 0.8;")] Volver al Inicio
        #result-modal-error.uk-flex-top(uk-modal="esc-close: false; bg-close: false;")
            .uk-modal-dialog.uk-margin-auto-vertical
                div
                    .uk-text-center.uk-margin
                        h2.uk-margin-remove Oh Oh, hubo un error con tu compra!
                        p(class="uk-width-medium@m uk-margin-auto uk-margin-remove-top") Lo mejor será intentar nuevamente.

                    .uk-margin.uk-text-center
                        nuxt-link.home-link(to="/tienda/carro") #[span.uk-margin-small-right(uk-icon="icon: chevron-left; ratio: 0.8;")] Volver a la Tienda
            

</template>

<script>

import { mapMutations } from 'vuex'

export default {
    data(){
        return{
            baseUrl: 'http://localhost:3100/api',
            orderResponse: null
        }
    },
    computed: {
      saleToken(){
        return this.$store.state.localStorage.saleToken
      }
    },
    mounted(){
        this.checkOrder()
    },
    methods: {
        checkOrder(){
            this.$axios.post(this.baseUrl + '/flow/result',{
                token: this.saleToken
            })
            .then(response => {
                this.orderResponse = response.data
                switch(this.orderResponse.response.status){
                    case 2:
                        UIkit.modal('#result-modal-success').show()
                        this.$store.commit('cart/emptyList')
                    break;
                    default:
                        UIkit.modal('#result-modal-error').show()
                }
                
            })
            .catch(error => {

            })
        }
    }
}
</script>

<style lang="scss" scoped>

    .result-screen{
        min-height: 100vh;
        background-color: $say-basedark-color;
    }

    #result-modal-success, #result-modal-error{
        .uk-modal-dialog{
            background-color: $say-basedark-color;
            padding: 40px 20px;
            border-radius: $say-border-radius;
            p{
                color: $say-text-color;
            }
            .home-link{
                font-family: $say-p-base-font;
                color: $say-mainaccent-color;
                &:hover{
                    text-decoration: none;
                }
            }
        }
    }

</style>