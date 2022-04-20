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
            <span class="mod-title">{{ title }}</span>
            <div class="btn close-modal-button" type="button" @mousedown="$emit('close')" @click="$emit('close')">
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
    },
    title: {
      type: String,
      required: true
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
      return this.position.top ? this.position.top - 20 + "px" : this.defaultPosition.top;
    },
    left() {
      return this.position.left ? this.position.left - (this.size.width / 2) + "px" : this.defaultPosition.left;
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
  min-width: 435px;
  min-height: 340px;
  top: 20%;
  left: 40%;
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
