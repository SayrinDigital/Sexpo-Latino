<template lang="pug">
    nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
      .uk-navbar-left
        .uk-navbar-item
          nuxt-link(to="/")
            h3 Sex POSITIVE
      .uk-navbar-right
        .uk-navbar-item(class="uk-visible@s")
          a.text-link Sensual Experience
        .uk-navbar-item(class="uk-visible@s")
          nuxt-link.text-link(to="/tienda") Tienda
        .uk-navbar-item(class="uk-visible@s")
          nuxt-link.text-link(to="/aviso-legal") Aviso Legal
        .uk-navbar-item(class="uk-visible@s")
          a.text-link Contáctenos
        .uk-navbar-item
          a #[span(uk-icon="icon: shopping-bag; ratio: 0.8;")]
        .uk-navbar-item
          a.instagram-link #[span(uk-icon="icon: instagram; ratio: 0.8;")]
</template>

<script>
export default {
    
}
</script>

<style lang="scss" >

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