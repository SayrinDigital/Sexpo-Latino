<template lang="pug">
    div
      client-only
        div(uk-sticky="animation: uk-animation-slide-top; top: 200; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky sticky-navbar-bg;")
          nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
            .uk-navbar-left
              .uk-navbar-item
                nuxt-link(to="/")
                  img(src="/imgs/home/SEXPOSITIVE-white.png", width="180", uk-img)
            .uk-navbar-right
              .uk-navbar-item(class="uk-visible@s")
                nuxt-link.text-link(to="/sex-trainer")  Sex Trainer
                div(uk-dropdown="animation: uk-animation-slide-top-small; duration: 150; delay-hide: 10;")
                  ul.uk-list.uk-margin-remove.uk-padding-remove.menu-list
                    li(:key="'secategory-menu-' + index", v-for="(menu, index) in secategorias")
                      nuxt-link(:to="'/sex-trainer/categoria/' + menu.id") #[span(uk-icon="icon: chevron-right; ratio: 0.8;")] {{ menu.nombre }}               
              .uk-navbar-item(class="uk-visible@s")
                nuxt-link.text-link(to="/tienda") Tienda
              .uk-navbar-item(class="uk-visible@s")
                nuxt-link.text-link(to="/aviso-legal") Aviso Legal
              .uk-navbar-item(class="uk-visible@s")
                nuxt-link.text-link(to="/contacto") Contáctenos
              .uk-navbar-item
                transition(name="slide-fade", mode="out-in")
                  nuxt-link.uk-overflow-hidden(:key="'cart-items-' + numberOfItems",to="/tienda/carro") #[span.uk-margin-small-right(uk-icon="icon: shopping-bag; ratio: 0.8;")] {{ numberOfItems }}
              .uk-navbar-item
                a.instagram-link(href="https://www.instagram.com/proximasexpo/", target="_blank") #[span(uk-icon="icon: instagram; ratio: 0.8;")]
</template>

<script>

import SECategories from '~/apollo/queries/sensualexperience/categories.gql'

export default {
    data(){
      return{
        secategorias: [],
        
      }
    },
    apollo:{
      secategorias: {
        prefetch: true, 
        query: SECategories
      }
    },
    computed: {
      numberOfItems(){
        return this.$store.getters['cart/numberOfItems']
      },
      saleToken(){
        return this.$store.state.localStorage.saleToken
      }
    }
}
</script>

<style lang="scss" scoped>

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
      transform: translateY(-100%);
      opacity: 0;
    }

    .sticky-navbar-bg{
      background-color: $say-basedark-color;
    }

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
            &:hover{
              text-decoration: none;
            }
            &.instagram-link{
              background: $say-mainaccent-color;
              padding: 12px 15px;
              border-radius: $say-border-radius;
            }  
            &.text-link{
              border-bottom: 3px solid transparent;
              font-size: 1rem;
              &:hover{
                text-decoration: none;
                color: #fff;
                border-bottom: 3px solid $say-mainaccent-color;
              }
              &.nuxt-link-exact-active{
              border-bottom: 3px solid $say-mainaccent-color;
              }
              &.nuxt-link-active{
                border-bottom: 3px solid $say-mainaccent-color;
              }
            }    
        }
    }

</style>