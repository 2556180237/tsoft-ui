<template>
  <div class="menu-sitemap-tree">
    <div class="file-system">
      <tree-folder :tree-data="treeData" @getName="getName"/>
    </div>
  </div>
</template>

<script>
import TreeFolder from "../Tree/TreeFolder.vue";

export default {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFolder,
  },
  props: {
    treeData: {
      required: true,
    },
  },
  methods: {
    getName(name) {
      this.$emit('getName', name);
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
