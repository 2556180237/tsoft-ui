<template>
  <div class="d-flex instruments" :style="{'justify-content': instrumentBlock.position}">
    <div v-for="instrument in instruments" :key="instruments.id">
      <button class="instrument-btn btn" type="button" @click="$emit('action', instrument.action)" :title="instrument.name">
        <i :class="instrument.img" :style="{'font-size': instrument.fontSize}"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftInstrumentsMenu",
  props: {
    instruments: {
      type: Object,
      required: true
    },
    instrumentBlock: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
.instrument-btn {
  margin: 0 5px;
}

.instrument-btn:hover {
  color: #E67926;
}

.instrument-btn:focus {
  box-shadow: unset;
}
</style>


