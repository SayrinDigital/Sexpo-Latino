<template lang="pug">

    div
        div.uk-flex-top#modal-message-home(uk-modal="bg-close: false; esc-close: false;")
            .uk-modal-dialog.uk-modal-body.uk-margin-auto-vertical
                div.uk-text-center  
                    h3(clasS="uk-width-medium@m uk-margin-auto") Para acceder a SexPositive debes cumplir con la mayoría de edad.

                div.uk-text-center.uk-margin-medium-top
                    h4 ¿Cumples con este requisito?
                
                div.uk-text-center.uk-margin-medium-top
                    button.accept-button.uk-button(@click="aceppt") Si! Soy Mayor de edad
                    a.uk-margin.close-button.uk-button(href="https://google.cl") Oops! Entré por error

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