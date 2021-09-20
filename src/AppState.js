import { reactive } from 'vue'

export function getRandomHealth() {
  return Math.floor(Math.random() * 50) + 50
}

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  targets: [
    {
      id: 1,
      name: 'Slappy',
      img: 'https://i.ytimg.com/vi/vQ7F1Zj7KJE/maxresdefault.jpg',
      health: getRandomHealth()
    },
    {
      id: 2,
      name: 'Jigswa',
      img: 'https://m.media-amazon.com/images/I/61SCbvU3mML._AC_SX466_.jpg',
      health: getRandomHealth()
    },
    {
      id: 3,
      name: 'Chuck',
      img: 'https://www.pennlive.com/resizer/PnFY6HWY6-dWeqWooJDcm5Fa53o=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ZOVDEZ5FLFEO5BBWZCJFLWK2PU.png',
      health: getRandomHealth()
    }
  ]
})
