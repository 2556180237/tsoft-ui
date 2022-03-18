<template>
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
};
</script>

<style scoped>
.menu-sitemap-tree {
  padding-top: 20px;
}
.file-system {
  background: rgb(253, 253, 253);
  border: 1px solid #ccc;
  padding: 10px;
  overflow: scroll;
}
</style>
