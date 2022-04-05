<template>
  <button type="button" @click='passEvent'> Update me</button>
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
  methods:{
    passEvent() {
      this.$emit('changeTitle1', 'yapp')
    }
  }
};
</script>
