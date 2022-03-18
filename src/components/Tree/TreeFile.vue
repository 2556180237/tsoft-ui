<template>
  <div class="file-row">
    <div class="file">
      <i class="fas fa-file" />
      <span class="file-name">{{ filename }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeFile",
  props: {
    filename: {
      required: true,
    },
  },
};
</script>

<style scoped>
.file-name:hover {
  color: #e67926;
}
.fa-file {
  color: #252525;
}
.file {
  margin-left: 18px;
  white-space: nowrap;
}
.file-name {
  margin-left: 9px;
}
.file-name {
  white-space: nowrap;
  cursor: pointer;
}
</style>
