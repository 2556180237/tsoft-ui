'use strict';

var vue = require('vue');

var script$i = {
  name: 'InputText'
};

const _hoisted_1$h = { type: "text" };

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$h))
}

script$i.render = render$i;
script$i.__file = "src/InputText.vue";

var script$h = {
  name: 'InputTextarea'
};

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}

script$h.render = render$h;
script$h.__file = "src/InputTextarea.vue";

var script$g = {
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

const _withScopeId$4 = n => (vue.pushScopeId("data-v-647119ad"),n=n(),vue.popScopeId(),n);
const _hoisted_1$g = { class: "content" };
const _hoisted_2$g = { class: "section" };
const _hoisted_3$d = { class: "table-section" };
const _hoisted_4$9 = { class: "slider-block" };
const _hoisted_5$8 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6$6 = [
  _hoisted_5$8
];
const _hoisted_7$5 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8$5 = [
  _hoisted_7$5
];
const _hoisted_9$5 = { key: 1 };
const _hoisted_10$5 = /*#__PURE__*/vue.createStaticVNode("<div class=\"search d-flex mb-2\" data-v-647119ad><div class=\"mt-2\" data-v-647119ad><i class=\"fa fa-search\" data-v-647119ad></i></div><div class=\"ms-3\" data-v-647119ad><input type=\"text\" placeholder=\"Поиск\" class=\"search-filter\" data-v-647119ad></div></div>", 1);
const _hoisted_11$4 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/vue.createElementVNode("label", null, [
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "checkbox",
    class: "checkbox"
  }),
  /*#__PURE__*/vue.createElementVNode("span", { class: "fake-checkbox" })
], -1 /* HOISTED */));
const _hoisted_12$4 = [
  _hoisted_11$4
];
const _hoisted_13$5 = { class: "title-filter" };
const _hoisted_14$5 = { class: "title" };
const _hoisted_15$4 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/vue.createElementVNode("div", { class: "filter" }, [
  /*#__PURE__*/vue.createElementVNode("i", {
    class: "fa fa-caret-down",
    "aria-hidden": "true"
  })
], -1 /* HOISTED */));
const _hoisted_16$4 = ["onMousemove", "onClick"];
const _hoisted_17$5 = {
  key: 1,
  class: "row-selector"
};
const _hoisted_18$4 = ["checked", "onClick"];
const _hoisted_19$4 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/vue.createElementVNode("span", { class: "fake-checkbox" }, null, -1 /* HOISTED */));
const _hoisted_20$4 = { key: 2 };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");
  const _component_router_link = vue.resolveComponent("router-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
    vue.createElementVNode("div", _hoisted_2$g, [
      vue.createElementVNode("div", _hoisted_3$d, [
        vue.createElementVNode("div", _hoisted_4$9, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6$6, 34 /* CLASS, HYDRATE_EVENTS */),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8$5, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue.vShow, $options.isPropsEmpty]
          ])
        ]),
        vue.createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[8] || (_cache[8] = (...args) => ($options.move && $options.move(...args)))
        }, [
          (!$options.isPropsEmpty)
            ? (vue.openBlock(), vue.createBlock(_component_tsoft_preloader, { key: 0 }))
            : (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$5, [
                _hoisted_10$5,
                vue.createElementVNode("table", null, [
                  vue.createElementVNode("thead", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titles, (row, index) => {
                      return (vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
                        vue.createElementVNode("td", {
                          class: "row-selector",
                          onChange: _cache[4] || (_cache[4] = $event => ($options.setSelectAll()))
                        }, _hoisted_12$4, 32 /* HYDRATE_EVENTS */),
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (title, index) => {
                          return (vue.openBlock(), vue.createElementBlock("td", { key: index }, [
                            vue.createElementVNode("div", _hoisted_13$5, [
                              vue.createElementVNode("div", _hoisted_14$5, [
                                vue.createElementVNode("span", null, vue.toDisplayString(title), 1 /* TEXT */)
                              ]),
                              _hoisted_15$4
                            ])
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  vue.createElementVNode("tbody", {
                    onMouseleave: _cache[7] || (_cache[7] = (...args) => ($options.selectionStop && $options.selectionStop(...args)))
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rows, (row, index) => {
                      return (vue.openBlock(), vue.createElementBlock("tr", {
                        class: "document-row",
                        key: index,
                        onMousedown: _cache[5] || (_cache[5] = (...args) => ($options.selectionStart && $options.selectionStart(...args))),
                        onMousemove: $event => ($options.selection(index)),
                        onMouseup: _cache[6] || (_cache[6] = (...args) => ($options.selectionStop && $options.selectionStop(...args))),
                        onClick: $event => ($options.setSelectState(index))
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (value, key) => {
                          return (vue.openBlock(), vue.createElementBlock("td", { key: key }, [
                            (key === 'uuid')
                              ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                                  key: 0,
                                  to: {name: 'declaration', params: {reester_id: value}}
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(vue.toDisplayString(value), 1 /* TEXT */)
                                  ]),
                                  _: 2 /* DYNAMIC */
                                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                              : (key === 'isSelected')
                                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17$5, [
                                    vue.createElementVNode("label", null, [
                                      vue.createElementVNode("input", {
                                        type: "checkbox",
                                        class: "checkbox",
                                        checked: value,
                                        onClick: $event => ($options.setSelectState(index))
                                      }, null, 8 /* PROPS */, _hoisted_18$4),
                                      _hoisted_19$4
                                    ])
                                  ]))
                                : (vue.openBlock(), vue.createElementBlock("span", _hoisted_20$4, vue.toDisplayString(value), 1 /* TEXT */))
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_16$4))
                    }), 128 /* KEYED_FRAGMENT */))
                  ], 32 /* HYDRATE_EVENTS */)
                ])
              ]))
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

var css_248z$d = "\n.row-selector[data-v-647119ad] {\r\n  text-align: center;\r\n  padding-top: 6px;\n}\n.section[data-v-647119ad] {\r\n  position: relative;\n}\na[data-v-647119ad] {\r\n  color: black;\r\n  text-decoration: unset;\n}\na[data-v-647119ad]:hover {\r\n  color: #0D6247;\r\n  font-weight: bold;\n}\n.fa-search[data-v-647119ad] {\r\n  color: #c4c4c4;\r\n  font-size: 18px;\n}\n.search-filter[data-v-647119ad] {\r\n  border-style: unset;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #E4E4E4;\r\n  box-shadow: unset;\r\n  color: #000000;\n}\n.search-filter[data-v-647119ad]::placeholder {\r\n  color: #c4c4c4;\n}\n.search-filter[data-v-647119ad]:focus {\r\n  border-style: unset;\r\n  box-shadow: unset;\r\n  outline: unset;\r\n  border-bottom: 1px solid #E4E4E4;\n}\ntable[data-v-647119ad] {\r\n  width: 100%;\n}\nthead[data-v-647119ad] {\r\n  border: unset !important;\r\n  font-size: 12px;\n}\nthead th[data-v-647119ad] {\r\n  line-height: 0.5rem;\r\n  margin-bottom: 10px;\r\n  width: auto;\r\n  white-space: nowrap;\n}\nth p[data-v-647119ad] {\r\n  line-height: 0.5rem;\r\n  min-width: 210px;\r\n  margin-bottom: 0;\n}\ntable tr[data-v-647119ad] {\r\n  line-height: 30px;\r\n  border-top: 1px solid #E4E4E4;\r\n  border-bottom: 1px solid #E4E4E4;\n}\nthead tr > td[data-v-647119ad] {\r\n  padding: 5px;\r\n  color: #c4c4c4;\r\n  text-transform: uppercase;\n}\n.title-filter[data-v-647119ad] {\r\n  display: flex;\n}\ntbody[data-v-647119ad] {\r\n  font-size: 13px;\r\n  user-select: none;\n}\ntbody tr > td[data-v-647119ad] {\r\n  padding: 5px;\n}\n.filter[data-v-647119ad] {\r\n  margin-left: 5px;\r\n  cursor: pointer;\n}\n.filter[data-v-647119ad]::before {\n}\n.content[data-v-647119ad] {\r\n  padding: 10px 0 10px 0;\n}\n.tbody td p[data-v-647119ad] {\r\n  padding-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\r\n  padding: 1px;\r\n  white-space: nowrap;\n}\n.tbody tr td p[data-v-647119ad] {\r\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\r\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\r\n  margin: 2px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\n}\n.table td[data-v-647119ad] {\r\n  margin: 0.75rem;\r\n  vertical-align: center;\n}\n.table-section[data-v-647119ad] {\r\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\r\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\r\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 0;\r\n  position: sticky;\r\n  top: 200px;\r\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 100px;\r\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\r\n  -webkit-transform: translate3d(0px, 48px, 0);\r\n  -moz-transform: translate3d(0px, 48px, 0);\r\n  -ms-transform: translate3d(0px, 48px, 0);\r\n  -o-transform: translate3d(0px, 48px, 0);\r\n  transform: translate3d(0px, 48px, 0);\r\n  will-change: transform;\r\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\r\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\r\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\r\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E) center left no-repeat;\r\n  position: absolute;\r\n  left: 0;\n}\n.control-next[data-v-647119ad] {\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 100px;\r\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\r\n  -webkit-transform: translate3d(0px, 48px, 0);\r\n  -moz-transform: translate3d(0px, 48px, 0);\r\n  -ms-transform: translate3d(0px, 48px, 0);\r\n  -o-transform: translate3d(0px, 48px, 0);\r\n  transform: translate3d(0px, 48px, 0);\r\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\r\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\r\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A) center right no-repeat;\r\n  position: absolute;\r\n  right: 0;\n}\n.back-anchor span[data-v-647119ad] {\r\n  color: black;\n}\n.checkbox[data-v-647119ad] {\r\n  display: none;\n}\n.fake-checkbox[data-v-647119ad] {\r\n  border-radius: 20px;\r\n  display: inline-block;\r\n  border: 1px solid #AAAAAA;\r\n  width: 20px;\r\n  height: 20px;\n}\n.fake-checkbox[data-v-647119ad]::before {\r\n  content: \"\";\r\n  position: relative;\r\n  display: block;\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: #E67926;\r\n  transform: translate(-50%, -50%);\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  transition: 0.2s;\r\n  border-radius: 20px;\n}\n.checkbox:checked + .fake-checkbox[data-v-647119ad]::before {\r\n  opacity: 1;\n}\r\n";
styleInject(css_248z$d);

script$g.render = render$g;
script$g.__scopeId = "data-v-647119ad";
script$g.__file = "src/components/Table/Table.vue";

var script$f = {
  name: "node",
  props: {
    node: Object,
  },
};

const _hoisted_1$f = { class: "node-tree" };
const _hoisted_2$f = { class: "label" };
const _hoisted_3$c = { key: 0 };

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = vue.resolveComponent("node");

  return (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$f, [
    vue.createElementVNode("span", _hoisted_2$f, vue.toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_3$c, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.node.children, (child) => {
            return (vue.openBlock(), vue.createBlock(_component_node, {
              node: child,
              key: child
            }, null, 8 /* PROPS */, ["node"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}

script$f.render = render$f;
script$f.__file = "src/components/Tree/NodeTreeMenu.vue";

var script$e = {
  props: {
    folders: {
      type: Object
    },
    folderName: {
      type: String
    }
  },
  components: {
    NodeTree: script$f
  }
};

const _hoisted_1$e = { class: "tree" };
const _hoisted_2$e = { class: "tree-list" };

function render$e(_ctx, _cache) {
  const _component_node_tree = vue.resolveComponent("node-tree");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
    vue.createElementVNode("ul", _hoisted_2$e, [
      vue.createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$c = "\n.tree-list ul {\r\n  padding-left: 16px;\r\n  margin: 6px 0;\n}\r\n";
styleInject(css_248z$c);

script$e.render = render$e;
script$e.__file = "src/components/Tree/TreeMenu.vue";

var script$d = {
  name: "TreeFile",
  props: {
    filename: {
      required: true,
    },
  },
};

const _withScopeId$3 = n => (vue.pushScopeId("data-v-f314cfaa"),n=n(),vue.popScopeId(),n);
const _hoisted_1$d = { class: "file-row" };
const _hoisted_2$d = { class: "file" };
const _hoisted_3$b = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-file" }, null, -1 /* HOISTED */));
const _hoisted_4$8 = { class: "file-name" };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
    vue.createElementVNode("div", _hoisted_2$d, [
      _hoisted_3$b,
      vue.createElementVNode("span", _hoisted_4$8, vue.toDisplayString($props.filename), 1 /* TEXT */)
    ])
  ]))
}

var css_248z$b = "\n.file-name[data-v-f314cfaa]:hover {\r\n  color: #e67926;\n}\n.fa-file[data-v-f314cfaa] {\r\n  color: #252525;\n}\n.file[data-v-f314cfaa] {\r\n  margin-left: 18px;\r\n  white-space: nowrap;\n}\n.file-name[data-v-f314cfaa] {\r\n  margin-left: 9px;\n}\n.file-name[data-v-f314cfaa] {\r\n  white-space: nowrap;\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z$b);

script$d.render = render$d;
script$d.__scopeId = "data-v-f314cfaa";
script$d.__file = "src/components/Tree/TreeFile.vue";

var script$c = {
  name: "TreeFolder",
  components: {
    TreeFile: script$d
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

const _hoisted_1$c = { class: "folder-row" };
const _hoisted_2$c = { class: "folder-container" };
const _hoisted_3$a = ["onClick"];
const _hoisted_4$7 = ["onClick"];

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = vue.resolveComponent("tree-folder", true);

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.treeData.folders, (folder, folderName) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: "folder",
        key: folderName
      }, [
        vue.createElementVNode("div", _hoisted_2$c, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(["fa-solid fa-angle-right", {'down-rotate': folder.settings.isOpen}]),
            onClick: $event => ($options.toggle(folderName))
          }, null, 10 /* CLASS, PROPS */, _hoisted_3$a),
          vue.createElementVNode("span", {
            class: "folder-name",
            onClick: $event => ($options.sendName(folderName))
          }, vue.toDisplayString(folderName), 9 /* TEXT, PROPS */, _hoisted_4$7)
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["file-content", {'content-open': folder.settings.isOpen}])
        }, [
          vue.withDirectives(vue.createVNode(_component_tree_folder, {
            "tree-data": folder,
            onGetName: $options.getName
          }, null, 8 /* PROPS */, ["tree-data", "onGetName"]), [
            [vue.vShow, folder.settings.isOpen]
          ])
        ], 2 /* CLASS */)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

var css_248z$a = "\n.toggle-icon[data-v-61a6cc5d] {\r\n  height: 16px;\r\n  width: 8px;\r\n  display: flex;\n}\n.file-content[data-v-61a6cc5d] {\r\n  padding-left: 21px;\r\n  margin-right: -20px;\r\n  height: 0;\r\n  overflow: unset;\r\n  opacity: 0;\r\n  transition: all 0s;\n}\n.content-open[data-v-61a6cc5d] {\r\n  height: fit-content;\r\n  overflow: unset;\r\n  opacity: 1;\r\n  transition: all 0.5s;\n}\n.folder-container[data-v-61a6cc5d] {\r\n  white-space: nowrap;\n}\n.folder-container.empty[data-v-61a6cc5d] {\r\n  margin-left: 15px;\n}\n.folder-row[data-v-61a6cc5d] {\r\n  width: fit-content;\n}\n.folder-name[data-v-61a6cc5d] {\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: bold;\n}\n.folder-name[data-v-61a6cc5d]:hover {\r\n  color: #e67926;\n}\n.fa-angle-right[data-v-61a6cc5d] {\r\n  color: #e67926;\r\n  margin-right: 7px;\r\n  cursor: pointer;\r\n  font-size: 16px;\n}\n.fa-angle-right[data-v-61a6cc5d] {\r\n  transition: 0.15s;\n}\n.fa-angle-right.down-rotate[data-v-61a6cc5d] {\r\n  transform: rotate(90deg);\r\n  transition: 0.15s;\n}\n.fa-folder[data-v-61a6cc5d] {\r\n  color: #e67926;\r\n  margin-right: 7px;\n}\r\n";
styleInject(css_248z$a);

script$c.render = render$c;
script$c.__scopeId = "data-v-61a6cc5d";
script$c.__file = "src/components/Tree/TreeFolder.vue";

var script$b = {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFolder: script$c,
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

const _hoisted_1$b = { class: "menu-sitemap-tree" };
const _hoisted_2$b = { class: "file-system" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");
  const _component_tree_folder = vue.resolveComponent("tree-folder");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
    vue.createElementVNode("div", _hoisted_2$b, [
      vue.createVNode(vue.Transition, {
        name: "fade",
        mode: "out-in"
      }, {
        default: vue.withCtx(() => [
          (!$options.folders)
            ? (vue.openBlock(), vue.createBlock(_component_tsoft_preloader, { key: 0 }))
            : (vue.openBlock(), vue.createBlock(_component_tree_folder, {
                key: 1,
                "tree-data": $props.treeData,
                onGetName: $options.getName
              }, null, 8 /* PROPS */, ["tree-data", "onGetName"]))
        ]),
        _: 1 /* STABLE */
      })
    ])
  ]))
}

var css_248z$9 = "\n.menu-sitemap-tree[data-v-647b20c4] {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n  height: 660px;\r\n  position: sticky;\n}\n.file-system[data-v-647b20c4] {\r\n  padding: 10px;\r\n  overflow: auto;\r\n  height: 100%;\n}\r\n";
styleInject(css_248z$9);

script$b.render = render$b;
script$b.__scopeId = "data-v-647b20c4";
script$b.__file = "src/components/Menu/LeftmenuFolder.vue";

var script$a = {
  name: "TsoftGeneralDeclarationForm",
  props: {
    awbInfo: {
      required: false
    },
    registry: {
      required: false
    }
  },
  computed: {
    isDeclarationExist() {
      return !!Object.keys(this.registry).length;
    }
  }
};

const _hoisted_1$a = {
  class: "declaration mb-3",
  id: "declaration"
};
const _hoisted_2$a = { key: 1 };
const _hoisted_3$9 = { class: "common-inf" };
const _hoisted_4$6 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, null, -1 /* HOISTED */);
const _hoisted_5$7 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "inf-block" }, [
    /*#__PURE__*/vue.createElementVNode("h4", { class: "declaration-title" }, " Декларация на товары и пассажирская таможенная декларация для экспресс-грузов ")
  ])
], -1 /* HOISTED */);
const _hoisted_6$5 = { class: "row" };
const _hoisted_7$4 = { class: "inf-block row col-12 justify-content-between" };
const _hoisted_8$4 = { class: "checkbox-block d-flex col-2" };
const _hoisted_9$4 = { class: "checkbox-bg col-2" };
const _hoisted_10$4 = ["checked"];
const _hoisted_11$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ДТЭГ")
], -1 /* HOISTED */);
const _hoisted_12$3 = { class: "checkbox-bg col-2" };
const _hoisted_13$4 = ["checked"];
const _hoisted_14$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ПТДЭГ")
], -1 /* HOISTED */);
const _hoisted_15$3 = { class: "checkbox-block d-flex col-2" };
const _hoisted_16$3 = { class: "checkbox-bg col-2" };
const _hoisted_17$4 = ["checked"];
const _hoisted_18$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ИМ")
], -1 /* HOISTED */);
const _hoisted_19$3 = { class: "checkbox-bg col-2" };
const _hoisted_20$3 = ["checked"];
const _hoisted_21$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ЭК")
], -1 /* HOISTED */);
const _hoisted_22$3 = { class: "declaration-number-block justify-content-end d-flex col-5" };
const _hoisted_23$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "№")
], -1 /* HOISTED */);
const _hoisted_24$3 = { class: "input-bg col-10" };
const _hoisted_25$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3" }, null, -1 /* HOISTED */);
const _hoisted_26$3 = { class: "row" };
const _hoisted_27$3 = { class: "inf-block row col-12" };
const _hoisted_28$3 = { class: "inputs-group d-flex col-2" };
const _hoisted_29$3 = { class: "col-2" };
const _hoisted_30$3 = { class: "col-2" };
const _hoisted_31$3 = { class: "col-3" };
const _hoisted_32$3 = { class: "col-2" };
const _hoisted_33$3 = { class: "sheets-block d-flex col-2" };
const _hoisted_34$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "Листов")
], -1 /* HOISTED */);
const _hoisted_35$3 = { class: "input-bg col-8" };
const _hoisted_36$3 = { class: "registry-number-block d-flex justify-content-end col-5" };
const _hoisted_37$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", { for: "registryNumber" }, "Рег. №")
], -1 /* HOISTED */);
const _hoisted_38$3 = { class: "input-bg col-10" };
const _hoisted_39$3 = { class: "registry-changes d-flex col-3" };
const _hoisted_40$3 = { class: "input-bg" };
const _hoisted_41$3 = /*#__PURE__*/vue.createElementVNode("label", null, "- реестр с внесёнными изменениями", -1 /* HOISTED */);
const _hoisted_42$3 = { class: "row" };
const _hoisted_43$3 = { class: "inf-block d-grid" };
const _hoisted_44$3 = { class: "row col-12" };
const _hoisted_45$3 = { class: "col-6" };
const _hoisted_46$3 = /*#__PURE__*/vue.createElementVNode("label", { class: "express-courier-label" }, "Экспресс перевозчик", -1 /* HOISTED */);
const _hoisted_47$3 = { class: "express-courier-block col-12 d-flex" };
const _hoisted_48$3 = { class: "col-1" };
const _hoisted_49$3 = { class: "col-11" };
const _hoisted_50$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_51$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
    /*#__PURE__*/vue.createElementVNode("p", null, " Регистрационный номер декларации, в которую вносятся изменения ")
  ])
], -1 /* HOISTED */);
const _hoisted_52$3 = { class: "row col-12" };
const _hoisted_53$3 = { class: "col-6" };
const _hoisted_54$3 = { class: "" };
const _hoisted_55$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
  /*#__PURE__*/vue.createElementVNode("h4", null, "Свидетельство о включении в"),
  /*#__PURE__*/vue.createElementVNode("p", null, " реестр УЭО, реестр владельцев СВХ, складов хранения собственных товаров, таможенных складов, свободных складов или магазинов БТ ")
], -1 /* HOISTED */);
const _hoisted_56$3 = { class: "certificate-block row col-12" };
const _hoisted_57$3 = { class: "input-bg col-1" };
const _hoisted_58$3 = { class: "input-bg col-1" };
const _hoisted_59$3 = { class: "input-bg col-7" };
const _hoisted_60$3 = { class: "input-bg col-1" };
const _hoisted_61$3 = { class: "input-bg col-1" };
const _hoisted_62$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_63$3 = { class: "col-5" };
const _hoisted_64$3 = {
  class: "changing-declaration",
  action: ""
};
const _hoisted_65$3 = { class: "inf-block row" };
const _hoisted_66$3 = { class: "col-3 input-bg" };
const _hoisted_67$3 = { class: "col-4 input-bg" };
const _hoisted_68$3 = { class: "col-3 input-bg" };
const _hoisted_69$3 = { class: "col-1 input-bg" };
const _hoisted_70$3 = { class: "inf-block changing-code row" };
const _hoisted_71$3 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_72$3 = { class: "col-8 d-flex" };
const _hoisted_73$3 = { class: "col input-bg" };
const _hoisted_74$3 = { class: "col input-bg" };
const _hoisted_75$3 = { class: "col input-bg" };
const _hoisted_76$3 = { class: "col input-bg" };
const _hoisted_77$3 = { class: "col input-bg" };
const _hoisted_78$3 = { class: "col input-bg" };
const _hoisted_79$3 = { class: "col input-bg" };
const _hoisted_80$3 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_81$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-4" }, null, -1 /* HOISTED */);
const _hoisted_82$3 = { class: "row" };
const _hoisted_83$3 = { class: "inf-block" };
const _hoisted_84$3 = /*#__PURE__*/vue.createElementVNode("h4", null, "Товарная партия", -1 /* HOISTED */);
const _hoisted_85$3 = {
  action: "",
  class: "batch-form row"
};
const _hoisted_86$3 = { class: "col-3 inf-block" };
const _hoisted_87$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "row inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, " общая сумма таможенных и иных платежей, подлежащих уплате по декларации ")
], -1 /* HOISTED */);
const _hoisted_88$3 = { class: "batch-block row" };
const _hoisted_89$2 = { class: "col-10" };
const _hoisted_90$2 = { class: "col-2" };
const _hoisted_91$2 = { class: "col-3 inf-block" };
const _hoisted_92$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общая стоимость", -1 /* HOISTED */);
const _hoisted_93$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ПТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_94$2 = { class: "batch-block row" };
const _hoisted_95$2 = { class: "col-9" };
const _hoisted_96$2 = { class: "col-3" };
const _hoisted_97$2 = { class: "col-3 inf-block" };
const _hoisted_98$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_99$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_100$2 = { class: "batch-block row" };
const _hoisted_101$2 = { class: "col-6" };
const _hoisted_102$2 = { class: "col-3" };
const _hoisted_103$2 = { class: "col-3" };
const _hoisted_104$2 = { class: "col-3 inf-block" };
const _hoisted_105$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_106$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ДТ для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_107$1 = { class: "batch-block row" };
const _hoisted_108$1 = { class: "col-9" };
const _hoisted_109$1 = { class: "col-3" };
const _hoisted_110$1 = { class: "sender-common-inf" };
const _hoisted_111$1 = { class: "row" };
const _hoisted_112$1 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedSenderInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedSenderInfo"
}, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/vue.createElementVNode("span", null, "ОТПРАВИТЕЛЬ по общей накладной"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-caret-up" })
  ])
], -1 /* HOISTED */);
const _hoisted_113$1 = {
  class: "collapse",
  id: "collapsedSenderInfo"
};
const _hoisted_114$1 = { class: "card card-body" };
const _hoisted_115$1 = { class: "row" };
const _hoisted_116$1 = { class: "sender-name" };
const _hoisted_117$1 = { class: "row form my-2" };
const _hoisted_118$1 = { class: "col-8" };
const _hoisted_119$1 = { class: "input-bg" };
const _hoisted_120$1 = { class: "col-1" };
const _hoisted_121$1 = { class: "input-bg" };
const _hoisted_122$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_123$1 = { class: "col-2 d-flex" };
const _hoisted_124$1 = { class: "input-bg col-2" };
const _hoisted_125$1 = ["checked"];
const _hoisted_126$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_127$1 = { class: "row my-2" };
const _hoisted_128$1 = { class: "col-5" };
const _hoisted_129$1 = { class: "input-bg" };
const _hoisted_130$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_131$1 = { class: "col-4 d-flex" };
const _hoisted_132$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_133$1 = { class: "input-bg col-10" };
const _hoisted_134$1 = { class: "col-3 d-flex" };
const _hoisted_135$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_136$1 = { class: "input-bg col-10" };
const _hoisted_137$1 = { class: "col-3 d-flex" };
const _hoisted_138$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_139$1 = { class: "input-bg col-10" };
const _hoisted_140$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_141$1 = { class: "row" };
const _hoisted_142$1 = { class: "sender-address" };
const _hoisted_143$1 = { class: "row my-2" };
const _hoisted_144$1 = { class: "d-flex sender-contacts" };
const _hoisted_145$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес")
], -1 /* HOISTED */);
const _hoisted_146$1 = { class: "col-3" };
const _hoisted_147$1 = { class: "input-bg" };
const _hoisted_148$1 = { class: "col-4" };
const _hoisted_149$1 = { class: "input-bg" };
const _hoisted_150$1 = { class: "col-3" };
const _hoisted_151$1 = { class: "input-bg" };
const _hoisted_152$1 = { class: "row my-2" };
const _hoisted_153$1 = { class: "address-block" };
const _hoisted_154$1 = { class: "row my-2" };
const _hoisted_155$1 = { class: "col-1" };
const _hoisted_156$1 = { class: "input-bg" };
const _hoisted_157$1 = { class: "col-4" };
const _hoisted_158$1 = { class: "input-bg" };
const _hoisted_159$1 = { class: "col-2" };
const _hoisted_160$1 = { class: "input-bg" };
const _hoisted_161$1 = { class: "col-5" };
const _hoisted_162$1 = { class: "input-bg" };
const _hoisted_163$1 = { class: "row my-2" };
const _hoisted_164$1 = { class: "col-5" };
const _hoisted_165$1 = { class: "input-bg" };
const _hoisted_166$1 = { class: "col-3" };
const _hoisted_167$1 = { class: "input-bg" };
const _hoisted_168$1 = { class: "col-4" };
const _hoisted_169$1 = { class: "input-bg" };
const _hoisted_170$1 = { class: "row my-2" };
const _hoisted_171$1 = { class: "col-4" };
const _hoisted_172$1 = { class: "input-bg" };
const _hoisted_173$1 = { class: "col-2" };
const _hoisted_174$1 = { class: "input-bg" };
const _hoisted_175$1 = { class: "col-2" };
const _hoisted_176$1 = { class: "input-bg" };
const _hoisted_177$1 = { class: "col-2" };
const _hoisted_178$1 = { class: "input-bg" };
const _hoisted_179$1 = { class: "row my-2" };
const _hoisted_180$1 = { class: "col-12" };
const _hoisted_181$1 = { class: "input-bg" };
const _hoisted_182$1 = { class: "row" };
const _hoisted_183$1 = { class: "personal-inf-block" };
const _hoisted_184$1 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_185$1 = { class: "row my-2" };
const _hoisted_186$1 = { class: "row personal-data my-2" };
const _hoisted_187$1 = { class: "col-1" };
const _hoisted_188$1 = { class: "input-bg" };
const _hoisted_189$1 = { class: "col-1" };
const _hoisted_190$1 = { class: "input-bg" };
const _hoisted_191$1 = { class: "col-2" };
const _hoisted_192$1 = { class: "input-bg" };
const _hoisted_193$1 = { class: "col-4 d-flex" };
const _hoisted_194$1 = { class: "input-bg col-4" };
const _hoisted_195$1 = { class: "input-bg col-4" };
const _hoisted_196$1 = { class: "input-bg col-4" };
const _hoisted_197$1 = { class: "col-4" };
const _hoisted_198$1 = { class: "input-bg" };
const _hoisted_199$1 = { class: "row personal-data my-2" };
const _hoisted_200$1 = { class: "col-7" };
const _hoisted_201$1 = { class: "input-bg" };
const _hoisted_202$1 = { class: "col-2" };
const _hoisted_203$1 = { class: "input-bg" };
const _hoisted_204$1 = { class: "col-3" };
const _hoisted_205$1 = { class: "input-bg" };
const _hoisted_206$1 = { class: "recipient-common-inf" };
const _hoisted_207$1 = { class: "row" };
const _hoisted_208$1 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedRecipientInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedRecipientInfo"
}, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/vue.createElementVNode("span", null, "ПОЛУЧАТЕЛЬ по общей накладной"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-caret-up" })
  ])
], -1 /* HOISTED */);
const _hoisted_209$1 = {
  class: "collapse",
  id: "collapsedRecipientInfo"
};
const _hoisted_210$1 = { class: "card card-body" };
const _hoisted_211$1 = { class: "row" };
const _hoisted_212$1 = { class: "sender-name" };
const _hoisted_213$1 = { class: "row form my-2" };
const _hoisted_214$1 = { class: "col-8" };
const _hoisted_215$1 = { class: "input-bg" };
const _hoisted_216$1 = { class: "col-1" };
const _hoisted_217$1 = { class: "input-bg" };
const _hoisted_218$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_219$1 = { class: "col-2 d-flex" };
const _hoisted_220$1 = { class: "input-bg col-2" };
const _hoisted_221$1 = ["checked"];
const _hoisted_222$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_223$1 = { class: "row my-2" };
const _hoisted_224$1 = { class: "col-5" };
const _hoisted_225$1 = { class: "input-bg" };
const _hoisted_226$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_227$1 = { class: "col-4 d-flex" };
const _hoisted_228$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_229$1 = { class: "input-bg col-10" };
const _hoisted_230$1 = { class: "col-3 d-flex" };
const _hoisted_231$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_232$1 = { class: "input-bg col-10" };
const _hoisted_233$1 = { class: "col-3 d-flex" };
const _hoisted_234$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_235$1 = { class: "input-bg col-10" };
const _hoisted_236$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_237$1 = { class: "row" };
const _hoisted_238$1 = { class: "sender-address" };
const _hoisted_239$1 = { class: "row my-2" };
const _hoisted_240$1 = { class: "d-flex sender-contacts" };
const _hoisted_241$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес")
], -1 /* HOISTED */);
const _hoisted_242$1 = { class: "col-3" };
const _hoisted_243$1 = { class: "input-bg" };
const _hoisted_244$1 = { class: "col-4" };
const _hoisted_245$1 = { class: "input-bg" };
const _hoisted_246$1 = { class: "col-3" };
const _hoisted_247$1 = { class: "input-bg" };
const _hoisted_248$1 = { class: "row my-2" };
const _hoisted_249$1 = { class: "address-block" };
const _hoisted_250$1 = { class: "row my-2" };
const _hoisted_251$1 = { class: "col-1" };
const _hoisted_252$1 = { class: "input-bg" };
const _hoisted_253$1 = { class: "col-4" };
const _hoisted_254$1 = { class: "input-bg" };
const _hoisted_255$1 = { class: "col-2" };
const _hoisted_256$1 = { class: "input-bg" };
const _hoisted_257$1 = { class: "col-5" };
const _hoisted_258$1 = { class: "input-bg" };
const _hoisted_259$1 = { class: "row my-2" };
const _hoisted_260$1 = { class: "col-5" };
const _hoisted_261$1 = { class: "input-bg" };
const _hoisted_262$1 = { class: "col-3" };
const _hoisted_263$1 = { class: "input-bg" };
const _hoisted_264$1 = { class: "col-4" };
const _hoisted_265$1 = { class: "input-bg" };
const _hoisted_266$1 = { class: "row my-2" };
const _hoisted_267$1 = { class: "col-4" };
const _hoisted_268$1 = { class: "input-bg" };
const _hoisted_269$1 = { class: "col-2" };
const _hoisted_270$1 = { class: "input-bg" };
const _hoisted_271$1 = { class: "col-2" };
const _hoisted_272$1 = { class: "input-bg" };
const _hoisted_273$1 = { class: "col-2" };
const _hoisted_274$1 = { class: "input-bg" };
const _hoisted_275$1 = { class: "row my-2" };
const _hoisted_276$1 = { class: "col-12" };
const _hoisted_277$1 = { class: "input-bg" };
const _hoisted_278$1 = { class: "row" };
const _hoisted_279 = { class: "personal-inf-block" };
const _hoisted_280 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_281 = { class: "row my-2" };
const _hoisted_282 = { class: "row personal-data my-2" };
const _hoisted_283 = { class: "col-1" };
const _hoisted_284 = { class: "input-bg" };
const _hoisted_285 = { class: "col-1" };
const _hoisted_286 = { class: "input-bg" };
const _hoisted_287 = { class: "col-2" };
const _hoisted_288 = { class: "input-bg" };
const _hoisted_289 = { class: "col-4 d-flex" };
const _hoisted_290 = { class: "input-bg col-4" };
const _hoisted_291 = { class: "input-bg col-4" };
const _hoisted_292 = { class: "input-bg col-4" };
const _hoisted_293 = { class: "col-4" };
const _hoisted_294 = { class: "input-bg" };
const _hoisted_295 = { class: "row personal-data my-2" };
const _hoisted_296 = { class: "col-7" };
const _hoisted_297 = { class: "input-bg" };
const _hoisted_298 = { class: "col-2" };
const _hoisted_299 = { class: "input-bg" };
const _hoisted_300 = { class: "col-3" };
const _hoisted_301 = { class: "input-bg" };
const _hoisted_302 = { class: "customs-sender-inf my-2" };
const _hoisted_303 = { class: "col-12 row inf-block" };
const _hoisted_304 = { class: "col-7" };
const _hoisted_305 = { class: "col" };
const _hoisted_306 = /*#__PURE__*/vue.createElementVNode("h4", { class: "customs-representative" }, "Таможенный представитель", -1 /* HOISTED */);
const _hoisted_307 = { class: "input-bg" };
const _hoisted_308 = { class: "col-5" };
const _hoisted_309 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, " Сведения о включении лица в реестр таможенных представителей ", -1 /* HOISTED */);
const _hoisted_310 = { class: "col d-flex" };
const _hoisted_311 = { class: "col-2" };
const _hoisted_312 = { class: "input-bg" };
const _hoisted_313 = { class: "col-1" };
const _hoisted_314 = { class: "input-bg" };
const _hoisted_315 = { class: "col-7" };
const _hoisted_316 = { class: "input-bg" };
const _hoisted_317 = { class: "col-1" };
const _hoisted_318 = { class: "input-bg" };
const _hoisted_319 = { class: "col-1" };
const _hoisted_320 = { class: "input-bg" };
const _hoisted_321 = { class: "row" };
const _hoisted_322 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedNaturalPersonInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedNaturalPersonInfo"
}, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/vue.createElementVNode("span", null, "Сведения о физическом лице, заполнившем (подписавшем) таможенный документ"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-caret-up" })
  ])
], -1 /* HOISTED */);
const _hoisted_323 = {
  class: "collapse",
  id: "collapsedNaturalPersonInfo"
};
const _hoisted_324 = { class: "card card-body" };
const _hoisted_325 = {
  action: "",
  class: "form"
};
const _hoisted_326 = { class: "d-flex" };
const _hoisted_327 = { class: "col-3" };
const _hoisted_328 = { class: "input-bg" };
const _hoisted_329 = { class: "col-3" };
const _hoisted_330 = { class: "input-bg" };
const _hoisted_331 = { class: "col-3" };
const _hoisted_332 = { class: "input-bg" };
const _hoisted_333 = { class: "col-3" };
const _hoisted_334 = { class: "input-bg" };
const _hoisted_335 = { class: "row my-2" };
const _hoisted_336 = { class: "col-9 d-flex" };
const _hoisted_337 = { class: "col-3" };
const _hoisted_338 = { class: "input-bg" };
const _hoisted_339 = { class: "col-3" };
const _hoisted_340 = { class: "input-bg" };
const _hoisted_341 = { class: "col-6" };
const _hoisted_342 = { class: "input-bg" };
const _hoisted_343 = { class: "col-3 row" };
const _hoisted_344 = { class: "col-8" };
const _hoisted_345 = { class: "input-bg" };
const _hoisted_346 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-4" }, [
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "btn button-calendar",
    type: "button"
  }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-calendar-days" })
  ])
], -1 /* HOISTED */);
const _hoisted_347 = { class: "row my-2" };
const _hoisted_348 = /*#__PURE__*/vue.createElementVNode("p", null, " Сведения о документе, удостоверяющем личность лица, заоплневшего (подписавшего) таможенного документ ", -1 /* HOISTED */);
const _hoisted_349 = { class: "row" };
const _hoisted_350 = { class: "col-3 d-flex" };
const _hoisted_351 = { class: "col-5" };
const _hoisted_352 = { class: "input-bg" };
const _hoisted_353 = { class: "col-7" };
const _hoisted_354 = { class: "input-bg" };
const _hoisted_355 = { class: "col-3 d-flex" };
const _hoisted_356 = { class: "col-4" };
const _hoisted_357 = { class: "input-bg" };
const _hoisted_358 = { class: "col-8" };
const _hoisted_359 = { class: "input-bg" };
const _hoisted_360 = { class: "col-3 d-flex" };
const _hoisted_361 = { class: "col-6" };
const _hoisted_362 = { class: "input-bg" };
const _hoisted_363 = { class: "col-6" };
const _hoisted_364 = { class: "input-bg" };
const _hoisted_365 = { class: "col-3 d-flex" };
const _hoisted_366 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "label-block align-bcntr" }, [
    /*#__PURE__*/vue.createElementVNode("label", { class: "align-bcntr" }, " аттестат ")
  ])
], -1 /* HOISTED */);
const _hoisted_367 = { class: "col-8" };
const _hoisted_368 = { class: "input-bg" };
const _hoisted_369 = { class: "row my-2" };
const _hoisted_370 = { class: "col-3" };
const _hoisted_371 = { class: "input-bg" };
const _hoisted_372 = { class: "col-5" };
const _hoisted_373 = { class: "input-bg" };
const _hoisted_374 = { class: "col-4 d-flex" };
const _hoisted_375 = { class: "col-3 input-bg" };
const _hoisted_376 = { class: "col-8 input-bg" };
const _hoisted_377 = { class: "col-1 input-bg" };
const _hoisted_378 = { class: "row my-2" };
const _hoisted_379 = { class: "row" };
const _hoisted_380 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, " Идентификаторы, присвоенные документу (сведениям) при размещении в хранилище электронных документов ")
], -1 /* HOISTED */);
const _hoisted_381 = { class: "row" };
const _hoisted_382 = { class: "col-8 d-flex" };
const _hoisted_383 = { class: "col-6" };
const _hoisted_384 = { class: "input-bg" };
const _hoisted_385 = { class: "col-6" };
const _hoisted_386 = { class: "input-bg" };
const _hoisted_387 = { class: "col-4" };
const _hoisted_388 = { class: "input-bg" };
const _hoisted_389 = { class: "row my-2" };
const _hoisted_390 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий полномочия")
], -1 /* HOISTED */);
const _hoisted_391 = { class: "row" };
const _hoisted_392 = { class: "col-4 d-flex" };
const _hoisted_393 = { class: "col-4" };
const _hoisted_394 = { class: "input-bg" };
const _hoisted_395 = { class: "col-8" };
const _hoisted_396 = { class: "input-bg" };
const _hoisted_397 = { class: "col-8 row" };
const _hoisted_398 = { class: "col-4 d-flex" };
const _hoisted_399 = { class: "col-5" };
const _hoisted_400 = { class: "input-bg" };
const _hoisted_401 = { class: "col-7" };
const _hoisted_402 = { class: "input-bg" };
const _hoisted_403 = { class: "col-8 row" };
const _hoisted_404 = { class: "col-5 d-flex" };
const _hoisted_405 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "с")
], -1 /* HOISTED */);
const _hoisted_406 = { class: "col-10" };
const _hoisted_407 = { class: "input-bg" };
const _hoisted_408 = { class: "col-5 d-flex" };
const _hoisted_409 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "по")
], -1 /* HOISTED */);
const _hoisted_410 = { class: "col-10" };
const _hoisted_411 = { class: "input-bg" };
const _hoisted_412 = { class: "col-2" };
const _hoisted_413 = { class: "input-bg" };
const _hoisted_414 = { class: "inspector-inf my-2" };
const _hoisted_415 = { class: "row" };
const _hoisted_416 = { class: "col-7" };
const _hoisted_417 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "ФИО инспектора", -1 /* HOISTED */);
const _hoisted_418 = { class: "input-bg" };
const _hoisted_419 = { class: "col-5" };
const _hoisted_420 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "ЛНП", -1 /* HOISTED */);
const _hoisted_421 = { class: "row" };
const _hoisted_422 = { class: "col-2 input-bg" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
    vue.createVNode(vue.Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: vue.withCtx(() => [
        (!$options.isDeclarationExist)
          ? (vue.openBlock(), vue.createBlock(_component_tsoft_preloader, { key: 0 }))
          : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$a, [
              vue.createCommentVNode("Region элемент с общей информацией декларации"),
              vue.createElementVNode("div", _hoisted_3$9, [
                _hoisted_4$6,
                _hoisted_5$7,
                vue.createElementVNode("div", _hoisted_6$5, [
                  vue.createElementVNode("div", _hoisted_7$4, [
                    vue.createElementVNode("div", _hoisted_8$4, [
                      vue.createElementVNode("div", _hoisted_9$4, [
                        vue.createElementVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          checked: this.registry.docType.dteg
                        }, null, 8 /* PROPS */, _hoisted_10$4)
                      ]),
                      _hoisted_11$3,
                      vue.createElementVNode("div", _hoisted_12$3, [
                        vue.createElementVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          checked: this.registry.docType.ptdeg
                        }, null, 8 /* PROPS */, _hoisted_13$4)
                      ]),
                      _hoisted_14$4
                    ]),
                    vue.createElementVNode("div", _hoisted_15$3, [
                      vue.createElementVNode("div", _hoisted_16$3, [
                        vue.createElementVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          checked: this.registry.declarationKindCode.import
                        }, null, 8 /* PROPS */, _hoisted_17$4)
                      ]),
                      _hoisted_18$3,
                      vue.createElementVNode("div", _hoisted_19$3, [
                        vue.createElementVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          checked: this.registry.declarationKindCode.export
                        }, null, 8 /* PROPS */, _hoisted_20$3)
                      ]),
                      _hoisted_21$3
                    ]),
                    vue.createElementVNode("div", _hoisted_22$3, [
                      _hoisted_23$3,
                      vue.createElementVNode("div", _hoisted_24$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "declaration-number-input form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((this.registry.registryNum) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.registryNum]
                        ])
                      ])
                    ]),
                    _hoisted_25$3
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_26$3, [
                  vue.createElementVNode("div", _hoisted_27$3, [
                    vue.createElementVNode("div", _hoisted_28$3, [
                      vue.createElementVNode("div", _hoisted_29$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((this.registry.customsCodeMode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.customsCodeMode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_30$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((this.registry.previousCustomsCodeMode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.previousCustomsCodeMode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_31$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((this.registry.declarationKind) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.declarationKind]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_32$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((this.registry.electronicDocumentSign) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.electronicDocumentSign]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_33$3, [
                      _hoisted_34$3,
                      vue.createElementVNode("div", _hoisted_35$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "sheets-input form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((this.registry.countList) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.countList]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_36$3, [
                      _hoisted_37$3,
                      vue.createElementVNode("div", _hoisted_38$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "registry-number-input form-control",
                          type: "text",
                          id: "registryNumber",
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((this.registry.customNum) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.customNum]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_39$3, [
                      vue.createElementVNode("div", _hoisted_40$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "registry-checkbox form-check-input",
                          type: "checkbox",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((this.registry.isRegistryWasChanged) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelCheckbox, this.registry.isRegistryWasChanged]
                        ])
                      ]),
                      _hoisted_41$3
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_42$3, [
                  vue.createElementVNode("div", _hoisted_43$3, [
                    vue.createElementVNode("div", _hoisted_44$3, [
                      vue.createElementVNode("div", _hoisted_45$3, [
                        _hoisted_46$3,
                        vue.createElementVNode("div", _hoisted_47$3, [
                          vue.createElementVNode("div", _hoisted_48$3, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((this.registry.expressCourierCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.expressCourierCode]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_49$3, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "col-11 form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((this.registry.expressCourierName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.expressCourierName]
                            ])
                          ])
                        ])
                      ]),
                      _hoisted_50$3,
                      _hoisted_51$3
                    ]),
                    vue.createElementVNode("div", _hoisted_52$3, [
                      vue.createElementVNode("div", _hoisted_53$3, [
                        vue.createElementVNode("div", _hoisted_54$3, [
                          _hoisted_55$3,
                          vue.createElementVNode("form", _hoisted_56$3, [
                            vue.createElementVNode("div", _hoisted_57$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((this.registry.registerDocumentUnknownString1) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.registerDocumentUnknownString1]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_58$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((this.registry.registerDocumentIdCountryCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.registerDocumentIdCountryCode]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_59$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((this.registry.registerDocumentIdNumber) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.registerDocumentIdNumber]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_60$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((this.registry.registerDocumentUnknownString2) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.registerDocumentUnknownString2]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_61$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((this.registry.registerDocumentUnknownString3) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.registerDocumentUnknownString3]
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _hoisted_62$3,
                      vue.createElementVNode("div", _hoisted_63$3, [
                        vue.createElementVNode("form", _hoisted_64$3, [
                          vue.createElementVNode("div", _hoisted_65$3, [
                            vue.createElementVNode("div", _hoisted_66$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((this.registry.changingDeclarationNumber.customPoint) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.changingDeclarationNumber.customPoint]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_67$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((this.registry.changingDeclarationNumber.date) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.changingDeclarationNumber.date]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_68$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((this.registry.changingDeclarationNumber.innerNum) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.changingDeclarationNumber.innerNum]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_69$3, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                class: "form-control",
                                type: "text",
                                "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ((this.registry.changingDeclarationNumber.unknownNum) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.changingDeclarationNumber.unknownNum]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_70$3, [
                            _hoisted_71$3,
                            vue.createElementVNode("div", _hoisted_72$3, [
                              vue.createElementVNode("div", _hoisted_73$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => ((this.registry.changeDetailsType.stageChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.stageChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_74$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => ((this.registry.changeDetailsType.reasonChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.reasonChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_75$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => ((this.registry.changeDetailsType.quantityChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.quantityChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_76$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => ((this.registry.changeDetailsType.TNVEDChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.TNVEDChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_77$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => ((this.registry.changeDetailsType.customsCostChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.customsCostChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_78$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => ((this.registry.changeDetailsType.customsPaymentChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.customsPaymentChangeCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_79$3, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  class: "form-control number-code",
                                  type: "number",
                                  "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => ((this.registry.changeDetailsType.otherChangeCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.changeDetailsType.otherChangeCode]
                                ])
                              ]),
                              _hoisted_80$3
                            ]),
                            _hoisted_81$3
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_82$3, [
                  vue.createElementVNode("div", _hoisted_83$3, [
                    _hoisted_84$3,
                    vue.createElementVNode("form", _hoisted_85$3, [
                      vue.createElementVNode("div", _hoisted_86$3, [
                        _hoisted_87$3,
                        vue.createElementVNode("div", _hoisted_88$3, [
                          vue.createElementVNode("div", _hoisted_89$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Сумма",
                              "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => ((this.registry.totalPaymentAmountDetailsSum) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.totalPaymentAmountDetailsSum]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_90$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Валюта",
                              "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => ((this.registry.totalPaymentAmountDetailsCurrency) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.totalPaymentAmountDetailsCurrency]
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_91$2, [
                        _hoisted_92$2,
                        _hoisted_93$2,
                        vue.createElementVNode("div", _hoisted_94$2, [
                          vue.createElementVNode("div", _hoisted_95$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => ((this.registry.CAValueAmountSum) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.CAValueAmountSum]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_96$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => ((this.registry.CAValueAmountCurrency) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.CAValueAmountCurrency]
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_97$2, [
                        _hoisted_98$2,
                        _hoisted_99$2,
                        vue.createElementVNode("div", _hoisted_100$2, [
                          vue.createElementVNode("div", _hoisted_101$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => ((this.registry.unifiedGrossWeightQuantity) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.unifiedGrossWeightQuantity]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_102$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => ((this.registry.weightUnit) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.weightUnit]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_103$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => ((this.registry.unknownStringUnit) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.unknownStringUnit]
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_104$2, [
                        _hoisted_105$2,
                        _hoisted_106$1,
                        vue.createElementVNode("div", _hoisted_107$1, [
                          vue.createElementVNode("div", _hoisted_108$1, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => ((this.registry.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.customCost]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_109$1, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => ((this.registry.customCostCurrency) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, this.registry.customCostCurrency]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode(" endregion"),
              vue.createCommentVNode(" Region элемент с общей информацией по отправителю"),
              vue.createElementVNode("div", _hoisted_110$1, [
                vue.createElementVNode("div", _hoisted_111$1, [
                  _hoisted_112$1,
                  vue.createElementVNode("div", _hoisted_113$1, [
                    vue.createElementVNode("div", _hoisted_114$1, [
                      vue.createElementVNode("div", _hoisted_115$1, [
                        vue.createElementVNode("div", _hoisted_116$1, [
                          vue.createElementVNode("form", _hoisted_117$1, [
                            vue.createElementVNode("div", _hoisted_118$1, [
                              vue.createElementVNode("div", _hoisted_119$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => ((this.registry.consignor.fullName) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignor.fullName]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_120$1, [
                              vue.createElementVNode("div", _hoisted_121$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => ((this.registry.consignor.countryCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignor.countryCode]
                                ])
                              ])
                            ]),
                            _hoisted_122$1,
                            vue.createElementVNode("div", _hoisted_123$1, [
                              vue.createElementVNode("div", _hoisted_124$1, [
                                vue.createElementVNode("input", {
                                  type: "checkbox",
                                  class: "form-check-input",
                                  checked: this.registry.consignor.isDeclarant
                                }, null, 8 /* PROPS */, _hoisted_125$1)
                              ]),
                              _hoisted_126$1
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_127$1, [
                            vue.createElementVNode("div", _hoisted_128$1, [
                              vue.createElementVNode("div", _hoisted_129$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "краткое наименование организации",
                                  "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => ((this.registry.consignor.shortName) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignor.shortName]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_130$1, [
                              vue.createElementVNode("div", _hoisted_131$1, [
                                _hoisted_132$1,
                                vue.createElementVNode("div", _hoisted_133$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => ((this.registry.consignor.fullName) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.fullName]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_134$1, [
                                _hoisted_135$1,
                                vue.createElementVNode("div", _hoisted_136$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => ((this.registry.consignor.INN) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.INN]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_137$1, [
                                _hoisted_138$1,
                                vue.createElementVNode("div", _hoisted_139$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => ((this.registry.consignor.KPP) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.KPP]
                                  ])
                                ])
                              ]),
                              _hoisted_140$1
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_141$1, [
                        vue.createElementVNode("div", _hoisted_142$1, [
                          vue.createElementVNode("div", _hoisted_143$1, [
                            vue.createElementVNode("div", _hoisted_144$1, [
                              _hoisted_145$1,
                              vue.createElementVNode("div", _hoisted_146$1, [
                                vue.createElementVNode("div", _hoisted_147$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "номер телефона",
                                    "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => ((this.registry.consignor.phone) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.phone]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_148$1, [
                                vue.createElementVNode("div", _hoisted_149$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "Адрес электронной почты",
                                    "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => ((this.registry.consignor.email) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.email]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_150$1, [
                                vue.createElementVNode("div", _hoisted_151$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "номер факса",
                                    "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => ((this.registry.consignor.fax) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.fax]
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_152$1, [
                            vue.createElementVNode("div", _hoisted_153$1, [
                              vue.createElementVNode("div", _hoisted_154$1, [
                                vue.createElementVNode("div", _hoisted_155$1, [
                                  vue.createElementVNode("div", _hoisted_156$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "язык",
                                      "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => ((this.registry.consignor.language) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.language]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_157$1, [
                                  vue.createElementVNode("div", _hoisted_158$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "страна",
                                      "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => ((this.registry.consignor.country) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.country]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_159$1, [
                                  vue.createElementVNode("div", _hoisted_160$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "почтовый индекс",
                                      "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => ((this.registry.consignor.mailIndex) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.mailIndex]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_161$1, [
                                  vue.createElementVNode("div", _hoisted_162$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "область (регион, штат, провинция)",
                                      "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => ((this.registry.consignor.region) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.region]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_163$1, [
                                vue.createElementVNode("div", _hoisted_164$1, [
                                  vue.createElementVNode("div", _hoisted_165$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "район",
                                      "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => ((this.registry.consignor.area) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.area]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_166$1, [
                                  vue.createElementVNode("div", _hoisted_167$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "город",
                                      "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => ((this.registry.consignor.city) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.city]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_168$1, [
                                  vue.createElementVNode("div", _hoisted_169$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "населённый пункт",
                                      "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => ((this.registry.consignor.settlement) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.settlement]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_170$1, [
                                vue.createElementVNode("div", _hoisted_171$1, [
                                  vue.createElementVNode("div", _hoisted_172$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => ((this.registry.consignor.address) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.address]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_173$1, [
                                  vue.createElementVNode("div", _hoisted_174$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "дом, корпус, строение",
                                      "onUpdate:modelValue": _cache[52] || (_cache[52] = $event => ((this.registry.consignor.house) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.house]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_175$1, [
                                  vue.createElementVNode("div", _hoisted_176$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => ((this.registry.consignor.office) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.office]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_177$1, [
                                  vue.createElementVNode("div", _hoisted_178$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "номер а/я",
                                      "onUpdate:modelValue": _cache[54] || (_cache[54] = $event => ((this.registry.consignor.officeLetter) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.officeLetter]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_179$1, [
                                vue.createElementVNode("div", _hoisted_180$1, [
                                  vue.createElementVNode("div", _hoisted_181$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                      "onUpdate:modelValue": _cache[55] || (_cache[55] = $event => ((this.registry.consignor.fullAddress) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignor.fullAddress]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_182$1, [
                        vue.createElementVNode("div", _hoisted_183$1, [
                          _hoisted_184$1,
                          vue.createElementVNode("div", _hoisted_185$1, [
                            vue.createElementVNode("div", _hoisted_186$1, [
                              vue.createElementVNode("div", _hoisted_187$1, [
                                vue.createElementVNode("div", _hoisted_188$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "стр",
                                    "onUpdate:modelValue": _cache[56] || (_cache[56] = $event => ((this.registry.consignor.document.country) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.country]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_189$1, [
                                vue.createElementVNode("div", _hoisted_190$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "код",
                                    "onUpdate:modelValue": _cache[57] || (_cache[57] = $event => ((this.registry.consignor.document.countryCode) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.countryCode]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_191$1, [
                                vue.createElementVNode("div", _hoisted_192$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "краткое наименование",
                                    "onUpdate:modelValue": _cache[58] || (_cache[58] = $event => ((this.registry.consignor.document.shortType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.shortType]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_193$1, [
                                vue.createElementVNode("div", _hoisted_194$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "серия",
                                    "onUpdate:modelValue": _cache[59] || (_cache[59] = $event => ((this.registry.consignor.document.series) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.series]
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_195$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "номер",
                                    "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => ((this.registry.consignor.document.number) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.number]
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_196$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "дата выдачи",
                                    "onUpdate:modelValue": _cache[61] || (_cache[61] = $event => ((this.registry.consignor.document.releaseDate) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.releaseDate]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_197$1, [
                                vue.createElementVNode("div", _hoisted_198$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "наименование организации, выдавшей документ",
                                    "onUpdate:modelValue": _cache[62] || (_cache[62] = $event => ((this.registry.consignor.document.issuedBy) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.issuedBy]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_199$1, [
                              vue.createElementVNode("div", _hoisted_200$1, [
                                vue.createElementVNode("div", _hoisted_201$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "полное наименование документа, удостоверяющего личность",
                                    "onUpdate:modelValue": _cache[63] || (_cache[63] = $event => ((this.registry.consignor.document.fullType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.fullType]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_202$1, [
                                vue.createElementVNode("div", _hoisted_203$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "код подразделения",
                                    "onUpdate:modelValue": _cache[64] || (_cache[64] = $event => ((this.registry.consignor.document.divisionCode) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.divisionCode]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_204$1, [
                                vue.createElementVNode("div", _hoisted_205$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "строка, иденти-ая орган государства",
                                    "onUpdate:modelValue": _cache[65] || (_cache[65] = $event => ((this.registry.consignor.document.countryIdString) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignor.document.countryIdString]
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode(" endregion"),
              vue.createCommentVNode(" Region элемет с общей информацией по получателю"),
              vue.createElementVNode("div", _hoisted_206$1, [
                vue.createElementVNode("div", _hoisted_207$1, [
                  _hoisted_208$1,
                  vue.createElementVNode("div", _hoisted_209$1, [
                    vue.createElementVNode("div", _hoisted_210$1, [
                      vue.createElementVNode("div", _hoisted_211$1, [
                        vue.createElementVNode("div", _hoisted_212$1, [
                          vue.createElementVNode("form", _hoisted_213$1, [
                            vue.createElementVNode("div", _hoisted_214$1, [
                              vue.createElementVNode("div", _hoisted_215$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => ((this.registry.consignee.fullName) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignee.fullName]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_216$1, [
                              vue.createElementVNode("div", _hoisted_217$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => ((this.registry.consignee.countryCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignee.countryCode]
                                ])
                              ])
                            ]),
                            _hoisted_218$1,
                            vue.createElementVNode("div", _hoisted_219$1, [
                              vue.createElementVNode("div", _hoisted_220$1, [
                                vue.createElementVNode("input", {
                                  type: "checkbox",
                                  class: "form-check-input",
                                  checked: this.registry.consignee.isDeclarant
                                }, null, 8 /* PROPS */, _hoisted_221$1)
                              ]),
                              _hoisted_222$1
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_223$1, [
                            vue.createElementVNode("div", _hoisted_224$1, [
                              vue.createElementVNode("div", _hoisted_225$1, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "краткое наименование организации",
                                  "onUpdate:modelValue": _cache[68] || (_cache[68] = $event => ((this.registry.consignee.shortName) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.consignee.shortName]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_226$1, [
                              vue.createElementVNode("div", _hoisted_227$1, [
                                _hoisted_228$1,
                                vue.createElementVNode("div", _hoisted_229$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => ((this.registry.consignee.fullName) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.fullName]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_230$1, [
                                _hoisted_231$1,
                                vue.createElementVNode("div", _hoisted_232$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => ((this.registry.consignee.INN) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.INN]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_233$1, [
                                _hoisted_234$1,
                                vue.createElementVNode("div", _hoisted_235$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => ((this.registry.consignee.KPP) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.KPP]
                                  ])
                                ])
                              ]),
                              _hoisted_236$1
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_237$1, [
                        vue.createElementVNode("div", _hoisted_238$1, [
                          vue.createElementVNode("div", _hoisted_239$1, [
                            vue.createElementVNode("div", _hoisted_240$1, [
                              _hoisted_241$1,
                              vue.createElementVNode("div", _hoisted_242$1, [
                                vue.createElementVNode("div", _hoisted_243$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "номер телефона",
                                    "onUpdate:modelValue": _cache[72] || (_cache[72] = $event => ((this.registry.consignee.phone) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.phone]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_244$1, [
                                vue.createElementVNode("div", _hoisted_245$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "Адрес электронной почты",
                                    "onUpdate:modelValue": _cache[73] || (_cache[73] = $event => ((this.registry.consignee.email) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.email]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_246$1, [
                                vue.createElementVNode("div", _hoisted_247$1, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    placeholder: "номер факса",
                                    "onUpdate:modelValue": _cache[74] || (_cache[74] = $event => ((this.registry.consignee.fax) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.fax]
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_248$1, [
                            vue.createElementVNode("div", _hoisted_249$1, [
                              vue.createElementVNode("div", _hoisted_250$1, [
                                vue.createElementVNode("div", _hoisted_251$1, [
                                  vue.createElementVNode("div", _hoisted_252$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "язык",
                                      "onUpdate:modelValue": _cache[75] || (_cache[75] = $event => ((this.registry.consignee.language) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.language]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_253$1, [
                                  vue.createElementVNode("div", _hoisted_254$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "страна",
                                      "onUpdate:modelValue": _cache[76] || (_cache[76] = $event => ((this.registry.consignee.country) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.country]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_255$1, [
                                  vue.createElementVNode("div", _hoisted_256$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "почтовый индекс",
                                      "onUpdate:modelValue": _cache[77] || (_cache[77] = $event => ((this.registry.consignee.mailIndex) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.mailIndex]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_257$1, [
                                  vue.createElementVNode("div", _hoisted_258$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "область (регион, штат, провинция)",
                                      "onUpdate:modelValue": _cache[78] || (_cache[78] = $event => ((this.registry.consignee.region) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.region]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_259$1, [
                                vue.createElementVNode("div", _hoisted_260$1, [
                                  vue.createElementVNode("div", _hoisted_261$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "район",
                                      "onUpdate:modelValue": _cache[79] || (_cache[79] = $event => ((this.registry.consignee.area) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.area]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_262$1, [
                                  vue.createElementVNode("div", _hoisted_263$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "город",
                                      "onUpdate:modelValue": _cache[80] || (_cache[80] = $event => ((this.registry.consignee.city) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.city]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_264$1, [
                                  vue.createElementVNode("div", _hoisted_265$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "населённый пункт",
                                      "onUpdate:modelValue": _cache[81] || (_cache[81] = $event => ((this.registry.consignee.settlement) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.settlement]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_266$1, [
                                vue.createElementVNode("div", _hoisted_267$1, [
                                  vue.createElementVNode("div", _hoisted_268$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => ((this.registry.consignee.address) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.address]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_269$1, [
                                  vue.createElementVNode("div", _hoisted_270$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "дом, корпус, строение",
                                      "onUpdate:modelValue": _cache[83] || (_cache[83] = $event => ((this.registry.consignee.house) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.house]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_271$1, [
                                  vue.createElementVNode("div", _hoisted_272$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => ((this.registry.consignee.office) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.office]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_273$1, [
                                  vue.createElementVNode("div", _hoisted_274$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "номер а/я",
                                      "onUpdate:modelValue": _cache[85] || (_cache[85] = $event => ((this.registry.consignee.officeLetter) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.officeLetter]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_275$1, [
                                vue.createElementVNode("div", _hoisted_276$1, [
                                  vue.createElementVNode("div", _hoisted_277$1, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                      "onUpdate:modelValue": _cache[86] || (_cache[86] = $event => ((this.registry.consignee.fullAddress) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.consignee.fullAddress]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_278$1, [
                        vue.createElementVNode("div", _hoisted_279, [
                          _hoisted_280,
                          vue.createElementVNode("div", _hoisted_281, [
                            vue.createElementVNode("div", _hoisted_282, [
                              vue.createElementVNode("div", _hoisted_283, [
                                vue.createElementVNode("div", _hoisted_284, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "стр",
                                    "onUpdate:modelValue": _cache[87] || (_cache[87] = $event => ((this.registry.consignee.document.country) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.country]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_285, [
                                vue.createElementVNode("div", _hoisted_286, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "код",
                                    "onUpdate:modelValue": _cache[88] || (_cache[88] = $event => ((this.registry.consignee.document.countryCode) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.countryCode]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_287, [
                                vue.createElementVNode("div", _hoisted_288, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "краткое наименование",
                                    "onUpdate:modelValue": _cache[89] || (_cache[89] = $event => ((this.registry.consignee.document.shortType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.shortType]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_289, [
                                vue.createElementVNode("div", _hoisted_290, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "серия",
                                    "onUpdate:modelValue": _cache[90] || (_cache[90] = $event => ((this.registry.consignee.document.series) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.series]
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_291, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "номер",
                                    "onUpdate:modelValue": _cache[91] || (_cache[91] = $event => ((this.registry.consignee.document.number) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.number]
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_292, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "дата выдачи",
                                    "onUpdate:modelValue": _cache[92] || (_cache[92] = $event => ((this.registry.consignee.document.releaseDate) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.releaseDate]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_293, [
                                vue.createElementVNode("div", _hoisted_294, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "наименование организации, выдавшей документ",
                                    "onUpdate:modelValue": _cache[93] || (_cache[93] = $event => ((this.registry.consignee.document.issuedBy) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.issuedBy]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_295, [
                              vue.createElementVNode("div", _hoisted_296, [
                                vue.createElementVNode("div", _hoisted_297, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "полное наименование документа, удостоверяющего личность",
                                    "onUpdate:modelValue": _cache[94] || (_cache[94] = $event => ((this.registry.consignee.document.fullType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.fullType]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_298, [
                                vue.createElementVNode("div", _hoisted_299, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "код подразделения",
                                    "onUpdate:modelValue": _cache[95] || (_cache[95] = $event => ((this.registry.consignee.document.divisionCode) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.divisionCode]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_300, [
                                vue.createElementVNode("div", _hoisted_301, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    placeholder: "строка, иденти-ая орган государства",
                                    "onUpdate:modelValue": _cache[96] || (_cache[96] = $event => ((this.registry.consignee.document.countryIdString) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.consignee.document.countryIdString]
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode("endregion"),
              vue.createCommentVNode(" Region элемент с общей информацией по таможенному представителю и исполнителю"),
              vue.createElementVNode("div", _hoisted_302, [
                vue.createElementVNode("div", _hoisted_303, [
                  vue.createElementVNode("div", _hoisted_304, [
                    vue.createElementVNode("div", _hoisted_305, [
                      _hoisted_306,
                      vue.createElementVNode("div", _hoisted_307, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[97] || (_cache[97] = $event => ((this.registry.brokerName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.brokerName]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_308, [
                    _hoisted_309,
                    vue.createElementVNode("div", _hoisted_310, [
                      vue.createElementVNode("div", _hoisted_311, [
                        vue.createElementVNode("div", _hoisted_312, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[98] || (_cache[98] = $event => ((this.registry.brokerRegistryDocDetails[0]) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.brokerRegistryDocDetails[0]]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_313, [
                        vue.createElementVNode("div", _hoisted_314, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[99] || (_cache[99] = $event => ((this.registry.brokerRegistryDocDetails[1]) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.brokerRegistryDocDetails[1]]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_315, [
                        vue.createElementVNode("div", _hoisted_316, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[100] || (_cache[100] = $event => ((this.registry.brokerRegistryDocDetails[2]) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.brokerRegistryDocDetails[2]]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_317, [
                        vue.createElementVNode("div", _hoisted_318, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[101] || (_cache[101] = $event => ((this.registry.brokerRegistryDocDetails[3]) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.brokerRegistryDocDetails[3]]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_319, [
                        vue.createElementVNode("div", _hoisted_320, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[102] || (_cache[102] = $event => ((this.registry.brokerRegistryDocDetails[4]) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.brokerRegistryDocDetails[4]]
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_321, [
                  _hoisted_322,
                  vue.createElementVNode("div", _hoisted_323, [
                    vue.createElementVNode("div", _hoisted_324, [
                      vue.createElementVNode("form", _hoisted_325, [
                        vue.createElementVNode("div", _hoisted_326, [
                          vue.createElementVNode("div", _hoisted_327, [
                            vue.createElementVNode("div", _hoisted_328, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[103] || (_cache[103] = $event => ((this.registry.signatoryPersonIdentityDetails.lastName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.signatoryPersonIdentityDetails.lastName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_329, [
                            vue.createElementVNode("div", _hoisted_330, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[104] || (_cache[104] = $event => ((this.registry.signatoryPersonIdentityDetails.firstName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.signatoryPersonIdentityDetails.firstName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_331, [
                            vue.createElementVNode("div", _hoisted_332, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[105] || (_cache[105] = $event => ((this.registry.signatoryPersonIdentityDetails.middleName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.signatoryPersonIdentityDetails.middleName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_333, [
                            vue.createElementVNode("div", _hoisted_334, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[106] || (_cache[106] = $event => ((this.registry.signatoryPersonIdentityDetails.profession) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, this.registry.signatoryPersonIdentityDetails.profession]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_335, [
                          vue.createElementVNode("div", _hoisted_336, [
                            vue.createElementVNode("div", _hoisted_337, [
                              vue.createElementVNode("div", _hoisted_338, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[107] || (_cache[107] = $event => ((this.registry.signatoryPersonIdentityDetails.mobilePhone) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.mobilePhone]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_339, [
                              vue.createElementVNode("div", _hoisted_340, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[108] || (_cache[108] = $event => ((this.registry.signatoryPersonIdentityDetails.fax) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.fax]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_341, [
                              vue.createElementVNode("div", _hoisted_342, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[109] || (_cache[109] = $event => ((this.registry.signatoryPersonIdentityDetails.email) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.email]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_343, [
                            vue.createElementVNode("div", _hoisted_344, [
                              vue.createElementVNode("div", _hoisted_345, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[110] || (_cache[110] = $event => ((this.registry.signatoryPersonIdentityDetails.appealDocumentDate) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.appealDocumentDate]
                                ])
                              ])
                            ]),
                            _hoisted_346
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_347, [
                          _hoisted_348,
                          vue.createElementVNode("div", _hoisted_349, [
                            vue.createElementVNode("div", _hoisted_350, [
                              vue.createElementVNode("div", _hoisted_351, [
                                vue.createElementVNode("div", _hoisted_352, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[111] || (_cache[111] = $event => ((this.registry.signatoryPersonIdentityDetails.countyCode) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.countyCode]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_353, [
                                vue.createElementVNode("div", _hoisted_354, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[112] || (_cache[112] = $event => ((this.registry.signatoryPersonIdentityDetails.personalDocType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.personalDocType]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_355, [
                              vue.createElementVNode("div", _hoisted_356, [
                                vue.createElementVNode("div", _hoisted_357, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[113] || (_cache[113] = $event => ((this.registry.signatoryPersonIdentityDetails.documentSeries) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentSeries]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_358, [
                                vue.createElementVNode("div", _hoisted_359, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[114] || (_cache[114] = $event => ((this.registry.signatoryPersonIdentityDetails.documentNumber) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentNumber]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_360, [
                              vue.createElementVNode("div", _hoisted_361, [
                                vue.createElementVNode("div", _hoisted_362, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[115] || (_cache[115] = $event => ((this.registry.signatoryPersonIdentityDetails.documentReleaseDate) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentReleaseDate]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_363, [
                                vue.createElementVNode("div", _hoisted_364, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[116] || (_cache[116] = $event => ((this.registry.signatoryPersonIdentityDetails.documentDateEnd) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentDateEnd]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_365, [
                              _hoisted_366,
                              vue.createElementVNode("div", _hoisted_367, [
                                vue.createElementVNode("div", _hoisted_368, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[117] || (_cache[117] = $event => ((this.registry.signatoryPersonIdentityDetails.qualificationCertificate) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.qualificationCertificate]
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_369, [
                            vue.createElementVNode("div", _hoisted_370, [
                              vue.createElementVNode("div", _hoisted_371, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[118] || (_cache[118] = $event => ((this.registry.signatoryPersonIdentityDetails.fullDocumentType) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.fullDocumentType]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_372, [
                              vue.createElementVNode("div", _hoisted_373, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[119] || (_cache[119] = $event => ((this.registry.signatoryPersonIdentityDetails.issuedBy) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.issuedBy]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_374, [
                              vue.createElementVNode("div", _hoisted_375, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[120] || (_cache[120] = $event => ((this.registry.signatoryPersonIdentityDetails.divisionCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.divisionCode]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_376, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[121] || (_cache[121] = $event => ((this.registry.signatoryPersonIdentityDetails.countryIdString) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.countryIdString]
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_377, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue": _cache[122] || (_cache[122] = $event => ((this.registry.signatoryPersonIdentityDetails.countryIdCode) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, this.registry.signatoryPersonIdentityDetails.countryIdCode]
                                ])
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_378, [
                          vue.createElementVNode("div", _hoisted_379, [
                            _hoisted_380,
                            vue.createElementVNode("div", _hoisted_381, [
                              vue.createElementVNode("div", _hoisted_382, [
                                vue.createElementVNode("div", _hoisted_383, [
                                  vue.createElementVNode("div", _hoisted_384, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[123] || (_cache[123] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeId) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentModeId]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_385, [
                                  vue.createElementVNode("div", _hoisted_386, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      type: "text",
                                      class: "form-control",
                                      "onUpdate:modelValue": _cache[124] || (_cache[124] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeUnknown1) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentModeUnknown1]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_387, [
                                vue.createElementVNode("div", _hoisted_388, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    type: "text",
                                    class: "form-control",
                                    "onUpdate:modelValue": _cache[125] || (_cache[125] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeUnknown2) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentModeUnknown2]
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_389, [
                          _hoisted_390,
                          vue.createElementVNode("div", _hoisted_391, [
                            vue.createElementVNode("div", _hoisted_392, [
                              vue.createElementVNode("div", _hoisted_393, [
                                vue.createElementVNode("div", _hoisted_394, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    "onUpdate:modelValue": _cache[126] || (_cache[126] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries]
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_395, [
                                vue.createElementVNode("div", _hoisted_396, [
                                  vue.withDirectives(vue.createElementVNode("input", {
                                    class: "form-control",
                                    type: "text",
                                    "onUpdate:modelValue": _cache[127] || (_cache[127] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docType) = $event))
                                  }, null, 512 /* NEED_PATCH */), [
                                    [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docType]
                                  ])
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_397, [
                              vue.createElementVNode("div", _hoisted_398, [
                                vue.createElementVNode("div", _hoisted_399, [
                                  vue.createElementVNode("div", _hoisted_400, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      class: "form-control",
                                      type: "text",
                                      "onUpdate:modelValue": _cache[128] || (_cache[128] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString]
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_401, [
                                  vue.createElementVNode("div", _hoisted_402, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      class: "form-control",
                                      type: "text",
                                      "onUpdate:modelValue": _cache[129] || (_cache[129] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.appealDate) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.appealDate]
                                    ])
                                  ])
                                ])
                              ]),
                              vue.createElementVNode("div", _hoisted_403, [
                                vue.createElementVNode("div", _hoisted_404, [
                                  _hoisted_405,
                                  vue.createElementVNode("div", _hoisted_406, [
                                    vue.createElementVNode("div", _hoisted_407, [
                                      vue.withDirectives(vue.createElementVNode("input", {
                                        class: "form-control",
                                        type: "text",
                                        "onUpdate:modelValue": _cache[130] || (_cache[130] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateStart) = $event))
                                      }, null, 512 /* NEED_PATCH */), [
                                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateStart]
                                      ])
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_408, [
                                  _hoisted_409,
                                  vue.createElementVNode("div", _hoisted_410, [
                                    vue.createElementVNode("div", _hoisted_411, [
                                      vue.withDirectives(vue.createElementVNode("input", {
                                        class: "form-control",
                                        type: "text",
                                        "onUpdate:modelValue": _cache[131] || (_cache[131] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateEnd) = $event))
                                      }, null, 512 /* NEED_PATCH */), [
                                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateEnd]
                                      ])
                                    ])
                                  ])
                                ]),
                                vue.createElementVNode("div", _hoisted_412, [
                                  vue.createElementVNode("div", _hoisted_413, [
                                    vue.withDirectives(vue.createElementVNode("input", {
                                      class: "form-control",
                                      type: "text",
                                      "onUpdate:modelValue": _cache[132] || (_cache[132] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownInput) = $event))
                                    }, null, 512 /* NEED_PATCH */), [
                                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownInput]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode("endregion"),
              vue.createCommentVNode("Region элемент с информацией по инспектору"),
              vue.createElementVNode("div", _hoisted_414, [
                vue.createElementVNode("div", _hoisted_415, [
                  vue.createElementVNode("div", _hoisted_416, [
                    _hoisted_417,
                    vue.createElementVNode("div", _hoisted_418, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[133] || (_cache[133] = $event => ((this.registry.inspectorFullName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.inspectorFullName]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_419, [
                    _hoisted_420,
                    vue.createElementVNode("div", _hoisted_421, [
                      vue.createElementVNode("div", _hoisted_422, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[134] || (_cache[134] = $event => ((this.registry.lnp) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.lnp]
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode("endregion")
            ]))
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script$a.render = render$a;
script$a.__file = "src/components/Form/GeneralDeclaration.vue";

var script$9 = {
  name: "TsoftGoodsAwbInformationForm",
  data() {
    return {
      isGoodsOpen: false,
      isOrderOpen: false,
      sender: false,
      recipient: false
    };
  },
  props: {
    order: {
      required: true
    },
    orderNum: {
      required: true
    },
    goods: {
      required: true
    }
  }
};

const _hoisted_1$9 = { class: "order" };
const _hoisted_2$9 = { class: "arrow" };
const _hoisted_3$8 = { class: "product-batch" };
const _hoisted_4$5 = { class: "product-inner-block" };
const _hoisted_5$6 = { class: "row" };
const _hoisted_6$4 = { class: "row" };
const _hoisted_7$3 = { class: "col-9" };
const _hoisted_8$3 = { action: "" };
const _hoisted_9$3 = { class: "d-flex" };
const _hoisted_10$3 = { class: "col-3 d-flex" };
const _hoisted_11$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Общая накладная")
], -1 /* HOISTED */);
const _hoisted_12$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_13$3 = { class: "input-bg col-5" };
const _hoisted_14$3 = { class: "col-4" };
const _hoisted_15$2 = { class: "input-bg" };
const _hoisted_16$2 = { class: "col-3" };
const _hoisted_17$3 = { class: "input-bg" };
const _hoisted_18$2 = { class: "col-2" };
const _hoisted_19$2 = { class: "input-bg" };
const _hoisted_20$2 = { class: "d-flex my-2" };
const _hoisted_21$2 = { class: "col-3 d-flex" };
const _hoisted_22$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Инд. накладная")
], -1 /* HOISTED */);
const _hoisted_23$2 = { class: "col-2" };
const _hoisted_24$2 = { class: "input-bg" };
const _hoisted_25$2 = { class: "input-bg col-4" };
const _hoisted_26$2 = { class: "col-4" };
const _hoisted_27$2 = { class: "input-bg" };
const _hoisted_28$2 = { class: "col-3" };
const _hoisted_29$2 = { class: "input-bg" };
const _hoisted_30$2 = { class: "col-2" };
const _hoisted_31$2 = { class: "input-bg" };
const _hoisted_32$2 = { class: "row my-3" };
const _hoisted_33$2 = { class: "col-4" };
const _hoisted_34$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1" }, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_35$2 = { class: "d-flex" };
const _hoisted_36$2 = { class: "col-6" };
const _hoisted_37$2 = { class: "input-bg" };
const _hoisted_38$2 = { class: "col-6 d-flex" };
const _hoisted_39$2 = { class: "col-7" };
const _hoisted_40$2 = { class: "input-bg" };
const _hoisted_41$2 = { class: "col-5" };
const _hoisted_42$2 = { class: "input-bg" };
const _hoisted_43$2 = { class: "col-4" };
const _hoisted_44$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1" }, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_45$2 = { class: "d-flex" };
const _hoisted_46$2 = { class: "col-8" };
const _hoisted_47$2 = { class: "input-bg" };
const _hoisted_48$2 = { class: "col-4 d-flex" };
const _hoisted_49$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_50$2 = { class: "col-10" };
const _hoisted_51$2 = { class: "input-bg" };
const _hoisted_52$2 = { class: "col-4" };
const _hoisted_53$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1 fs-12" }, " Общая стоимость по инд. накладной ", -1 /* HOISTED */);
const _hoisted_54$2 = { class: "d-flex" };
const _hoisted_55$2 = { class: "col-9" };
const _hoisted_56$2 = { class: "input-bg" };
const _hoisted_57$2 = { class: "col-3 d-flex" };
const _hoisted_58$2 = { class: "col-12" };
const _hoisted_59$2 = { class: "input-bg" };
const _hoisted_60$2 = { class: "row align-items-end" };
const _hoisted_61$2 = { class: "col-8 d-flex" };
const _hoisted_62$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3 d-flex align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Интернет-магазин")
], -1 /* HOISTED */);
const _hoisted_63$2 = { class: "col-7" };
const _hoisted_64$2 = { class: "input-bg" };
const _hoisted_65$2 = { class: "col-2 d-flex" };
const _hoisted_66$2 = { class: "col-7 d-flex" };
const _hoisted_67$2 = { class: "input-bg" };
const _hoisted_68$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/vue.createElementVNode("button", { class: "btn new-window-button" }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-pager" })
  ])
], -1 /* HOISTED */);
const _hoisted_69$2 = { class: "col-4" };
const _hoisted_70$2 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Номер мешка/места", -1 /* HOISTED */);
const _hoisted_71$2 = { class: "input-bg" };
const _hoisted_72$2 = { class: "col-3" };
const _hoisted_73$2 = { class: "batch-info-anchors" };
const _hoisted_74$2 = /*#__PURE__*/vue.createTextVNode(" Сведения о товарах в накладной ");
const _hoisted_75$2 = /*#__PURE__*/vue.createTextVNode(" Сведения о там.сборе накладной ");
const _hoisted_76$2 = /*#__PURE__*/vue.createTextVNode(" Суммы пошлин и налогов накладной ");
const _hoisted_77$2 = /*#__PURE__*/vue.createTextVNode(" Исчисление там.пошлин, налогов ");
const _hoisted_78$2 = { class: "inf-block changing-code row" };
const _hoisted_79$2 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_80$2 = { class: "col-10 d-flex w-100" };
const _hoisted_81$2 = { class: "col input-bg" };
const _hoisted_82$2 = { class: "col input-bg" };
const _hoisted_83$2 = { class: "col input-bg" };
const _hoisted_84$2 = { class: "col input-bg" };
const _hoisted_85$2 = { class: "col input-bg" };
const _hoisted_86$2 = { class: "col input-bg" };
const _hoisted_87$2 = { class: "col input-bg" };
const _hoisted_88$2 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_89$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_90$1 = /*#__PURE__*/vue.createTextVNode(" Открыть исходную Инд. накладную ");
const _hoisted_91$1 = { class: "row" };
const _hoisted_92$1 = { class: "my-2" };
const _hoisted_93$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Решение по инд. накладной", -1 /* HOISTED */);
const _hoisted_94$1 = { class: "d-flex" };
const _hoisted_95$1 = { class: "col-9" };
const _hoisted_96$1 = { class: "input-bg" };
const _hoisted_97$1 = { class: "col-3" };
const _hoisted_98$1 = { class: "input-bg" };
const _hoisted_99$1 = { class: "d-flex" };
const _hoisted_100$1 = { class: "col-7" };
const _hoisted_101$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr fs-5" }, "Причина отказа", -1 /* HOISTED */);
const _hoisted_102$1 = { class: "input-bg" };
const _hoisted_103$1 = { class: "col-5" };
const _hoisted_104$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr fs-5" }, "Уникальный идентификатор партии", -1 /* HOISTED */);
const _hoisted_105$1 = { class: "col input-bg" };
const _hoisted_106 = { class: "sender-personal-inf mt-4" };
const _hoisted_107 = { class: "row" };
const _hoisted_108 = {
  class: "btn invoice-button collapsed",
  type: "button"
};
const _hoisted_109 = /*#__PURE__*/vue.createElementVNode("span", null, "Отправитель по индивидуальной накладной", -1 /* HOISTED */);
const _hoisted_110 = [
  _hoisted_109
];
const _hoisted_111 = { class: "card card-body" };
const _hoisted_112 = { class: "row" };
const _hoisted_113 = { class: "recipient-name" };
const _hoisted_114 = { class: "row form my-2" };
const _hoisted_115 = { class: "col-8" };
const _hoisted_116 = { class: "input-bg" };
const _hoisted_117 = { class: "col-1" };
const _hoisted_118 = { class: "input-bg" };
const _hoisted_119 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_120 = { class: "col-2 d-flex" };
const _hoisted_121 = { class: "input-bg col-2" };
const _hoisted_122 = ["checked"];
const _hoisted_123 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_124 = { class: "row my-2" };
const _hoisted_125 = { class: "col-6 d-flex justify-content-between" };
const _hoisted_126 = { class: "col-4 d-flex" };
const _hoisted_127 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-1" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_128 = { class: "input-bg col-9" };
const _hoisted_129 = { class: "col-4 d-flex" };
const _hoisted_130 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_131 = { class: "input-bg col-9" };
const _hoisted_132 = { class: "col-4 d-flex" };
const _hoisted_133 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_134 = { class: "input-bg col-9" };
const _hoisted_135 = { class: "col-6 d-flex" };
const _hoisted_136 = { class: "input-bg col-6" };
const _hoisted_137 = { class: "input-bg col-6" };
const _hoisted_138 = { class: "row" };
const _hoisted_139 = { class: "recipient-address" };
const _hoisted_140 = /*#__PURE__*/vue.createElementVNode("div", { class: "row my-2" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "d-flex recipient-contacts" }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
      /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес:")
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_141 = { class: "row my-2" };
const _hoisted_142 = { class: "address-block" };
const _hoisted_143 = { class: "row my-2" };
const _hoisted_144 = { class: "col-1" };
const _hoisted_145 = { class: "input-bg" };
const _hoisted_146 = { class: "col-4" };
const _hoisted_147 = { class: "input-bg" };
const _hoisted_148 = { class: "col-2" };
const _hoisted_149 = { class: "input-bg" };
const _hoisted_150 = { class: "col-5" };
const _hoisted_151 = { class: "input-bg" };
const _hoisted_152 = { class: "row my-2" };
const _hoisted_153 = { class: "col-5" };
const _hoisted_154 = { class: "input-bg" };
const _hoisted_155 = { class: "col-3" };
const _hoisted_156 = { class: "input-bg" };
const _hoisted_157 = { class: "col-4" };
const _hoisted_158 = { class: "input-bg" };
const _hoisted_159 = { class: "row my-2" };
const _hoisted_160 = { class: "col-4" };
const _hoisted_161 = { class: "input-bg" };
const _hoisted_162 = { class: "col-2" };
const _hoisted_163 = { class: "input-bg" };
const _hoisted_164 = { class: "col-2" };
const _hoisted_165 = { class: "input-bg" };
const _hoisted_166 = { class: "col-2" };
const _hoisted_167 = { class: "input-bg" };
const _hoisted_168 = { class: "row my-2" };
const _hoisted_169 = { class: "col-12" };
const _hoisted_170 = { class: "input-bg" };
const _hoisted_171 = { class: "row" };
const _hoisted_172 = { class: "personal-inf-block" };
const _hoisted_173 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_174 = { class: "row my-2" };
const _hoisted_175 = { class: "row personal-data my-2" };
const _hoisted_176 = { class: "col-1" };
const _hoisted_177 = { class: "input-bg" };
const _hoisted_178 = { class: "col-2" };
const _hoisted_179 = { class: "input-bg" };
const _hoisted_180 = { class: "col-2" };
const _hoisted_181 = { class: "input-bg" };
const _hoisted_182 = { class: "col-5 d-flex" };
const _hoisted_183 = { class: "input-bg col-4" };
const _hoisted_184 = { class: "input-bg col-4" };
const _hoisted_185 = { class: "input-bg col-4" };
const _hoisted_186 = { class: "col-2" };
const _hoisted_187 = { class: "input-bg" };
const _hoisted_188 = { class: "row" };
const _hoisted_189 = { class: "col-8" };
const _hoisted_190 = { class: "input-bg" };
const _hoisted_191 = { class: "recipient-personal-inf" };
const _hoisted_192 = { class: "row" };
const _hoisted_193 = {
  class: "btn invoice-button collapsed",
  type: "button"
};
const _hoisted_194 = /*#__PURE__*/vue.createElementVNode("span", null, "Получатель по индивидуальной накладной", -1 /* HOISTED */);
const _hoisted_195 = [
  _hoisted_194
];
const _hoisted_196 = { class: "card card-body" };
const _hoisted_197 = { class: "row" };
const _hoisted_198 = { class: "recipient-name" };
const _hoisted_199 = { class: "row form my-2" };
const _hoisted_200 = { class: "col-8" };
const _hoisted_201 = { class: "input-bg" };
const _hoisted_202 = { class: "col-1" };
const _hoisted_203 = { class: "input-bg" };
const _hoisted_204 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_205 = { class: "col-2 d-flex" };
const _hoisted_206 = { class: "input-bg col-2" };
const _hoisted_207 = ["checked"];
const _hoisted_208 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_209 = { class: "row my-2" };
const _hoisted_210 = { class: "col-6 d-flex justify-content-between" };
const _hoisted_211 = { class: "col-4 d-flex" };
const _hoisted_212 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-1" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_213 = { class: "input-bg col-9" };
const _hoisted_214 = { class: "col-4 d-flex" };
const _hoisted_215 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_216 = { class: "input-bg col-9" };
const _hoisted_217 = { class: "col-4 d-flex" };
const _hoisted_218 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_219 = { class: "input-bg col-9" };
const _hoisted_220 = { class: "col-6 d-flex" };
const _hoisted_221 = { class: "input-bg col-6" };
const _hoisted_222 = { class: "input-bg col-6" };
const _hoisted_223 = { class: "row" };
const _hoisted_224 = { class: "recipient-address" };
const _hoisted_225 = /*#__PURE__*/vue.createElementVNode("div", { class: "row my-2" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "d-flex recipient-contacts" }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
      /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес:")
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_226 = { class: "row my-2" };
const _hoisted_227 = { class: "address-block" };
const _hoisted_228 = { class: "row my-2" };
const _hoisted_229 = { class: "col-1" };
const _hoisted_230 = { class: "input-bg" };
const _hoisted_231 = { class: "col-4" };
const _hoisted_232 = { class: "input-bg" };
const _hoisted_233 = { class: "col-2" };
const _hoisted_234 = { class: "input-bg" };
const _hoisted_235 = { class: "col-5" };
const _hoisted_236 = { class: "input-bg" };
const _hoisted_237 = { class: "row my-2" };
const _hoisted_238 = { class: "col-5" };
const _hoisted_239 = { class: "input-bg" };
const _hoisted_240 = { class: "col-3" };
const _hoisted_241 = { class: "input-bg" };
const _hoisted_242 = { class: "col-4" };
const _hoisted_243 = { class: "input-bg" };
const _hoisted_244 = { class: "row my-2" };
const _hoisted_245 = { class: "col-4" };
const _hoisted_246 = { class: "input-bg" };
const _hoisted_247 = { class: "col-2" };
const _hoisted_248 = { class: "input-bg" };
const _hoisted_249 = { class: "col-2" };
const _hoisted_250 = { class: "input-bg" };
const _hoisted_251 = { class: "col-2" };
const _hoisted_252 = { class: "input-bg" };
const _hoisted_253 = { class: "row my-2" };
const _hoisted_254 = { class: "col-12" };
const _hoisted_255 = { class: "input-bg" };
const _hoisted_256 = { class: "row" };
const _hoisted_257 = { class: "personal-inf-block" };
const _hoisted_258 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_259 = { class: "row my-2" };
const _hoisted_260 = { class: "row personal-data my-2" };
const _hoisted_261 = { class: "col-1" };
const _hoisted_262 = { class: "input-bg" };
const _hoisted_263 = { class: "col-2" };
const _hoisted_264 = { class: "input-bg" };
const _hoisted_265 = { class: "col-2" };
const _hoisted_266 = { class: "input-bg" };
const _hoisted_267 = { class: "col-5 d-flex" };
const _hoisted_268 = { class: "input-bg col-4" };
const _hoisted_269 = { class: "input-bg col-4" };
const _hoisted_270 = { class: "input-bg col-4" };
const _hoisted_271 = { class: "col-2" };
const _hoisted_272 = { class: "input-bg" };
const _hoisted_273 = { class: "row" };
const _hoisted_274 = { class: "col-8" };
const _hoisted_275 = { class: "input-bg" };
const _hoisted_276 = { class: "goods" };
const _hoisted_277 = /*#__PURE__*/vue.createElementVNode("p", null, "Товары", -1 /* HOISTED */);
const _hoisted_278 = { class: "arrow" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_tsoft_good_information_form = vue.resolveComponent("tsoft-good-information-form");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
    vue.createElementVNode("div", {
      class: "group-panel-label",
      onClick: _cache[0] || (_cache[0] = $event => ($data.isOrderOpen= !$data.isOrderOpen))
    }, [
      vue.createElementVNode("p", null, "Товарная партия " + vue.toDisplayString($props.orderNum), 1 /* TEXT */),
      vue.createElementVNode("div", _hoisted_2$9, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrderOpen}])
        }, null, 2 /* CLASS */)
      ])
    ]),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["group-panel-content", {'open': $data.isOrderOpen}])
    }, [
      vue.createElementVNode("div", _hoisted_3$8, [
        vue.createCommentVNode("Region элемент с информацией о партии, индивидуальной информацией об отправителе, с информацией о получателе"),
        vue.createElementVNode("div", _hoisted_4$5, [
          vue.createCommentVNode("Region элемент с общей информацией о партии"),
          vue.createElementVNode("div", _hoisted_5$6, [
            vue.createElementVNode("div", _hoisted_6$4, [
              vue.createElementVNode("div", _hoisted_7$3, [
                vue.createElementVNode("form", _hoisted_8$3, [
                  vue.createElementVNode("div", _hoisted_9$3, [
                    vue.createElementVNode("div", _hoisted_10$3, [
                      _hoisted_11$2,
                      _hoisted_12$2,
                      vue.createElementVNode("div", _hoisted_13$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.order.general.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.code]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_14$3, [
                      vue.createElementVNode("div", _hoisted_15$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.order.general.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.type]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_16$2, [
                      vue.createElementVNode("div", _hoisted_17$3, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.order.general.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.num]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_18$2, [
                      vue.createElementVNode("div", _hoisted_19$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.order.general.document.date) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.date]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_20$2, [
                    vue.createElementVNode("div", _hoisted_21$2, [
                      _hoisted_22$2,
                      vue.createElementVNode("div", _hoisted_23$2, [
                        vue.createElementVNode("div", _hoisted_24$2, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.order.personal.document.count) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.order.personal.document.count]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_25$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.order.personal.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.code]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_26$2, [
                      vue.createElementVNode("div", _hoisted_27$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.order.personal.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.type]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_28$2, [
                      vue.createElementVNode("div", _hoisted_29$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.order.personal.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.num]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_30$2, [
                      vue.createElementVNode("div", _hoisted_31$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.order.personal.document.date) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.date]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_32$2, [
                    vue.createElementVNode("div", _hoisted_33$2, [
                      _hoisted_34$2,
                      vue.createElementVNode("div", _hoisted_35$2, [
                        vue.createElementVNode("div", _hoisted_36$2, [
                          vue.createElementVNode("div", _hoisted_37$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.order.general.grossWeight) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.grossWeight]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_38$2, [
                          vue.createElementVNode("div", _hoisted_39$2, [
                            vue.createElementVNode("div", _hoisted_40$2, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.order.general.grossWeightUnit) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.general.grossWeightUnit]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_41$2, [
                            vue.createElementVNode("div", _hoisted_42$2, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.order.general.grossWeightUnknown) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.general.grossWeightUnknown]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_43$2, [
                      _hoisted_44$2,
                      vue.createElementVNode("div", _hoisted_45$2, [
                        vue.createElementVNode("div", _hoisted_46$2, [
                          vue.createElementVNode("div", _hoisted_47$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_48$2, [
                          _hoisted_49$2,
                          vue.createElementVNode("div", _hoisted_50$2, [
                            vue.createElementVNode("div", _hoisted_51$2, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.order.general.customCostCurrency) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.general.customCostCurrency]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_52$2, [
                      _hoisted_53$2,
                      vue.createElementVNode("div", _hoisted_54$2, [
                        vue.createElementVNode("div", _hoisted_55$2, [
                          vue.createElementVNode("div", _hoisted_56$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_57$2, [
                          vue.createElementVNode("div", _hoisted_58$2, [
                            vue.createElementVNode("div", _hoisted_59$2, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.order.general.customCostCurrency) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.general.customCostCurrency]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_60$2, [
                    vue.createElementVNode("div", _hoisted_61$2, [
                      _hoisted_62$2,
                      vue.createElementVNode("div", _hoisted_63$2, [
                        vue.createElementVNode("div", _hoisted_64$2, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.order.internetMarketUrl) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.order.internetMarketUrl]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_65$2, [
                        vue.createElementVNode("div", _hoisted_66$2, [
                          vue.createElementVNode("div", _hoisted_67$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.order.internetMarketUnknown) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.internetMarketUnknown]
                            ])
                          ])
                        ]),
                        _hoisted_68$2
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_69$2, [
                      _hoisted_70$2,
                      vue.createElementVNode("div", _hoisted_71$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.order.placeNum) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.placeNum]
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_72$2, [
                vue.createElementVNode("div", _hoisted_73$2, [
                  vue.createVNode(_component_router_link, {
                    to: { name: 'index' },
                    id: "productsInfoLink"
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_74$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  vue.createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: vue.withCtx(() => [
                      _hoisted_75$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  vue.createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: vue.withCtx(() => [
                      _hoisted_76$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  vue.createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: vue.withCtx(() => [
                      _hoisted_77$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  vue.createElementVNode("div", _hoisted_78$2, [
                    _hoisted_79$2,
                    vue.createElementVNode("div", _hoisted_80$2, [
                      vue.createElementVNode("div", _hoisted_81$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.order.changeDetailsType.stageChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.stageChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_82$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.order.changeDetailsType.reasonChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.reasonChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_83$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.order.changeDetailsType.quantityChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.quantityChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_84$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.order.changeDetailsType.TNVEDChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.TNVEDChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_85$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.order.changeDetailsType.customsCostChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.customsCostChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_86$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.order.changeDetailsType.customsPaymentChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.customsPaymentChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_87$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.order.changeDetailsType.otherChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.otherChangeCode]
                        ])
                      ]),
                      _hoisted_88$2
                    ]),
                    _hoisted_89$1
                  ]),
                  vue.createVNode(_component_router_link, {
                    to: { name: 'index' },
                    class: "my-4"
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_90$1
                    ]),
                    _: 1 /* STABLE */
                  })
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_91$1, [
              vue.createElementVNode("div", _hoisted_92$1, [
                _hoisted_93$1,
                vue.createElementVNode("div", _hoisted_94$1, [
                  vue.createElementVNode("div", _hoisted_95$1, [
                    vue.createElementVNode("div", _hoisted_96$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.order.personal.invoiceDecision) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.order.personal.invoiceDecision]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_97$1, [
                    vue.createElementVNode("div", _hoisted_98$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($props.order.personal.invoiceDecisionUnknown) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.order.personal.invoiceDecisionUnknown]
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_99$1, [
                vue.createElementVNode("div", _hoisted_100$1, [
                  _hoisted_101$1,
                  vue.createElementVNode("div", _hoisted_102$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.order.orderRejectReason) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.order.orderRejectReason]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_103$1, [
                  _hoisted_104$1,
                  vue.createElementVNode("div", _hoisted_105$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($props.order.orderUniqueId) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.order.orderUniqueId]
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createCommentVNode("endregion"),
          vue.createCommentVNode("Region элемент с индивидуальной информацией об отправителе"),
          vue.createElementVNode("div", _hoisted_106, [
            vue.createElementVNode("div", _hoisted_107, [
              vue.createElementVNode("button", _hoisted_108, [
                vue.createElementVNode("div", {
                  class: "collapsing-block d-flex justify-content-between",
                  onClick: _cache[31] || (_cache[31] = $event => ($data.sender = !$data.sender))
                }, _hoisted_110)
              ]),
              vue.withDirectives(vue.createElementVNode("div", null, [
                vue.createElementVNode("div", _hoisted_111, [
                  vue.createElementVNode("div", _hoisted_112, [
                    vue.createElementVNode("div", _hoisted_113, [
                      vue.createElementVNode("form", _hoisted_114, [
                        vue.createElementVNode("div", _hoisted_115, [
                          vue.createElementVNode("div", _hoisted_116, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "",
                              "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => (($props.order.consignor.fullName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignor.fullName]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_117, [
                          vue.createElementVNode("div", _hoisted_118, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => (($props.order.consignor.countryCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignor.countryCode]
                            ])
                          ])
                        ]),
                        _hoisted_119,
                        vue.createElementVNode("div", _hoisted_120, [
                          vue.createElementVNode("div", _hoisted_121, [
                            vue.createElementVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              checked: $props.order.consignor.isDeclarant
                            }, null, 8 /* PROPS */, _hoisted_122)
                          ]),
                          _hoisted_123
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_124, [
                        vue.createElementVNode("div", _hoisted_125, [
                          vue.createElementVNode("div", _hoisted_126, [
                            _hoisted_127,
                            vue.createElementVNode("div", _hoisted_128, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => (($props.order.consignor.OGRN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.OGRN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_129, [
                            _hoisted_130,
                            vue.createElementVNode("div", _hoisted_131, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => (($props.order.consignor.INN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.INN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_132, [
                            _hoisted_133,
                            vue.createElementVNode("div", _hoisted_134, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => (($props.order.consignor.KPP) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.KPP]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_135, [
                          vue.createElementVNode("div", _hoisted_136, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "номер телефона",
                              "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => (($props.order.consignor.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignor.phone]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_137, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => (($props.order.consignor.email) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignor.email]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_138, [
                    vue.createElementVNode("div", _hoisted_139, [
                      _hoisted_140,
                      vue.createElementVNode("div", _hoisted_141, [
                        vue.createElementVNode("div", _hoisted_142, [
                          vue.createElementVNode("div", _hoisted_143, [
                            vue.createElementVNode("div", _hoisted_144, [
                              vue.createElementVNode("div", _hoisted_145, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "язык",
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => (($props.order.consignor.language) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.language]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_146, [
                              vue.createElementVNode("div", _hoisted_147, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "страна",
                                  "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => (($props.order.consignor.country) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.country]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_148, [
                              vue.createElementVNode("div", _hoisted_149, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "почтовый индекс",
                                  "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => (($props.order.consignor.mailIndex) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.mailIndex]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_150, [
                              vue.createElementVNode("div", _hoisted_151, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "область (регион, штат, провинция)",
                                  "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => (($props.order.consignor.region) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.region]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_152, [
                            vue.createElementVNode("div", _hoisted_153, [
                              vue.createElementVNode("div", _hoisted_154, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "район",
                                  "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => (($props.order.consignor.area) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.area]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_155, [
                              vue.createElementVNode("div", _hoisted_156, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "город",
                                  "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => (($props.order.consignor.city) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.city]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_157, [
                              vue.createElementVNode("div", _hoisted_158, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "населённый пункт",
                                  "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => (($props.order.consignor.settlement) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.settlement]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_159, [
                            vue.createElementVNode("div", _hoisted_160, [
                              vue.createElementVNode("div", _hoisted_161, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "улица",
                                  "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => (($props.order.consignor.address) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.address]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_162, [
                              vue.createElementVNode("div", _hoisted_163, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "дом, корпус, строение",
                                  "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => (($props.order.consignor.house) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.house]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_164, [
                              vue.createElementVNode("div", _hoisted_165, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "офис/квартира",
                                  "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => (($props.order.consignor.office) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.office]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_166, [
                              vue.createElementVNode("div", _hoisted_167, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "номер а/я",
                                  "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => (($props.order.consignor.officeLetter) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.officeLetter]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_168, [
                            vue.createElementVNode("div", _hoisted_169, [
                              vue.createElementVNode("div", _hoisted_170, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                  "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => (($props.order.consignor.fullAddress) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignor.fullAddress]
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_171, [
                    vue.createElementVNode("div", _hoisted_172, [
                      _hoisted_173,
                      vue.createElementVNode("div", _hoisted_174, [
                        vue.createElementVNode("div", _hoisted_175, [
                          vue.createElementVNode("div", _hoisted_176, [
                            vue.createElementVNode("div", _hoisted_177, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "стр",
                                "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => (($props.order.consignor.document.country) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.country]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_178, [
                            vue.createElementVNode("div", _hoisted_179, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "код вида",
                                "onUpdate:modelValue": _cache[52] || (_cache[52] = $event => (($props.order.consignor.document.code) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.code]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_180, [
                            vue.createElementVNode("div", _hoisted_181, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "краткое наименование",
                                "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => (($props.order.consignor.document.shortName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.shortName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_182, [
                            vue.createElementVNode("div", _hoisted_183, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "серия",
                                "onUpdate:modelValue": _cache[54] || (_cache[54] = $event => (($props.order.consignor.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.series]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_184, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[55] || (_cache[55] = $event => (($props.order.consignor.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.num]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_185, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[56] || (_cache[56] = $event => (($props.order.consignor.document.dateRelease) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.dateRelease]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_186, [
                            vue.createElementVNode("div", _hoisted_187, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Код подразделения",
                                "onUpdate:modelValue": _cache[57] || (_cache[57] = $event => (($props.order.consignor.document.divisionCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.divisionCode]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_188, [
                          vue.createElementVNode("div", _hoisted_189, [
                            vue.createElementVNode("div", _hoisted_190, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "наименование организации, выдавшей документ",
                                "onUpdate:modelValue": _cache[58] || (_cache[58] = $event => (($props.order.consignor.document.issuedBy) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.issuedBy]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ], 512 /* NEED_PATCH */), [
                [vue.vShow, $data.sender]
              ])
            ])
          ]),
          vue.createCommentVNode("endregion"),
          vue.createCommentVNode("Region элемент с индивидуальной информацией о получателе"),
          vue.createElementVNode("div", _hoisted_191, [
            vue.createElementVNode("div", _hoisted_192, [
              vue.createElementVNode("button", _hoisted_193, [
                vue.createElementVNode("div", {
                  class: "collapsing-block d-flex justify-content-between",
                  onClick: _cache[59] || (_cache[59] = $event => ($data.recipient = !$data.recipient))
                }, _hoisted_195)
              ]),
              vue.withDirectives(vue.createElementVNode("div", null, [
                vue.createElementVNode("div", _hoisted_196, [
                  vue.createElementVNode("div", _hoisted_197, [
                    vue.createElementVNode("div", _hoisted_198, [
                      vue.createElementVNode("form", _hoisted_199, [
                        vue.createElementVNode("div", _hoisted_200, [
                          vue.createElementVNode("div", _hoisted_201, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "",
                              "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => (($props.order.consignee.fullName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.fullName]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_202, [
                          vue.createElementVNode("div", _hoisted_203, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[61] || (_cache[61] = $event => (($props.order.consignee.countryCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.countryCode]
                            ])
                          ])
                        ]),
                        _hoisted_204,
                        vue.createElementVNode("div", _hoisted_205, [
                          vue.createElementVNode("div", _hoisted_206, [
                            vue.createElementVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              checked: $props.order.consignee.isDeclarant
                            }, null, 8 /* PROPS */, _hoisted_207)
                          ]),
                          _hoisted_208
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_209, [
                        vue.createElementVNode("div", _hoisted_210, [
                          vue.createElementVNode("div", _hoisted_211, [
                            _hoisted_212,
                            vue.createElementVNode("div", _hoisted_213, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[62] || (_cache[62] = $event => (($props.order.consignee.OGRN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.OGRN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_214, [
                            _hoisted_215,
                            vue.createElementVNode("div", _hoisted_216, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[63] || (_cache[63] = $event => (($props.order.consignee.INN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.INN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_217, [
                            _hoisted_218,
                            vue.createElementVNode("div", _hoisted_219, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[64] || (_cache[64] = $event => (($props.order.consignee.KPP) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.KPP]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_220, [
                          vue.createElementVNode("div", _hoisted_221, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "номер телефона",
                              "onUpdate:modelValue": _cache[65] || (_cache[65] = $event => (($props.order.consignee.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.phone]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_222, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => (($props.order.consignee.email) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.email]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_223, [
                    vue.createElementVNode("div", _hoisted_224, [
                      _hoisted_225,
                      vue.createElementVNode("div", _hoisted_226, [
                        vue.createElementVNode("div", _hoisted_227, [
                          vue.createElementVNode("div", _hoisted_228, [
                            vue.createElementVNode("div", _hoisted_229, [
                              vue.createElementVNode("div", _hoisted_230, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "язык",
                                  "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => (($props.order.consignee.language) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.language]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_231, [
                              vue.createElementVNode("div", _hoisted_232, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "страна",
                                  "onUpdate:modelValue": _cache[68] || (_cache[68] = $event => (($props.order.consignee.country) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.country]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_233, [
                              vue.createElementVNode("div", _hoisted_234, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "почтовый индекс",
                                  "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => (($props.order.consignee.mailIndex) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.mailIndex]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_235, [
                              vue.createElementVNode("div", _hoisted_236, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "область (регион, штат, провинция)",
                                  "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => (($props.order.consignee.region) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.region]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_237, [
                            vue.createElementVNode("div", _hoisted_238, [
                              vue.createElementVNode("div", _hoisted_239, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "район",
                                  "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => (($props.order.consignee.area) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.area]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_240, [
                              vue.createElementVNode("div", _hoisted_241, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "город",
                                  "onUpdate:modelValue": _cache[72] || (_cache[72] = $event => (($props.order.consignee.city) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.city]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_242, [
                              vue.createElementVNode("div", _hoisted_243, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "населённый пункт",
                                  "onUpdate:modelValue": _cache[73] || (_cache[73] = $event => (($props.order.consignee.settlement) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.settlement]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_244, [
                            vue.createElementVNode("div", _hoisted_245, [
                              vue.createElementVNode("div", _hoisted_246, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "улица",
                                  "onUpdate:modelValue": _cache[74] || (_cache[74] = $event => (($props.order.consignee.address) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.address]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_247, [
                              vue.createElementVNode("div", _hoisted_248, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "дом, корпус, строение",
                                  "onUpdate:modelValue": _cache[75] || (_cache[75] = $event => (($props.order.consignee.house) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.house]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_249, [
                              vue.createElementVNode("div", _hoisted_250, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "офис/квартира",
                                  "onUpdate:modelValue": _cache[76] || (_cache[76] = $event => (($props.order.consignee.office) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.office]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_251, [
                              vue.createElementVNode("div", _hoisted_252, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "номер а/я",
                                  "onUpdate:modelValue": _cache[77] || (_cache[77] = $event => (($props.order.consignee.officeLetter) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.officeLetter]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_253, [
                            vue.createElementVNode("div", _hoisted_254, [
                              vue.createElementVNode("div", _hoisted_255, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                  "onUpdate:modelValue": _cache[78] || (_cache[78] = $event => (($props.order.consignee.fullAddress) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.fullAddress]
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_256, [
                    vue.createElementVNode("div", _hoisted_257, [
                      _hoisted_258,
                      vue.createElementVNode("div", _hoisted_259, [
                        vue.createElementVNode("div", _hoisted_260, [
                          vue.createElementVNode("div", _hoisted_261, [
                            vue.createElementVNode("div", _hoisted_262, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "стр",
                                "onUpdate:modelValue": _cache[79] || (_cache[79] = $event => (($props.order.consignee.document.country) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.country]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_263, [
                            vue.createElementVNode("div", _hoisted_264, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "код вида",
                                "onUpdate:modelValue": _cache[80] || (_cache[80] = $event => (($props.order.consignee.document.code) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.code]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_265, [
                            vue.createElementVNode("div", _hoisted_266, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "краткое наименование",
                                "onUpdate:modelValue": _cache[81] || (_cache[81] = $event => (($props.order.consignee.document.shortName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.shortName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_267, [
                            vue.createElementVNode("div", _hoisted_268, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "серия",
                                "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => (($props.order.consignee.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.series]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_269, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[83] || (_cache[83] = $event => (($props.order.consignee.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.num]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_270, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => (($props.order.consignee.document.dateRelease) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.dateRelease]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_271, [
                            vue.createElementVNode("div", _hoisted_272, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Код подразделения",
                                "onUpdate:modelValue": _cache[85] || (_cache[85] = $event => (($props.order.consignee.document.divisionCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.divisionCode]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_273, [
                          vue.createElementVNode("div", _hoisted_274, [
                            vue.createElementVNode("div", _hoisted_275, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "наименование организации, выдавшей документ",
                                "onUpdate:modelValue": _cache[86] || (_cache[86] = $event => (($props.order.consignee.document.issuedBy) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.issuedBy]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ], 512 /* NEED_PATCH */), [
                [vue.vShow, $data.recipient]
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_276, [
        vue.createElementVNode("div", {
          class: "group-panel-label mb-2",
          onClick: _cache[87] || (_cache[87] = $event => ($data.isGoodsOpen= !$data.isGoodsOpen))
        }, [
          _hoisted_277,
          vue.createElementVNode("div", _hoisted_278, [
            vue.createElementVNode("i", {
              class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isGoodsOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["group-panel-content", {'open': $data.isGoodsOpen}])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.goods, (good, index) => {
            return (vue.openBlock(), vue.createBlock(_component_tsoft_good_information_form, {
              goodNum: index,
              good: good.goodInfo,
              documents: good.documents
            }, null, 8 /* PROPS */, ["goodNum", "good", "documents"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ])
    ], 2 /* CLASS */)
  ]))
}

script$9.render = render$9;
script$9.__file = "src/components/Form/GoodsAwbInformation.vue";

var script$8 = {
  name: "TsoftAdditionalDocumentForm",
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isDocumentOpen: false
    };
  }
};

const _withScopeId$2 = n => (vue.pushScopeId("data-v-598fc5a6"),n=n(),vue.popScopeId(),n);
const _hoisted_1$8 = { class: "doc" };
const _hoisted_2$8 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("p", null, "Документы №", -1 /* HOISTED */));
const _hoisted_3$7 = { class: "arrow" };
const _hoisted_4$4 = { class: "optional-inf-block" };
const _hoisted_5$5 = { class: "product-inner-block" };
const _hoisted_6$3 = { class: "optional-inf-card" };
const _hoisted_7$2 = { class: "row" };
const _hoisted_8$2 = { class: "d-flex" };
const _hoisted_9$2 = { class: "col-5 d-flex" };
const _hoisted_10$2 = { class: "col-3 d-flex" };
const _hoisted_11$1 = { class: "col-8" };
const _hoisted_12$1 = { class: "input-bg" };
const _hoisted_13$2 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "fs-5 my-0" }, "/")
], -1 /* HOISTED */));
const _hoisted_14$2 = { class: "col-3" };
const _hoisted_15$1 = { class: "input-bg" };
const _hoisted_16$1 = { class: "col-9 ps-2" };
const _hoisted_17$2 = { class: "input-bg" };
const _hoisted_18$1 = { class: "col-7 row" };
const _hoisted_19$1 = { class: "col-2" };
const _hoisted_20$1 = { class: "input-bg" };
const _hoisted_21$1 = { class: "col-3 d-flex" };
const _hoisted_22$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "от", -1 /* HOISTED */));
const _hoisted_23$1 = { class: "input-bg" };
const _hoisted_24$1 = { class: "col-3 d-flex" };
const _hoisted_25$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "с", -1 /* HOISTED */));
const _hoisted_26$1 = { class: "input-bg" };
const _hoisted_27$1 = { class: "col-3 d-flex" };
const _hoisted_28$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "по", -1 /* HOISTED */));
const _hoisted_29$1 = { class: "input-bg" };
const _hoisted_30$1 = { class: "col-1" };
const _hoisted_31$1 = { class: "input-bg" };
const _hoisted_32$1 = { class: "row mt-3" };
const _hoisted_33$1 = { class: "d-flex" };
const _hoisted_34$1 = { class: "col-5 d-flex" };
const _hoisted_35$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"col-2\" data-v-598fc5a6><div class=\"row pe-4\" data-v-598fc5a6><div class=\"col-6\" data-v-598fc5a6><button class=\"btn\" data-v-598fc5a6><i class=\"fa-solid fa-bolt-lightning\" data-v-598fc5a6></i></button></div><div class=\"col-6\" data-v-598fc5a6><button class=\"btn\" data-v-598fc5a6><i class=\"fa-solid fa-folder-open\" data-v-598fc5a6></i></button></div></div><div class=\"row\" data-v-598fc5a6></div></div>", 1);
const _hoisted_36$1 = { class: "col-10 d-flex" };
const _hoisted_37$1 = { class: "col-8" };
const _hoisted_38$1 = { class: "input-bg" };
const _hoisted_39$1 = { class: "col-4" };
const _hoisted_40$1 = { class: "input-bg" };
const _hoisted_41$1 = { class: "col-7 d-flex" };
const _hoisted_42$1 = { class: "col-4" };
const _hoisted_43$1 = { class: "input-bg" };
const _hoisted_44$1 = { class: "col-5" };
const _hoisted_45$1 = { class: "input-bg" };
const _hoisted_46$1 = { class: "col-3" };
const _hoisted_47$1 = { class: "input-bg" };
const _hoisted_48$1 = { class: "row justify-content-center mt-2" };
const _hoisted_49$1 = { class: "col-11" };
const _hoisted_50$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, " Сведения о фактическом представлении документа ")
], -1 /* HOISTED */));
const _hoisted_51$1 = { class: "d-flex" };
const _hoisted_52$1 = { class: "col-2 d-flex" };
const _hoisted_53$1 = { class: "input-bg col-4" };
const _hoisted_54$1 = { class: "input-bg col-8" };
const _hoisted_55$1 = { class: "col-5 d-flex" };
const _hoisted_56$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "col-1 align-bcntr text" }, "ДТ")
], -1 /* HOISTED */));
const _hoisted_57$1 = { class: "col-3" };
const _hoisted_58$1 = { class: "input-bg" };
const _hoisted_59$1 = { class: "col-4" };
const _hoisted_60$1 = { class: "input-bg" };
const _hoisted_61$1 = { class: "col-3" };
const _hoisted_62$1 = { class: "input-bg" };
const _hoisted_63$1 = { class: "col-1" };
const _hoisted_64$1 = { class: "input-bg" };
const _hoisted_65$1 = { class: "col-5 d-flex" };
const _hoisted_66$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "col-1 align-bcntr" }, "ТС")
], -1 /* HOISTED */));
const _hoisted_67$1 = { class: "col-3" };
const _hoisted_68$1 = { class: "input-bg" };
const _hoisted_69$1 = { class: "col-4" };
const _hoisted_70$1 = { class: "input-bg" };
const _hoisted_71$1 = { class: "col-3" };
const _hoisted_72$1 = { class: "input-bg" };
const _hoisted_73$1 = { class: "col-1" };
const _hoisted_74$1 = { class: "input-bg" };
const _hoisted_75$1 = { class: "d-flex mt-2" };
const _hoisted_76$1 = { class: "col-2 d-flex" };
const _hoisted_77$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */));
const _hoisted_78$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr text" }, "TIR")
], -1 /* HOISTED */));
const _hoisted_79$1 = { class: "col-2" };
const _hoisted_80$1 = { class: "input-bg" };
const _hoisted_81$1 = { class: "col-7" };
const _hoisted_82$1 = { class: "input-bg" };
const _hoisted_83$1 = { class: "col-6 d-flex" };
const _hoisted_84$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-3 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr text" }, "Иной документ")
], -1 /* HOISTED */));
const _hoisted_85$1 = { class: "col-6" };
const _hoisted_86$1 = { class: "input-bg" };
const _hoisted_87$1 = { class: "col-3" };
const _hoisted_88$1 = { class: "input-bg" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
    vue.createElementVNode("div", {
      class: "group-panel-label",
      onClick: _cache[0] || (_cache[0] = $event => ($data.isDocumentOpen = !$data.isDocumentOpen))
    }, [
      _hoisted_2$8,
      vue.createElementVNode("div", _hoisted_3$7, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isDocumentOpen}])
        }, null, 2 /* CLASS */)
      ])
    ]),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["group-panel-content doc", {'open': $data.isDocumentOpen}])
    }, [
      vue.createElementVNode("div", _hoisted_4$4, [
        vue.createElementVNode("div", _hoisted_5$5, [
          vue.createElementVNode("div", _hoisted_6$3, [
            vue.createElementVNode("div", _hoisted_7$2, [
              vue.createElementVNode("div", _hoisted_8$2, [
                vue.createElementVNode("div", _hoisted_9$2, [
                  vue.createElementVNode("div", _hoisted_10$2, [
                    vue.createElementVNode("div", _hoisted_11$1, [
                      vue.createElementVNode("div", _hoisted_12$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.document.typeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.typeCode]
                        ])
                      ])
                    ]),
                    _hoisted_13$2,
                    vue.createElementVNode("div", _hoisted_14$2, [
                      vue.createElementVNode("div", _hoisted_15$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.document.typeCodeCount) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.typeCodeCount]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_16$1, [
                    vue.createElementVNode("div", _hoisted_17$2, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.document.type) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.type]
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_18$1, [
                  vue.createElementVNode("div", _hoisted_19$1, [
                    vue.createElementVNode("div", _hoisted_20$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.document.number) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.number]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_21$1, [
                    _hoisted_22$1,
                    vue.createElementVNode("div", _hoisted_23$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "дата",
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.document.dateRelease) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.dateRelease]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_24$1, [
                    _hoisted_25$1,
                    vue.createElementVNode("div", _hoisted_26$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "дата начала",
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.document.dateStart) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.dateStart]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_27$1, [
                    _hoisted_28$1,
                    vue.createElementVNode("div", _hoisted_29$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "дата окончания",
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.document.dateEnd) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.dateEnd]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_30$1, [
                    vue.createElementVNode("div", _hoisted_31$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.document.fieldUnknown) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.fieldUnknown]
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_32$1, [
              vue.createElementVNode("div", _hoisted_33$1, [
                vue.createElementVNode("div", _hoisted_34$1, [
                  _hoisted_35$1,
                  vue.createElementVNode("div", _hoisted_36$1, [
                    vue.createElementVNode("div", _hoisted_37$1, [
                      vue.createElementVNode("div", _hoisted_38$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "Полное наименование государственной",
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.document.countryFullName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.countryFullName]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_39$1, [
                      vue.createElementVNode("div", _hoisted_40$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "AuthorityId",
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.document.authorityId) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.authorityId]
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_41$1, [
                  vue.createElementVNode("div", _hoisted_42$1, [
                    vue.createElementVNode("div", _hoisted_43$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "Информационного ресурс",
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.document.informationSource) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.informationSource]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_44$1, [
                    vue.createElementVNode("div", _hoisted_45$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "URL",
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.document.url) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.url]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_46$1, [
                    vue.createElementVNode("div", _hoisted_47$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "Дата обращения",
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.document.dateUrlAppeal) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.dateUrlAppeal]
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_48$1, [
              vue.createElementVNode("div", _hoisted_49$1, [
                _hoisted_50$1,
                vue.createElementVNode("div", _hoisted_51$1, [
                  vue.createElementVNode("div", _hoisted_52$1, [
                    vue.createElementVNode("div", _hoisted_53$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.document.unknownField1) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.unknownField1]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_54$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.document.unknownField2) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.document.unknownField2]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_55$1, [
                    _hoisted_56$1,
                    vue.createElementVNode("div", _hoisted_57$1, [
                      vue.createElementVNode("div", _hoisted_58$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.document.unknownField3) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField3]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_59$1, [
                      vue.createElementVNode("div", _hoisted_60$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.document.unknownField4) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField4]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_61$1, [
                      vue.createElementVNode("div", _hoisted_62$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.document.unknownField5) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField5]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_63$1, [
                      vue.createElementVNode("div", _hoisted_64$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.document.unknownField6) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField6]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_65$1, [
                    _hoisted_66$1,
                    vue.createElementVNode("div", _hoisted_67$1, [
                      vue.createElementVNode("div", _hoisted_68$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.document.unknownField7) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField7]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_69$1, [
                      vue.createElementVNode("div", _hoisted_70$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.document.unknownField8) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField8]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_71$1, [
                      vue.createElementVNode("div", _hoisted_72$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.document.unknownField9) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField9]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_73$1, [
                      vue.createElementVNode("div", _hoisted_74$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.document.unknownField10) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField10]
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_75$1, [
                  vue.createElementVNode("div", _hoisted_76$1, [
                    _hoisted_77$1,
                    _hoisted_78$1,
                    vue.createElementVNode("div", _hoisted_79$1, [
                      vue.createElementVNode("div", _hoisted_80$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.document.unknownField11) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField11]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_81$1, [
                      vue.createElementVNode("div", _hoisted_82$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.document.unknownField12) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField12]
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_83$1, [
                    _hoisted_84$1,
                    vue.createElementVNode("div", _hoisted_85$1, [
                      vue.createElementVNode("div", _hoisted_86$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.document.unknownField13) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField13]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_87$1, [
                      vue.createElementVNode("div", _hoisted_88$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.document.unknownField14) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.document.unknownField14]
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ], 2 /* CLASS */)
  ]))
}

var css_248z$8 = "\n.optional-inf-block > a[data-v-598fc5a6] {\r\n  box-sizing: border-box;\r\n  font-size: 10px;\n}\n.optional-inf-block p[data-v-598fc5a6] {\r\n  font-size: 10px;\n}\n.optional-inf-block label[data-v-598fc5a6] {\r\n  font-size: 10px;\n}\n.optional-inf-block[data-v-598fc5a6] {\r\n  padding: 0 0 10px;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\n.group-panel-content.doc[data-v-598fc5a6] {\r\n  border: 1px solid #c4c4c4;\r\n  border-top: unset;\n}\n.text[data-v-598fc5a6] {\r\n  font-size: 10px;\n}\r\n";
styleInject(css_248z$8);

script$8.render = render$8;
script$8.__scopeId = "data-v-598fc5a6";
script$8.__file = "src/components/Form/AdditionalDocument.vue";

var script$7 = {
  name: "TsoftGoodInformationForm",
  data() {
    return {
      isGoodOpen: false
    };
  },
  props: {
    good: {
      type: Object,
      required: true
    },
    goodNum: {
      required: true
    }
  }
};

const _withScopeId$1 = n => (vue.pushScopeId("data-v-d878b218"),n=n(),vue.popScopeId(),n);
const _hoisted_1$7 = { class: "good" };
const _hoisted_2$7 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", null, "Товар №", -1 /* HOISTED */));
const _hoisted_3$6 = { class: "arrow" };
const _hoisted_4$3 = { class: "product-info-block" };
const _hoisted_5$4 = { class: "product-inner-block" };
const _hoisted_6$2 = { class: "row" };
const _hoisted_7$1 = { class: "col-1" };
const _hoisted_8$1 = { class: "col-9" };
const _hoisted_9$1 = { class: "col input-bg" };
const _hoisted_10$1 = { class: "col input-bg mt-3" };
const _hoisted_11 = { class: "col-8" };
const _hoisted_12 = { class: "input-bg h-100" };
const _hoisted_13$1 = { class: "col-3" };
const _hoisted_14$1 = { class: "changing-code" };
const _hoisted_15 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("div", { class: "label-block" }, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */));
const _hoisted_16 = { class: "col-9 d-flex w-100" };
const _hoisted_17$1 = { class: "col input-bg" };
const _hoisted_18 = { class: "col input-bg" };
const _hoisted_19 = { class: "col input-bg" };
const _hoisted_20 = { class: "col input-bg" };
const _hoisted_21 = { class: "col input-bg" };
const _hoisted_22 = { class: "col input-bg" };
const _hoisted_23 = { class: "col input-bg" };
const _hoisted_24 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */));
const _hoisted_25 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */));
const _hoisted_26 = { class: "row" };
const _hoisted_27 = { class: "col-3" };
const _hoisted_28 = { class: "d-flex" };
const _hoisted_29 = { class: "col-5" };
const _hoisted_30 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "col-11 align-bcntr" }, "ТН ВЭД ЕАЭС", -1 /* HOISTED */));
const _hoisted_31 = { class: "col-11 input-bg" };
const _hoisted_32 = { class: "col-7" };
const _hoisted_33 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Вес, брутто", -1 /* HOISTED */));
const _hoisted_34 = { class: "d-flex" };
const _hoisted_35 = { class: "col-6" };
const _hoisted_36 = { class: "col input-bg" };
const _hoisted_37 = { class: "col-6 d-flex" };
const _hoisted_38 = { class: "col-5" };
const _hoisted_39 = { class: "col input-bg" };
const _hoisted_40 = { class: "col-7" };
const _hoisted_41 = { class: "col input-bg" };
const _hoisted_42 = { class: "d-flex mt-2" };
const _hoisted_43 = { class: "col input-bg" };
const _hoisted_44 = { class: "col-6" };
const _hoisted_45 = { class: "d-flex" };
const _hoisted_46 = { class: "col-4" };
const _hoisted_47 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Вес, нетто", -1 /* HOISTED */));
const _hoisted_48 = { class: "d-flex" };
const _hoisted_49 = { class: "col-6" };
const _hoisted_50 = { class: "col input-bg" };
const _hoisted_51 = { class: "col-6" };
const _hoisted_52 = { class: "d-flex" };
const _hoisted_53 = { class: "col-5" };
const _hoisted_54 = { class: "col input-bg" };
const _hoisted_55 = { class: "col-7" };
const _hoisted_56 = { class: "col input-bg" };
const _hoisted_57 = { class: "col-4" };
const _hoisted_58 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Количество", -1 /* HOISTED */));
const _hoisted_59 = { class: "d-flex" };
const _hoisted_60 = { class: "col-5" };
const _hoisted_61 = { class: "col input-bg" };
const _hoisted_62 = { class: "col-7" };
const _hoisted_63 = { class: "d-flex" };
const _hoisted_64 = { class: "col-5" };
const _hoisted_65 = { class: "col input-bg" };
const _hoisted_66 = { class: "col-7" };
const _hoisted_67 = { class: "col input-bg" };
const _hoisted_68 = { class: "col-4" };
const _hoisted_69 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Таможенная стоимость", -1 /* HOISTED */));
const _hoisted_70 = { class: "d-flex" };
const _hoisted_71 = { class: "col-7" };
const _hoisted_72 = { class: "col input-bg" };
const _hoisted_73 = { class: "col-3" };
const _hoisted_74 = { class: "d-flex" };
const _hoisted_75 = { class: "col input-bg" };
const _hoisted_76 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, [
  /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-bg-white" }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-note-sticky" })
  ])
], -1 /* HOISTED */));
const _hoisted_77 = { class: "d-flex mt-2" };
const _hoisted_78 = { class: "col-6" };
const _hoisted_79 = { class: "col input-bg" };
const _hoisted_80 = { class: "col-6 d-flex" };
const _hoisted_81 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr ps-2" }, "Трансп. расх.", -1 /* HOISTED */));
const _hoisted_82 = { class: "col input-bg" };
const _hoisted_83 = { class: "col input-bg" };
const _hoisted_84 = { class: "col-3" };
const _hoisted_85 = { class: "" };
const _hoisted_86 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Фактурная стоимость", -1 /* HOISTED */));
const _hoisted_87 = { class: "d-flex" };
const _hoisted_88 = { class: "col-8" };
const _hoisted_89 = { class: "col input-bg" };
const _hoisted_90 = { class: "col-4" };
const _hoisted_91 = { class: "col input-bg" };
const _hoisted_92 = { class: "d-flex mt-2" };
const _hoisted_93 = { class: "d-flex" };
const _hoisted_94 = { class: "col-8" };
const _hoisted_95 = { class: "col input-bg" };
const _hoisted_96 = { class: "col-4" };
const _hoisted_97 = { class: "col input-bg" };
const _hoisted_98 = { class: "row mt-2" };
const _hoisted_99 = { class: "col-9 d-flex" };
const _hoisted_100 = { class: "col-9 d-flex" };
const _hoisted_101 = { class: "col input-bg" };
const _hoisted_102 = { class: "col input-bg" };
const _hoisted_103 = { class: "col-3 d-flex batch-info-anchors" };
const _hoisted_104 = /*#__PURE__*/vue.createTextVNode("РОИС");
const _hoisted_105 = /*#__PURE__*/vue.createTextVNode("Предшествующий документ");

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
    vue.createElementVNode("div", {
      class: "group-panel-label",
      onClick: _cache[0] || (_cache[0] = $event => ($data.isGoodOpen = !$data.isGoodOpen))
    }, [
      _hoisted_2$7,
      vue.createElementVNode("div", _hoisted_3$6, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isGoodOpen}])
        }, null, 2 /* CLASS */)
      ])
    ]),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["group-panel-content", {'open': $data.isGoodOpen}])
    }, [
      vue.createElementVNode("div", _hoisted_4$3, [
        vue.createElementVNode("div", _hoisted_5$4, [
          vue.createElementVNode("div", _hoisted_6$2, [
            vue.createElementVNode("div", _hoisted_7$1, [
              vue.createElementVNode("div", _hoisted_8$1, [
                vue.createElementVNode("div", _hoisted_9$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.good.numeric) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.numeric]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_10$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.good.totalNumeric) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.totalNumeric]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_11, [
              vue.createElementVNode("div", _hoisted_12, [
                vue.withDirectives(vue.createElementVNode("textarea", {
                  type: "text",
                  class: "form-control h-100",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.good.description) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.description]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_13$1, [
              vue.createElementVNode("div", _hoisted_14$1, [
                _hoisted_15,
                vue.createElementVNode("div", _hoisted_16, [
                  vue.createElementVNode("div", _hoisted_17$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.good.changeDetailsType.stageChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.stageChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_18, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.good.changeDetailsType.reasonChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.reasonChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_19, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.good.changeDetailsType.quantityChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.quantityChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_20, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.good.changeDetailsType.TNVEDChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.TNVEDChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_21, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.good.changeDetailsType.customsCostChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.customsCostChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_22, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.good.changeDetailsType.customsPaymentChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.customsPaymentChangeCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_23, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control number-code",
                      type: "number",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.good.changeDetailsType.otherChangeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.changeDetailsType.otherChangeCode]
                    ])
                  ]),
                  _hoisted_24
                ]),
                _hoisted_25
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_26, [
            vue.createElementVNode("div", _hoisted_27, [
              vue.createElementVNode("div", _hoisted_28, [
                vue.createElementVNode("div", _hoisted_29, [
                  _hoisted_30,
                  vue.createElementVNode("div", _hoisted_31, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.good.tnved) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.tnved]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_32, [
                  _hoisted_33,
                  vue.createElementVNode("div", _hoisted_34, [
                    vue.createElementVNode("div", _hoisted_35, [
                      vue.createElementVNode("div", _hoisted_36, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.good.grossWeightQuantity) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.grossWeightQuantity]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_37, [
                      vue.createElementVNode("div", _hoisted_38, [
                        vue.createElementVNode("div", _hoisted_39, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.good.goodWeightUnit) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.good.goodWeightUnit]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_40, [
                        vue.createElementVNode("div", _hoisted_41, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            class: "form-control number-code",
                            type: "text",
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.good.goodWeightUnknown) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.good.goodWeightUnknown]
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_42, [
                vue.createElementVNode("div", _hoisted_43, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    placeholder: "наименование товарного знака, объекта авторского",
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.good.tradeMark) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.tradeMark]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_44, [
              vue.createElementVNode("div", _hoisted_45, [
                vue.createElementVNode("div", _hoisted_46, [
                  _hoisted_47,
                  vue.createElementVNode("div", _hoisted_48, [
                    vue.createElementVNode("div", _hoisted_49, [
                      vue.createElementVNode("div", _hoisted_50, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.good.netWeightQuantity) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.netWeightQuantity]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_51, [
                      vue.createElementVNode("div", _hoisted_52, [
                        vue.createElementVNode("div", _hoisted_53, [
                          vue.createElementVNode("div", _hoisted_54, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.good.netWeightUnit) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.good.netWeightUnit]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_55, [
                          vue.createElementVNode("div", _hoisted_56, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.good.netWeightUnknown) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.good.netWeightUnknown]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_57, [
                  _hoisted_58,
                  vue.createElementVNode("div", _hoisted_59, [
                    vue.createElementVNode("div", _hoisted_60, [
                      vue.createElementVNode("div", _hoisted_61, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.good.goodQuantity) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.goodQuantity]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_62, [
                      vue.createElementVNode("div", _hoisted_63, [
                        vue.createElementVNode("div", _hoisted_64, [
                          vue.createElementVNode("div", _hoisted_65, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.good.goodUnit) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.good.goodUnit]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_66, [
                          vue.createElementVNode("div", _hoisted_67, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.good.goodUnknown) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.good.goodUnknown]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_68, [
                  _hoisted_69,
                  vue.createElementVNode("div", _hoisted_70, [
                    vue.createElementVNode("div", _hoisted_71, [
                      vue.createElementVNode("div", _hoisted_72, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.good.customsCost) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.customsCost]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_73, [
                      vue.createElementVNode("div", _hoisted_74, [
                        vue.createElementVNode("div", _hoisted_75, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.good.customsCostCurrency) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.good.customsCostCurrency]
                          ])
                        ])
                      ])
                    ]),
                    _hoisted_76
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_77, [
                vue.createElementVNode("div", _hoisted_78, [
                  vue.createElementVNode("div", _hoisted_79, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      placeholder: "наименование места происх.",
                      "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.good.productionPlaceName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.productionPlaceName]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_80, [
                  _hoisted_81,
                  vue.createElementVNode("div", _hoisted_82, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.good.transportCost) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.transportCost]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_83, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.good.transportCostCurrency) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.transportCostCurrency]
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_84, [
              vue.createElementVNode("div", _hoisted_85, [
                _hoisted_86,
                vue.createElementVNode("div", _hoisted_87, [
                  vue.createElementVNode("div", _hoisted_88, [
                    vue.createElementVNode("div", _hoisted_89, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.good.invoiceValue) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.invoiceValue]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_90, [
                    vue.createElementVNode("div", _hoisted_91, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($props.good.invoiceValueCurrency) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.invoiceValueCurrency]
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_92, [
                vue.createElementVNode("div", _hoisted_93, [
                  vue.createElementVNode("div", _hoisted_94, [
                    vue.createElementVNode("div", _hoisted_95, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.good.invoiceValueRus) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.invoiceValueRus]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_96, [
                    vue.createElementVNode("div", _hoisted_97, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($props.good.invoiceValueRusCurrency) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.invoiceValueRusCurrency]
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_98, [
            vue.createElementVNode("div", _hoisted_99, [
              vue.createElementVNode("div", _hoisted_100, [
                vue.createElementVNode("div", _hoisted_101, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    placeholder: "примечание",
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($props.good.note) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.note]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_102, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => (($props.good.url) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.url]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_103, [
                vue.createVNode(_component_router_link, {
                  to: { name: 'index' },
                  class: "align-bcntr"
                }, {
                  default: vue.withCtx(() => [
                    _hoisted_104
                  ]),
                  _: 1 /* STABLE */
                }),
                vue.createVNode(_component_router_link, {
                  to: { name: 'index' },
                  class: "align-bcntr"
                }, {
                  default: vue.withCtx(() => [
                    _hoisted_105
                  ]),
                  _: 1 /* STABLE */
                })
              ])
            ])
          ])
        ])
      ])
    ], 2 /* CLASS */)
  ]))
}

var css_248z$7 = "\n.product-batch p[data-v-d878b218] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.product-batch label[data-v-d878b218] {\r\n  font-size: 10px;\n}\n.product-batch a[data-v-d878b218] {\r\n  font-size: 10px;\n}\n.product-info-block p[data-v-d878b218] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.product-info-block label[data-v-d878b218] {\r\n  font-size: 10px;\n}\n.product-info-block a[data-v-d878b218] {\r\n  font-size: 10px;\n}\n.product-info-block[data-v-d878b218] {\r\n  border: 1px solid #c4c4c4;\r\n  border-top: unset;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\n.product-info-actions button[data-v-d878b218]:focus {\r\n  box-shadow: unset;\n}\n.product-info-actions i[data-v-d878b218]:before {\r\n  color: white;\n}\n.product-info-actions .fa-sort-down[data-v-d878b218]:before {\r\n  color: black;\n}\r\n";
styleInject(css_248z$7);

script$7.render = render$7;
script$7.__scopeId = "data-v-d878b218";
script$7.__file = "src/components/Form/GoodInformation.vue";

var script$6 = {
  name: "TsoftDeclaration",
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      isGeneralOpen: false,
      isOrdersOpen: false,
      isDocumentOpen: false
    };
  },
  computed: {
    isDocumentsExist() {
      return !!Object.keys(this.data.registry.documents).length;
    },
    isOrdersExist() {
      return !!Object.keys(this.data.registry.orders).length;
    }
  }
};

const _hoisted_1$6 = { class: "forms" };
const _hoisted_2$6 = /*#__PURE__*/vue.createElementVNode("p", null, "Заказы", -1 /* HOISTED */);
const _hoisted_3$5 = { class: "arrow" };
const _hoisted_4$2 = /*#__PURE__*/vue.createElementVNode("p", null, "Документы", -1 /* HOISTED */);
const _hoisted_5$3 = { class: "arrow" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_general_declaration_form = vue.resolveComponent("tsoft-general-declaration-form");
  const _component_tsoft_goods_awb_information_form = vue.resolveComponent("tsoft-goods-awb-information-form");
  const _component_tsoft_additional_document_form = vue.resolveComponent("tsoft-additional-document-form");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
    vue.createElementVNode("div", null, [
      vue.createVNode(_component_tsoft_general_declaration_form, {
        "awb-info": this.data.awbInfo,
        registry: this.data.registry.regInfo
      }, null, 8 /* PROPS */, ["awb-info", "registry"]),
      vue.createElementVNode("div", null, [
        vue.createElementVNode("div", {
          class: "group-panel-label mb-2",
          onClick: _cache[0] || (_cache[0] = $event => ($data.isOrdersOpen = !$data.isOrdersOpen))
        }, [
          _hoisted_2$6,
          vue.createElementVNode("div", _hoisted_3$5, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrdersOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["group-panel-content", {'open': $data.isOrdersOpen}])
        }, [
          ($options.isOrdersExist)
            ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(this.data.registry.orders, (order, index) => {
                return (vue.openBlock(), vue.createBlock(_component_tsoft_goods_awb_information_form, {
                  order: order.orderInfo,
                  goods: order.goods,
                  orderNum: index
                }, null, 8 /* PROPS */, ["order", "goods", "orderNum"]))
              }), 256 /* UNKEYED_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */)
      ]),
      vue.createElementVNode("div", null, [
        vue.createElementVNode("div", {
          class: "group-panel-label mb-2",
          onClick: _cache[1] || (_cache[1] = $event => ($data.isDocumentOpen = !$data.isDocumentOpen))
        }, [
          _hoisted_4$2,
          vue.createElementVNode("div", _hoisted_5$3, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isDocumentOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["group-panel-content", {'open': $data.isDocumentOpen}])
        }, [
          ($options.isDocumentsExist)
            ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(this.data.registry.documents, (document, index) => {
                return (vue.openBlock(), vue.createBlock(_component_tsoft_additional_document_form, {
                  key: index,
                  document: document
                }, null, 8 /* PROPS */, ["document"]))
              }), 128 /* KEYED_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */)
      ])
    ])
  ]))
}

var css_248z$6 = "\n.common-inf p {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.common-inf label {\r\n  box-sizing: border-box;\r\n  font-size: 10px;\n}\n.arrow {\r\n  margin-right: 5px;\r\n  margin-top: -3px;\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\n}\n.forms {\r\n  padding: 10px;\n}\n.fa-caret-right {\r\n  transform: rotate(0deg);\r\n  transition: 0.15s;\n}\n.fa-caret-right.down-rotate {\r\n  transform: rotate(90deg);\r\n  transition: 0.15s;\n}\n.group-panel-label {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding-left: 15px;\r\n  padding-top: 7px;\r\n  font-weight: bold;\r\n  border: 1px solid #c4c4c4;\r\n  /*margin-bottom: 1px;*/\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\n}\n.group-panel-content {\r\n  width: 100%;\r\n  height: 0;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in;\n}\n.goods {\r\n  padding-top: 5px;\r\n  padding-left: 20px;\n}\n.order {\r\n  padding-left: 10px;\r\n  margin-bottom: 10px;\n}\n.doc {\r\n  padding-left: 10px;\r\n  margin-bottom: 10px;\n}\n.good {\r\n  padding-left: 10px;\r\n  margin-bottom: 10px;\n}\n.group-panel-content.open {\r\n  height: auto;\r\n  opacity: 1;\r\n  transition: opacity 0.3s ease-in;\r\n  margin-bottom: 10px;\n}\nli a {\r\n  color: black;\r\n  text-decoration: unset;\r\n  font-size: 14px;\n}\r\n\r\n/*Стили текстовых инпутов*/\n.form-control {\r\n  padding: 0 5px 0 3px;\r\n  background-color: #e1e1e1;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px white;\r\n  border: 1px solid #afafaf;\n}\n.form-control:focus {\r\n  outline: unset;\r\n  border: unset;\r\n  background-color: #38d9a6;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px #9f9f9f;\r\n  border: 1px solid black;\n}\n.form-control::placeholder {\r\n  color: #989898;\r\n  font-weight: bold;\r\n  font-size: 11px;\r\n  padding-left: 10px;\n}\r\n\r\n/*Стиль чекбоксовых инпутов*/\n.form-check-input {\r\n  background-color: #E67926;\r\n  box-shadow: 1px 1px 1px white;\r\n  font-size: 10px;\n}\n.form-check-input:checked {\r\n  background-color: #0a9167;\r\n  box-shadow: unset;\r\n  border: unset;\n}\n.form-check-input:focus {\r\n  box-shadow: unset;\r\n  border: unset;\n}\n.number-code::-webkit-outer-spin-button,\r\n.number-code::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\n}\n.number-code[type='number'] {\r\n  -moz-appearance: textfield;\n}\r\n\r\n/*Region Стили блока декларации*/\n.declaration {\r\n  padding: 10px;\r\n  border: 1px solid #c4c4c4;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  min-height: 660px;\r\n  font-size: 10px;\r\n  margin: 0 auto;\n}\nh4 {\r\n  font-size: 14px;\n}\nh4.declaration-title {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\nh5 {\r\n  text-align: center;\r\n  font-size: 10px;\n}\n.inf-block {\r\n  margin-bottom: 10px;\n}\nlabel {\r\n  margin-top: 7px;\n}\n.inputs-group > div {\r\n  padding: unset;\r\n  min-width: 30px;\r\n  margin-right: 7px;\n}\n.form-check-input {\r\n  min-width: 20px;\r\n  min-height: 20px;\n}\n.sheets-input {\r\n  max-width: 70px;\n}\n.certificate-block div:first-child {\r\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div {\r\n  padding: 0;\r\n  margin-right: 6px;\n}\r\n\r\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph {\r\n  min-width: 250px;\r\n  max-width: 270px;\r\n  margin: 5px 0 auto 0;\n}\r\n/**/\n.changing-declaration .inf-block div {\r\n  padding: unset;\r\n  margin-right: 5px;\n}\n.changing-code {\r\n  margin-top: 10px;\n}\r\n\r\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code::-webkit-outer-spin-button,\r\n.number-code::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\n}\r\n\r\n/**/\r\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form {\r\n  padding: 0 10px 0 10px;\n}\n.batch-form div:first-child {\r\n  padding-left: 0;\n}\n.batch-block {\r\n  padding-left: 10px;\n}\n.batch-block div {\r\n  padding: 0;\n}\r\n\r\n/**/\r\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information {\r\n  width: fit-content;\r\n  color: gray;\r\n  text-decoration: underline;\r\n  font-size: 10px;\n}\n.payment-information:hover {\r\n  cursor: pointer;\n}\r\n\r\n/**/\r\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button:focus {\r\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i {\r\n  transform: rotate(180deg);\n}\n.collapsing-block {\r\n  background-color: white;\r\n  border: 1px solid #c4c4c4;\r\n  padding: 5px 10px;\r\n  font-weight: bold;\n}\n.collapsing-block span,\r\ni {\r\n  font-size: 14px;\n}\r\n\r\n/**/\n.card-body {\r\n  background-color: unset;\r\n  border: 1px solid #c4c4c4;\n}\n.point-name {\r\n  width: fit-content;\r\n  margin: auto auto 0;\r\n  color: #0D6247;\r\n  font-weight: bold;\r\n  text-decoration: underline;\n}\n.personal-data div {\r\n  padding: 0 0 0 3px;\n}\r\n\r\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative {\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  margin: 0 0 8px;\n}\r\n\r\n/**/\r\n/*Стили кнопки календаря*/\n.button-calendar {\r\n  background-color: white;\r\n  border: unset;\r\n  border-radius: 8px;\r\n  padding: 1px 5px;\n}\n.button-calendar:focus {\r\n  box-shadow: unset;\n}\r\n\r\n/**/\r\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr {\r\n  display: flex;\r\n  margin: 5px auto 0;\n}\r\n\r\n/*Стили блока информации о товарной партии*/\n.product-batch {\r\n  padding: 0 0 10px;\r\n  border: 1px solid #c4c4c4;\r\n  border-top:unset;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\r\n\r\n/*Стиль синего хэдера с кнопками */\n.product-batch-header {\r\n  padding: 0 10px;\r\n  background-color: #3274dd;\r\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\r\n  color: white;\n}\n.batch-button:focus {\r\n  box-shadow: unset;\n}\n.batch-button i:before {\r\n  color: white;\n}\n.batch-button:last-child i {\r\n  transform: rotate(180deg);\n}\r\n\r\n/**/\n.product-inner-block {\r\n  padding: 10px;\n}\n.fs-12 {\r\n  font-size: 12px;\n}\r\n\r\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  padding: 1px 5px;\n}\n.new-window-button:hover {\r\n  box-shadow: unset;\n}\n.new-window-button:focus {\r\n  box-shadow: unset;\n}\n.new-window-button i {\r\n  font-size: 15px;\r\n  color: #3274dd;\n}\r\n\r\n/**/\r\n\r\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors > a, router-link {\r\n  display: block;\r\n  color: gray;\r\n  text-decoration: underline;\r\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link:hover {\r\n  color: blue;\r\n  cursor: pointer;\n}\n.btn-bg-white {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  padding: 1px 5px;\n}\n.btn-bg-white:focus {\r\n  box-shadow: unset;\n}\n.fa-note-sticky {\r\n  font-size: 16px;\n}\r\n\r\n";
styleInject(css_248z$6);

script$6.render = render$6;
script$6.__file = "src/components/Declaration/Declaration.vue";

var script$5 = {
  name: "TsoftLeftmenuGoods",
  props: {
    treeGoods: {
      type: Object,
      required: true,
    }
  },
};

const _hoisted_1$5 = { class: "sidebar me-3" };
const _hoisted_2$5 = { id: "goodsList" };
const _hoisted_3$4 = { href: "#declaration" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.createElementVNode("ol", _hoisted_2$5, [
      vue.createElementVNode("li", null, [
        vue.createElementVNode("a", _hoisted_3$4, vue.toDisplayString($props.treeGoods.title), 1 /* TEXT */)
      ]),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.treeGoods.goods, (good, index) => {
        return (vue.openBlock(), vue.createElementBlock("li", { key: index }, vue.toDisplayString(good), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var css_248z$5 = "\n.sidebar[data-v-6ebd9650] {\r\n  height: fit-content;\r\n  min-width: 300px;\r\n  margin-top: 10px;\n}\n.form-switch .form-check-input[data-v-6ebd9650] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")\n}\n.goods-switcher-block[data-v-6ebd9650] {\r\n  padding: 2px 0 0;\r\n  margin: 0 10px;\n}\n.goods-menu-switcher[data-v-6ebd9650] {\r\n  width: 50px;\r\n  background-color: #E67926;\r\n  box-shadow: unset;\r\n  border: unset;\r\n  margin: 0;\n}\n.goods-icon[data-v-6ebd9650] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.tree-icon[data-v-6ebd9650] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.goods-menu-switcher[data-v-6ebd9650]:checked {\r\n  background-color: #0D6247;\n}\n.goods-menu-switcher[data-v-6ebd9650]:hover {\r\n  cursor: pointer;\n}\n.goods-icon.active[data-v-6ebd9650] {\r\n  color: #0D6247;\n}\n.tree-icon.active[data-v-6ebd9650] {\r\n  color: #E67926;\n}\nli a[data-v-6ebd9650] {\r\n  color: black;\r\n  text-decoration: unset;\r\n  font-size: 14px;\n}\r\n";
styleInject(css_248z$5);

script$5.render = render$5;
script$5.__scopeId = "data-v-6ebd9650";
script$5.__file = "src/components/Menu/LeftMenuGoods.vue";

var script$4 = {
  name: "TsoftInstrumentsMenu",
  methods: {
    callEmit(action) {
      this.$emit('action', action);
    }
  }
};

const _hoisted_1$4 = { class: "d-flex instruments" };
const _hoisted_2$4 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"45\" height=\"56\" viewBox=\"0 0 45 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1012226a><path d=\"M8.44143 7.85003H8.69143V7.60003V0.25H22.5518H44.75V55.4836H0.353516V27.8668V13.9334V7.85003H8.44143Z\" fill=\"#F7F5F5\" stroke=\"black\" stroke-width=\"0.5\" data-v-1012226a></path><path d=\"M8.44143 0V7.60003H0.103516L8.44143 0Z\" fill=\"#A6A6A6\" data-v-1012226a></path><rect x=\"7.84375\" y=\"18.5779\" width=\"32.5112\" height=\"3.09631\" fill=\"#EA7B27\" data-v-1012226a></rect><rect x=\"7.84375\" y=\"24.7705\" width=\"26.3186\" height=\"3.09631\" fill=\"#EA7B27\" data-v-1012226a></rect><rect x=\"7.84375\" y=\"30.9629\" width=\"13.9334\" height=\"3.09631\" fill=\"#E67926\" data-v-1012226a></rect></svg><br data-v-1012226a><span class=\"icon-text\" data-v-1012226a>Загрузить XML</span>", 3);
const _hoisted_5$2 = [
  _hoisted_2$4
];
const _hoisted_6$1 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"47\" height=\"56\" viewBox=\"0 0 47 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1012226a><path d=\"M7.53891 7.88636H7.78891V7.63636V0.25H20.2971H40.3441V55.75H0.25V28V14V7.88636H7.53891Z\" fill=\"#F6F5F5\" stroke=\"black\" stroke-width=\"0.5\" data-v-1012226a></path><path d=\"M7.53891 0V7.63636H0L7.53891 0Z\" fill=\"#B8B5B5\" data-v-1012226a></path><rect x=\"4.64062\" y=\"8.90918\" width=\"31.3155\" height=\"6.36364\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"8.11914\" y=\"22.9092\" width=\"24.3565\" height=\"2.54545\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"11.6016\" y=\"28\" width=\"17.3975\" height=\"2.54545\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"4.64062\" y=\"44.5457\" width=\"31.3155\" height=\"5.09091\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect width=\"30.0511\" height=\"7.28513\" transform=\"matrix(0.673565 -0.739128 0.673565 0.739128 19.0645 42.7222)\" fill=\"#2E6B3C\" data-v-1012226a></rect><line y1=\"-0.2\" x2=\"26.4086\" y2=\"-0.2\" transform=\"matrix(0.673565 -0.739128 0.673565 0.739128 23.0527 43.7317)\" stroke=\"#939292\" stroke-width=\"0.4\" data-v-1012226a></line><line y1=\"-0.2\" x2=\"24.5873\" y2=\"-0.2\" transform=\"matrix(0.673565 -0.739128 0.673565 0.739128 25.5059 43.7317)\" stroke=\"#A6A6A6\" stroke-width=\"0.4\" data-v-1012226a></line><line y1=\"-0.2\" x2=\"24.5873\" y2=\"-0.2\" transform=\"matrix(0.673565 -0.739128 0.673565 0.739128 23.0527 41.0396)\" stroke=\"#939292\" stroke-width=\"0.4\" data-v-1012226a></line><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.4646 45.4898L17.5316 49.7895L21.4513 48.7654L21.2842 48.7287C21.4163 48.0038 21.0868 47.1622 20.5059 46.5249C19.9251 45.8875 19.1581 45.5259 18.4975 45.6708L18.4646 45.4898ZM18.5418 45.1337C19.3727 45.0177 20.2307 45.4837 20.8427 46.1553C21.455 46.8271 21.8797 47.7691 21.7736 48.6812L23.9721 48.1068L19.0651 42.7221L18.5418 45.1337Z\" fill=\"#E4961F\" data-v-1012226a></path><path d=\"M44.2123 20.5108C45.2004 21.595 45.7458 23.5397 45.1324 24.2127C44.7936 24.5845 43.3091 23.5582 42.3211 22.4739C41.333 21.3897 40.4102 19.7363 40.8387 19.5012C42.0655 18.8281 43.2243 19.4266 44.2123 20.5108Z\" fill=\"#2E6B3C\" data-v-1012226a></path><path d=\"M39.6113 20.8472L41.1448 19.1645L45.4384 23.876L43.905 25.5587L39.6113 20.8472Z\" fill=\"#E4961F\" data-v-1012226a></path></svg><br data-v-1012226a><span class=\"icon-text\" data-v-1012226a>Создать реестр</span>", 3);
const _hoisted_9 = [
  _hoisted_6$1
];
const _hoisted_10 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"55\" height=\"56\" viewBox=\"0 0 55 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1012226a><path d=\"M17.8489 10.7955H18.0989V10.5455V4.25H30.0013H49.0846V51.75H10.918V28V16V10.7955H17.8489Z\" fill=\"#F7F5F5\" stroke=\"black\" stroke-width=\"0.5\" data-v-1012226a></path><path d=\"M17.8489 4V10.5455H10.668L17.8489 4Z\" fill=\"#A6A6A6\" data-v-1012226a></path><rect x=\"17.334\" y=\"12\" width=\"26.8418\" height=\"5.45455\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"20.3164\" y=\"24\" width=\"20.877\" height=\"2.18182\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"23.3008\" y=\"28.3635\" width=\"14.9121\" height=\"2.18182\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"17.334\" y=\"42.5457\" width=\"26.8418\" height=\"4.36364\" fill=\"#C4C4C4\" data-v-1012226a></rect><path d=\"M23.181 6.79545H23.431V6.54545V0.25H35.3333H54.4167V47.75H16.25V24V12V6.79545H23.181Z\" fill=\"#F7F5F5\" stroke=\"black\" stroke-width=\"0.5\" data-v-1012226a></path><path d=\"M23.181 0V6.54545H16L23.181 0Z\" fill=\"#A6A6A6\" data-v-1012226a></path><rect x=\"22.668\" y=\"8\" width=\"26.8418\" height=\"5.45455\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"25.6504\" y=\"20\" width=\"20.877\" height=\"2.18182\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"28.6348\" y=\"24.3635\" width=\"14.9121\" height=\"2.18182\" fill=\"#C4C4C4\" data-v-1012226a></rect><rect x=\"22.668\" y=\"38.5457\" width=\"26.8418\" height=\"4.36364\" fill=\"#C4C4C4\" data-v-1012226a></rect><path d=\"M8.28571 49.3333C8.28571 50.8 9.44286 52 10.8571 52H21.1429C22.5571 52 23.7143 50.8 23.7143 49.3333V33.3333H8.28571V49.3333ZM25 29.3333H20.5L19.2143 28H12.7857L11.5 29.3333H7V32H25V29.3333Z\" fill=\"#E67926\" data-v-1012226a></path></svg><br data-v-1012226a><span class=\"icon-text\" data-v-1012226a>Удалить</span>", 3);
const _hoisted_13 = [
  _hoisted_10
];
const _hoisted_14 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"60\" height=\"56\" viewBox=\"0 0 60 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1012226a><rect x=\"0.189377\" y=\"0.10065\" width=\"13.3837\" height=\"13.1707\" rx=\"0.85\" transform=\"matrix(0.959425 -0.281965 0.303088 0.952962 41.1139 21.7769)\" fill=\"#E4961F\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></rect><rect x=\"0.189377\" y=\"0.10065\" width=\"13.3837\" height=\"13.1707\" rx=\"0.85\" transform=\"matrix(0.959425 -0.281965 0.303088 0.952962 26.7877 25.9861)\" fill=\"#E4961F\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></rect><rect x=\"0.189377\" y=\"0.10065\" width=\"13.3837\" height=\"13.1707\" rx=\"0.85\" transform=\"matrix(0.959425 -0.281965 0.303088 0.952962 36.8502 8.38186)\" fill=\"#E4961F\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></rect><path d=\"M23.3434 16.6227L30.5079 9.40949C30.8357 9.07952 31.3906 9.06511 31.7473 9.3773L39.2696 15.9606C39.6263 16.2728 39.6498 16.7934 39.3221 17.1233L32.1575 24.3365C31.8298 24.6665 31.2749 24.6809 30.9182 24.3687L23.3959 17.7854C23.0391 17.4732 23.0156 16.9527 23.3434 16.6227Z\" fill=\"#E4961F\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></path><rect x=\"0.218705\" y=\"-0.00567917\" width=\"4.85014\" height=\"4.69771\" rx=\"0.85\" transform=\"matrix(0.698148 -0.702888 0.759885 0.665027 17.1758 11.9668)\" fill=\"#E4961F\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></rect><path d=\"M27.2656 12.9797L35.9056 20.4495\" stroke=\"black\" stroke-width=\"0.3\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M47.75 19.9473L51.6589 32.2375\" stroke=\"black\" stroke-width=\"0.3\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M33.4297 24.1555L37.3386 36.4457\" stroke=\"black\" stroke-width=\"0.3\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M43.4922 6.55151L47.4011 18.8417\" stroke=\"black\" stroke-width=\"0.3\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M27.1816 20.9368L35.5512 12.374\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></path><path d=\"M43.6777 28.3938L56.3849 24.5556\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></path><path d=\"M29.3555 32.6033L42.0627 28.7651\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></path><path d=\"M39.418 14.9988L52.1252 11.1606\" stroke=\"black\" stroke-width=\"0.3\" data-v-1012226a></path><path d=\"M2 2.56299L11.5789 5.94947L18.2105 24.7633L24.842 43.5771L57.9998 34.5464\" stroke=\"#C4C4C4\" stroke-width=\"4\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M27.8457 50.6761L35.9506 42.7888\" stroke=\"#C4C4C4\" stroke-width=\"1.5\" stroke-linecap=\"round\" data-v-1012226a></path><path d=\"M30.423 49.7889C30.423 52.9247 27.7727 55.5001 24.4615 55.5001C21.1503 55.5001 18.5 52.9247 18.5 49.7889C18.5 46.6531 21.1503 44.0776 24.4615 44.0776C27.7727 44.0776 30.423 46.6531 30.423 49.7889Z\" fill=\"white\" stroke=\"#C4C4C4\" data-v-1012226a></path><path d=\"M26.9349 49.4931C26.9349 50.6142 25.9836 51.5564 24.7682 51.5564C23.5528 51.5564 22.6016 50.6142 22.6016 49.4931C22.6016 48.3719 23.5528 47.4297 24.7682 47.4297C25.9836 47.4297 26.9349 48.3719 26.9349 49.4931Z\" fill=\"white\" stroke=\"#C4C4C4\" data-v-1012226a></path></svg><br data-v-1012226a><span class=\"icon-text\" data-v-1012226a>Показать товары</span>", 3);
const _hoisted_17 = [
  _hoisted_14
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
    vue.createElementVNode("div", {
      onClick: _cache[0] || (_cache[0] = $event => ($options.callEmit('fileUpload'))),
      class: "xml-upload"
    }, _hoisted_5$2),
    vue.createElementVNode("div", {
      onClick: _cache[1] || (_cache[1] = $event => ($options.callEmit('fileUpload'))),
      class: "create-registry"
    }, _hoisted_9),
    vue.createElementVNode("div", {
      onClick: _cache[2] || (_cache[2] = $event => ($options.callEmit('fileUpload'))),
      class: "delete"
    }, _hoisted_13),
    vue.createElementVNode("div", {
      onClick: _cache[3] || (_cache[3] = $event => ($options.callEmit('fileUpload'))),
      class: "show-goods"
    }, _hoisted_17)
  ]))
}

var css_248z$4 = "\n.instruments[data-v-1012226a] {\r\n  margin-top: 15px;\r\n  justify-content: center;\r\n  text-align: center;\n}\n.icon-text[data-v-1012226a] {\r\n  font-size: 13px;\r\n  color: #757575;\n}\n.instruments > div[data-v-1012226a] {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-1012226a";
script$4.__file = "src/components/Menu/InstrumentsMenu.vue";

var script$3 = {
  name: "TsoftModalWindow",
  data() {
    return {
      loading: false,
      isMoving: false,
      position: {
        left: null,
        top: null
      },
      size: {
        height: null,
        width: null
      },
      defaultPosition: {
        left: "40%",
        top: "25%"
      }
    };
  },
  props: {
    turn: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};

const _withScopeId = n => (vue.pushScopeId("data-v-477f0afb"),n=n(),vue.popScopeId(),n);
const _hoisted_1$3 = { class: "modal-window" };
const _hoisted_2$3 = { class: "wrapper d-flex" };
const _hoisted_3$3 = { class: "mod-container" };
const _hoisted_4$1 = { class: "mod-header d-flex" };
const _hoisted_5$1 = { class: "mod-title" };
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "xmark" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-xmark" })
], -1 /* HOISTED */));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "mod-body" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode("Region Modal "),
    vue.withDirectives(vue.createElementVNode("div", _hoisted_1$3, [
      vue.createElementVNode("div", _hoisted_2$3, [
        vue.createElementVNode("div", _hoisted_3$3, [
          vue.createElementVNode("div", {
            class: "mod-block",
            tabindex: "-1",
            onKeyup: _cache[2] || (_cache[2] = vue.withKeys((...args) => ($options.close && $options.close(...args)), ["esc"]))
          }, [
            vue.createElementVNode("div", _hoisted_4$1, [
              vue.createElementVNode("span", _hoisted_5$1, vue.toDisplayString($props.title), 1 /* TEXT */),
              vue.createElementVNode("div", {
                class: "btn close-modal-button",
                type: "button",
                onMousedown: _cache[0] || (_cache[0] = (...args) => ($options.close && $options.close(...args))),
                onClick: _cache[1] || (_cache[1] = (...args) => ($options.close && $options.close(...args)))
              }, _hoisted_7, 32 /* HYDRATE_EVENTS */)
            ]),
            vue.createElementVNode("div", _hoisted_8, [
              (this.loading)
                ? (vue.openBlock(), vue.createBlock(_component_tsoft_preloader, { key: 0 }))
                : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
            ])
          ], 32 /* HYDRATE_EVENTS */)
        ])
      ])
    ], 512 /* NEED_PATCH */), [
      [vue.vShow, $props.turn]
    ]),
    vue.createCommentVNode(" endregion ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

var css_248z$3 = "\n.modal-window[data-v-477f0afb] {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0,0,0, 0.6);\n}\n.wrapper[data-v-477f0afb] {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 998;\n}\n.mod-block[data-v-477f0afb] {\r\n  position: relative;\r\n  margin: 0 auto auto auto;\r\n  background-color: white;\r\n  min-width: 400px;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  max-height: 1000px;\r\n  z-index: 11;\r\n  box-shadow: 1px 1px 20px 0 #343434;\r\n  border-radius: 4px;\r\n  overflow: auto;\n}\n.mod-title[data-v-477f0afb] {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: #aaaaaa;\n}\n.mod-container[data-v-477f0afb] {\r\n  background-color: white;\r\n  opacity: 1;\r\n  z-index: 10;\r\n  margin: auto;\r\n  border-radius: 4px;\n}\n.mod-header[data-v-477f0afb] {\r\n  margin: 15px 15px 10px 15px;\r\n  border-bottom: 1px solid #c4c4c4;\r\n  justify-content: space-between;\n}\n.close-modal-button[data-v-477f0afb] {\r\n  color: white;\r\n  border-radius: 14px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: lightgray;\r\n  padding: 4px;\r\n  box-shadow: unset;\n}\n.close-modal-button[data-v-477f0afb]:hover {\r\n  background-color: #0D6247;\r\n  color: #ffffff;\n}\n.close-modal-button .fa-xmark[data-v-477f0afb] {\r\n  font-size: 12px;\n}\n.xmark[data-v-477f0afb] {\r\n  margin-top: -7px;\n}\n.mod-body[data-v-477f0afb] {\r\n  margin: 5px;\r\n  position: relative;\r\n  min-height: 80px;\n}\n.btn[data-v-477f0afb]:focus {\r\n  box-shadow: unset;\n}\r\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-477f0afb";
script$3.__file = "src/components/Modal/ModalWindow.vue";

var script$2 = {
  name: "TsoftNewModalWindow"
};

const _hoisted_1$2 = {
  class: "window",
  id: "window"
};
const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "window-bar" }, [
  /*#__PURE__*/vue.createElementVNode("div", null, "Заголовок"),
  /*#__PURE__*/vue.createElementVNode("span", { class: "window-close" }, [
    /*#__PURE__*/vue.createElementVNode("svg", {
      viewport: "0 0 12 12",
      version: "1.1",
      width: "16",
      height: "16",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      /*#__PURE__*/vue.createElementVNode("line", {
        x1: "1",
        y1: "11",
        x2: "11",
        y2: "1",
        stroke: "black",
        "stroke-width": "2"
      }),
      /*#__PURE__*/vue.createElementVNode("line", {
        x1: "1",
        y1: "1",
        x2: "11",
        y2: "11",
        stroke: "black",
        "stroke-width": "2"
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_3$2 = { class: "window-body" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    vue.createElementVNode("div", _hoisted_3$2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

var css_248z$2 = "\n.window {\r\n  z-index: 2;\r\n  border: 1px solid black;\r\n  background-color: white;\r\n  width: 400px;\r\n  height: 300px;\r\n  position: absolute;\r\n\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\n}\n.window .window-bar {\r\n  padding-left: 6px;\r\n  padding-top: 3px;\r\n  cursor: move;\r\n  background-color: #0d6247;\r\n  color: white;\n}\n.window .window-bar .window-close {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 3px;\r\n  background-color: white;\r\n  width: 14px;\r\n  height: 14px;\r\n  padding-left: 2px;\r\n  padding-top: 2px;\n}\n.window-body {\r\n  margin: 1em;\n}\r\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__file = "src/components/Modal/NewModalWindow.vue";

var script$1 = {
  name: 'TsoftPreloader',
};

const _hoisted_1$1 = { class: "preloader-main" };
const _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "lds-ring" }, [
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div")
], -1 /* HOISTED */);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, _hoisted_3$1))
}

var css_248z$1 = "\n.preloader-main {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 200;\n}\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: auto;\n}\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 8px;\r\n  border: 8px solid #fff;\r\n  border-radius: 50%;\r\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #cccccc transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\r\n  animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\r\n  animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\r\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\r\n\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__file = "src/components/Loader/Preloader.vue";

var script = {
  name: "TsoftGoodsFoldersSwitcher",
  props: {
    state: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    switchMenu() {
      this.state = !this.state;
    }
  }
};

const _hoisted_1 = { class: "left-menu-switcher" };
const _hoisted_2 = { class: "d-flex tree-buttons-block" };
const _hoisted_3 = {
  class: "sidebar-tree-icon",
  id: "treeButton"
};
const _hoisted_4 = { class: "form-check form-switch goods-switcher-block" };
const _hoisted_5 = { class: "sidebar-goods-icon" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode("div", _hoisted_3, [
        vue.createElementVNode("i", {
          class: vue.normalizeClass(["fa-solid fa-folder-tree tree-icon", {active: this.state}])
        }, null, 2 /* CLASS */)
      ]),
      vue.createElementVNode("div", _hoisted_4, [
        vue.createElementVNode("input", {
          class: "form-check-input goods-menu-switcher",
          type: "checkbox",
          onChange: _cache[0] || (_cache[0] = $event => (_ctx.$emit('switch')))
        }, null, 32 /* HYDRATE_EVENTS */)
      ]),
      vue.createElementVNode("div", _hoisted_5, [
        vue.createElementVNode("i", {
          class: vue.normalizeClass(["fa-solid fa-box goods-icon", {active: !this.state}])
        }, null, 2 /* CLASS */)
      ])
    ])
  ]))
}

var css_248z = "\n.form-switch .form-check-input[data-v-38f7e5c4] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")\n}\n.tree-buttons-block[data-v-38f7e5c4] {\r\n  justify-content: center;\n}\n.goods-switcher-block[data-v-38f7e5c4] {\r\n  padding: 2px 0 0;\r\n  margin: 0 10px;\n}\n.goods-menu-switcher[data-v-38f7e5c4] {\r\n  width: 50px;\r\n  background-color: #E67926;\r\n  box-shadow: unset;\r\n  border: unset;\r\n  margin: 0;\n}\n.goods-icon[data-v-38f7e5c4] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.tree-icon[data-v-38f7e5c4] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.goods-menu-switcher[data-v-38f7e5c4]:checked {\r\n  background-color: #0D6247;\n}\n.goods-menu-switcher[data-v-38f7e5c4]:hover {\r\n  cursor: pointer;\n}\n.goods-icon.active[data-v-38f7e5c4] {\r\n  color: #0D6247;\n}\n.tree-icon.active[data-v-38f7e5c4] {\r\n  color: #E67926;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-38f7e5c4";
script.__file = "src/components/Switcher/GoodsFoldersSwitcher.vue";

var components = {
    InputTextarea: script$h,
    InputText: script$i,
    TsoftTable: script$g,
    TsoftTree: script$e,
    TsoftLeftmenuFolder: script$b,
    TsoftLeftmenuGoods: script$5,
    TsoftGeneralDeclarationForm: script$a,
    TsoftGoodsAwbInformationForm: script$9,
    TsoftAdditionalDocumentForm: script$8,
    TsoftGoodInformationForm: script$7,
    TsoftDeclaration: script$6,
    TsoftInstrumentsMenu: script$4,
    TsoftModalWindow: script$3,
    TsoftNewModalWindow: script$2,
    TsoftPreloader: script$1,
    TsoftGoodsFoldersSwitcher: script,
};

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

module.exports = plugin;
