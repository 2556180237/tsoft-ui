<template>
  <div class="content">
    <div class="row section">
      <div class="table-section">
        <div class="slider-block">
          <div
            class="control-prev btn-left"
            id="tableSliderLeft"
            data-bs-slide="prev"
            style="transform: translate3d(0px, 48px, 0px)"
            :class="{ active: this.leftScroll }"
            @mouseout="stop"
            @mouseover="moveLeft"
          >
            <span class="visually-hidden">Предыдущий</span>
          </div>
          <div
            class="control-next btn-right"
            id="tableSliderRight"
            data-bs-slide="next"
            style="transform: translate3d(0px, 48px, 0px)"
            @mouseout="stop"
            @mouseover="moveRight"
          >
            <span class="visually-hidden">Следующий</span>
          </div>
        </div>
        <div
          class="table-responsive table-statuses"
          id="tableResponsive"
          @scroll="move"
        >
          <table class="table">
            <thead class="thead">
              <tr>
                <th v-for="title in titles" :key="title">{{ title }}</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="document-row" v-for="(row, index) in rows" :key="index">
                <td v-for="(value, key) in row" :key="key">
                  <router-link :to="{name: 'declaration', params: {reester_id: index}}" v-if="key === 'num'">{{ value }}</router-link>
                  <p v-else>{{ value }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftTable",
  props: {
    titles: {
      type: Object,
      required: true,
    },
    rows: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mode: undefined,
      table: null,
      leftScroll: false,
    };
  },
  mounted() {
    this.setTable();
  },
  methods: {
    setTable() {
      this.table = document.querySelector("#tableResponsive");
      this.scrollLeftValue = this.table.scrollLeft;
    },
    moveLeft() {
      this.mode = false;
      this.move();
    },
    moveRight() {
      this.mode = true;
      this.leftScroll = true;
      this.move();
    },
    move() {
      if (this.mode === true) this.table.scrollLeft += 15;
      if (this.mode === false) {
        if (this.table.scrollLeft === 0) this.leftScroll = false;
        this.table.scrollLeft -= 15;
      }
    },
    stop() {
      this.mode = undefined;
    },
  },
};
</script>

<style lang="css" scoped>
a {
  color: #0D6247;
  font-weight: bold;
}
#tableResponsive {
  background: rgb(253, 253, 253);
  /*box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);*/
}
.content {
  padding: 10px 0 10px 10px;
}

.tbody td p {
  padding-bottom: 0;
}
thead th {
  border: 1px solid black;
  line-height: 0.5rem;
  min-width: 210px;
  margin-bottom: 10px;
  width: auto;
}
th p {
  line-height: 0.5rem;
  min-width: 210px;
  margin-bottom: 0;
}
.tbody tr td {
  border: 1px solid #ccc;
  padding: 1px;
}
.tbody tr td p {
  margin: 2px;
}
.tbody td div {
  white-space: nowrap;
}
.tbody tr td span {
  margin: 2px;
  white-space: nowrap;
  overflow: hidden;
}
.tableRow {
  font-size: 13px;
  line-height: 18px;
  color: #362518;
}
.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}
.tableContents {
  color: #aaaaaa;
  font-size: 12px;
  line-height: 0 !important;
  text-transform: uppercase;
  border-top: 2px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.tableRow > tr {
  border-bottom: 1px solid #eef2f7;
}
.table .tableContents {
  line-height: 10px !important;
}
.table th,
.table td {
  margin: 0.75rem;
  vertical-align: top;
  /* border: 1px solid #dee2e6; */
}
.table-section {
  padding-top: 200px;
}
.table-statuses {
  margin-top: -700px;
}
.table-responsive {
  min-height: 645px;
}
.slider-block {
  display: flex;
  justify-content: space-between;
  height: 0;
  position: sticky;
  top: 200px;
  margin-bottom: 500px;
}
.control-prev {
  z-index: 1;
  width: 50px;
  height: 100px;
  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;
  -webkit-transform: translate3d(0px, 48px, 0);
  -moz-transform: translate3d(0px, 48px, 0);
  -ms-transform: translate3d(0px, 48px, 0);
  -o-transform: translate3d(0px, 48px, 0);
  transform: translate3d(0px, 48px, 0);
  will-change: transform;
  display: none;
}
.control-prev.active {
  display: block;
}
.control-prev:hover {
  opacity: 0.8;
}
.btn-left {
  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)
    center left no-repeat;
  position: absolute;
  left: 0;
}
.control-next {
  z-index: 1;
  width: 50px;
  height: 100px;
  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;
  -webkit-transform: translate3d(0px, 48px, 0);
  -moz-transform: translate3d(0px, 48px, 0);
  -ms-transform: translate3d(0px, 48px, 0);
  -o-transform: translate3d(0px, 48px, 0);
  transform: translate3d(0px, 48px, 0);
  will-change: transform;
}
.control-next:hover {
  opacity: 0.8;
}
.btn-right {
  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)
    center right no-repeat;
  position: absolute;
  right: 0;
}
.back-anchor {
  text-decoration: unset;
}
.back-anchor span {
  color: black;
}
.t-folder {
  color: black;
  text-decoration: unset;
}
.t-folder:hover {
  color: #ff6633;
}
.fa-folder-open {
  color: #ff6633;
}
.documentNumber {
  color: black;
  text-decoration: unset;
}
.documentNumber:hover {
  color: #ff6633;
}
</style>
