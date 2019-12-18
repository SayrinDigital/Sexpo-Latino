<template lang="pug">
    
    div
        div.say-background-primary(uk-height-viewport)
            Navigator
            .uk-container   
                section.uk-section              
                    h1.styled.heading Sensual Experience
                    div.uk-section.uk-section-small
                        h3 Categorías
                        div.uk-margin(uk-scrollspy="cls: uk-animation-slide-bottom-small; target: >div; delay: 100; repeat: true", class="uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid", uk-grid="masonry: true;")
                            CategoryCard(v-for="item in secategorias", :category="item", :key="item.slug")

        #modal-formApplyService.uk-open.uk-flex-top.uk-modal(uk-modal="bg-close: false;", style="display: block;")
            .uk-modal-dialog.uk-modal-body.uk-margin-auto-vertical
                button.uk-modal-close-default.uk-icon.uk-close(type="button", uk-close)
                div
                    div.uk-grid-match(class="uk-child-width-1-1@m", uk-grid)
                        //- div
                                div.say-border-radius.uk-background-cover(data-src="https://images.unsplash.com/photo-1503135935062-b7d1f5a0690f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", uk-img)
                        div
                            div
                                form(v-on:submit.prevent="sendInformation")
                                    h3 Únete a SexPositive
                                    p Esta sección será publicada en febrero. Si quieres ser parte del portal de SEXPOSITIVE.cl, ofrecer tus servicios y obtener un cupo en los workshops de capacitación presencial que haremos mes a mes, llena este formulario y nos comunicaremos contigo.
                                    .uk-margin
                                        label.uk-form-label Nombre o Apodo
                                        .uk-form-controls
                                            input.uk-input.uk-form-large(v-model="name", required, type="text", placeholder="Lucía")
                                    .uk-margin
                                        label.uk-form-label ¿Trabajas en el rubro?
                                        .uk-form-controls.radio-box
                                            label
                                                input.uk-radio(type="radio", value="Si", v-model="worksRubro")
                                            |   Si
                                            label.uk-margin-left
                                                input.uk-radio(type="radio", value="No", checked, v-model="worksRubro")
                                            |   No
                                    .uk-margin
                                        label.uk-form-label ¿De qué comuna eres?
                                        .uk-form-controls
                                            input.uk-input.uk-form-large(v-model="comuna", type="text", placeholder="Providencia")
                                    .uk-margin
                                        label.uk-form-label ¿Estás publicada en otro portal?
                                        .uk-form-controls
                                            input.uk-input.uk-form-large(type="text", placeholder="Si, en ...")
                                    .uk-margin
                                        label.uk-form-label ¿Te interesan los workshop de perfeccionamiento práctico?
                                        .uk-form-controls.radio-box
                                            label
                                                input.uk-radio(type="radio", value="Si", checked, v-model="isInterestedInWorkshops")
                                            |   Si
                                            label.uk-margin-left
                                                input.uk-radio(type="radio", value="No", v-model="isInterestedInWorkshops")
                                            |   No
                                    .uk-margin
                                        label.uk-form-label Whatsapp
                                        .uk-form-controls
                                            input.uk-input.uk-form-large(v-model="whatsapp", required, type="text", placeholder="+569 9876 5432")
                                    .uk-margin.uk-text-center
                                        h5(v-if="hasBeenSent") Tu formulario fue enviado correctamente
                                    .uk-margin
                                        .uk-form-controls.uk-text-center
                                            button.uk-button.submit-form(type="submit") #[span.uk-margin-small-left(v-if="isSending", uk-spinner)] Enviar Información
</template>

<script>

import Navigator from '~/components/MainUI/Navigator'
import CategoryCard from '~/components/SensualExperience/Categories/Card'
import SECategories from '~/apollo/queries/sensualexperience/categories.gql'

export default {
    components: {
        Navigator,
        CategoryCard
    },
    data(){
        return{
            secategorias: [],
            name : "",
            worksRubro : "",
            comuna : "",
            isPublished : "",
            isInterestedInWorkshops : "",
            whatsapp : "",
            baseUrl: 'https://sexpositive.cl/api/',
            isSending: false,
            hasBeenSent: false
        }
    },
    mounted(){
        
    },
    methods: {
        sendInformation(){
            this.isSending = true
            this.hasBeenSent = false
            this.$axios.post(this.baseUrl + 'sendInformationMail/',{
                name : this.name,
                worksRubro : this.worksRubro,
                comuna : this.comuna,
                isPublished : this.isPublished,
                isInterestedInWorkshops : this.isInterestedInWorkshops,
                whatsapp : this.whatsapp
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
    },
    apollo:{
      secategorias: {
        prefetch: true, 
        query: SECategories
      }
    },
}
</script>

<style lang="scss" scoped>

    #modal-formApplyService{
        .uk-modal-dialog{
            background-color: $say-basedark-color;
            border-radius: $say-border-radius;
        }
        
    }

    .uk-modal{
        .uk-modal-dialog{
            background-color: $say-basedark-color;
            border-radius: $say-border-radius;
        }
    }

    form{

        .radio-box{
            color: $say-text-color;
                font-family: $say-p-base-font;
        }

        p{
            color: $say-text-color;
            font-size: .8rem;
            letter-spacing: .01rem;
            line-height: 1.3rem;
        }

        label{
            font-family: $say-p-base-font;
            color: $say-text-color;
        }

        .uk-radio:checked{
            background-color: $say-mainaccent-color;
        }

        .uk-input, .uk-textarea{
            font-family: $say-p-base-font;
            font-size: .9rem;
            border-radius: $say-border-radius;
            background-color: $say-dark-text-color;
            border: 0;
            color: $say-default-color;
        }
        
        .uk-input::placeholder, .uk-textarea::placeholder{
            color: rgba($say-default-color, 0.2);
        }

        .submit-form{
            background-color: $say-mainaccent-color;
            border-radius: 200px;
            color: $say-default-color;
            font-family: $say-p-base-font;
            text-transform: capitalize;
        }
    }

</style>