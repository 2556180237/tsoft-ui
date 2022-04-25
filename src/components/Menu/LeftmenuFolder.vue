<template>
  <div class="menu-sitemap-tree">
    <div class="file-system">
      <transition name="fade" mode="out-in">
        <tsoft-preloader v-if="!folders"/>
        <tree-folder :tree-data="treeData" @getName="getName" v-else/>
      </transition>
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
  },
  computed: {
    folders() {
      return this.treeData ?? false;
    }
  }
};
</script>

<style scoped>
.menu-sitemap-tree {
  padding-top: 10px;
  padding-bottom: 5px;
  height: 660px;
  position: sticky;
}
.file-system {
  padding: 10px;
  overflow: auto;
  height: 100%;
}
</style>
