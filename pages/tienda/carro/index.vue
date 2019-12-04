<template lang="pug">
    
    div.say-background-primary(uk-height-viewport)
        Navigator
        .uk-container   
            section.uk-section              
                h1.styled.heading Carro de Compras
                Cart.uk-margin-medium-top
</template>

<script>
import Navigator from '~/components/MainUI/Navigator'
import Cart from '~/components/Ecommerce/Cart/index'
export default {

    components: {
        Navigator,
        Cart
    },
    mounted(){
            if(UIkit.modal('#result-modal-error'))
                UIkit.modal('#result-modal-error').hide()

    }

}
</script>

<style lang="scss" scoped>

</style>