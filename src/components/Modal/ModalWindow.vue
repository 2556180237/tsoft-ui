<template>
  <!--Region Modal -->
  <div class="mod-container" v-show="turn">
    <div class="mod-block">
      <div class="mod-header d-flex justify-content-around">
        <h1>Заголовок</h1>
        <div class="esc-btn">
          <button class="btn close-modal-button" type="button" @click="$emit('close')">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div class="mod-body" >
        <div class="img-block" style="height: fit-content;
width: fit-content; padding: 60px; border: 2px gray; margin: 0 auto">
          <i class="fa-regular fa-rectangle-list" style="font-size: 100px"></i>
        </div>
      </div>
      <div class="mod-footer">
        <div class="px-4 download-block">
          <button class="btn" type="button">Загрузить</button>
        </div>
        <div class="">
          <h4>Заключение</h4>
        </div>
      </div>
    </div>
    <div class="mod-content">
    </div>
  </div>

  <!--        endregion-->
</template>

<script>
export default {
  name: "TsoftModalWindow",
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  props: {
    turn: {
      type: Boolean,
      required: true,
    },
    component: {
      required: false,
    }
  },
  mounted() {
    console.log(this.turn);
  }
}
</script>
<style scoped>
  .mod-content {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    opacity: 0.9  ;
    z-index: 5;
  }
  .mod-block {
    position: relative;
    margin: 0 auto auto auto;
    background-color: white;
    width: 500px;
    opacity: 1;
    z-index: 11;
    box-shadow: 4px 4px 10px 0 #b3b3b3;
    border-radius: 10px;
    overflow: auto;
  }

  .mod-container {
    position:fixed;
    margin: 63px auto 0 407px;
    background-color: white;
    width: 500px;
    opacity: 1;
    z-index: 10;
  }

  .mod-header {
    height: 50px;
  }

  .esc-btn {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .close-modal-button {
    color: white;
    border-radius: 14px;
    width: 30px;
    background: lightgray;
    height: 29px;
    padding: 4px;
    box-shadow: unset;
  }

  .close-modal-button:hover {
    background-color: orange;
    color: green;
  }

  .close-modal-button .fa-xmark {
    font-size: 20px;
  }

  .mod-body {
  }
  .mod-footer {
  }

  .download-block {
    text-align: center;
  }

  .download-block .btn {
    border: unset;
    border-radius: 5px;
    background-color: green;
    color: white;
    box-shadow: 2px 2px 6px 0 #818181;
    font-weight: bold;
  }

  .download-block .btn:hover {
    color: orange;
    /*font-weight: bold;*/
    background-color: white;
    box-shadow: 2px 2px 6px 0 #9b9b9b;
    transition: 0.3s;
  }
</style>