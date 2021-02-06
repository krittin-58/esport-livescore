<template>
    <div>
        <h1>Matches</h1>
        <button-slide-group :games="games"></button-slide-group>
    </div>
</template>

<script>
import ButtonSlideGroup from '../components/ButtonSlideGroup.vue';

export default {
    name: 'Matches-page',
    components: {
        ButtonSlideGroup,
    },
    data() {
        return {
            model: null,
            games: [
                {
                    name: 'Call of Duty: MW (2019)',
                    alias: 'CODMW',
                    slug: 'call-of-duty-modern-warfare',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/ML3734_1024x1024.jpg'
                },
                {
                    name: 'CS:GO',
                    alias: 'CSGO',
                    slug: 'csgo',
                    imageUrl: 'https://download.logo.wine/logo/Counter-Strike%3A_Global_Offensive/Counter-Strike%3A_Global_Offensive-Logo.wine.png'
                },
                {
                    name: 'DOTA 2',
                    alias: 'DOTA2',
                    slug: 'dota2',
                    imageUrl: 'https://logos-download.com/wp-content/uploads/2019/06/Dota_2_Logo.png'
                },
                {
                    name: 'League of Legends',
                    alias: 'LOL',
                    slug: 'lol',
                    imageUrl: 'https://cdn.mos.cms.futurecdn.net/qPibdLSyYHnTX5NymkEb8M.jpeg'
                },
                {
                    name: 'PUBG',
                    alias: 'PUBG',
                    slug: 'pubg',
                    imageUrl: 'https://hyperpix.net/wp-content/uploads/2019/08/playerunknowns-battlegrounds-logo-font-download.jpg'
                },
                {
                    name: 'Overwatch',
                    alias: 'OVERWATCH',
                    slug: 'overwatch',
                    imageUrl: 'https://blznav.akamaized.net/img/games/cards/card-overwatch-7eff92e1257149aa.jpg'
                },
                {
                    name: 'Rainbow Six: Siege',
                    alias: 'RB6',
                    slug: 'rainbow-six-siege',
                    imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/0622/l7qGhxw0bkEAa4dKBxBYx7C7.png'
                },
                {
                    name: 'FIFA',
                    alias: 'FIFA',
                    slug: 'fifa',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cFtDTpfdei1dIj45FMLH5VQO9WvBMJLpxA&usqp=CAU'
                }
            ]
        }
    }
}
</script>

<style>
#chip-selection-games {
    background: transparent;
}
</style>