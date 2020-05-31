<template>
  <div>
    <div>Count: {{ count }} <span v-if="isDefault">default</span></div>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">IncrementAsync</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    count() {
      return this.$store.state.count
    },
    isDefault() {
      return this.$store.getters.isDefault
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
})
</script>
