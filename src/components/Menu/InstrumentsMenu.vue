<template>
  <div class="d-flex instruments">
    <div v-for="instrument in instruments" :key="instruments.id">
      <button class="instrument-btn btn" type="button" @click="$emit('action', instrument.action)">
        <i :class="instrument.img" :style="{'font-size': instrument.fontSize}"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftInstrumentsMenu",
  data() {
    return {}
  },
  props: {
    instruments: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.instrument-btn {
  margin: 0 5px;
}

</style>


