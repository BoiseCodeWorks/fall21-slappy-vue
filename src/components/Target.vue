<template>
  <div class="target" @contextmenu.prevent>
    <div class="card p-3 my-3 no-select">
      <img :src=" isDead ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZI_lrzjWPVLAA9tVOvTqWkc1zpjXGJv1MyX5-YBGBs_-vCXitbtYytbb00_E8gNNOOg&usqp=CAU' : target.img" alt="" class="target-img img-fluid">
      <h1>{{ isDead ? 'he ded' : target.name }}</h1>
      <p>
        <b
          class="target-health"
          :class="setTargetHealthColor(target)"
        >
          health: {{ target.health }} </b>
      </p>
      <button @click="slap(target)" :disabled="isDead">
        slap
      </button>
      <button @click="reset(target)" v-if="isDead">
        reset
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { getRandomHealth } from '../AppState.js'

export default {
  props: {
    target: { type: Object, required: true }
  },
  setup(props) {
    return {
      isDead: computed(() => props.target.health === 0),
      slap(target) {
        target.health -= 15
        if (target.health < 0) {
          target.health = 0
        }
      },
      setTargetHealthColor(target) {
        if (target.health < 25) {
          return 'text-danger'
        }
        if (target.health < 45) {
          return 'text-warning'
        }
        if (target.health < 80) {
          return 'hurt'
        }
      },
      reset(target) {
        target.health = getRandomHealth()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.target{
  .target-img{
    width: 380px;
  }
  .target-health{
    color: green;
    &.hurt{
      color: yellowgreen;
    }
  }
}

</style>
