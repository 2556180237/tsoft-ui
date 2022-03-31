<template>
  <div class="folder-row">
    <div
      class="folder"
      v-for="(children, folderName) in dataFiles.folders"
      :key="folderName"
    >
      <div class="folder-container">
        <i
          class="fa-solid fa-angle-right"
          @click="toggle(folderName)"
          :class="{
            'down-rotate': children.isOpen,
          }"
        />
        <i class="fas fa-folder folder-icon" />
        <span class="folder-name"> {{ folderName }} </span>
      </div>
      <div class="file-content" :class="{ 'content-open': children.isOpen }">
        <tree-folder :treeData="children" />
      </div>
    </div>
    <tree-file
      v-for="(filename, filetype) in dataFiles.files"
      :filename="filename"
      :key="filetype"
    />
  </div>
</template>
<script>
import TreeFile from "./TreeFile.vue";
export default {
  name: "TreeFolder",
  components: {
    TreeFile,
  },
  props: {
    treeData: {
      required: true,
    },
  },
  data() {
    return {
      dataFiles: this.treeData,
    };
  },
  methods: {
    toggle(name) {
      this.dataFiles.folders[name].isOpen
        ? (this.dataFiles.folders[name].isOpen =
            !this.dataFiles.folders[name].isOpen)
        : (this.dataFiles.folders[name].isOpen = true);
    },
  },
};
</script>

<style scoped>
.toggle-icon {
  height: 16px;
  width: 8px;
  display: flex;
}
.file-content {
  padding-left: 21px;
  margin-right: -20px;
  height: 0px;
  overflow: unset;
  opacity: 0;
  transition: 0s;
}
.content-open {
  height: fit-content;
  overflow: unset;
  opacity: 1;
  transition: 0.5s;
}
.folder-container {
  white-space: nowrap;
}
.folder-container.empty {
  margin-left: 15px;
}
.folder-row {
  width: fit-content;
}
.folder-name {
  white-space: nowrap;
  cursor: pointer;
}
.folder-name:hover {
  color: #e67926;
}
.fa-angle-right {
  color: rgb(190, 190, 190);
  margin-right: 7px;
  cursor: pointer;
}
.fa-angle-right {
  transition: 0.15s;
}
.fa-angle-right.down-rotate {
  transform: rotate(90deg);
  transition: 0.15s;
}
.fa-folder {
  color: #e67926;
  margin-right: 7px;
}
</style>
