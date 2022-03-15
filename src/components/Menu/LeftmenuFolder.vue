<template>
  <div class="menu-sitemap-tree">
    <div class="file-system">
      <!-- region Папка -->
      <div class="folder-row">
        <div class="folder">
          <!-- region строка папки (переключатель, иконка, название) -->
          <div class="folder-container">
            <i class="fa-solid fa-angle-down" />
            <i class="fas fa-folder folder-icon" />
            <span class="folder-name">Папка с файлами</span>
          </div>
          <!-- endregion cтрока папки -->

          <!-- region содержимое папки -->
          <div class="file-content">
            <div class="folder">
              <div class="folder-container">
                <i class="fa-solid fa-angle-down" />
                <i class="fas fa-folder folder-icon" />
                <span class="folder-name">Папка с файлами</span>
              </div>
              <!-- region содержимое подпапки -->
              <div class="file-content">
                <div class="file">
                  <i class="fas fa-file" />
                  <span class="file-name">Название файла</span>
                </div>
              </div>
              <!-- endregion содержимое подпапки -->
            </div>
          </div>
          <!-- endregion содержимое папки -->
        </div>
      </div>
      <!-- endregion папка -->

      <!-- region обычный файл в корне -->
      <div class="file-row">
        <div class="file">
          <i class="fas fa-file" />
          <span class="file-name">Название файла</span>
        </div>
      </div>
      <!-- endregion обычный файл в корне -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftLeftmenuFolder",
};
</script>

<style scoped>
.menu-sitemap-tree {
  padding-top: 20px;
}
.file-system {
  background: rgb(253, 253, 253);
  /* box-shadow: inset 1px 1px 5px 1px rgb(0 0 0 / 10%); */
  border: 1px solid #ccc;
  padding: 10px;
  overflow: scroll;
}
.folder-container {
  white-space: nowrap;
}
.folder-name,
.file-name {
  white-space: nowrap;
  cursor: pointer;
}
.folder-name:hover,
.file-name:hover {
  color: #e67926;
}
.fa-file {
  color: #252525;
}
.fa-angle-right,
.fa-angle-down {
  color: rgb(190, 190, 190);
  margin-right: 7px;
  cursor: pointer;
}
.file {
  margin-left: 21px;
  white-space: nowrap;
}
.fa-folder {
  color: #e67926;
  margin-right: 7px;
}
.file-name {
  margin-left: 9px;
}
.file-content {
  padding-left: 21px;
  margin-right: -20px;
}
</style>
