<template lang="pug">
    div
      client-only
        nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
          .uk-navbar-left
            .uk-navbar-item
              nuxt-link(to="/")
                h3 Sex POSITIVE
          .uk-navbar-right
            .uk-navbar-item(class="uk-visible@s")
              nuxt-link.text-link(to="/sensual-experience")  Sensual Experience
              div(uk-dropdown="animation: uk-animation-slide-top-small; duration: 150; delay-hide: 10;")
                ul.uk-list.uk-margin-remove.uk-padding-remove.menu-list
                  li(:key="'secategory-menu-' + index", v-for="(menu, index) in secategorias")
                    nuxt-link(:to="'/sensual-experience/categoria/' + menu.slug") #[span(uk-icon="icon: chevron-right; ratio: 0.8;")] {{ menu.nombre }}               
            .uk-navbar-item(class="uk-visible@s")
              nuxt-link.text-link(to="/tienda") Tienda
            .uk-navbar-item(class="uk-visible@s")
              nuxt-link.text-link(to="/aviso-legal") Aviso Legal
            .uk-navbar-item(class="uk-visible@s")
              nuxt-link.text-link(to="/contacto") Contáctenos
            .uk-navbar-item
              a #[span(uk-icon="icon: shopping-bag; ratio: 0.8;")]
            .uk-navbar-item
              a.instagram-link #[span(uk-icon="icon: instagram; ratio: 0.8;")]
</template>

<script>

import SECategories from '~/apollo/queries/sensualexperience/categories.gql'

export default {
    data(){
      return{
        secategorias: []
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

    .uk-dropdown{
      background-color: $say-mainaccent-light-color;
      border-radius: $say-border-radius;
      padding: 0px;
      overflow: hidden;
    }

    .menu-list>li{
      color: $say-default-color;
      font-family: $say-p-base-font;
      margin: 0;
      transition: background 200ms ease-in-out;
      &:hover{
        background-color: $say-mainaccent-color!important;
      }
      a{
        padding: 20px;
        display: inline-block;
        &:hover{
          text-decoration: none;
        }
      }
    }

    .menu-list>li:nth-of-type(odd), .menu-list li:nth-of-type(odd) {
      background-color: $say-dark-text-color;
    }

    .uk-navbar-container{
        a{
            color: #fff;
            font-family: $say-p-base-font;         
            transition: all 200ms ease-in-out;
            &.instagram-link{
              background: $say-mainaccent-color;
              padding: 12px 15px;
              border-radius: $say-border-radius;
            }  
            &.text-link{
              border-bottom: 0px solid transparent;
              font-size: 1rem;
              &:hover{
                text-decoration: none;
                color: #fff;
                border-bottom: 3px solid $say-mainaccent-color;
              }
              &.nuxt-link-exact-active.nuxt-link-active{
              border-bottom: 3px solid $say-mainaccent-color;
              }
            }    
        }
    }

</style>