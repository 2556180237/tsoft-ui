<template>
  <!--Region Modal -->
  <div class="mod-container" v-show="turn">
    <div class="mod-block">
      <div class="mod-header">
        <h1>Заголовок</h1>
      </div>
      <div class="mod-body" >
        <div class="img-block" style="height: fit-content;
width: fit-content; padding: 60px; border: 2px gray; margin: 0 auto">
          <i class="fa-regular fa-rectangle-list" style="font-size: 100px"></i>
        </div>
      </div>
      <div class="mod-footer">
        <div class=" px-4">
          <button class="btn" type="button">Загрузить</button>
        </div>
        <div class="">
          <h4>Заключение</h4>
        </div>
      </div>
    </div>
    <div class="mod-content">
      <div class="esc-btn" style="position: absolute; top: 0; right: 30px">
        <button class="btn p-0" type="button" style=" color: gray; border-radius: 10px" @click="$emit('close')">
          <i class="fa-solid fa-xmark" style="font-size: 50px;" ></i>
        </button>
        <p style="color: gray; width: fit-content; margin: 0 auto; font-weight: bold">
          ESC
        </p>
      </div>
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
    background-color: black;
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
    box-shadow: 4px 4px 10px 0 black;
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

  .mod-body {
  }
  .mod-footer {
  }
</style>