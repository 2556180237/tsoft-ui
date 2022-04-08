<template>
  <div class="left-menu-switcher">
    <div class="d-flex tree-buttons-block">
      <div class="sidebar-tree-icon " id="treeButton">
        <i class="fa-solid fa-folder-tree tree-icon" :class="{active: this.state}"></i>
      </div>
      <div class="form-check form-switch goods-switcher-block">
        <input class="form-check-input goods-menu-switcher" type="checkbox" @change="$emit('switch')">
      </div>
      <div class="sidebar-goods-icon">
        <i class="fa-solid fa-box goods-icon" :class="{active: !this.state}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftGoodsFoldersSwitcher",
  props: {
    state: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    switchMenu() {
      this.state = !this.state;
    }
  }
};
</script>

<style scoped>
.form-switch .form-check-input {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")
}

.tree-buttons-block {
  justify-content: center;
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
</style>

