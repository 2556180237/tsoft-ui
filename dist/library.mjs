import { openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, toDisplayString, pushScopeId, popScopeId } from 'vue';

var script$2 = {
  name: 'InputText'
};

const _hoisted_1$1 = { type: "text" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$2.render = render$2;
script$2.__file = "src/InputText.vue";

var script$1 = {
  name: 'InputTextarea'
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script$1.render = render$1;
script$1.__file = "src/InputTextarea.vue";

const reesters = {
    0: {
        num: '2222222/2222222/33333',
        changedDate: '14.02.2022 15:00:00',
        countGoods: 100,
        type: 'ПТДЭГ',
        IM: 'ИМ',
        amount: 300,
        certificateNumber: '1111/1111/1222/3',
        regNum: '2312321332432',
        archiveED: 'dfsfs',
        comment: 'fsdfsdfsdfsdfsdfsdf dsfdsf ',
        declarantName: 'Анастасия'
    },
    1: {
        num: '11111111/2222222/33333',
        changedDate: '14.02.2022 15:00:00',
        countGoods: 100,
        type: 'ПТДЭГ',
        IM: 'ИМ',
        amount: 111.2,
        certificateNumber: '1111/1111/1222/3',
        regNum: '2312321332432',
        archiveED: 'dfsfs',
        comment: 'fsdfsdfsdfsdfsdfsdf dsfdsf ',
        declarantName: 'Анастасия'
    },
    2: {
        num: '3333333/2222222/33333',
        changedDate: '14.02.2022 15:00:00',
        countGoods: 100,
        type: 'ПТДЭГ',
        IM: 'ИМ',
        amount: 234.2,
        certificateNumber: '1111/1111/1222/3',
        regNum: '2312321332432',
        archiveED: 'dfsfs',
        comment: 'fsdfsdfsdfsdfsdfsdf dsfdsf ',
        declarantName: 'Анастасия'
    },
    3: {
        num: '4444444/2222222/33333',
        changedDate: '14.02.2022 15:00:00',
        countGoods: 100,
        type: 'ПТДЭГ',
        IM: 'ИМ',
        amount: 34.3,
        certificateNumber: '1111/1111/1222/3',
        regNum: '2312321332432',
        archiveED: 'dfsfs',
        comment: 'fsdfsdfsdfsdfsdfsdf dsfdsf ',
        declarantName: 'Анастасия'
    }
};

var script = {
  name: "TsoftTable",
  data() {
    return {
      mode: undefined,
      table: null,
      leftScroll: false,
      reesters,
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
      if (this.mode === true) this.table.scrollLeft += 10;
      if (this.mode === false) {
        if (this.table.scrollLeft === 0) this.leftScroll = false;
        this.table.scrollLeft -= 10;
      }
    },
    stop() {
      this.mode = undefined;
    },
  },
};

const _withScopeId = n => (pushScopeId("data-v-647119ad"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "content col-md-9" };
const _hoisted_2 = { class: "row section" };
const _hoisted_3 = { class: "table-section" };
const _hoisted_4 = { class: "slider-block" };
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = { class: "table" };
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("thead", { class: "" }, [
  /*#__PURE__*/createElementVNode("tr", null, [
    /*#__PURE__*/createElementVNode("th", null, "Номер Документа"),
    /*#__PURE__*/createElementVNode("th", null, "Дата изменения"),
    /*#__PURE__*/createElementVNode("th", null, "Тов."),
    /*#__PURE__*/createElementVNode("th", null, "Тип"),
    /*#__PURE__*/createElementVNode("th", null, "ИМ..."),
    /*#__PURE__*/createElementVNode("th", null, "Суммар..."),
    /*#__PURE__*/createElementVNode("th", null, "! Номер свидетельства"),
    /*#__PURE__*/createElementVNode("th", null, "Регистр. номер"),
    /*#__PURE__*/createElementVNode("th", null, "Архив ЭД"),
    /*#__PURE__*/createElementVNode("th", null, "Коммент."),
    /*#__PURE__*/createElementVNode("th", null, "Декларант")
  ])
], -1 /* HOISTED */));
const _hoisted_11 = { class: "tbody" };
const _hoisted_12 = { class: "col-documentNumber" };
const _hoisted_13 = {
  class: "documentNumber",
  href: ""
};
const _hoisted_14 = { class: "col-date" };
const _hoisted_15 = { class: "col-product" };
const _hoisted_16 = { class: "col-type" };
const _hoisted_17 = { class: "col-IM" };
const _hoisted_18 = { class: "col-amount" };
const _hoisted_19 = { class: "col-certificateNumber" };
const _hoisted_20 = { class: "col-registryNumber" };
const _hoisted_21 = { class: "col-archive" };
const _hoisted_22 = { class: "col-comment" };
const _hoisted_23 = { class: "col-declarant" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", {
            class: normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6, 34 /* CLASS, HYDRATE_EVENTS */),
          createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8, 32 /* HYDRATE_EVENTS */)
        ]),
        createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[4] || (_cache[4] = (...args) => ($options.move && $options.move(...args)))
        }, [
          createElementVNode("table", _hoisted_9, [
            _hoisted_10,
            createElementVNode("tbody", _hoisted_11, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.reesters, (reester) => {
                return (openBlock(), createElementBlock("tr", {
                  class: "document-row",
                  key: reester
                }, [
                  createElementVNode("td", _hoisted_12, [
                    createElementVNode("a", _hoisted_13, [
                      createElementVNode("p", null, toDisplayString(reester.num), 1 /* TEXT */)
                    ])
                  ]),
                  createElementVNode("td", _hoisted_14, [
                    createElementVNode("p", null, toDisplayString(reester.changedDate), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_15, [
                    createElementVNode("p", null, toDisplayString(reester.countGoods), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_16, [
                    createElementVNode("p", null, toDisplayString(reester.type), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_17, [
                    createElementVNode("p", null, toDisplayString(reester.IM), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_18, [
                    createElementVNode("p", null, toDisplayString(reester.amount), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_19, [
                    createElementVNode("p", null, toDisplayString(reester.certificateNumber), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_20, [
                    createElementVNode("p", null, toDisplayString(reester.regNum), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_21, [
                    createElementVNode("p", null, toDisplayString(reester.archiveED), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_22, [
                    createElementVNode("p", null, toDisplayString(reester.comment), 1 /* TEXT */)
                  ]),
                  createElementVNode("td", _hoisted_23, [
                    createElementVNode("p", null, toDisplayString(reester.declarantName), 1 /* TEXT */)
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ], 32 /* HYDRATE_EVENTS */)
      ])
    ])
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.tbody td p[data-v-647119ad] {\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\n  border: 1px solid black;\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 10px;\n  width: auto;\n}\nth p[data-v-647119ad] {\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\n  border: 1px solid #ccc;\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\n  margin: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\n  font-size: 13px;\n  line-height: 18px;\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\n  color: #aaaaaa;\n  font-size: 12px;\n  line-height: 0 !important;\n  text-transform: uppercase;\n  border-top: 2px solid #e4e4e4;\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\n.table td[data-v-647119ad] {\n  margin: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table-section[data-v-647119ad] {\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\n  display: flex;\n  justify-content: space-between;\n  height: 0;\n  position: sticky;\n  top: 200px;\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\n  center left no-repeat;\n  position: absolute;\n  left: 0;\n}\n.control-next[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\n  center right no-repeat;\n  position: absolute;\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\n  color: black;\n}\n.t-folder[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-647119ad";
script.__file = "src/components/Table/Table.vue";

var components = { InputTextarea: script$1, InputText: script$2, TsoftTable: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
