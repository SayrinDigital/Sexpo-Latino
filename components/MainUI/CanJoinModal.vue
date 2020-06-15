<template lang="pug">

    div
        div.uk-flex-top#modal-message-home(uk-modal="bg-close: false; esc-close: false;")
            .uk-modal-dialog.uk-modal-body.uk-margin-auto-vertical
                div.uk-text-center  
                    h2.main-title Advertencia
                    //h3(clasS="uk-width-medium@m uk-margin-auto") Para acceder a SexPositive debes cumplir con la mayoría de edad.

                div.uk-margin-medium-top
                    ul.uk-list.uk-list-circle
                        li Contenido explícito de gente real
                        li Todos los packs están publicados bajo consentimiento
                        li Debes ser mayor de edad para entrar, comprar y/o publicar tus fotos
                        li Cualquier acto ilícito será denunciado a las autoridades correspondientes
                        li Todos los packs fake son eliminados
                
                div.uk-text-center.uk-margin-medium-top
                    button.accept-button.uk-button(@click="aceppt") Entrar, Soy Mayor de Edad
                    a.uk-margin.close-button.uk-button(href="https://google.cl") Salir, No Me Interesa

</template>

<script>

export default {
    mounted(){
        var willOpen = this.$store.state.localStorage.willJoinModalOpen
        
        if(willOpen)
            UIkit.modal('#modal-message-home').show()
    },
    methods: {
        aceppt(){
            this.$store.commit('localStorage/toggle')
            UIkit.modal('#modal-message-home').hide()
        }
    }
}
</script>

<style lang="scss" scoped>

    .main-title{
        font-size: 3rem;
    }

    #modal-message-home{
        .uk-modal-dialog{
            background-color: $say-basedark-color;
            color: $say-default-color;
            border-radius: $say-border-radius;
            overflow: hidden;
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
        }
    }

    @media(max-width: 640px){
        #modal-message-home{
            .uk-modal-dialog{
                button.uk-button{
                    &.close-button{
                        margin-left: 0;
                    }
                }
            }
        }      
    }

</style>