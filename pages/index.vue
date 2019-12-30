<template lang="pug">
  
  div
    Navigator
    .uk-grid-collapse.say-main-container(uk-grid, uk-height-match, class="uk-child-width-1-2@s uk-child-width-1-1 uk-grid")
      div
        div.main-container.bg-a.uk-flex.uk-flex-middle.uk-container.uk-position-relative.uk-overflow-hidden.uk-background-cover(uk-img, data-src="/imgs/home/bg-a.jpg")
          .uk-position-cover.uk-overlay.overlay
          nuxt-link(to="sex-trainer").uk-display-inline-block.uk-position-relative
            .uk-overflow-hidden
              h1.title Sex Trainer
            .uk-overflow-hidden
              h4.subtitle CONOCE EL SERVICIO DE NUESTR@S PROFESIONALES
          .uk-position-cover.overlay-pink
      div
        div.bg-c.height-middle.uk-flex.uk-flex-middle.uk-container.uk-position-relative.uk-overflow-hidden.uk-background-cover(uk-img, data-src="/imgs/home/bg-b.jpg")
          .uk-position-cover.uk-overlay.overlay
          nuxt-link(to="tienda").uk-display-inline-block.uk-position-relative
            .uk-overflow-hidden
              h2.title Tienda
            .uk-overflow-hidden
              h5.subtitle REVISA NUESTRO CATÁLOGO DE JUGUETES 
          .uk-position-cover.overlay-pink
        div.bg-b.height-middle.uk-flex.uk-flex-middle.uk-container.uk-position-relative.uk-overflow-hidden
          .uk-position-cover.uk-overlay.overlay
          nuxt-link(to="quienes-somos").uk-display-inline-block.uk-position-relative
            .uk-overflow-hidden
              h2.title ¿Quiénes somos?
            .uk-overflow-hidden
              h5.subtitle Conócenos un poco más
          .uk-position-cover.overlay-pink

    .loader.uk-flex.uk-flex-middle.uk-flex-center
      div
        h2.main-text-loader SEX #[span POSITIVE]

</template>

<script>

import { gsap } from 'gsap'
import Navigator from '~/components/MainUI/Navigator'


export default {
  data(){
    return{
      homeTl: null,
      introTl: null
    }
  },
  components: {
    Navigator,
  },
  beforeMount(){
    this.homeTl = new gsap.timeline({
      paused: true,
      
    })
    this.introTl = new gsap.timeline({
      onComplete: this.playHomeAnimation
    })
    
  },
  mounted(){

    if(UIkit.modal('#result-modal-success'))
      UIkit.modal('#result-modal-success').hide()
    this.homeAppearAnimation()
    this.introAppearAnimation()
  },
  methods: {
    homeAppearAnimation(){
      this.homeTl.to('.overlay-pink',{
        duration: 0.6,
        ease: 'power4.out',
        y: '-105%',
        stagger: {
          amount: 0.3,
          from: 'end'
        }
      })

      this.homeTl.to('.title',{
        duration: 1,
        ease: 'power4.out',
        startAt: {
          opacity: 0,
          y: '100%'
        },
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.3,
          from: 'end'
        }
      }, '<')

      this.homeTl.to('.subtitle',{
        duration: 1,
        ease: 'power4.out',
        startAt: {
          opacity: 0,
          y: '100%'
        },
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.3,
          from: 'end'
        }
      },'<0.2')

    },
    playHomeAnimation(){
      console.info('playing this shet')
      this.homeTl.play()
    },
    introAppearAnimation(){
      this.introTl.to('.main-text-loader span',{ 
        duration: 2, 
        ease: "rough({ template: power0.none, strength: 1.5, points: 50, taper: 'none', randomize: true, clamp: false})", 
        startAt: {
          opacity: 0
        },
        opacity: 1 });

      this.introTl.to('.main-text-loader',{
        duration: 0.4,
        ease: 'power4.in',
        opacity: 0
      })

      this.introTl.to('.loader',{
        duration: 0.01,
        autoAlpha: 0,
      })

    }
  }
}
</script>

<style lang="scss" scoped>

.title, .subtitle{
  transform: translateY(100%);
}

h1,h2,h3,h4,h5,h6{
  color: $say-default-color;
  &.subtitle{
    color: $say-text-color;
  }
}

h1{
  font-size: 5rem;
}

h2{
  font-size: 4rem;
}

.overlay-pink{
  background: $say-mainaccent-color;
  z-index: 2;
}

.overlay{
  background: rgba(0,0,0,0.2);
}

.bg-a{
  background-color: $say-base-hover-color;
}

.bg-b{
  background-color: $say-basedark-color;
}

.bg-c{
  background-color: $say-mainaccent-color;
}

.height-middle{
  min-height: 50vh;
}

.main-container{
  min-height: 100vh;
}

.loader{
  background: $say-mainaccent-color;
  color: #fff;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .main-text-loader{
    font-size: 8rem;
    span{
      background-color: $say-basedark-color;
      padding: 0px 15px;
    }
  }
}

@media(max-width: 1200px){
  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 2.5rem;
  }

}

@media (max-width: 640px) {
  
  .main-container{
    min-height: 50vh;
  }

  .loader{
    .main-text-loader{
      font-size: 2.5rem;
    }
  }

}

</style>
