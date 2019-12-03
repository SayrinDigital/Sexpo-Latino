<template lang="pug">

    div.say-background-primary
        Navigator
        .uk-container   
            section.uk-section              
                h1.styled.heading Servicio XX
                div.uk-margin(class="uk-child-width-1-5@l uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid", uk-grid="masonry: true;")
                    ServiceCard(v-for="(item,index) in services", :service="item", :key="index")

</template>

<script>
import Navigator from '~/components/MainUI/Navigator'
import ServiceCard from '~/components/SensualExperience/Categories/Service/Card'

export default {
    components: {
        Navigator,
        ServiceCard
    },
    data(){
        return{
            services: [
                { 'cover' : "https://images.unsplash.com/photo-1566113519662-7807a42cc50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
                { 'cover' : "https://images.unsplash.com/photo-1543699619-b8c9f47c07b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80" },
                { 'cover' : "https://images.unsplash.com/photo-1526812775150-3b1be2022a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
                { 'cover' : "https://images.unsplash.com/photo-1543699577-61ab0a491ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80" },
                { 'cover' : "https://images.unsplash.com/photo-1551974488-e4bf6b164584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" },
                { 'cover' : "https://images.unsplash.com/photo-1559029092-ac4b2f43d1f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" }
            ]
        }
    },
    mounted(){
        console.info(this.$route.params.slug)
    }
}
</script>

