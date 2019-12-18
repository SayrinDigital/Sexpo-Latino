<template lang="pug">
    div.say-background-primary
        Navigator
        .say-main-container.uk-flex.uk-flex-middle(class="uk-child-width-1-2@m uk-grid", uk-grid)   
            div
                div.uk-section.uk-container(class="uk-width-xlarge@m  uk-margin-auto") 
                    h1.styled.heading Contáctanos
                    form.uk-margin-top(v-on:submit.prevent="sendInformation")
                        .uk-margin
                            label.uk-form-label Nombre
                            .uk-form-controls
                                input.uk-input.uk-form-large(type="text", placeholder="Juan Acosta", v-model="name", required)
                        .uk-margin
                            label.uk-form-label Email
                            .uk-form-controls
                                input.uk-input.uk-form-large(type="email", placeholder="usuario@email.com", v-model="email", required)
                        .uk-margin
                            label.uk-form-label Teléfono
                            .uk-form-controls
                                input.uk-input.uk-form-large(type="text", placeholder="+569 8765 4321", v-model="phone", required)
                        .uk-margin
                            label.uk-form-label Mensaje
                            .uk-form-controls
                                textarea.uk-textarea.uk-form-large(rows="4", type="textarea", placeholder="...", v-model="message", required)
                        .uk-margin.uk-text-center
                            h5(v-if="hasBeenSent") Tu formulario fue enviado correctamente
                        .uk-margin.uk-text-right
                            button.form-send-button.uk-button(type="submit") #[span.uk-margin-small-left(v-if="isSending", uk-spinner)] Enviar Mensaje
            div.uk-background-cover(uk-height-viewport, class="uk-flex-first@m", uk-img, data-src="https://images.unsplash.com/photo-1566113519555-06cab56beed8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
                          
                    
                    
</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
export default {
    components: {
        Navigator
    },
    data(){
        return{
            name: '',
            email: '',
            phone: '',
            message: '',
            isSending: false,
            hasBeenSent: false,
            baseUrl: 'http://localhost:3100/api/',
        }
    },
    methods: {
        sendInformation(){
            this.isSending = true
            this.hasBeenSent = false
            this.$axios.post(this.baseUrl + 'sendContactMail/',{
                name : this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            })
            .then(response => {
                this.isSending = false
                this.hasBeenSent = true
            })
            .catch(error => {
                this.isSending = false
                this.hasBeenSent = false
            })
        }
    }
}

</script>

<style lang="scss" scoped>


    form{
        label{
            font-family: $say-p-base-font;
            color: $say-text-color;
        }

        .uk-input, .uk-textarea{
            font-family: $say-p-base-font;
            font-size: 1rem;
            border-radius: $say-border-radius;
            background-color: $say-dark-text-color;
            border: 0;
            color: $say-default-color;
        }
        
        .uk-input::placeholder, .uk-textarea::placeholder{
            color: rgba($say-default-color, 0.2);
        }
    }

    button.uk-button{
        text-transform: none;
        font-family: $say-p-base-font;
        &.form-send-button{
            background-color: $say-mainaccent-color;
            color: $say-default-color;
            font-size: 1rem;
            border-radius: $say-border-radius;
            padding: 5px 15px;
            transition: all 200ms ease-in-out;
            &:hover{
                background-color: rgba($say-mainaccent-color, 0.5);
            }
        }
    }

    @media(max-width: 960px){
        .say-main-container{
            margin-top: 0px;
        }
    }

</style>