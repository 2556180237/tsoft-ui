<template>
  <!--Region Modal -->
  <div class="modal-window" v-show="turn" :class="{open: turn}">
    <div class="wrapper d-flex">
      <div class="mod-container">
        <div class="mod-block">
          <div class="mod-header d-flex">
            <span class="mod-title">Заголовок</span>
            <div class="btn close-modal-button" type="button" @click="$emit('close')" @keyup.esc="$emit('close')">
              <div class="xmark"><i class="fa-solid fa-xmark"></i></div>
            </div>
          </div>

          <div class="mod-body">
            <tsoft-preloader v-if="!this.loading"/>
            <slot :name="nameComponent"></slot>
          </div>
          <div class="mod-footer">
            <div class="footer-button">
              <button class="btn cancel" type="button" :disabled="this.loading">Отменить</button>
              <button class="btn accept" type="button" :disabled="this.loading">Применить</button>
            </div>
            <div class="footer-label">
              <span class="mod-title">Заключение</span>
            </div>
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
      loading: true,
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  },
  props: {
    turn: {
      type: Boolean,
      required: true
    },
    nameComponent: {
      type: String,
      required: false
    }
  },
};
</script>
<style scoped>

.modal-window {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 997;
}

.modal-window.open {
  background: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
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
  box-shadow: 4px 4px 10px 0 #343434;
  border-radius: 4px;
  overflow: auto;
}

.mod-title {
  font-size: 16px;
  font-weight: bold;
  color: grey;
}

.mod-container {
  background-color: white;
  opacity: 1;
  z-index: 10;
  margin: auto;
  border-radius: 4px;
}

.mod-header {
  margin: 10px;
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
  margin: 10px;
  position: relative;
  min-height: 80px  ;
}

.mod-footer {
  display: contents;
}

.footer-label {
  margin: 10px;
  border-top: 1px solid #c4c4c4;
}

.footer-button {
  display: flex;
  justify-content: end;
}

.footer-button .btn {
  margin-right: 10px;
  color: white;
  box-shadow: 2px 2px 6px 0 #818181;
  font-weight: bold;
}

.btn.cancel {
  background: #E57A26;
}

.btn.accept {
  background: #0D6247;
}

.btn.cancel:hover {
  color: #E57A26;
  background: white;
}

.btn.accept:hover {
  color: #0D6247;
  background: white;
}

.download-block .btn:hover {
  color: orange;
  /*font-weight: bold;*/
  background-color: white;
  box-shadow: 2px 2px 6px 0 #9b9b9b;
  transition: 0.3s;
}
</style>