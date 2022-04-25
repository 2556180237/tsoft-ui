<template>
  <div class="folder-row">
    <div
      class="folder"
      v-for="(folder, folderName) in this.treeData.folders"
      :key="folderName"
    >
      <div class="folder-container">
        <i
          class="fa-solid fa-angle-right"
          @click="toggle(folderName)"
          :class="{'down-rotate': folder.settings.isOpen}"
        />
        <span class="folder-name" @click="sendName(folderName)">{{ folderName }}</span>
      </div>
      <div class="file-content"
           :class="{'content-open': folder.settings.isOpen}"
      >
        <tree-folder :tree-data="folder" v-show="folder.settings.isOpen" @getName="getName" />
      </div>
    </div>
  </div>
</template>
<script>
import TreeFile from "./TreeFile.vue";

export default {
  name: "TreeFolder",
  components: {
    TreeFile
  },
  props: {
    treeData: {
      type: Object,
      required: false
    }
  },
  methods: {
    toggle(name) {
      this.treeData.folders[name].settings.isOpen
        ? (this.treeData.folders[name].settings.isOpen =
          !this.treeData.folders[name].settings.isOpen)
        : (this.treeData.folders[name].settings.isOpen = true);
    },
    sendName(name) {
      this.$emit("getName", name);
    },
    getName(name) {
      this.$emit("getName", name);
    }
  }
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
  height: 0;
  overflow: unset;
  opacity: 0;
  transition: all 0s;
}

.content-open {
  height: fit-content;
  overflow: unset;
  opacity: 1;
  transition: all 0.5s;
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
  font-size: 20px;
  font-weight: bold;
}

.folder-name:hover {
  color: #e67926;
}

.fa-angle-right {
  color: #e67926;
  margin-right: 7px;
  cursor: pointer;
  font-size: 16px;
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
