<template lang="pug">
    div
        Navigator.say-background-primary 
        section.uk-section.say-background-primary  
            .uk-container.uk-container-small            
                h1.styled.heading Aviso Legal
        section.uk-section-small
            .uk-container.uk-container-small
                p A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
                h2 Oh Nice
                p A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
                h2 Oh Nice
                p A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
</template>

<script>

import Navigator from '~/components/MainUI/Navigator'

export default {
    components: {
        Navigator,
    }
}
</script>

<style lang="scss" scoped>
    p{
        line-height: 2rem;
        letter-spacing: 0.05rem;
        font-size: 1.1rem;
        color: $say-dark-text-color;
        margin-bottom: 3rem;
    }
    @media(max-width: 640px){
        p{
            font-size: .98rem;
            line-height: 1.8rem;
        }
    }

    h2,h3,h4,h5,h6{
        color: $say-basedark-color;
        &:after{
            content: '';
            position: absolute;
            width: 50%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: $say-mainaccent-color;
        }
    }
</style>