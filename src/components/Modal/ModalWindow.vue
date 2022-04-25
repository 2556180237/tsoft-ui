<template>
  <!--Region Modal -->
  <div class="modal-window" v-show="turn">
    <div class="wrapper d-flex">
      <div class="mod-container">
        <div class="mod-block" tabindex="-1" @keyup.esc="close">
          <div class="mod-header d-flex">
            <span class="mod-title">{{ title }}</span>
            <div class="btn close-modal-button" type="button" @mousedown="close" @click="close">
              <div class="xmark"><i class="fa-solid fa-xmark"></i></div>
            </div>
          </div>
          <div class="mod-body">
            <tsoft-preloader v-if="this.loading" />
            <slot v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- endregion -->
</template>

<script>
export default {
  name: "TsoftModalWindow",
  data() {
    return {
      loading: false,
      isMoving: false,
      position: {
        left: null,
        top: null
      },
      size: {
        height: null,
        width: null
      },
      defaultPosition: {
        left: "40%",
        top: "25%"
      }
    };
  },
  props: {
    turn: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-window {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0, 0.6);
}

.wrapper {
  width: 100%;
  height: 100%;
  z-index: 998;
}

.mod-block {
  position: relative;
  margin: 0 auto auto auto;
  background-color: white;
  min-width: 400px;
  width: fit-content;
  height: fit-content;
  max-height: 1000px;
  z-index: 11;
  box-shadow: 1px 1px 20px 0 #343434;
  border-radius: 4px;
  overflow: auto;
}

.mod-title {
  font-size: 16px;
  font-weight: bold;
  color: #aaaaaa;
}

.mod-container {
  background-color: white;
  opacity: 1;
  z-index: 10;
  margin: auto;
  border-radius: 4px;
}

.mod-header {
  margin: 15px 15px 10px 15px;
  border-bottom: 1px solid #c4c4c4;
  justify-content: space-between;
}

.close-modal-button {
  color: white;
  border-radius: 14px;
  width: 20px;
  height: 20px;
  background: lightgray;
  padding: 4px;
  box-shadow: unset;
}

.close-modal-button:hover {
  background-color: #0D6247;
  color: #ffffff;
}

.close-modal-button .fa-xmark {
  font-size: 12px;
}

.xmark {
  margin-top: -7px;
}

.mod-body {
  margin: 5px;
  position: relative;
  min-height: 80px;
}

.btn:focus {
  box-shadow: unset;
}
</style>