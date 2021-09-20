<template>
  <main>
    <div class="container">
      <div class="row targets">
        <div class="col-12 my-3">
          <img :src="t.img"
               alt="target"
               class="rounded-circle elevation-2 target-img selectable m-2"
               v-for="t in targets"
               :key="t.id"
               :target="t"
               data-bs-toggle="modal"
               data-bs-target="#active-target-modal"
               @click="currentTarget = t"
               :class="{ 'ded and-super-dead': t.health === 0 }"
          >
        </div>
        <!-- <Target v-for="banana in targets" :key="banana.id" :target="banana" class="col-lg-4" /> -->
      <!-- REVIEW targets.forEach(target => template += target.Template) -->
      </div>
    </div>

    <Modal id="active-target-modal">
      <template #modal-title>
        <h6>{{ currentTarget?.name }}</h6>
      </template>
      <template #modal-body>
        <Target :target="currentTarget" v-if="currentTarget" />
      </template>
    </Modal>
  </main>
  <!-- <div class="target card p-3 m-3 no-select" v-for="target in targets" :key="target.id" @contextmenu.prevent>
      <img :src="target.img" alt="" class="target-img">
      <h1>{{ target.name }}</h1>
      <p>
        <b
          class="target-health"
          :class="setTargetHealthColor(target)"
        >
          health: {{ target.health }} </b>
      </p>
      <button @click="slap(target)" :disabled="target.health === 0">
        slap
      </button>
      <button @click="target.health = 100" v-if="target.health === 0">
        reset
      </button>
    </div> -->

  <!-- <div class="target card p-3 m-5" @contextmenu.prevent>
      <img :src="localState.target.img" alt="" class="target-img">
      <h1>
        {{ isDead ? 'he ded' : localState.target.name }}
      </h1>
      <p>
        <b
          class="target-health"
          :class="setTargetHealthColor()"
        >
          health: {{ localState.target.health }} </b>
      </p>
      <button @click="slap" :disabled="isDead">
        slap
      </button>
      <button @click="localState.target.health = 100" v-if="isDead">
        reset
      </button>
    </div> -->
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  name: 'Home',
  setup() {
    const currentTarget = ref()
    // const localState = reactive({

    // })
    // private stuff

    return {
      // public stuff
      // localState,
      currentTarget,
      targets: computed(() => AppState.targets)
      // isDead: computed(() => localState.target.health === 0),
      // slap(target) {
      //   target.health -= 15
      //   if (target.health < 0) {
      //     target.health = 0
      //   }
      // },
      // setTargetHealthColor(target) {
      //   if (target.health < 25) {
      //     return 'text-danger'
      //   }
      //   if (target.health < 45) {
      //     return 'text-warning'
      //   }
      //   if (target.health < 80) {
      //     return 'hurt'
      //   }
      // }
    }
  }
}
</script>

<style scoped lang="scss">
main{
  background-color: red !important;
  height: 85vh;
  .target-img{
    height: 65px;
    width: 65px;
    object-fit: cover;
    object-position: center;
    transition: all .15s linear;
    &:hover{
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
  .ded{
    filter: grayscale(1);
  }
  .and-super-dead{
    transform: rotate(180deg)
  }

}
</style>
