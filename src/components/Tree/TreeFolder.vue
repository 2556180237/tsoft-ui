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
        <i class="fas fa-folder folder-icon" />
        <span class="folder-name" @click="getRegisters(folderName)">{{ folderName }}</span>
      </div>
      <div class="file-content"
           :class="{'content-open': folder.settings.isOpen}"
      >
        <tree-folder :tree-data="folder" v-show="folder.settings.isOpen"/>
      </div>
    </div>
    <tree-file
      v-for="(filename, filetype) in this.treeData.files"
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
    TreeFile
  },
  props: {
    treeData: {
      type: Object,
      required: false
    },
    someProps: {
      type: Object,
      required: false
    },
  },
  data() {
    return {
      info: '',
    }
  },
  methods: {
    toggle(name) {
      console.log(this.treeData);
      this.treeData.folders[name].settings.isOpen
        ? (this.treeData.folders[name].settings.isOpen =
            !this.treeData.folders[name].settings.isOpen)
        : (this.treeData.folders[name].settings.isOpen = true);
    },
    getRegisters(name) {
      if(this.treeData.folders[name].settings.isLink) {
        this.treeData.folders[name].name = name;
        alert(this.treeData.folders[name].name)
      } else {
        alert(2);
      }
    }
  },
  mounted() {
    // console.log(this.treeData.settings);
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
