<template>
  <div class="content">
    <div class="section">
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
            v-show="isPropsEmpty"
          >
            <span class="visually-hidden">Следующий</span>
          </div>
        </div>
        <div
          class="table-responsive table-statuses"
          id="tableResponsive"
          @scroll="move"
        >
          <tsoft-preloader v-if="!isPropsEmpty" />
          <div v-else>
            <div class="search d-flex mb-2">
              <div class="mt-2">
                <i class="fa fa-search"></i>
              </div>
              <div class="ms-3">
                <input type="text" placeholder="Поиск" class="search-filter" />
              </div>
            </div>
            <table>
              <thead>
              <tr v-for="(row, index) in titles" :key="index">
                <td class="row-selector" @change="setSelectAll()">
                  <label>
                    <input type="checkbox" class="checkbox">
                    <span class="fake-checkbox"></span>
                  </label>
                </td>
                <td v-for="(title, index) in row" :key="index">
                  <div class="title-filter">
                    <div class="title">
                      <span>{{ title }}</span>
                    </div>
                    <div class="filter">
                      <i class="fa fa-caret-down" aria-hidden="true" />
                    </div>
                  </div>
                </td>
              </tr>
              </thead>
              <tbody @mouseleave="selectionStop">
              <tr class="document-row" v-for="(row, index) in rows" :key="index"
                  @mousedown="selectionStart" @mousemove="selection(index)" @mouseup="selectionStop"
                  @click="setSelectState(index)"
              >
                <td v-for="(value, key) in row" :key="key">
                  <router-link :to="{name: 'declaration', params: {reester_id: value}}" v-if="key === 'uuid'">
                    {{ value }}
                  </router-link>
                  <div class="row-selector" v-else-if="key === 'isSelected'">
                    <label>
                      <input type="checkbox" class="checkbox" :checked="value" @click="setSelectState(index)">
                      <span class="fake-checkbox"></span>
                    </label>
                  </div>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
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
      required: true
    },
    rows: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mode: undefined,
      table: null,
      leftScroll: false,
      isSelectedAll: false,
      selectingMode: false
    };
  },
  mounted() {
    this.setTable();
  },
  methods: {
    selection(index) {
      if (this.selectingMode) {
        this.setSelect(index);
      }
    },
    selectionStart() {
      this.selectingMode = true;
    },
    selectionStop() {
      this.selectingMode = false;
    },
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
      console.log(this.rows);
    },
    setSelectAll() {
      this.isSelectedAll = !this.isSelectedAll;
      for (let row in this.rows) {
        this.rows[row].isSelected = this.isSelectedAll;
      }
    },
    setSelectState(index) {
      this.rows[index].isSelected = !this.rows[index].isSelected;
    },
    setSelect(index) {
      this.rows[index].isSelected = true;
    }
  },
  computed: {
    isPropsEmpty() {
      return !!Object.keys(this.titles).length & !!Object.keys(this.rows).length;
    }
  }
};
</script>

<style scoped>
.row-selector {
  text-align: center;
  padding-top: 6px;
}

.section {
  position: relative;
}

a {
  color: black;
  text-decoration: unset;
}

a:hover {
  color: #0D6247;
  font-weight: bold;
}

.fa-search {
  color: #c4c4c4;
  font-size: 18px;
}

.search-filter {
  border-style: unset;
  padding: 5px;
  border-bottom: 1px solid #E4E4E4;
  box-shadow: unset;
  color: #000000;
}

.search-filter::placeholder {
  color: #c4c4c4;
}

.search-filter:focus {
  border-style: unset;
  box-shadow: unset;
  outline: unset;
  border-bottom: 1px solid #E4E4E4;
}

table {
  width: 100%;
}

thead {
  border: unset !important;
  font-size: 12px;
}

thead th {
  line-height: 0.5rem;
  margin-bottom: 10px;
  width: auto;
  white-space: nowrap;
}

th p {
  line-height: 0.5rem;
  min-width: 210px;
  margin-bottom: 0;
}

table tr {
  line-height: 30px;
  border-top: 1px solid #E4E4E4;
  border-bottom: 1px solid #E4E4E4;
}

thead tr > td {
  padding: 5px;
  color: #c4c4c4;
  text-transform: uppercase;
}

.title-filter {
  display: flex;
}

tbody {
  font-size: 13px;
  user-select: none;
}

tbody tr > td {
  padding: 5px;
}

.filter {
  margin-left: 5px;
  cursor: pointer;
}

.filter::before {

}

.content {
  padding: 10px 0 10px 0;
}

.tbody td p {
  padding-bottom: 0;
}


.tbody tr td {
  padding: 1px;
  white-space: nowrap;
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

.table td {
  margin: 0.75rem;
  vertical-align: center;
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
  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E) center left no-repeat;
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
  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A) center right no-repeat;
  position: absolute;
  right: 0;
}

.back-anchor span {
  color: black;
}

.checkbox {
  display: none;
}

.fake-checkbox {
  border-radius: 20px;
  display: inline-block;
  border: 1px solid #AAAAAA;
  width: 20px;
  height: 20px;
}

.fake-checkbox::before {
  content: "";
  position: relative;
  display: block;
  width: 12px;
  height: 12px;
  background-color: #E67926;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0;
  transition: 0.2s;
  border-radius: 20px;
}

.checkbox:checked + .fake-checkbox::before {
  opacity: 1;
}
</style>
