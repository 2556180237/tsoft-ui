<template>
  <tree-folder :tree-data="treeData" />
</template>

<script>
import TreeFolder from "./TreeFolder.vue";
export default {
  name: "TreeFileSystem",
  components: {
    TreeFolder,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};
</script>
