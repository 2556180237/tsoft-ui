<template>
  <!--Region Modal -->
  <div class="modal-window"
       v-show="turn"
       :style="{'left': left,'top': top}"
       @mousemove="move"
       @mouseup="dragEnd"
  >
    <div class="wrapper d-flex">
      <div class="mod-container">
        <div class="mod-block" tabindex="-1" @keyup.esc="$emit('close')">
          <div class="mod-header d-flex" @mousedown="dragStart">
            <span class="mod-title">Заголовок</span>
            <div class="btn close-modal-button" type="button" @mousedown="$emit('close')" @click="$emit('close')">
              <div class="xmark"><i class="fa-solid fa-xmark"></i></div>
            </div>
          </div>
          <div class="mod-body">
            <tsoft-preloader v-if="this.loading" />
            <slot :name="nameComponent"></slot>
          </div>
          <div class="mod-footer">
            <div class="footer-button">
              <button class="btn cancel" :disabled="this.loading">Отменить</button>
              <button class="btn accept" :disabled="this.loading">Применить</button>
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
      loading: false,
      isMoving: false,
      position: {
        left: null,
        top: null
      },
      size: {
        height: null,
        width: null
      }
    };
  },
  props: {
    turn: {
      type: Boolean,
      required: true
    },
    nameComponent: {
      type: String,
      required: false
    },
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    dragStart(event) {
      this.isMoving = true;
      this.move(event);
    },
    dragEnd() {
      this.isMoving = false;
    },
    move(event) {
      if (this.isMoving) {
        this.position.left = event.clientX;
        this.position.top = event.clientY;
      }
    },
    getModalSize() {
      let modal = document.querySelectorAll(".mod-block")[0];
      if (this.width && this.height) {
        this.size.height = this.height;
        this.size.width = this.width;
      } else {
        this.size.height = modal.clientHeight;
        this.size.width = modal.clientWidth;
      }
      modal.focus();
    }
  },
  computed: {
    top() {
      return this.position.top ? this.position.top - 20 + "px" : "25%";
    },
    left() {
      return this.position.left ? this.position.left - (this.size.width / 2) + "px" : "40%";
    }
  },
  mounted() {
    this.getModalSize();
  }
};
</script>

<style scoped>
.modal-window {
  position: absolute;
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
  margin: 15px;
  border-bottom: 1px solid #c4c4c4;
  justify-content: space-between;
  cursor: move;
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
  min-height: 80px;
}

.mod-footer {
  display: contents;
}

.footer-label {
  margin: 15px;
  border-top: 1px solid #c4c4c4;
}

.footer-button {
  display: flex;
  justify-content: end;
}

.footer-button .btn {
  color: white;
  font-weight: bold;
  margin-right: 5px;
  outline: unset;
}

.btn:focus {
  box-shadow: unset;
}

.btn.cancel {
  color: #E57A26;
  background: white;
}

.btn.accept {
  color: white;
  background: #E57A26;
  margin-right: 15px;
}

.btn.cancel:hover {
  color: #E57A26;
  border: 1px solid #E57A26;
}

.btn.cancel:active {
  box-shadow: inset 1px 1px 1px 1px #ffc293;
  border: unset;
}

.btn.accept:active {
  box-shadow: inset 2px 2px 6px 2px #b25f1c;
  border: unset;
}

.download-block .btn:hover {
  color: orange;
  /*font-weight: bold;*/
  background-color: white;
  box-shadow: 2px 2px 6px 0 #9b9b9b;
  transition: 0.3s;
}
</style>