<template>
  <div class="d-flex instruments" :style="{'justify-content': instrumentBlock.position}" v-if="isInstrumentsExist">
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
  },
  computed: {
    isInstrumentsExist() {
      return !!Object.keys(this.instruments).length;
    }
  }
}
</script>

<style scoped>
.instruments {
  margin-top: 10px;
  border: 1px solid #c4c4c4;
}

.instrument-btn {
  padding-top: 10px
}

.instrument-btn:hover {
  color: #E67926;
}

.instrument-btn:focus {
  box-shadow: unset;
}
</style>


