<template>
  <button type="button" @click='passEvent'> Update me</button>
  <div class="menu-sitemap-tree">
    <div class="file-system">
      <tree-file-system :tree-data="treeData" />
    </div>
  </div>
</template>

<script>
import TreeFileSystem from "../Tree/TreeFileSystem.vue";

export default {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFileSystem,
  },
  props: {
    treeData: {
      required: true,
    },
  },
  methods:{
    passEvent()
    {
      this.$emit('changeTitle','Awesome')
    }
  }
};
</script>

<style scoped>
.menu-sitemap-tree {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 685px;
}
.file-system {
  background: rgb(253, 253, 253);
  border: 1px solid #ccc;
  padding: 10px;
  overflow: auto;
  height: 100%;
}
</style>
