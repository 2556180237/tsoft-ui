<template>
  <div class="sidebar me-3">
    <ol id="goodsList">
      <li>
        <a href="#declaration">{{ treeGoods.title }}</a>
      </li>
      <li v-for="(good, index) in treeGoods.goods" :key="index">
        {{ good }}
      </li>
    </ol>

  </div>
</template>

<script>
export default {
  name: "TsoftLeftmenuGoods",
  props: {
    treeGoods: {
      type: Object,
      required: true,
    }
  },
}

</script>

<style scoped>

.sidebar {
  height: fit-content;
  min-width: 300px;
  margin-top: 10px;
}

.form-switch .form-check-input {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")
}

.goods-switcher-block {
  padding: 2px 0 0;
  margin: 0 10px;
}

.goods-menu-switcher {
  width: 50px;
  background-color: #E67926;
  box-shadow: unset;
  border: unset;
  margin: 0;
}

.goods-icon {
  color: gray;
  font-size: 18px;
}

.tree-icon {
  color: gray;
  font-size: 18px;
}

.goods-menu-switcher:checked {
  background-color: #0D6247;
}

.goods-menu-switcher:hover {
  cursor: pointer;
}

.goods-icon.active {
  color: #0D6247;
}

.tree-icon.active {
  color: #E67926;
}

li a {
  color: black;
  text-decoration: unset;
  font-size: 14px;
}
</style>