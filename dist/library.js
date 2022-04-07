'use strict';

var vue = require('vue');

var script$g = {
  name: 'InputText'
};

const _hoisted_1$f = { type: "text" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$f))
}

script$g.render = render$g;
script$g.__file = "src/InputText.vue";

var script$f = {
  name: 'InputTextarea'
};

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}

script$f.render = render$f;
script$f.__file = "src/InputTextarea.vue";

var script$e = {
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

const _withScopeId$3 = n => (vue.pushScopeId("data-v-647119ad"),n=n(),vue.popScopeId(),n);
const _hoisted_1$e = { class: "content" };
const _hoisted_2$e = { class: "row section" };
const _hoisted_3$b = { class: "table-section" };
const _hoisted_4$8 = { class: "slider-block" };
const _hoisted_5$8 = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6$6 = [
  _hoisted_5$8
];
const _hoisted_7$6 = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8$6 = [
  _hoisted_7$6
];
const _hoisted_9$6 = { class: "table" };
const _hoisted_10$5 = { class: "thead" };
const _hoisted_11$5 = { class: "tbody" };
const _hoisted_12$5 = { key: 1 };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
    vue.createElementVNode("div", _hoisted_2$e, [
      vue.createElementVNode("div", _hoisted_3$b, [
        vue.createElementVNode("div", _hoisted_4$8, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6$6, 34 /* CLASS, HYDRATE_EVENTS */),
          vue.createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8$6, 32 /* HYDRATE_EVENTS */)
        ]),
        vue.createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[4] || (_cache[4] = (...args) => ($options.move && $options.move(...args)))
        }, [
          vue.createElementVNode("table", _hoisted_9$6, [
            vue.createElementVNode("thead", _hoisted_10$5, [
              vue.createElementVNode("tr", null, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titles, (title) => {
                  return (vue.openBlock(), vue.createElementBlock("th", { key: title }, vue.toDisplayString(title), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            vue.createElementVNode("tbody", _hoisted_11$5, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rows, (row, index) => {
                return (vue.openBlock(), vue.createElementBlock("tr", {
                  class: "document-row",
                  key: index
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (value, key) => {
                    return (vue.openBlock(), vue.createElementBlock("td", { key: key }, [
                      (key === 'num')
                        ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                            key: 0,
                            to: {name: 'declaration', params: {reester_id: index}}
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(value), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                        : (vue.openBlock(), vue.createElementBlock("p", _hoisted_12$5, vue.toDisplayString(value), 1 /* TEXT */))
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
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

var css_248z$8 = "\n#tableResponsive[data-v-647119ad] {\r\n  background: rgb(253, 253, 253);\r\n  box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);\n}\n.content[data-v-647119ad] {\r\n  padding: 20px 0 20px 20px;\n}\n.tbody td p[data-v-647119ad] {\r\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\r\n  border: 1px solid black;\r\n  line-height: 0.5rem;\r\n  min-width: 210px;\r\n  margin-bottom: 10px;\r\n  width: auto;\n}\nth p[data-v-647119ad] {\r\n  line-height: 0.5rem;\r\n  min-width: 210px;\r\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\r\n  border: 1px solid #ccc;\r\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\r\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\r\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\r\n  margin: 2px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\r\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\r\n  color: #aaaaaa;\r\n  font-size: 12px;\r\n  line-height: 0 !important;\r\n  text-transform: uppercase;\r\n  border-top: 2px solid #e4e4e4;\r\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\r\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\r\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\r\n.table td[data-v-647119ad] {\r\n  margin: 0.75rem;\r\n  vertical-align: top;\r\n  /* border: 1px solid #dee2e6; */\n}\n.table-section[data-v-647119ad] {\r\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\r\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\r\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 0;\r\n  position: sticky;\r\n  top: 200px;\r\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 100px;\r\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\r\n  -webkit-transform: translate3d(0px, 48px, 0);\r\n  -moz-transform: translate3d(0px, 48px, 0);\r\n  -ms-transform: translate3d(0px, 48px, 0);\r\n  -o-transform: translate3d(0px, 48px, 0);\r\n  transform: translate3d(0px, 48px, 0);\r\n  will-change: transform;\r\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\r\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\r\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\r\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\r\n    center left no-repeat;\r\n  position: absolute;\r\n  left: 0;\n}\n.control-next[data-v-647119ad] {\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 100px;\r\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\r\n  -webkit-transform: translate3d(0px, 48px, 0);\r\n  -moz-transform: translate3d(0px, 48px, 0);\r\n  -ms-transform: translate3d(0px, 48px, 0);\r\n  -o-transform: translate3d(0px, 48px, 0);\r\n  transform: translate3d(0px, 48px, 0);\r\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\r\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\r\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\r\n    center right no-repeat;\r\n  position: absolute;\r\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\r\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\r\n  color: black;\n}\n.t-folder[data-v-647119ad] {\r\n  color: black;\r\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\r\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\r\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\r\n  color: black;\r\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\r\n  color: #ff6633;\n}\r\n";
styleInject(css_248z$8);

script$e.render = render$e;
script$e.__scopeId = "data-v-647119ad";
script$e.__file = "src/components/Table/Table.vue";

var script$d = {
  name: "node",
  props: {
    node: Object,
  },
};

const _hoisted_1$d = { class: "node-tree" };
const _hoisted_2$d = { class: "label" };
const _hoisted_3$a = { key: 0 };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = vue.resolveComponent("node");

  return (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$d, [
    vue.createElementVNode("span", _hoisted_2$d, vue.toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_3$a, [
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

script$d.render = render$d;
script$d.__file = "src/components/Tree/NodeTreeMenu.vue";

var script$c = {
  props: {
    folders: {
      type: Object
    },
    folderName: {
      type: String
    }
  },
  components: {
    NodeTree: script$d
  }
};

const _hoisted_1$c = { class: "tree" };
const _hoisted_2$c = { class: "tree-list" };

function render$c(_ctx, _cache) {
  const _component_node_tree = vue.resolveComponent("node-tree");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
    vue.createElementVNode("ul", _hoisted_2$c, [
      vue.createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$7 = "\n.tree-list ul {\r\n  padding-left: 16px;\r\n  margin: 6px 0;\n}\r\n";
styleInject(css_248z$7);

script$c.render = render$c;
script$c.__file = "src/components/Tree/TreeMenu.vue";

var script$b = {
  name: "TreeFile",
  props: {
    filename: {
      required: true,
    },
  },
};

const _withScopeId$2 = n => (vue.pushScopeId("data-v-f314cfaa"),n=n(),vue.popScopeId(),n);
const _hoisted_1$b = { class: "file-row" };
const _hoisted_2$b = { class: "file" };
const _hoisted_3$9 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-file" }, null, -1 /* HOISTED */));
const _hoisted_4$7 = { class: "file-name" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
    vue.createElementVNode("div", _hoisted_2$b, [
      _hoisted_3$9,
      vue.createElementVNode("span", _hoisted_4$7, vue.toDisplayString($props.filename), 1 /* TEXT */)
    ])
  ]))
}

var css_248z$6 = "\n.file-name[data-v-f314cfaa]:hover {\r\n  color: #e67926;\n}\n.fa-file[data-v-f314cfaa] {\r\n  color: #252525;\n}\n.file[data-v-f314cfaa] {\r\n  margin-left: 18px;\r\n  white-space: nowrap;\n}\n.file-name[data-v-f314cfaa] {\r\n  margin-left: 9px;\n}\n.file-name[data-v-f314cfaa] {\r\n  white-space: nowrap;\r\n  cursor: pointer;\n}\r\n";
styleInject(css_248z$6);

script$b.render = render$b;
script$b.__scopeId = "data-v-f314cfaa";
script$b.__file = "src/components/Tree/TreeFile.vue";

var script$a = {
  name: "TreeFolder",
  components: {
    TreeFile: script$b
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
      this.$emit('getName', name);
    },
    getName(name) {
      this.$emit('getName', name);
    }
  },
};

const _withScopeId$1 = n => (vue.pushScopeId("data-v-61a6cc5d"),n=n(),vue.popScopeId(),n);
const _hoisted_1$a = { class: "folder-row" };
const _hoisted_2$a = { class: "folder-container" };
const _hoisted_3$8 = ["onClick"];
const _hoisted_4$6 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-folder folder-icon" }, null, -1 /* HOISTED */));
const _hoisted_5$7 = ["onClick"];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = vue.resolveComponent("tree-folder", true);
  const _component_tree_file = vue.resolveComponent("tree-file");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.treeData.folders, (folder, folderName) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: "folder",
        key: folderName
      }, [
        vue.createElementVNode("div", _hoisted_2$a, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(["fa-solid fa-angle-right", {'down-rotate': folder.settings.isOpen}]),
            onClick: $event => ($options.toggle(folderName))
          }, null, 10 /* CLASS, PROPS */, _hoisted_3$8),
          _hoisted_4$6,
          vue.createElementVNode("span", {
            class: "folder-name",
            onClick: $event => ($options.sendName(folderName))
          }, vue.toDisplayString(folderName), 9 /* TEXT, PROPS */, _hoisted_5$7)
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
    }), 128 /* KEYED_FRAGMENT */)),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.treeData.files, (filename, filetype) => {
      return (vue.openBlock(), vue.createBlock(_component_tree_file, {
        filename: filename,
        key: filetype
      }, null, 8 /* PROPS */, ["filename"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

var css_248z$5 = "\n.toggle-icon[data-v-61a6cc5d] {\r\n  height: 16px;\r\n  width: 8px;\r\n  display: flex;\n}\n.file-content[data-v-61a6cc5d] {\r\n  padding-left: 21px;\r\n  margin-right: -20px;\r\n  height: 0;\r\n  overflow: unset;\r\n  opacity: 0;\r\n  transition: all 0s;\n}\n.content-open[data-v-61a6cc5d] {\r\n  height: fit-content;\r\n  overflow: unset;\r\n  opacity: 1;\r\n  transition: all 0.5s;\n}\n.folder-container[data-v-61a6cc5d] {\r\n  white-space: nowrap;\n}\n.folder-container.empty[data-v-61a6cc5d] {\r\n  margin-left: 15px;\n}\n.folder-row[data-v-61a6cc5d] {\r\n  width: fit-content;\n}\n.folder-name[data-v-61a6cc5d] {\r\n  white-space: nowrap;\r\n  cursor: pointer;\n}\n.folder-name[data-v-61a6cc5d]:hover {\r\n  color: #e67926;\n}\n.fa-angle-right[data-v-61a6cc5d] {\r\n  color: rgb(190, 190, 190);\r\n  margin-right: 7px;\r\n  cursor: pointer;\n}\n.fa-angle-right[data-v-61a6cc5d] {\r\n  transition: 0.15s;\n}\n.fa-angle-right.down-rotate[data-v-61a6cc5d] {\r\n  transform: rotate(90deg);\r\n  transition: 0.15s;\n}\n.fa-folder[data-v-61a6cc5d] {\r\n  color: #e67926;\r\n  margin-right: 7px;\n}\r\n";
styleInject(css_248z$5);

script$a.render = render$a;
script$a.__scopeId = "data-v-61a6cc5d";
script$a.__file = "src/components/Tree/TreeFolder.vue";

var script$9 = {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFolder: script$a,
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
      return this.treeData ?? false
    }
  }
};

const _hoisted_1$9 = { class: "menu-sitemap-tree" };
const _hoisted_2$9 = { class: "file-system" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");
  const _component_tree_folder = vue.resolveComponent("tree-folder");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
    vue.createElementVNode("div", _hoisted_2$9, [
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

var css_248z$4 = "\n.menu-sitemap-tree[data-v-647b20c4] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  height: 685px;\r\n  position: sticky;\n}\n.file-system[data-v-647b20c4] {\r\n  background: rgb(253, 253, 253);\r\n  border: 1px solid #ccc;\r\n  padding: 10px;\r\n  overflow: auto;\r\n  height: 100%;\n}\r\n";
styleInject(css_248z$4);

script$9.render = render$9;
script$9.__scopeId = "data-v-647b20c4";
script$9.__file = "src/components/Menu/LeftmenuFolder.vue";

var script$8 = {
  name: "TsoftGeneralDeclarationForm",
  props: {
    awbInfo: {
      type: Object,
      required: true
    },
    registry: {
      type: Object,
      required: true
    }
  }
};

const _hoisted_1$8 = {
  class: "declaration mb-3",
  id: "declaration"
};
const _hoisted_2$8 = { class: "common-inf" };
const _hoisted_3$7 = { class: "row" };
const _hoisted_4$5 = { class: "inf-block" };
const _hoisted_5$6 = /*#__PURE__*/vue.createTextVNode(" Подан с ДТ: ");
const _hoisted_6$5 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "inf-block" }, [
    /*#__PURE__*/vue.createElementVNode("h4", { class: "declaration-title" }, " Декларация на товары и пассажирская таможенная декларация для экспресс-грузов ")
  ])
], -1 /* HOISTED */);
const _hoisted_7$5 = { class: "row" };
const _hoisted_8$5 = { class: "inf-block row col-12 justify-content-between" };
const _hoisted_9$5 = { class: "checkbox-block d-flex col-2" };
const _hoisted_10$4 = { class: "checkbox-bg col-2" };
const _hoisted_11$4 = ["checked"];
const _hoisted_12$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ДТЭГ")
], -1 /* HOISTED */);
const _hoisted_13$4 = { class: "checkbox-bg col-2" };
const _hoisted_14$3 = ["checked"];
const _hoisted_15$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ПТДЭГ")
], -1 /* HOISTED */);
const _hoisted_16$3 = { class: "checkbox-block d-flex col-2" };
const _hoisted_17$3 = { class: "checkbox-bg col-2" };
const _hoisted_18$3 = ["checked"];
const _hoisted_19$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ИМ")
], -1 /* HOISTED */);
const _hoisted_20$3 = { class: "checkbox-bg col-2" };
const _hoisted_21$3 = ["checked"];
const _hoisted_22$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "ЭК")
], -1 /* HOISTED */);
const _hoisted_23$3 = { class: "declaration-number-block justify-content-end d-flex col-5" };
const _hoisted_24$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "№")
], -1 /* HOISTED */);
const _hoisted_25$3 = { class: "input-bg col-10" };
const _hoisted_26$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3" }, null, -1 /* HOISTED */);
const _hoisted_27$3 = { class: "row" };
const _hoisted_28$3 = { class: "inf-block row col-12" };
const _hoisted_29$3 = { class: "inputs-group d-flex col-2" };
const _hoisted_30$3 = { class: "col-2" };
const _hoisted_31$3 = { class: "col-2" };
const _hoisted_32$3 = { class: "col-3" };
const _hoisted_33$3 = { class: "col-2" };
const _hoisted_34$3 = { class: "sheets-block d-flex col-2" };
const _hoisted_35$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, "Листов")
], -1 /* HOISTED */);
const _hoisted_36$3 = { class: "input-bg col-8" };
const _hoisted_37$3 = { class: "registry-number-block d-flex justify-content-end col-5" };
const _hoisted_38$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", { for: "registryNumber" }, "Рег. №")
], -1 /* HOISTED */);
const _hoisted_39$3 = { class: "input-bg col-10" };
const _hoisted_40$3 = { class: "registry-changes d-flex col-3" };
const _hoisted_41$3 = { class: "input-bg" };
const _hoisted_42$3 = /*#__PURE__*/vue.createElementVNode("label", null, "- реестр с внесёнными изменениями", -1 /* HOISTED */);
const _hoisted_43$3 = { class: "row" };
const _hoisted_44$3 = { class: "inf-block d-grid" };
const _hoisted_45$3 = { class: "row col-12" };
const _hoisted_46$3 = { class: "col-6" };
const _hoisted_47$3 = /*#__PURE__*/vue.createElementVNode("label", { class: "express-courier-label" }, "Экспресс перевозчик", -1 /* HOISTED */);
const _hoisted_48$3 = { class: "express-courier-block col-12 d-flex" };
const _hoisted_49$3 = { class: "col-1" };
const _hoisted_50$3 = { class: "col-11" };
const _hoisted_51$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_52$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
    /*#__PURE__*/vue.createElementVNode("p", null, " Регистрационный номер декларации, в которую вносятся изменения ")
  ])
], -1 /* HOISTED */);
const _hoisted_53$3 = { class: "row col-12" };
const _hoisted_54$3 = { class: "col-6" };
const _hoisted_55$3 = { class: "" };
const _hoisted_56$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
  /*#__PURE__*/vue.createElementVNode("h4", null, "Свидетельство о включении в"),
  /*#__PURE__*/vue.createElementVNode("p", null, " реестр УЭО, реестр владельцев СВХ, складов хранения собственных товаров, таможенных складов, свободных складов или магазинов БТ ")
], -1 /* HOISTED */);
const _hoisted_57$3 = { class: "certificate-block row col-12" };
const _hoisted_58$3 = { class: "input-bg col-1" };
const _hoisted_59$3 = { class: "input-bg col-1" };
const _hoisted_60$3 = { class: "input-bg col-7" };
const _hoisted_61$3 = { class: "input-bg col-1" };
const _hoisted_62$3 = { class: "input-bg col-1" };
const _hoisted_63$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_64$3 = { class: "col-5" };
const _hoisted_65$3 = {
  class: "changing-declaration",
  action: ""
};
const _hoisted_66$3 = { class: "inf-block row" };
const _hoisted_67$3 = { class: "col-3 input-bg" };
const _hoisted_68$3 = { class: "col-4 input-bg" };
const _hoisted_69$3 = { class: "col-3 input-bg" };
const _hoisted_70$3 = { class: "col-1 input-bg" };
const _hoisted_71$3 = { class: "inf-block changing-code row" };
const _hoisted_72$3 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_73$3 = { class: "col-8 d-flex" };
const _hoisted_74$3 = { class: "col input-bg" };
const _hoisted_75$3 = { class: "col input-bg" };
const _hoisted_76$3 = { class: "col input-bg" };
const _hoisted_77$3 = { class: "col input-bg" };
const _hoisted_78$3 = { class: "col input-bg" };
const _hoisted_79$3 = { class: "col input-bg" };
const _hoisted_80$3 = { class: "col input-bg" };
const _hoisted_81$3 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_82$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-4" }, null, -1 /* HOISTED */);
const _hoisted_83$3 = { class: "row" };
const _hoisted_84$3 = { class: "inf-block" };
const _hoisted_85$3 = /*#__PURE__*/vue.createElementVNode("h4", null, "Товарная партия", -1 /* HOISTED */);
const _hoisted_86$3 = {
  action: "",
  class: "batch-form row"
};
const _hoisted_87$2 = { class: "col-3 inf-block" };
const _hoisted_88$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "row inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, " общая сумма таможенных и иных платежей, подлежащих уплате по декларации ")
], -1 /* HOISTED */);
const _hoisted_89$2 = { class: "batch-block row" };
const _hoisted_90$2 = { class: "col-10" };
const _hoisted_91$2 = { class: "col-2" };
const _hoisted_92$2 = { class: "col-3 inf-block" };
const _hoisted_93$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общая стоимость", -1 /* HOISTED */);
const _hoisted_94$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ПТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_95$2 = { class: "batch-block row" };
const _hoisted_96$2 = { class: "col-9" };
const _hoisted_97$2 = { class: "col-3" };
const _hoisted_98$2 = { class: "col-3 inf-block" };
const _hoisted_99$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_100$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_101$2 = { class: "batch-block row" };
const _hoisted_102$2 = { class: "col-6" };
const _hoisted_103$2 = { class: "col-3" };
const _hoisted_104$2 = { class: "col-3" };
const _hoisted_105$2 = { class: "col-3 inf-block" };
const _hoisted_106$2 = /*#__PURE__*/vue.createElementVNode("h5", null, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_107$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "по ДТ для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_108$1 = { class: "batch-block row" };
const _hoisted_109$1 = { class: "col-9" };
const _hoisted_110$1 = { class: "col-3" };
const _hoisted_111$1 = { class: "row" };
const _hoisted_112$1 = { class: "inf-block row justify-content-end" };
const _hoisted_113$1 = { class: "payment-information" };
const _hoisted_114$1 = /*#__PURE__*/vue.createTextVNode(" Сведения об оплате таможенных и иных платежей ");
const _hoisted_115$1 = { class: "sender-common-inf" };
const _hoisted_116$1 = { class: "row" };
const _hoisted_117$1 = /*#__PURE__*/vue.createElementVNode("button", {
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
const _hoisted_118$1 = {
  class: "collapse",
  id: "collapsedSenderInfo"
};
const _hoisted_119$1 = { class: "card card-body" };
const _hoisted_120$1 = { class: "row" };
const _hoisted_121$1 = { class: "sender-name" };
const _hoisted_122$1 = { class: "row form my-2" };
const _hoisted_123$1 = { class: "col-8" };
const _hoisted_124$1 = { class: "input-bg" };
const _hoisted_125$1 = { class: "col-1" };
const _hoisted_126$1 = { class: "input-bg" };
const _hoisted_127$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_128$1 = { class: "col-2 d-flex" };
const _hoisted_129$1 = { class: "input-bg col-2" };
const _hoisted_130$1 = ["checked"];
const _hoisted_131$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_132$1 = { class: "row my-2" };
const _hoisted_133$1 = { class: "col-5" };
const _hoisted_134$1 = { class: "input-bg" };
const _hoisted_135$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_136$1 = { class: "col-4 d-flex" };
const _hoisted_137$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_138$1 = { class: "input-bg col-10" };
const _hoisted_139$1 = { class: "col-3 d-flex" };
const _hoisted_140$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_141$1 = { class: "input-bg col-10" };
const _hoisted_142$1 = { class: "col-3 d-flex" };
const _hoisted_143$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_144$1 = { class: "input-bg col-10" };
const _hoisted_145$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_146$1 = { class: "row" };
const _hoisted_147$1 = { class: "sender-address" };
const _hoisted_148$1 = { class: "row my-2" };
const _hoisted_149$1 = { class: "d-flex sender-contacts" };
const _hoisted_150$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес")
], -1 /* HOISTED */);
const _hoisted_151$1 = { class: "col-3" };
const _hoisted_152$1 = { class: "input-bg" };
const _hoisted_153$1 = { class: "col-4" };
const _hoisted_154$1 = { class: "input-bg" };
const _hoisted_155$1 = { class: "col-3" };
const _hoisted_156$1 = { class: "input-bg" };
const _hoisted_157$1 = { class: "row my-2" };
const _hoisted_158$1 = { class: "address-block" };
const _hoisted_159$1 = { class: "row my-2" };
const _hoisted_160$1 = { class: "col-1" };
const _hoisted_161$1 = { class: "input-bg" };
const _hoisted_162$1 = { class: "col-4" };
const _hoisted_163$1 = { class: "input-bg" };
const _hoisted_164$1 = { class: "col-2" };
const _hoisted_165$1 = { class: "input-bg" };
const _hoisted_166$1 = { class: "col-5" };
const _hoisted_167$1 = { class: "input-bg" };
const _hoisted_168$1 = { class: "row my-2" };
const _hoisted_169$1 = { class: "col-5" };
const _hoisted_170$1 = { class: "input-bg" };
const _hoisted_171$1 = { class: "col-3" };
const _hoisted_172$1 = { class: "input-bg" };
const _hoisted_173$1 = { class: "col-4" };
const _hoisted_174$1 = { class: "input-bg" };
const _hoisted_175$1 = { class: "row my-2" };
const _hoisted_176$1 = { class: "col-4" };
const _hoisted_177$1 = { class: "input-bg" };
const _hoisted_178$1 = { class: "col-2" };
const _hoisted_179$1 = { class: "input-bg" };
const _hoisted_180$1 = { class: "col-2" };
const _hoisted_181$1 = { class: "input-bg" };
const _hoisted_182$1 = { class: "col-2" };
const _hoisted_183$1 = { class: "input-bg" };
const _hoisted_184$1 = { class: "row my-2" };
const _hoisted_185$1 = { class: "col-12" };
const _hoisted_186$1 = { class: "input-bg" };
const _hoisted_187$1 = { class: "row" };
const _hoisted_188$1 = { class: "personal-inf-block" };
const _hoisted_189$1 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_190$1 = { class: "row my-2" };
const _hoisted_191$1 = { class: "row personal-data my-2" };
const _hoisted_192$1 = { class: "col-1" };
const _hoisted_193$1 = { class: "input-bg" };
const _hoisted_194$1 = { class: "col-1" };
const _hoisted_195$1 = { class: "input-bg" };
const _hoisted_196$1 = { class: "col-2" };
const _hoisted_197$1 = { class: "input-bg" };
const _hoisted_198$1 = { class: "col-4 d-flex" };
const _hoisted_199$1 = { class: "input-bg col-4" };
const _hoisted_200$1 = { class: "input-bg col-4" };
const _hoisted_201$1 = { class: "input-bg col-4" };
const _hoisted_202$1 = { class: "col-4" };
const _hoisted_203$1 = { class: "input-bg" };
const _hoisted_204$1 = { class: "row personal-data my-2" };
const _hoisted_205$1 = { class: "col-7" };
const _hoisted_206$1 = { class: "input-bg" };
const _hoisted_207$1 = { class: "col-2" };
const _hoisted_208$1 = { class: "input-bg" };
const _hoisted_209$1 = { class: "col-3" };
const _hoisted_210$1 = { class: "input-bg" };
const _hoisted_211$1 = { class: "recipient-common-inf" };
const _hoisted_212$1 = { class: "row" };
const _hoisted_213$1 = /*#__PURE__*/vue.createElementVNode("button", {
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
const _hoisted_214$1 = {
  class: "collapse",
  id: "collapsedRecipientInfo"
};
const _hoisted_215$1 = { class: "card card-body" };
const _hoisted_216$1 = { class: "row" };
const _hoisted_217$1 = { class: "sender-name" };
const _hoisted_218$1 = { class: "row form my-2" };
const _hoisted_219$1 = { class: "col-8" };
const _hoisted_220$1 = { class: "input-bg" };
const _hoisted_221$1 = { class: "col-1" };
const _hoisted_222$1 = { class: "input-bg" };
const _hoisted_223$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_224$1 = { class: "col-2 d-flex" };
const _hoisted_225$1 = { class: "input-bg col-2" };
const _hoisted_226$1 = ["checked"];
const _hoisted_227$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_228$1 = { class: "row my-2" };
const _hoisted_229$1 = { class: "col-5" };
const _hoisted_230$1 = { class: "input-bg" };
const _hoisted_231$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_232$1 = { class: "col-4 d-flex" };
const _hoisted_233$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_234$1 = { class: "input-bg col-10" };
const _hoisted_235$1 = { class: "col-3 d-flex" };
const _hoisted_236$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_237$1 = { class: "input-bg col-10" };
const _hoisted_238$1 = { class: "col-3 d-flex" };
const _hoisted_239$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_240$1 = { class: "input-bg col-10" };
const _hoisted_241$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_242$1 = { class: "row" };
const _hoisted_243$1 = { class: "sender-address" };
const _hoisted_244$1 = { class: "row my-2" };
const _hoisted_245$1 = { class: "d-flex sender-contacts" };
const _hoisted_246$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес")
], -1 /* HOISTED */);
const _hoisted_247$1 = { class: "col-3" };
const _hoisted_248$1 = { class: "input-bg" };
const _hoisted_249$1 = { class: "col-4" };
const _hoisted_250$1 = { class: "input-bg" };
const _hoisted_251$1 = { class: "col-3" };
const _hoisted_252$1 = { class: "input-bg" };
const _hoisted_253$1 = { class: "row my-2" };
const _hoisted_254$1 = { class: "address-block" };
const _hoisted_255$1 = { class: "row my-2" };
const _hoisted_256$1 = { class: "col-1" };
const _hoisted_257$1 = { class: "input-bg" };
const _hoisted_258$1 = { class: "col-4" };
const _hoisted_259$1 = { class: "input-bg" };
const _hoisted_260$1 = { class: "col-2" };
const _hoisted_261$1 = { class: "input-bg" };
const _hoisted_262$1 = { class: "col-5" };
const _hoisted_263$1 = { class: "input-bg" };
const _hoisted_264$1 = { class: "row my-2" };
const _hoisted_265$1 = { class: "col-5" };
const _hoisted_266$1 = { class: "input-bg" };
const _hoisted_267$1 = { class: "col-3" };
const _hoisted_268$1 = { class: "input-bg" };
const _hoisted_269$1 = { class: "col-4" };
const _hoisted_270$1 = { class: "input-bg" };
const _hoisted_271$1 = { class: "row my-2" };
const _hoisted_272$1 = { class: "col-4" };
const _hoisted_273$1 = { class: "input-bg" };
const _hoisted_274$1 = { class: "col-2" };
const _hoisted_275$1 = { class: "input-bg" };
const _hoisted_276$1 = { class: "col-2" };
const _hoisted_277$1 = { class: "input-bg" };
const _hoisted_278 = { class: "col-2" };
const _hoisted_279 = { class: "input-bg" };
const _hoisted_280 = { class: "row my-2" };
const _hoisted_281 = { class: "col-12" };
const _hoisted_282 = { class: "input-bg" };
const _hoisted_283 = { class: "row" };
const _hoisted_284 = { class: "personal-inf-block" };
const _hoisted_285 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_286 = { class: "row my-2" };
const _hoisted_287 = { class: "row personal-data my-2" };
const _hoisted_288 = { class: "col-1" };
const _hoisted_289 = { class: "input-bg" };
const _hoisted_290 = { class: "col-1" };
const _hoisted_291 = { class: "input-bg" };
const _hoisted_292 = { class: "col-2" };
const _hoisted_293 = { class: "input-bg" };
const _hoisted_294 = { class: "col-4 d-flex" };
const _hoisted_295 = { class: "input-bg col-4" };
const _hoisted_296 = { class: "input-bg col-4" };
const _hoisted_297 = { class: "input-bg col-4" };
const _hoisted_298 = { class: "col-4" };
const _hoisted_299 = { class: "input-bg" };
const _hoisted_300 = { class: "row personal-data my-2" };
const _hoisted_301 = { class: "col-7" };
const _hoisted_302 = { class: "input-bg" };
const _hoisted_303 = { class: "col-2" };
const _hoisted_304 = { class: "input-bg" };
const _hoisted_305 = { class: "col-3" };
const _hoisted_306 = { class: "input-bg" };
const _hoisted_307 = { class: "customs-sender-inf my-2" };
const _hoisted_308 = { class: "col-12 row inf-block" };
const _hoisted_309 = { class: "col-7" };
const _hoisted_310 = { class: "col" };
const _hoisted_311 = /*#__PURE__*/vue.createElementVNode("h4", { class: "customs-representative" }, "Таможенный представитель", -1 /* HOISTED */);
const _hoisted_312 = { class: "input-bg" };
const _hoisted_313 = { class: "col-5" };
const _hoisted_314 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, " Сведения о включении лица в реестр таможенных представителей ", -1 /* HOISTED */);
const _hoisted_315 = { class: "col d-flex" };
const _hoisted_316 = { class: "col-2" };
const _hoisted_317 = { class: "input-bg" };
const _hoisted_318 = { class: "col-1" };
const _hoisted_319 = { class: "input-bg" };
const _hoisted_320 = { class: "col-7" };
const _hoisted_321 = { class: "input-bg" };
const _hoisted_322 = { class: "col-1" };
const _hoisted_323 = { class: "input-bg" };
const _hoisted_324 = { class: "col-1" };
const _hoisted_325 = { class: "input-bg" };
const _hoisted_326 = { class: "row" };
const _hoisted_327 = /*#__PURE__*/vue.createElementVNode("button", {
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
const _hoisted_328 = {
  class: "collapse",
  id: "collapsedNaturalPersonInfo"
};
const _hoisted_329 = { class: "card card-body" };
const _hoisted_330 = {
  action: "",
  class: "form"
};
const _hoisted_331 = { class: "d-flex" };
const _hoisted_332 = { class: "col-3" };
const _hoisted_333 = { class: "input-bg" };
const _hoisted_334 = { class: "col-3" };
const _hoisted_335 = { class: "input-bg" };
const _hoisted_336 = { class: "col-3" };
const _hoisted_337 = { class: "input-bg" };
const _hoisted_338 = { class: "col-3" };
const _hoisted_339 = { class: "input-bg" };
const _hoisted_340 = { class: "row my-2" };
const _hoisted_341 = { class: "col-9 d-flex" };
const _hoisted_342 = { class: "col-3" };
const _hoisted_343 = { class: "input-bg" };
const _hoisted_344 = { class: "col-3" };
const _hoisted_345 = { class: "input-bg" };
const _hoisted_346 = { class: "col-6" };
const _hoisted_347 = { class: "input-bg" };
const _hoisted_348 = { class: "col-3 row" };
const _hoisted_349 = { class: "col-8" };
const _hoisted_350 = { class: "input-bg" };
const _hoisted_351 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-4" }, [
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "btn button-calendar",
    type: "button"
  }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-calendar-days" })
  ])
], -1 /* HOISTED */);
const _hoisted_352 = { class: "row my-2" };
const _hoisted_353 = /*#__PURE__*/vue.createElementVNode("p", null, " Сведения о документе, удостоверяющем личность лица, заоплневшего (подписавшего) таможенного документ ", -1 /* HOISTED */);
const _hoisted_354 = { class: "row" };
const _hoisted_355 = { class: "col-3 d-flex" };
const _hoisted_356 = { class: "col-5" };
const _hoisted_357 = { class: "input-bg" };
const _hoisted_358 = { class: "col-7" };
const _hoisted_359 = { class: "input-bg" };
const _hoisted_360 = { class: "col-3 d-flex" };
const _hoisted_361 = { class: "col-4" };
const _hoisted_362 = { class: "input-bg" };
const _hoisted_363 = { class: "col-8" };
const _hoisted_364 = { class: "input-bg" };
const _hoisted_365 = { class: "col-3 d-flex" };
const _hoisted_366 = { class: "col-6" };
const _hoisted_367 = { class: "input-bg" };
const _hoisted_368 = { class: "col-6" };
const _hoisted_369 = { class: "input-bg" };
const _hoisted_370 = { class: "col-3 d-flex" };
const _hoisted_371 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "label-block align-bcntr" }, [
    /*#__PURE__*/vue.createElementVNode("label", { class: "align-bcntr" }, " аттестат ")
  ])
], -1 /* HOISTED */);
const _hoisted_372 = { class: "col-8" };
const _hoisted_373 = { class: "input-bg" };
const _hoisted_374 = { class: "row my-2" };
const _hoisted_375 = { class: "col-3" };
const _hoisted_376 = { class: "input-bg" };
const _hoisted_377 = { class: "col-5" };
const _hoisted_378 = { class: "input-bg" };
const _hoisted_379 = { class: "col-4 d-flex" };
const _hoisted_380 = { class: "col-3 input-bg" };
const _hoisted_381 = { class: "col-8 input-bg" };
const _hoisted_382 = { class: "col-1 input-bg" };
const _hoisted_383 = { class: "row my-2" };
const _hoisted_384 = { class: "row" };
const _hoisted_385 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, " Идентификаторы, присвоенные документу (сведениям) при размещении в хранилище электронных документов ")
], -1 /* HOISTED */);
const _hoisted_386 = { class: "row" };
const _hoisted_387 = { class: "col-8 d-flex" };
const _hoisted_388 = { class: "col-6" };
const _hoisted_389 = { class: "input-bg" };
const _hoisted_390 = { class: "col-6" };
const _hoisted_391 = { class: "input-bg" };
const _hoisted_392 = { class: "col-4" };
const _hoisted_393 = { class: "input-bg" };
const _hoisted_394 = { class: "row my-2" };
const _hoisted_395 = /*#__PURE__*/vue.createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий полномочия")
], -1 /* HOISTED */);
const _hoisted_396 = { class: "row" };
const _hoisted_397 = { class: "col-4 d-flex" };
const _hoisted_398 = { class: "col-4" };
const _hoisted_399 = { class: "input-bg" };
const _hoisted_400 = { class: "col-8" };
const _hoisted_401 = { class: "input-bg" };
const _hoisted_402 = { class: "col-8 row" };
const _hoisted_403 = { class: "col-4 d-flex" };
const _hoisted_404 = { class: "col-5" };
const _hoisted_405 = { class: "input-bg" };
const _hoisted_406 = { class: "col-7" };
const _hoisted_407 = { class: "input-bg" };
const _hoisted_408 = { class: "col-8 row" };
const _hoisted_409 = { class: "col-5 d-flex" };
const _hoisted_410 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "с")
], -1 /* HOISTED */);
const _hoisted_411 = { class: "col-10" };
const _hoisted_412 = { class: "input-bg" };
const _hoisted_413 = { class: "col-5 d-flex" };
const _hoisted_414 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "по")
], -1 /* HOISTED */);
const _hoisted_415 = { class: "col-10" };
const _hoisted_416 = { class: "input-bg" };
const _hoisted_417 = { class: "col-2" };
const _hoisted_418 = { class: "input-bg" };
const _hoisted_419 = { class: "inspector-inf my-2" };
const _hoisted_420 = { class: "row" };
const _hoisted_421 = { class: "col-7" };
const _hoisted_422 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "ФИО инспектора", -1 /* HOISTED */);
const _hoisted_423 = { class: "input-bg" };
const _hoisted_424 = { class: "col-5" };
const _hoisted_425 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "ЛНП", -1 /* HOISTED */);
const _hoisted_426 = { class: "row" };
const _hoisted_427 = { class: "col-2 input-bg" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
    vue.createCommentVNode("Region элемент с общей информацией декларации"),
    vue.createElementVNode("div", _hoisted_2$8, [
      vue.createElementVNode("div", _hoisted_3$7, [
        vue.createElementVNode("div", _hoisted_4$5, [
          vue.createVNode(_component_router_link, {
            class: "point-name",
            to: { name: 'index' }
          }, {
            default: vue.withCtx(() => [
              _hoisted_5$6
            ]),
            _: 1 /* STABLE */
          })
        ])
      ]),
      _hoisted_6$5,
      vue.createElementVNode("div", _hoisted_7$5, [
        vue.createElementVNode("div", _hoisted_8$5, [
          vue.createElementVNode("div", _hoisted_9$5, [
            vue.createElementVNode("div", _hoisted_10$4, [
              vue.createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.docType.dteg
              }, null, 8 /* PROPS */, _hoisted_11$4)
            ]),
            _hoisted_12$4,
            vue.createElementVNode("div", _hoisted_13$4, [
              vue.createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.docType.ptdeg
              }, null, 8 /* PROPS */, _hoisted_14$3)
            ]),
            _hoisted_15$3
          ]),
          vue.createElementVNode("div", _hoisted_16$3, [
            vue.createElementVNode("div", _hoisted_17$3, [
              vue.createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.declarationKindCode.import
              }, null, 8 /* PROPS */, _hoisted_18$3)
            ]),
            _hoisted_19$3,
            vue.createElementVNode("div", _hoisted_20$3, [
              vue.createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.declarationKindCode.export
              }, null, 8 /* PROPS */, _hoisted_21$3)
            ]),
            _hoisted_22$3
          ]),
          vue.createElementVNode("div", _hoisted_23$3, [
            _hoisted_24$3,
            vue.createElementVNode("div", _hoisted_25$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "declaration-number-input form-control",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((this.registry.registryNum) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.registryNum]
              ])
            ])
          ]),
          _hoisted_26$3
        ])
      ]),
      vue.createElementVNode("div", _hoisted_27$3, [
        vue.createElementVNode("div", _hoisted_28$3, [
          vue.createElementVNode("div", _hoisted_29$3, [
            vue.createElementVNode("div", _hoisted_30$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((this.registry.customsCodeMode) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.customsCodeMode]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_31$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((this.registry.previousCustomsCodeMode) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.previousCustomsCodeMode]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_32$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((this.registry.declarationKind) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.declarationKind]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_33$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((this.registry.electronicDocumentSign) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.electronicDocumentSign]
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_34$3, [
            _hoisted_35$3,
            vue.createElementVNode("div", _hoisted_36$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "sheets-input form-control",
                type: "text",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((this.registry.countList) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, this.registry.countList]
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_37$3, [
            _hoisted_38$3,
            vue.createElementVNode("div", _hoisted_39$3, [
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
          vue.createElementVNode("div", _hoisted_40$3, [
            vue.createElementVNode("div", _hoisted_41$3, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "registry-checkbox form-check-input",
                type: "checkbox",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((this.registry.isRegistryWasChanged) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelCheckbox, this.registry.isRegistryWasChanged]
              ])
            ]),
            _hoisted_42$3
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_43$3, [
        vue.createElementVNode("div", _hoisted_44$3, [
          vue.createElementVNode("div", _hoisted_45$3, [
            vue.createElementVNode("div", _hoisted_46$3, [
              _hoisted_47$3,
              vue.createElementVNode("div", _hoisted_48$3, [
                vue.createElementVNode("div", _hoisted_49$3, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((this.registry.expressCourierCode) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.expressCourierCode]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_50$3, [
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
            _hoisted_51$3,
            _hoisted_52$3
          ]),
          vue.createElementVNode("div", _hoisted_53$3, [
            vue.createElementVNode("div", _hoisted_54$3, [
              vue.createElementVNode("div", _hoisted_55$3, [
                _hoisted_56$3,
                vue.createElementVNode("form", _hoisted_57$3, [
                  vue.createElementVNode("div", _hoisted_58$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((this.registry.registerDocumentUnknownString1) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.registerDocumentUnknownString1]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_59$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((this.registry.registerDocumentIdCountryCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.registerDocumentIdCountryCode]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_60$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((this.registry.registerDocumentIdNumber) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.registerDocumentIdNumber]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_61$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((this.registry.registerDocumentUnknownString2) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.registerDocumentUnknownString2]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_62$3, [
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
            _hoisted_63$3,
            vue.createElementVNode("div", _hoisted_64$3, [
              vue.createElementVNode("form", _hoisted_65$3, [
                vue.createElementVNode("div", _hoisted_66$3, [
                  vue.createElementVNode("div", _hoisted_67$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((this.registry.changingDeclarationNumber.customPoint) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.changingDeclarationNumber.customPoint]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_68$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((this.registry.changingDeclarationNumber.date) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.changingDeclarationNumber.date]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_69$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((this.registry.changingDeclarationNumber.innerNum) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.changingDeclarationNumber.innerNum]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_70$3, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ((this.registry.changingDeclarationNumber.unknownNum) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.changingDeclarationNumber.unknownNum]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_71$3, [
                  _hoisted_72$3,
                  vue.createElementVNode("div", _hoisted_73$3, [
                    vue.createElementVNode("div", _hoisted_74$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => ((this.registry.changeDetailsType.stageChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.stageChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_75$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => ((this.registry.changeDetailsType.reasonChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.reasonChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_76$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => ((this.registry.changeDetailsType.quantityChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.quantityChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_77$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => ((this.registry.changeDetailsType.TNVEDChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.TNVEDChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_78$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => ((this.registry.changeDetailsType.customsCostChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.customsCostChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_79$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => ((this.registry.changeDetailsType.customsPaymentChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.customsPaymentChangeCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_80$3, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => ((this.registry.changeDetailsType.otherChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.changeDetailsType.otherChangeCode]
                      ])
                    ]),
                    _hoisted_81$3
                  ]),
                  _hoisted_82$3
                ])
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_83$3, [
        vue.createElementVNode("div", _hoisted_84$3, [
          _hoisted_85$3,
          vue.createElementVNode("form", _hoisted_86$3, [
            vue.createElementVNode("div", _hoisted_87$2, [
              _hoisted_88$2,
              vue.createElementVNode("div", _hoisted_89$2, [
                vue.createElementVNode("div", _hoisted_90$2, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Сумма",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => ((this.registry.totalPaymentAmountDetailsSum) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.totalPaymentAmountDetailsSum]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_91$2, [
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
            vue.createElementVNode("div", _hoisted_92$2, [
              _hoisted_93$2,
              _hoisted_94$2,
              vue.createElementVNode("div", _hoisted_95$2, [
                vue.createElementVNode("div", _hoisted_96$2, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => ((this.registry.CAValueAmountSum) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.CAValueAmountSum]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_97$2, [
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
            vue.createElementVNode("div", _hoisted_98$2, [
              _hoisted_99$2,
              _hoisted_100$2,
              vue.createElementVNode("div", _hoisted_101$2, [
                vue.createElementVNode("div", _hoisted_102$2, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => ((this.registry.unifiedGrossWeightQuantity) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.unifiedGrossWeightQuantity]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_103$2, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => ((this.registry.weightUnit) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.weightUnit]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_104$2, [
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
            vue.createElementVNode("div", _hoisted_105$2, [
              _hoisted_106$2,
              _hoisted_107$1,
              vue.createElementVNode("div", _hoisted_108$1, [
                vue.createElementVNode("div", _hoisted_109$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => ((this.registry.customCost) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, this.registry.customCost]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_110$1, [
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
      ]),
      vue.createElementVNode("div", _hoisted_111$1, [
        vue.createElementVNode("div", _hoisted_112$1, [
          vue.createElementVNode("div", _hoisted_113$1, [
            vue.createVNode(_component_router_link, { to: { name: 'index' } }, {
              default: vue.withCtx(() => [
                _hoisted_114$1
              ]),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ]),
    vue.createCommentVNode(" endregion"),
    vue.createCommentVNode(" Region элемент с общей информацией по отправителю"),
    vue.createElementVNode("div", _hoisted_115$1, [
      vue.createElementVNode("div", _hoisted_116$1, [
        _hoisted_117$1,
        vue.createElementVNode("div", _hoisted_118$1, [
          vue.createElementVNode("div", _hoisted_119$1, [
            vue.createElementVNode("div", _hoisted_120$1, [
              vue.createElementVNode("div", _hoisted_121$1, [
                vue.createElementVNode("form", _hoisted_122$1, [
                  vue.createElementVNode("div", _hoisted_123$1, [
                    vue.createElementVNode("div", _hoisted_124$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => ((this.registry.consignor.fullName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.consignor.fullName]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_125$1, [
                    vue.createElementVNode("div", _hoisted_126$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => ((this.registry.consignor.countryCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.consignor.countryCode]
                      ])
                    ])
                  ]),
                  _hoisted_127$1,
                  vue.createElementVNode("div", _hoisted_128$1, [
                    vue.createElementVNode("div", _hoisted_129$1, [
                      vue.createElementVNode("input", {
                        type: "checkbox",
                        class: "form-check-input",
                        checked: this.registry.consignor.isDeclarant
                      }, null, 8 /* PROPS */, _hoisted_130$1)
                    ]),
                    _hoisted_131$1
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_132$1, [
                  vue.createElementVNode("div", _hoisted_133$1, [
                    vue.createElementVNode("div", _hoisted_134$1, [
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
                  vue.createElementVNode("div", _hoisted_135$1, [
                    vue.createElementVNode("div", _hoisted_136$1, [
                      _hoisted_137$1,
                      vue.createElementVNode("div", _hoisted_138$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => ((this.registry.consignor.fullName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignor.fullName]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_139$1, [
                      _hoisted_140$1,
                      vue.createElementVNode("div", _hoisted_141$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => ((this.registry.consignor.INN) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignor.INN]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_142$1, [
                      _hoisted_143$1,
                      vue.createElementVNode("div", _hoisted_144$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => ((this.registry.consignor.KPP) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignor.KPP]
                        ])
                      ])
                    ]),
                    _hoisted_145$1
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_146$1, [
              vue.createElementVNode("div", _hoisted_147$1, [
                vue.createElementVNode("div", _hoisted_148$1, [
                  vue.createElementVNode("div", _hoisted_149$1, [
                    _hoisted_150$1,
                    vue.createElementVNode("div", _hoisted_151$1, [
                      vue.createElementVNode("div", _hoisted_152$1, [
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
                    vue.createElementVNode("div", _hoisted_153$1, [
                      vue.createElementVNode("div", _hoisted_154$1, [
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
                    vue.createElementVNode("div", _hoisted_155$1, [
                      vue.createElementVNode("div", _hoisted_156$1, [
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
                vue.createElementVNode("div", _hoisted_157$1, [
                  vue.createElementVNode("div", _hoisted_158$1, [
                    vue.createElementVNode("div", _hoisted_159$1, [
                      vue.createElementVNode("div", _hoisted_160$1, [
                        vue.createElementVNode("div", _hoisted_161$1, [
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
                      vue.createElementVNode("div", _hoisted_162$1, [
                        vue.createElementVNode("div", _hoisted_163$1, [
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
                      vue.createElementVNode("div", _hoisted_164$1, [
                        vue.createElementVNode("div", _hoisted_165$1, [
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
                      vue.createElementVNode("div", _hoisted_166$1, [
                        vue.createElementVNode("div", _hoisted_167$1, [
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
                    vue.createElementVNode("div", _hoisted_168$1, [
                      vue.createElementVNode("div", _hoisted_169$1, [
                        vue.createElementVNode("div", _hoisted_170$1, [
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
                      vue.createElementVNode("div", _hoisted_171$1, [
                        vue.createElementVNode("div", _hoisted_172$1, [
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
                      vue.createElementVNode("div", _hoisted_173$1, [
                        vue.createElementVNode("div", _hoisted_174$1, [
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
                    vue.createElementVNode("div", _hoisted_175$1, [
                      vue.createElementVNode("div", _hoisted_176$1, [
                        vue.createElementVNode("div", _hoisted_177$1, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => ((this.registry.consignor.address) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.consignor.address]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_178$1, [
                        vue.createElementVNode("div", _hoisted_179$1, [
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
                      vue.createElementVNode("div", _hoisted_180$1, [
                        vue.createElementVNode("div", _hoisted_181$1, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => ((this.registry.consignor.office) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.consignor.office]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_182$1, [
                        vue.createElementVNode("div", _hoisted_183$1, [
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
                    vue.createElementVNode("div", _hoisted_184$1, [
                      vue.createElementVNode("div", _hoisted_185$1, [
                        vue.createElementVNode("div", _hoisted_186$1, [
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
            vue.createElementVNode("div", _hoisted_187$1, [
              vue.createElementVNode("div", _hoisted_188$1, [
                _hoisted_189$1,
                vue.createElementVNode("div", _hoisted_190$1, [
                  vue.createElementVNode("div", _hoisted_191$1, [
                    vue.createElementVNode("div", _hoisted_192$1, [
                      vue.createElementVNode("div", _hoisted_193$1, [
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
                    vue.createElementVNode("div", _hoisted_194$1, [
                      vue.createElementVNode("div", _hoisted_195$1, [
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
                    vue.createElementVNode("div", _hoisted_196$1, [
                      vue.createElementVNode("div", _hoisted_197$1, [
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
                    vue.createElementVNode("div", _hoisted_198$1, [
                      vue.createElementVNode("div", _hoisted_199$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "серия",
                          "onUpdate:modelValue": _cache[59] || (_cache[59] = $event => ((this.registry.consignor.document.series) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignor.document.series]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_200$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "номер",
                          "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => ((this.registry.consignor.document.number) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignor.document.number]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_201$1, [
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
                    vue.createElementVNode("div", _hoisted_202$1, [
                      vue.createElementVNode("div", _hoisted_203$1, [
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
                  vue.createElementVNode("div", _hoisted_204$1, [
                    vue.createElementVNode("div", _hoisted_205$1, [
                      vue.createElementVNode("div", _hoisted_206$1, [
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
                    vue.createElementVNode("div", _hoisted_207$1, [
                      vue.createElementVNode("div", _hoisted_208$1, [
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
                    vue.createElementVNode("div", _hoisted_209$1, [
                      vue.createElementVNode("div", _hoisted_210$1, [
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
    vue.createElementVNode("div", _hoisted_211$1, [
      vue.createElementVNode("div", _hoisted_212$1, [
        _hoisted_213$1,
        vue.createElementVNode("div", _hoisted_214$1, [
          vue.createElementVNode("div", _hoisted_215$1, [
            vue.createElementVNode("div", _hoisted_216$1, [
              vue.createElementVNode("div", _hoisted_217$1, [
                vue.createElementVNode("form", _hoisted_218$1, [
                  vue.createElementVNode("div", _hoisted_219$1, [
                    vue.createElementVNode("div", _hoisted_220$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => ((this.registry.consignee.fullName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.consignee.fullName]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_221$1, [
                    vue.createElementVNode("div", _hoisted_222$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => ((this.registry.consignee.countryCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.consignee.countryCode]
                      ])
                    ])
                  ]),
                  _hoisted_223$1,
                  vue.createElementVNode("div", _hoisted_224$1, [
                    vue.createElementVNode("div", _hoisted_225$1, [
                      vue.createElementVNode("input", {
                        type: "checkbox",
                        class: "form-check-input",
                        checked: this.registry.consignee.isDeclarant
                      }, null, 8 /* PROPS */, _hoisted_226$1)
                    ]),
                    _hoisted_227$1
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_228$1, [
                  vue.createElementVNode("div", _hoisted_229$1, [
                    vue.createElementVNode("div", _hoisted_230$1, [
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
                  vue.createElementVNode("div", _hoisted_231$1, [
                    vue.createElementVNode("div", _hoisted_232$1, [
                      _hoisted_233$1,
                      vue.createElementVNode("div", _hoisted_234$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => ((this.registry.consignee.fullName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignee.fullName]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_235$1, [
                      _hoisted_236$1,
                      vue.createElementVNode("div", _hoisted_237$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => ((this.registry.consignee.INN) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignee.INN]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_238$1, [
                      _hoisted_239$1,
                      vue.createElementVNode("div", _hoisted_240$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => ((this.registry.consignee.KPP) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignee.KPP]
                        ])
                      ])
                    ]),
                    _hoisted_241$1
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_242$1, [
              vue.createElementVNode("div", _hoisted_243$1, [
                vue.createElementVNode("div", _hoisted_244$1, [
                  vue.createElementVNode("div", _hoisted_245$1, [
                    _hoisted_246$1,
                    vue.createElementVNode("div", _hoisted_247$1, [
                      vue.createElementVNode("div", _hoisted_248$1, [
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
                    vue.createElementVNode("div", _hoisted_249$1, [
                      vue.createElementVNode("div", _hoisted_250$1, [
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
                    vue.createElementVNode("div", _hoisted_251$1, [
                      vue.createElementVNode("div", _hoisted_252$1, [
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
                vue.createElementVNode("div", _hoisted_253$1, [
                  vue.createElementVNode("div", _hoisted_254$1, [
                    vue.createElementVNode("div", _hoisted_255$1, [
                      vue.createElementVNode("div", _hoisted_256$1, [
                        vue.createElementVNode("div", _hoisted_257$1, [
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
                      vue.createElementVNode("div", _hoisted_258$1, [
                        vue.createElementVNode("div", _hoisted_259$1, [
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
                      vue.createElementVNode("div", _hoisted_260$1, [
                        vue.createElementVNode("div", _hoisted_261$1, [
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
                      vue.createElementVNode("div", _hoisted_262$1, [
                        vue.createElementVNode("div", _hoisted_263$1, [
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
                    vue.createElementVNode("div", _hoisted_264$1, [
                      vue.createElementVNode("div", _hoisted_265$1, [
                        vue.createElementVNode("div", _hoisted_266$1, [
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
                      vue.createElementVNode("div", _hoisted_267$1, [
                        vue.createElementVNode("div", _hoisted_268$1, [
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
                      vue.createElementVNode("div", _hoisted_269$1, [
                        vue.createElementVNode("div", _hoisted_270$1, [
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
                    vue.createElementVNode("div", _hoisted_271$1, [
                      vue.createElementVNode("div", _hoisted_272$1, [
                        vue.createElementVNode("div", _hoisted_273$1, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => ((this.registry.consignee.address) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.consignee.address]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_274$1, [
                        vue.createElementVNode("div", _hoisted_275$1, [
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
                      vue.createElementVNode("div", _hoisted_276$1, [
                        vue.createElementVNode("div", _hoisted_277$1, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => ((this.registry.consignee.office) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.consignee.office]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_278, [
                        vue.createElementVNode("div", _hoisted_279, [
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
                    vue.createElementVNode("div", _hoisted_280, [
                      vue.createElementVNode("div", _hoisted_281, [
                        vue.createElementVNode("div", _hoisted_282, [
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
            vue.createElementVNode("div", _hoisted_283, [
              vue.createElementVNode("div", _hoisted_284, [
                _hoisted_285,
                vue.createElementVNode("div", _hoisted_286, [
                  vue.createElementVNode("div", _hoisted_287, [
                    vue.createElementVNode("div", _hoisted_288, [
                      vue.createElementVNode("div", _hoisted_289, [
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
                    vue.createElementVNode("div", _hoisted_290, [
                      vue.createElementVNode("div", _hoisted_291, [
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
                    vue.createElementVNode("div", _hoisted_292, [
                      vue.createElementVNode("div", _hoisted_293, [
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
                    vue.createElementVNode("div", _hoisted_294, [
                      vue.createElementVNode("div", _hoisted_295, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "серия",
                          "onUpdate:modelValue": _cache[90] || (_cache[90] = $event => ((this.registry.consignee.document.series) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignee.document.series]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_296, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "номер",
                          "onUpdate:modelValue": _cache[91] || (_cache[91] = $event => ((this.registry.consignee.document.number) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.consignee.document.number]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_297, [
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
                    vue.createElementVNode("div", _hoisted_298, [
                      vue.createElementVNode("div", _hoisted_299, [
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
                  vue.createElementVNode("div", _hoisted_300, [
                    vue.createElementVNode("div", _hoisted_301, [
                      vue.createElementVNode("div", _hoisted_302, [
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
                    vue.createElementVNode("div", _hoisted_303, [
                      vue.createElementVNode("div", _hoisted_304, [
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
                    vue.createElementVNode("div", _hoisted_305, [
                      vue.createElementVNode("div", _hoisted_306, [
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
    vue.createElementVNode("div", _hoisted_307, [
      vue.createElementVNode("div", _hoisted_308, [
        vue.createElementVNode("div", _hoisted_309, [
          vue.createElementVNode("div", _hoisted_310, [
            _hoisted_311,
            vue.createElementVNode("div", _hoisted_312, [
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
        vue.createElementVNode("div", _hoisted_313, [
          _hoisted_314,
          vue.createElementVNode("div", _hoisted_315, [
            vue.createElementVNode("div", _hoisted_316, [
              vue.createElementVNode("div", _hoisted_317, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[98] || (_cache[98] = $event => ((this.registry.brokerRegistryDocDetails[0]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, this.registry.brokerRegistryDocDetails[0]]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_318, [
              vue.createElementVNode("div", _hoisted_319, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[99] || (_cache[99] = $event => ((this.registry.brokerRegistryDocDetails[1]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, this.registry.brokerRegistryDocDetails[1]]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_320, [
              vue.createElementVNode("div", _hoisted_321, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[100] || (_cache[100] = $event => ((this.registry.brokerRegistryDocDetails[2]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, this.registry.brokerRegistryDocDetails[2]]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_322, [
              vue.createElementVNode("div", _hoisted_323, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[101] || (_cache[101] = $event => ((this.registry.brokerRegistryDocDetails[3]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, this.registry.brokerRegistryDocDetails[3]]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_324, [
              vue.createElementVNode("div", _hoisted_325, [
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
      vue.createElementVNode("div", _hoisted_326, [
        _hoisted_327,
        vue.createElementVNode("div", _hoisted_328, [
          vue.createElementVNode("div", _hoisted_329, [
            vue.createElementVNode("form", _hoisted_330, [
              vue.createElementVNode("div", _hoisted_331, [
                vue.createElementVNode("div", _hoisted_332, [
                  vue.createElementVNode("div", _hoisted_333, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[103] || (_cache[103] = $event => ((this.registry.signatoryPersonIdentityDetails.lastName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.lastName]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_334, [
                  vue.createElementVNode("div", _hoisted_335, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[104] || (_cache[104] = $event => ((this.registry.signatoryPersonIdentityDetails.firstName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.firstName]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_336, [
                  vue.createElementVNode("div", _hoisted_337, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[105] || (_cache[105] = $event => ((this.registry.signatoryPersonIdentityDetails.middleName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, this.registry.signatoryPersonIdentityDetails.middleName]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_338, [
                  vue.createElementVNode("div", _hoisted_339, [
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
              vue.createElementVNode("div", _hoisted_340, [
                vue.createElementVNode("div", _hoisted_341, [
                  vue.createElementVNode("div", _hoisted_342, [
                    vue.createElementVNode("div", _hoisted_343, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[107] || (_cache[107] = $event => ((this.registry.signatoryPersonIdentityDetails.mobilePhone) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.mobilePhone]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_344, [
                    vue.createElementVNode("div", _hoisted_345, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[108] || (_cache[108] = $event => ((this.registry.signatoryPersonIdentityDetails.fax) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.fax]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_346, [
                    vue.createElementVNode("div", _hoisted_347, [
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
                vue.createElementVNode("div", _hoisted_348, [
                  vue.createElementVNode("div", _hoisted_349, [
                    vue.createElementVNode("div", _hoisted_350, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[110] || (_cache[110] = $event => ((this.registry.signatoryPersonIdentityDetails.appealDocumentDate) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.appealDocumentDate]
                      ])
                    ])
                  ]),
                  _hoisted_351
                ])
              ]),
              vue.createElementVNode("div", _hoisted_352, [
                _hoisted_353,
                vue.createElementVNode("div", _hoisted_354, [
                  vue.createElementVNode("div", _hoisted_355, [
                    vue.createElementVNode("div", _hoisted_356, [
                      vue.createElementVNode("div", _hoisted_357, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[111] || (_cache[111] = $event => ((this.registry.signatoryPersonIdentityDetails.countyCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.signatoryPersonIdentityDetails.countyCode]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_358, [
                      vue.createElementVNode("div", _hoisted_359, [
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
                  vue.createElementVNode("div", _hoisted_360, [
                    vue.createElementVNode("div", _hoisted_361, [
                      vue.createElementVNode("div", _hoisted_362, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[113] || (_cache[113] = $event => ((this.registry.signatoryPersonIdentityDetails.documentSeries) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentSeries]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_363, [
                      vue.createElementVNode("div", _hoisted_364, [
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
                  vue.createElementVNode("div", _hoisted_365, [
                    vue.createElementVNode("div", _hoisted_366, [
                      vue.createElementVNode("div", _hoisted_367, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[115] || (_cache[115] = $event => ((this.registry.signatoryPersonIdentityDetails.documentReleaseDate) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentReleaseDate]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_368, [
                      vue.createElementVNode("div", _hoisted_369, [
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
                  vue.createElementVNode("div", _hoisted_370, [
                    _hoisted_371,
                    vue.createElementVNode("div", _hoisted_372, [
                      vue.createElementVNode("div", _hoisted_373, [
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
                vue.createElementVNode("div", _hoisted_374, [
                  vue.createElementVNode("div", _hoisted_375, [
                    vue.createElementVNode("div", _hoisted_376, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[118] || (_cache[118] = $event => ((this.registry.signatoryPersonIdentityDetails.fullDocumentType) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.fullDocumentType]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_377, [
                    vue.createElementVNode("div", _hoisted_378, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[119] || (_cache[119] = $event => ((this.registry.signatoryPersonIdentityDetails.issuedBy) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.issuedBy]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_379, [
                    vue.createElementVNode("div", _hoisted_380, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[120] || (_cache[120] = $event => ((this.registry.signatoryPersonIdentityDetails.divisionCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.divisionCode]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_381, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[121] || (_cache[121] = $event => ((this.registry.signatoryPersonIdentityDetails.countryIdString) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, this.registry.signatoryPersonIdentityDetails.countryIdString]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_382, [
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
              vue.createElementVNode("div", _hoisted_383, [
                vue.createElementVNode("div", _hoisted_384, [
                  _hoisted_385,
                  vue.createElementVNode("div", _hoisted_386, [
                    vue.createElementVNode("div", _hoisted_387, [
                      vue.createElementVNode("div", _hoisted_388, [
                        vue.createElementVNode("div", _hoisted_389, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[123] || (_cache[123] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeId) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.signatoryPersonIdentityDetails.documentModeId]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_390, [
                        vue.createElementVNode("div", _hoisted_391, [
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
                    vue.createElementVNode("div", _hoisted_392, [
                      vue.createElementVNode("div", _hoisted_393, [
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
              vue.createElementVNode("div", _hoisted_394, [
                _hoisted_395,
                vue.createElementVNode("div", _hoisted_396, [
                  vue.createElementVNode("div", _hoisted_397, [
                    vue.createElementVNode("div", _hoisted_398, [
                      vue.createElementVNode("div", _hoisted_399, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[126] || (_cache[126] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_400, [
                      vue.createElementVNode("div", _hoisted_401, [
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
                  vue.createElementVNode("div", _hoisted_402, [
                    vue.createElementVNode("div", _hoisted_403, [
                      vue.createElementVNode("div", _hoisted_404, [
                        vue.createElementVNode("div", _hoisted_405, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[128] || (_cache[128] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_406, [
                        vue.createElementVNode("div", _hoisted_407, [
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
                    vue.createElementVNode("div", _hoisted_408, [
                      vue.createElementVNode("div", _hoisted_409, [
                        _hoisted_410,
                        vue.createElementVNode("div", _hoisted_411, [
                          vue.createElementVNode("div", _hoisted_412, [
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
                      vue.createElementVNode("div", _hoisted_413, [
                        _hoisted_414,
                        vue.createElementVNode("div", _hoisted_415, [
                          vue.createElementVNode("div", _hoisted_416, [
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
                      vue.createElementVNode("div", _hoisted_417, [
                        vue.createElementVNode("div", _hoisted_418, [
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
    vue.createElementVNode("div", _hoisted_419, [
      vue.createElementVNode("div", _hoisted_420, [
        vue.createElementVNode("div", _hoisted_421, [
          _hoisted_422,
          vue.createElementVNode("div", _hoisted_423, [
            vue.withDirectives(vue.createElementVNode("input", {
              class: "form-control",
              type: "text",
              "onUpdate:modelValue": _cache[133] || (_cache[133] = $event => ((this.registry.inspectorFullName) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [vue.vModelText, this.registry.inspectorFullName]
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_424, [
          _hoisted_425,
          vue.createElementVNode("div", _hoisted_426, [
            vue.createElementVNode("div", _hoisted_427, [
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
}

script$8.render = render$8;
script$8.__file = "src/components/Form/GeneralDeclaration.vue";

var script$7 = {
  name: "TsoftGoodsAwbInformationForm",
  data() {
    return {
      isGoodsOpen: false,
      isOrderOpen: false
    };
  },
  props: {
    order: {
      type: Object,
      required: true
    },
    orderNum: {
      required: true
    },
    goods: {
      type: Object,
      required: true
    }
  }
};

const _hoisted_1$7 = { class: "order" };
const _hoisted_2$7 = { class: "arrow" };
const _hoisted_3$6 = { class: "product-batch" };
const _hoisted_4$4 = /*#__PURE__*/vue.createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\"><h4 class=\"col-4\">Сведения о товарной партии</h4><div class=\"product-batch-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-minus\"></i></button></div><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div></div></div>", 1);
const _hoisted_5$5 = { class: "product-inner-block" };
const _hoisted_6$4 = { class: "row" };
const _hoisted_7$4 = { class: "row" };
const _hoisted_8$4 = { class: "col-9" };
const _hoisted_9$4 = { action: "" };
const _hoisted_10$3 = { class: "d-flex" };
const _hoisted_11$3 = { class: "col-3 d-flex" };
const _hoisted_12$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Общая накладная")
], -1 /* HOISTED */);
const _hoisted_13$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_14$2 = { class: "input-bg col-5" };
const _hoisted_15$2 = { class: "col-4" };
const _hoisted_16$2 = { class: "input-bg" };
const _hoisted_17$2 = { class: "col-3" };
const _hoisted_18$2 = { class: "input-bg" };
const _hoisted_19$2 = { class: "col-2" };
const _hoisted_20$2 = { class: "input-bg" };
const _hoisted_21$2 = { class: "d-flex my-2" };
const _hoisted_22$2 = { class: "col-3 d-flex" };
const _hoisted_23$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Инд. накладная")
], -1 /* HOISTED */);
const _hoisted_24$2 = { class: "col-2" };
const _hoisted_25$2 = { class: "input-bg" };
const _hoisted_26$2 = { class: "input-bg col-4" };
const _hoisted_27$2 = { class: "col-4" };
const _hoisted_28$2 = { class: "input-bg" };
const _hoisted_29$2 = { class: "col-3" };
const _hoisted_30$2 = { class: "input-bg" };
const _hoisted_31$2 = { class: "col-2" };
const _hoisted_32$2 = { class: "input-bg" };
const _hoisted_33$2 = { class: "row my-3" };
const _hoisted_34$2 = { class: "col-4" };
const _hoisted_35$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1" }, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_36$2 = { class: "d-flex" };
const _hoisted_37$2 = { class: "col-6" };
const _hoisted_38$2 = { class: "input-bg" };
const _hoisted_39$2 = { class: "col-6 d-flex" };
const _hoisted_40$2 = { class: "col-7" };
const _hoisted_41$2 = { class: "input-bg" };
const _hoisted_42$2 = { class: "col-5" };
const _hoisted_43$2 = { class: "input-bg" };
const _hoisted_44$2 = { class: "col-4" };
const _hoisted_45$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1" }, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_46$2 = { class: "d-flex" };
const _hoisted_47$2 = { class: "col-8" };
const _hoisted_48$2 = { class: "input-bg" };
const _hoisted_49$2 = { class: "col-4 d-flex" };
const _hoisted_50$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_51$2 = { class: "col-10" };
const _hoisted_52$2 = { class: "input-bg" };
const _hoisted_53$2 = { class: "col-4" };
const _hoisted_54$2 = /*#__PURE__*/vue.createElementVNode("h5", { class: "align-bcntr my-1 fs-12" }, " Общая стоимость по инд. накладной ", -1 /* HOISTED */);
const _hoisted_55$2 = { class: "d-flex" };
const _hoisted_56$2 = { class: "col-9" };
const _hoisted_57$2 = { class: "input-bg" };
const _hoisted_58$2 = { class: "col-3 d-flex" };
const _hoisted_59$2 = { class: "col-12" };
const _hoisted_60$2 = { class: "input-bg" };
const _hoisted_61$2 = { class: "row align-items-end" };
const _hoisted_62$2 = { class: "col-8 d-flex" };
const _hoisted_63$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3 d-flex align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Интернет-магазин")
], -1 /* HOISTED */);
const _hoisted_64$2 = { class: "col-7" };
const _hoisted_65$2 = { class: "input-bg" };
const _hoisted_66$2 = { class: "col-2 d-flex" };
const _hoisted_67$2 = { class: "col-7 d-flex" };
const _hoisted_68$2 = { class: "input-bg" };
const _hoisted_69$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/vue.createElementVNode("button", { class: "btn new-window-button" }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-pager" })
  ])
], -1 /* HOISTED */);
const _hoisted_70$2 = { class: "col-4" };
const _hoisted_71$2 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Номер мешка/места", -1 /* HOISTED */);
const _hoisted_72$2 = { class: "input-bg" };
const _hoisted_73$2 = { class: "col-3" };
const _hoisted_74$2 = { class: "batch-info-anchors" };
const _hoisted_75$2 = /*#__PURE__*/vue.createTextVNode(" Сведения о товарах в накладной ");
const _hoisted_76$2 = /*#__PURE__*/vue.createTextVNode(" Сведения о там.сборе накладной ");
const _hoisted_77$2 = /*#__PURE__*/vue.createTextVNode(" Суммы пошлин и налогов накладной ");
const _hoisted_78$2 = /*#__PURE__*/vue.createTextVNode(" Исчисление там.пошлин, налогов ");
const _hoisted_79$2 = { class: "inf-block changing-code row" };
const _hoisted_80$2 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_81$2 = { class: "col-10 d-flex w-100" };
const _hoisted_82$2 = { class: "col input-bg" };
const _hoisted_83$2 = { class: "col input-bg" };
const _hoisted_84$2 = { class: "col input-bg" };
const _hoisted_85$2 = { class: "col input-bg" };
const _hoisted_86$2 = { class: "col input-bg" };
const _hoisted_87$1 = { class: "col input-bg" };
const _hoisted_88$1 = { class: "col input-bg" };
const _hoisted_89$1 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_90$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_91$1 = /*#__PURE__*/vue.createTextVNode(" Открыть исходную Инд. накладную ");
const _hoisted_92$1 = { class: "row" };
const _hoisted_93$1 = { class: "my-2" };
const _hoisted_94$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Решение по инд. накладной", -1 /* HOISTED */);
const _hoisted_95$1 = { class: "d-flex" };
const _hoisted_96$1 = { class: "col-9" };
const _hoisted_97$1 = { class: "input-bg" };
const _hoisted_98$1 = { class: "col-3" };
const _hoisted_99$1 = { class: "input-bg" };
const _hoisted_100$1 = { class: "d-flex" };
const _hoisted_101$1 = { class: "col-7" };
const _hoisted_102$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr fs-5" }, "Причина отказа", -1 /* HOISTED */);
const _hoisted_103$1 = { class: "input-bg" };
const _hoisted_104$1 = { class: "col-5" };
const _hoisted_105$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr fs-5" }, "Уникальный идентификатор партии", -1 /* HOISTED */);
const _hoisted_106$1 = { class: "col input-bg" };
const _hoisted_107 = { class: "sender-personal-inf mt-4" };
const _hoisted_108 = { class: "row" };
const _hoisted_109 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedBatchSender",
  "aria-expanded": "false",
  "aria-controls": "collapsedBatchSender"
}, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/vue.createElementVNode("span", null, "Отправитель по индивидуальной накладной"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-caret-up" })
  ])
], -1 /* HOISTED */);
const _hoisted_110 = {
  class: "collapse",
  id: "collapsedBatchSender"
};
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
const _hoisted_193 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedBatchRecipient",
  "aria-expanded": "false",
  "aria-controls": "collapsedBatchRecipient"
}, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/vue.createElementVNode("span", null, "Получатель по индивидуальной накладной"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-caret-up" })
  ])
], -1 /* HOISTED */);
const _hoisted_194 = {
  class: "collapse",
  id: "collapsedBatchRecipient"
};
const _hoisted_195 = { class: "card card-body" };
const _hoisted_196 = { class: "row" };
const _hoisted_197 = { class: "recipient-name" };
const _hoisted_198 = { class: "row form my-2" };
const _hoisted_199 = { class: "col-8" };
const _hoisted_200 = { class: "input-bg" };
const _hoisted_201 = { class: "col-1" };
const _hoisted_202 = { class: "input-bg" };
const _hoisted_203 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_204 = { class: "col-2 d-flex" };
const _hoisted_205 = { class: "input-bg col-2" };
const _hoisted_206 = ["checked"];
const _hoisted_207 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_208 = { class: "row my-2" };
const _hoisted_209 = { class: "col-6 d-flex justify-content-between" };
const _hoisted_210 = { class: "col-4 d-flex" };
const _hoisted_211 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-1" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_212 = { class: "input-bg col-9" };
const _hoisted_213 = { class: "col-4 d-flex" };
const _hoisted_214 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_215 = { class: "input-bg col-9" };
const _hoisted_216 = { class: "col-4 d-flex" };
const _hoisted_217 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/vue.createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_218 = { class: "input-bg col-9" };
const _hoisted_219 = { class: "col-6 d-flex" };
const _hoisted_220 = { class: "input-bg col-6" };
const _hoisted_221 = { class: "input-bg col-6" };
const _hoisted_222 = { class: "row" };
const _hoisted_223 = { class: "recipient-address" };
const _hoisted_224 = /*#__PURE__*/vue.createElementVNode("div", { class: "row my-2" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "d-flex recipient-contacts" }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "col-1 d-flex" }, [
      /*#__PURE__*/vue.createElementVNode("p", { class: "point-name" }, "Адрес:")
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_225 = { class: "row my-2" };
const _hoisted_226 = { class: "address-block" };
const _hoisted_227 = { class: "row my-2" };
const _hoisted_228 = { class: "col-1" };
const _hoisted_229 = { class: "input-bg" };
const _hoisted_230 = { class: "col-4" };
const _hoisted_231 = { class: "input-bg" };
const _hoisted_232 = { class: "col-2" };
const _hoisted_233 = { class: "input-bg" };
const _hoisted_234 = { class: "col-5" };
const _hoisted_235 = { class: "input-bg" };
const _hoisted_236 = { class: "row my-2" };
const _hoisted_237 = { class: "col-5" };
const _hoisted_238 = { class: "input-bg" };
const _hoisted_239 = { class: "col-3" };
const _hoisted_240 = { class: "input-bg" };
const _hoisted_241 = { class: "col-4" };
const _hoisted_242 = { class: "input-bg" };
const _hoisted_243 = { class: "row my-2" };
const _hoisted_244 = { class: "col-4" };
const _hoisted_245 = { class: "input-bg" };
const _hoisted_246 = { class: "col-2" };
const _hoisted_247 = { class: "input-bg" };
const _hoisted_248 = { class: "col-2" };
const _hoisted_249 = { class: "input-bg" };
const _hoisted_250 = { class: "col-2" };
const _hoisted_251 = { class: "input-bg" };
const _hoisted_252 = { class: "row my-2" };
const _hoisted_253 = { class: "col-12" };
const _hoisted_254 = { class: "input-bg" };
const _hoisted_255 = { class: "row" };
const _hoisted_256 = { class: "personal-inf-block" };
const _hoisted_257 = /*#__PURE__*/vue.createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
const _hoisted_258 = { class: "row my-2" };
const _hoisted_259 = { class: "row personal-data my-2" };
const _hoisted_260 = { class: "col-1" };
const _hoisted_261 = { class: "input-bg" };
const _hoisted_262 = { class: "col-2" };
const _hoisted_263 = { class: "input-bg" };
const _hoisted_264 = { class: "col-2" };
const _hoisted_265 = { class: "input-bg" };
const _hoisted_266 = { class: "col-5 d-flex" };
const _hoisted_267 = { class: "input-bg col-4" };
const _hoisted_268 = { class: "input-bg col-4" };
const _hoisted_269 = { class: "input-bg col-4" };
const _hoisted_270 = { class: "col-2" };
const _hoisted_271 = { class: "input-bg" };
const _hoisted_272 = { class: "row" };
const _hoisted_273 = { class: "col-8" };
const _hoisted_274 = { class: "input-bg" };
const _hoisted_275 = { class: "goods" };
const _hoisted_276 = /*#__PURE__*/vue.createElementVNode("p", null, "Товары", -1 /* HOISTED */);
const _hoisted_277 = { class: "arrow" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_tsoft_good_information_form = vue.resolveComponent("tsoft-good-information-form");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
    vue.createElementVNode("div", {
      class: "group-panel-label",
      onClick: _cache[0] || (_cache[0] = $event => ($data.isOrderOpen= !$data.isOrderOpen))
    }, [
      vue.createElementVNode("p", null, "Товарная партия " + vue.toDisplayString($props.orderNum), 1 /* TEXT */),
      vue.createElementVNode("div", _hoisted_2$7, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrderOpen}])
        }, null, 2 /* CLASS */)
      ])
    ]),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["group-panel-content", {'open': $data.isOrderOpen}])
    }, [
      vue.createElementVNode("div", _hoisted_3$6, [
        vue.createCommentVNode("Region элемент хэдера блока с кнопками"),
        _hoisted_4$4,
        vue.createCommentVNode("endregion"),
        vue.createCommentVNode("Region элемент с информацией о партии, индивидуальной информацией об отправителе, с информацией о получателе"),
        vue.createElementVNode("div", _hoisted_5$5, [
          vue.createCommentVNode("Region элемент с общей информацией о партии"),
          vue.createElementVNode("div", _hoisted_6$4, [
            vue.createElementVNode("div", _hoisted_7$4, [
              vue.createElementVNode("div", _hoisted_8$4, [
                vue.createElementVNode("form", _hoisted_9$4, [
                  vue.createElementVNode("div", _hoisted_10$3, [
                    vue.createElementVNode("div", _hoisted_11$3, [
                      _hoisted_12$3,
                      _hoisted_13$3,
                      vue.createElementVNode("div", _hoisted_14$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.order.general.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.code]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_15$2, [
                      vue.createElementVNode("div", _hoisted_16$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.order.general.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.type]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_17$2, [
                      vue.createElementVNode("div", _hoisted_18$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.order.general.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.general.document.num]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_19$2, [
                      vue.createElementVNode("div", _hoisted_20$2, [
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
                  vue.createElementVNode("div", _hoisted_21$2, [
                    vue.createElementVNode("div", _hoisted_22$2, [
                      _hoisted_23$2,
                      vue.createElementVNode("div", _hoisted_24$2, [
                        vue.createElementVNode("div", _hoisted_25$2, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.order.personal.document.count) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.order.personal.document.count]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_26$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.order.personal.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.code]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_27$2, [
                      vue.createElementVNode("div", _hoisted_28$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.order.personal.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.type]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_29$2, [
                      vue.createElementVNode("div", _hoisted_30$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.order.personal.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.personal.document.num]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_31$2, [
                      vue.createElementVNode("div", _hoisted_32$2, [
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
                  vue.createElementVNode("div", _hoisted_33$2, [
                    vue.createElementVNode("div", _hoisted_34$2, [
                      _hoisted_35$2,
                      vue.createElementVNode("div", _hoisted_36$2, [
                        vue.createElementVNode("div", _hoisted_37$2, [
                          vue.createElementVNode("div", _hoisted_38$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.order.general.grossWeight) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.grossWeight]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_39$2, [
                          vue.createElementVNode("div", _hoisted_40$2, [
                            vue.createElementVNode("div", _hoisted_41$2, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.order.general.grossWeightUnit) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.general.grossWeightUnit]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_42$2, [
                            vue.createElementVNode("div", _hoisted_43$2, [
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
                    vue.createElementVNode("div", _hoisted_44$2, [
                      _hoisted_45$2,
                      vue.createElementVNode("div", _hoisted_46$2, [
                        vue.createElementVNode("div", _hoisted_47$2, [
                          vue.createElementVNode("div", _hoisted_48$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_49$2, [
                          _hoisted_50$2,
                          vue.createElementVNode("div", _hoisted_51$2, [
                            vue.createElementVNode("div", _hoisted_52$2, [
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
                    vue.createElementVNode("div", _hoisted_53$2, [
                      _hoisted_54$2,
                      vue.createElementVNode("div", _hoisted_55$2, [
                        vue.createElementVNode("div", _hoisted_56$2, [
                          vue.createElementVNode("div", _hoisted_57$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_58$2, [
                          vue.createElementVNode("div", _hoisted_59$2, [
                            vue.createElementVNode("div", _hoisted_60$2, [
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
                  vue.createElementVNode("div", _hoisted_61$2, [
                    vue.createElementVNode("div", _hoisted_62$2, [
                      _hoisted_63$2,
                      vue.createElementVNode("div", _hoisted_64$2, [
                        vue.createElementVNode("div", _hoisted_65$2, [
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.order.internetMarketUrl) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vue.vModelText, $props.order.internetMarketUrl]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_66$2, [
                        vue.createElementVNode("div", _hoisted_67$2, [
                          vue.createElementVNode("div", _hoisted_68$2, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.order.internetMarketUnknown) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.internetMarketUnknown]
                            ])
                          ])
                        ]),
                        _hoisted_69$2
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_70$2, [
                      _hoisted_71$2,
                      vue.createElementVNode("div", _hoisted_72$2, [
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
              vue.createElementVNode("div", _hoisted_73$2, [
                vue.createElementVNode("div", _hoisted_74$2, [
                  vue.createVNode(_component_router_link, {
                    to: { name: 'index' },
                    id: "productsInfoLink"
                  }, {
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
                  vue.createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: vue.withCtx(() => [
                      _hoisted_78$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  vue.createElementVNode("div", _hoisted_79$2, [
                    _hoisted_80$2,
                    vue.createElementVNode("div", _hoisted_81$2, [
                      vue.createElementVNode("div", _hoisted_82$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.order.changeDetailsType.stageChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.stageChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_83$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.order.changeDetailsType.reasonChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.reasonChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_84$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.order.changeDetailsType.quantityChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.quantityChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_85$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.order.changeDetailsType.TNVEDChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.TNVEDChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_86$2, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.order.changeDetailsType.customsCostChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.customsCostChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_87$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.order.changeDetailsType.customsPaymentChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.customsPaymentChangeCode]
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_88$1, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.order.changeDetailsType.otherChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.order.changeDetailsType.otherChangeCode]
                        ])
                      ]),
                      _hoisted_89$1
                    ]),
                    _hoisted_90$1
                  ]),
                  vue.createVNode(_component_router_link, {
                    to: { name: 'index' },
                    class: "my-4"
                  }, {
                    default: vue.withCtx(() => [
                      _hoisted_91$1
                    ]),
                    _: 1 /* STABLE */
                  })
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_92$1, [
              vue.createElementVNode("div", _hoisted_93$1, [
                _hoisted_94$1,
                vue.createElementVNode("div", _hoisted_95$1, [
                  vue.createElementVNode("div", _hoisted_96$1, [
                    vue.createElementVNode("div", _hoisted_97$1, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.order.personal.invoiceDecision) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.order.personal.invoiceDecision]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_98$1, [
                    vue.createElementVNode("div", _hoisted_99$1, [
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
              vue.createElementVNode("div", _hoisted_100$1, [
                vue.createElementVNode("div", _hoisted_101$1, [
                  _hoisted_102$1,
                  vue.createElementVNode("div", _hoisted_103$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.order.orderRejectReason) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.order.orderRejectReason]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_104$1, [
                  _hoisted_105$1,
                  vue.createElementVNode("div", _hoisted_106$1, [
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
          vue.createElementVNode("div", _hoisted_107, [
            vue.createElementVNode("div", _hoisted_108, [
              _hoisted_109,
              vue.createElementVNode("div", _hoisted_110, [
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
                              "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($props.order.consignor.fullName) = $event))
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
                              "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => (($props.order.consignor.countryCode) = $event))
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
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => (($props.order.consignor.OGRN) = $event))
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
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => (($props.order.consignor.INN) = $event))
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
                                "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => (($props.order.consignor.KPP) = $event))
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
                              "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => (($props.order.consignor.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignor.phone]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_137, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => (($props.order.consignor.email) = $event))
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
                                  "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => (($props.order.consignor.language) = $event))
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
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => (($props.order.consignor.country) = $event))
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
                                  "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => (($props.order.consignor.mailIndex) = $event))
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
                                  "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => (($props.order.consignor.region) = $event))
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
                                  "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => (($props.order.consignor.area) = $event))
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
                                  "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => (($props.order.consignor.city) = $event))
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
                                  "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => (($props.order.consignor.settlement) = $event))
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
                                  "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => (($props.order.consignor.address) = $event))
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
                                  "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => (($props.order.consignor.house) = $event))
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
                                  "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => (($props.order.consignor.office) = $event))
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
                                  "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => (($props.order.consignor.officeLetter) = $event))
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
                                  "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => (($props.order.consignor.fullAddress) = $event))
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
                                "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => (($props.order.consignor.document.country) = $event))
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
                                "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => (($props.order.consignor.document.code) = $event))
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
                                "onUpdate:modelValue": _cache[52] || (_cache[52] = $event => (($props.order.consignor.document.shortName) = $event))
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
                                "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => (($props.order.consignor.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.series]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_184, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[54] || (_cache[54] = $event => (($props.order.consignor.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignor.document.num]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_185, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[55] || (_cache[55] = $event => (($props.order.consignor.document.dateRelease) = $event))
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
                                "onUpdate:modelValue": _cache[56] || (_cache[56] = $event => (($props.order.consignor.document.divisionCode) = $event))
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
                                "onUpdate:modelValue": _cache[57] || (_cache[57] = $event => (($props.order.consignor.document.issuedBy) = $event))
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
              ])
            ])
          ]),
          vue.createCommentVNode("endregion"),
          vue.createCommentVNode("Region элемент с индивидуальной информацией о получателе"),
          vue.createElementVNode("div", _hoisted_191, [
            vue.createElementVNode("div", _hoisted_192, [
              _hoisted_193,
              vue.createElementVNode("div", _hoisted_194, [
                vue.createElementVNode("div", _hoisted_195, [
                  vue.createElementVNode("div", _hoisted_196, [
                    vue.createElementVNode("div", _hoisted_197, [
                      vue.createElementVNode("form", _hoisted_198, [
                        vue.createElementVNode("div", _hoisted_199, [
                          vue.createElementVNode("div", _hoisted_200, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "",
                              "onUpdate:modelValue": _cache[58] || (_cache[58] = $event => (($props.order.consignee.fullName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.fullName]
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_201, [
                          vue.createElementVNode("div", _hoisted_202, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[59] || (_cache[59] = $event => (($props.order.consignee.countryCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.countryCode]
                            ])
                          ])
                        ]),
                        _hoisted_203,
                        vue.createElementVNode("div", _hoisted_204, [
                          vue.createElementVNode("div", _hoisted_205, [
                            vue.createElementVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              checked: $props.order.consignee.isDeclarant
                            }, null, 8 /* PROPS */, _hoisted_206)
                          ]),
                          _hoisted_207
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_208, [
                        vue.createElementVNode("div", _hoisted_209, [
                          vue.createElementVNode("div", _hoisted_210, [
                            _hoisted_211,
                            vue.createElementVNode("div", _hoisted_212, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => (($props.order.consignee.OGRN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.OGRN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_213, [
                            _hoisted_214,
                            vue.createElementVNode("div", _hoisted_215, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[61] || (_cache[61] = $event => (($props.order.consignee.INN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.INN]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_216, [
                            _hoisted_217,
                            vue.createElementVNode("div", _hoisted_218, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[62] || (_cache[62] = $event => (($props.order.consignee.KPP) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.KPP]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_219, [
                          vue.createElementVNode("div", _hoisted_220, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "номер телефона",
                              "onUpdate:modelValue": _cache[63] || (_cache[63] = $event => (($props.order.consignee.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.phone]
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_221, [
                            vue.withDirectives(vue.createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[64] || (_cache[64] = $event => (($props.order.consignee.email) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vue.vModelText, $props.order.consignee.email]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_222, [
                    vue.createElementVNode("div", _hoisted_223, [
                      _hoisted_224,
                      vue.createElementVNode("div", _hoisted_225, [
                        vue.createElementVNode("div", _hoisted_226, [
                          vue.createElementVNode("div", _hoisted_227, [
                            vue.createElementVNode("div", _hoisted_228, [
                              vue.createElementVNode("div", _hoisted_229, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "язык",
                                  "onUpdate:modelValue": _cache[65] || (_cache[65] = $event => (($props.order.consignee.language) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.language]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_230, [
                              vue.createElementVNode("div", _hoisted_231, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "страна",
                                  "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => (($props.order.consignee.country) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.country]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_232, [
                              vue.createElementVNode("div", _hoisted_233, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "почтовый индекс",
                                  "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => (($props.order.consignee.mailIndex) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.mailIndex]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_234, [
                              vue.createElementVNode("div", _hoisted_235, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "область (регион, штат, провинция)",
                                  "onUpdate:modelValue": _cache[68] || (_cache[68] = $event => (($props.order.consignee.region) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.region]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_236, [
                            vue.createElementVNode("div", _hoisted_237, [
                              vue.createElementVNode("div", _hoisted_238, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "район",
                                  "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => (($props.order.consignee.area) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.area]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_239, [
                              vue.createElementVNode("div", _hoisted_240, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "город",
                                  "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => (($props.order.consignee.city) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.city]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_241, [
                              vue.createElementVNode("div", _hoisted_242, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "населённый пункт",
                                  "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => (($props.order.consignee.settlement) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.settlement]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_243, [
                            vue.createElementVNode("div", _hoisted_244, [
                              vue.createElementVNode("div", _hoisted_245, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "улица",
                                  "onUpdate:modelValue": _cache[72] || (_cache[72] = $event => (($props.order.consignee.address) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.address]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_246, [
                              vue.createElementVNode("div", _hoisted_247, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "дом, корпус, строение",
                                  "onUpdate:modelValue": _cache[73] || (_cache[73] = $event => (($props.order.consignee.house) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.house]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_248, [
                              vue.createElementVNode("div", _hoisted_249, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "офис/квартира",
                                  "onUpdate:modelValue": _cache[74] || (_cache[74] = $event => (($props.order.consignee.office) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.office]
                                ])
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_250, [
                              vue.createElementVNode("div", _hoisted_251, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "номер а/я",
                                  "onUpdate:modelValue": _cache[75] || (_cache[75] = $event => (($props.order.consignee.officeLetter) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vue.vModelText, $props.order.consignee.officeLetter]
                                ])
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_252, [
                            vue.createElementVNode("div", _hoisted_253, [
                              vue.createElementVNode("div", _hoisted_254, [
                                vue.withDirectives(vue.createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                  "onUpdate:modelValue": _cache[76] || (_cache[76] = $event => (($props.order.consignee.fullAddress) = $event))
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
                  vue.createElementVNode("div", _hoisted_255, [
                    vue.createElementVNode("div", _hoisted_256, [
                      _hoisted_257,
                      vue.createElementVNode("div", _hoisted_258, [
                        vue.createElementVNode("div", _hoisted_259, [
                          vue.createElementVNode("div", _hoisted_260, [
                            vue.createElementVNode("div", _hoisted_261, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "стр",
                                "onUpdate:modelValue": _cache[77] || (_cache[77] = $event => (($props.order.consignee.document.country) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.country]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_262, [
                            vue.createElementVNode("div", _hoisted_263, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "код вида",
                                "onUpdate:modelValue": _cache[78] || (_cache[78] = $event => (($props.order.consignee.document.code) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.code]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_264, [
                            vue.createElementVNode("div", _hoisted_265, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "краткое наименование",
                                "onUpdate:modelValue": _cache[79] || (_cache[79] = $event => (($props.order.consignee.document.shortName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.shortName]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_266, [
                            vue.createElementVNode("div", _hoisted_267, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "серия",
                                "onUpdate:modelValue": _cache[80] || (_cache[80] = $event => (($props.order.consignee.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.series]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_268, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[81] || (_cache[81] = $event => (($props.order.consignee.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.num]
                              ])
                            ]),
                            vue.createElementVNode("div", _hoisted_269, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => (($props.order.consignee.document.dateRelease) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.dateRelease]
                              ])
                            ])
                          ]),
                          vue.createElementVNode("div", _hoisted_270, [
                            vue.createElementVNode("div", _hoisted_271, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Код подразделения",
                                "onUpdate:modelValue": _cache[83] || (_cache[83] = $event => (($props.order.consignee.document.divisionCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vue.vModelText, $props.order.consignee.document.divisionCode]
                              ])
                            ])
                          ])
                        ]),
                        vue.createElementVNode("div", _hoisted_272, [
                          vue.createElementVNode("div", _hoisted_273, [
                            vue.createElementVNode("div", _hoisted_274, [
                              vue.withDirectives(vue.createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "наименование организации, выдавшей документ",
                                "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => (($props.order.consignee.document.issuedBy) = $event))
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
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_275, [
        vue.createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[85] || (_cache[85] = $event => ($data.isGoodsOpen= !$data.isGoodsOpen))
        }, [
          _hoisted_276,
          vue.createElementVNode("div", _hoisted_277, [
            vue.createElementVNode("span", {
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

script$7.render = render$7;
script$7.__file = "src/components/Form/GoodsAwbInformation.vue";

var script$6 = {
  name: "TsoftAdditionalDocumentForm",
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};

const _hoisted_1$6 = {
  class: "optional-inf-block mt-2",
  id: "extraDocBlock"
};
const _hoisted_2$6 = /*#__PURE__*/vue.createStaticVNode("<div class=\"d-flex optional-inf-header justify-content-between\"><h4 class=\"col-4\">Сведения о дополнительном документе</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-minus\" id=\"collapseButton2\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-2Inner\" aria-expanded=\"true\" aria-controls=\"product-2Inner\"><i class=\"fa-solid fa-sort-down\"></i></button></div></div></div>", 1);
const _hoisted_3$5 = {
  class: "product-inner-block collapse",
  id: "product-2Inner"
};
const _hoisted_4$3 = { class: "optional-inf-card" };
const _hoisted_5$4 = { class: "row" };
const _hoisted_6$3 = { class: "d-flex" };
const _hoisted_7$3 = { class: "col-5 d-flex" };
const _hoisted_8$3 = { class: "col-3 d-flex" };
const _hoisted_9$3 = { class: "col-8" };
const _hoisted_10$2 = { class: "input-bg" };
const _hoisted_11$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "fs-5 my-0" }, "/")
], -1 /* HOISTED */);
const _hoisted_12$2 = { class: "col-3" };
const _hoisted_13$2 = { class: "input-bg" };
const _hoisted_14$1 = { class: "col-9 ps-2" };
const _hoisted_15$1 = { class: "input-bg" };
const _hoisted_16$1 = { class: "col-7 row" };
const _hoisted_17$1 = { class: "col-2" };
const _hoisted_18$1 = { class: "input-bg" };
const _hoisted_19$1 = { class: "col-3 d-flex" };
const _hoisted_20$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "от", -1 /* HOISTED */);
const _hoisted_21$1 = { class: "input-bg" };
const _hoisted_22$1 = { class: "col-3 d-flex" };
const _hoisted_23$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "с", -1 /* HOISTED */);
const _hoisted_24$1 = { class: "input-bg" };
const _hoisted_25$1 = { class: "col-3 d-flex" };
const _hoisted_26$1 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr pe-1" }, "по", -1 /* HOISTED */);
const _hoisted_27$1 = { class: "input-bg" };
const _hoisted_28$1 = { class: "col-1" };
const _hoisted_29$1 = { class: "input-bg" };
const _hoisted_30$1 = { class: "row mt-3" };
const _hoisted_31$1 = { class: "d-flex" };
const _hoisted_32$1 = { class: "col-5 d-flex" };
const _hoisted_33$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"col-2\"><div class=\"row pe-4\"><div class=\"col-6\"><button class=\"btn\"><i class=\"fa-solid fa-bolt-lightning\"></i></button></div><div class=\"col-6\"><button class=\"btn\"><i class=\"fa-solid fa-folder-open\"></i></button></div></div><div class=\"row\"></div></div>", 1);
const _hoisted_34$1 = { class: "col-10 d-flex" };
const _hoisted_35$1 = { class: "col-8" };
const _hoisted_36$1 = { class: "input-bg" };
const _hoisted_37$1 = { class: "col-4" };
const _hoisted_38$1 = { class: "input-bg" };
const _hoisted_39$1 = { class: "col-7 d-flex" };
const _hoisted_40$1 = { class: "col-4" };
const _hoisted_41$1 = { class: "input-bg" };
const _hoisted_42$1 = { class: "col-5" };
const _hoisted_43$1 = { class: "input-bg" };
const _hoisted_44$1 = { class: "col-3" };
const _hoisted_45$1 = { class: "input-bg" };
const _hoisted_46$1 = { class: "row justify-content-center mt-2" };
const _hoisted_47$1 = { class: "col-11" };
const _hoisted_48$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, " Сведения о фактическом представлении документа ")
], -1 /* HOISTED */);
const _hoisted_49$1 = { class: "d-flex" };
const _hoisted_50$1 = { class: "col-2 d-flex" };
const _hoisted_51$1 = { class: "input-bg col-4" };
const _hoisted_52$1 = { class: "input-bg col-8" };
const _hoisted_53$1 = { class: "col-5 d-flex" };
const _hoisted_54$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "col-1 align-bcntr" }, "ДТ")
], -1 /* HOISTED */);
const _hoisted_55$1 = { class: "col-3" };
const _hoisted_56$1 = { class: "input-bg" };
const _hoisted_57$1 = { class: "col-4" };
const _hoisted_58$1 = { class: "input-bg" };
const _hoisted_59$1 = { class: "col-3" };
const _hoisted_60$1 = { class: "input-bg" };
const _hoisted_61$1 = { class: "col-1" };
const _hoisted_62$1 = { class: "input-bg" };
const _hoisted_63$1 = { class: "col-5 d-flex" };
const _hoisted_64$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "col-1 align-bcntr" }, "ТС")
], -1 /* HOISTED */);
const _hoisted_65$1 = { class: "col-3" };
const _hoisted_66$1 = { class: "input-bg" };
const _hoisted_67$1 = { class: "col-4" };
const _hoisted_68$1 = { class: "input-bg" };
const _hoisted_69$1 = { class: "col-3" };
const _hoisted_70$1 = { class: "input-bg" };
const _hoisted_71$1 = { class: "col-1" };
const _hoisted_72$1 = { class: "input-bg" };
const _hoisted_73$1 = { class: "d-flex mt-2" };
const _hoisted_74$1 = { class: "col-2 d-flex" };
const _hoisted_75$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_76$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "TIR")
], -1 /* HOISTED */);
const _hoisted_77$1 = { class: "col-2" };
const _hoisted_78$1 = { class: "input-bg" };
const _hoisted_79$1 = { class: "col-7" };
const _hoisted_80$1 = { class: "input-bg" };
const _hoisted_81$1 = { class: "col-6 d-flex" };
const _hoisted_82$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-3 align-bcntr" }, [
  /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Иной документ")
], -1 /* HOISTED */);
const _hoisted_83$1 = { class: "col-6" };
const _hoisted_84$1 = { class: "input-bg" };
const _hoisted_85$1 = { class: "col-3" };
const _hoisted_86$1 = { class: "input-bg" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
    _hoisted_2$6,
    vue.createElementVNode("div", _hoisted_3$5, [
      vue.createElementVNode("div", _hoisted_4$3, [
        vue.createElementVNode("div", _hoisted_5$4, [
          vue.createElementVNode("div", _hoisted_6$3, [
            vue.createElementVNode("div", _hoisted_7$3, [
              vue.createElementVNode("div", _hoisted_8$3, [
                vue.createElementVNode("div", _hoisted_9$3, [
                  vue.createElementVNode("div", _hoisted_10$2, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.document.typeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.typeCode]
                    ])
                  ])
                ]),
                _hoisted_11$2,
                vue.createElementVNode("div", _hoisted_12$2, [
                  vue.createElementVNode("div", _hoisted_13$2, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.document.typeCodeCount) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.typeCodeCount]
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_14$1, [
                vue.createElementVNode("div", _hoisted_15$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.document.type) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.type]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_16$1, [
              vue.createElementVNode("div", _hoisted_17$1, [
                vue.createElementVNode("div", _hoisted_18$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.document.number) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.number]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_19$1, [
                _hoisted_20$1,
                vue.createElementVNode("div", _hoisted_21$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.document.dateRelease) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.dateRelease]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_22$1, [
                _hoisted_23$1,
                vue.createElementVNode("div", _hoisted_24$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата начала",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.document.dateStart) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.dateStart]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_25$1, [
                _hoisted_26$1,
                vue.createElementVNode("div", _hoisted_27$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата окончания",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.document.dateEnd) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.dateEnd]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_28$1, [
                vue.createElementVNode("div", _hoisted_29$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.document.fieldUnknown) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.fieldUnknown]
                  ])
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_30$1, [
          vue.createElementVNode("div", _hoisted_31$1, [
            vue.createElementVNode("div", _hoisted_32$1, [
              _hoisted_33$1,
              vue.createElementVNode("div", _hoisted_34$1, [
                vue.createElementVNode("div", _hoisted_35$1, [
                  vue.createElementVNode("div", _hoisted_36$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      placeholder: "Полное наименование государственной",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.document.countryFullName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.countryFullName]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_37$1, [
                  vue.createElementVNode("div", _hoisted_38$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      placeholder: "AuthorityId",
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.document.authorityId) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.authorityId]
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_39$1, [
              vue.createElementVNode("div", _hoisted_40$1, [
                vue.createElementVNode("div", _hoisted_41$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Информационного ресурс",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.document.informationSource) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.informationSource]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_42$1, [
                vue.createElementVNode("div", _hoisted_43$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "URL",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.document.url) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.url]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_44$1, [
                vue.createElementVNode("div", _hoisted_45$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Дата обращения",
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.document.dateUrlAppeal) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.dateUrlAppeal]
                  ])
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_46$1, [
          vue.createElementVNode("div", _hoisted_47$1, [
            _hoisted_48$1,
            vue.createElementVNode("div", _hoisted_49$1, [
              vue.createElementVNode("div", _hoisted_50$1, [
                vue.createElementVNode("div", _hoisted_51$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.document.unknownField1) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.unknownField1]
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_52$1, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.document.unknownField2) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.document.unknownField2]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_53$1, [
                _hoisted_54$1,
                vue.createElementVNode("div", _hoisted_55$1, [
                  vue.createElementVNode("div", _hoisted_56$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.document.unknownField3) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField3]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_57$1, [
                  vue.createElementVNode("div", _hoisted_58$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.document.unknownField4) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField4]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_59$1, [
                  vue.createElementVNode("div", _hoisted_60$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.document.unknownField5) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField5]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_61$1, [
                  vue.createElementVNode("div", _hoisted_62$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.document.unknownField6) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField6]
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_63$1, [
                _hoisted_64$1,
                vue.createElementVNode("div", _hoisted_65$1, [
                  vue.createElementVNode("div", _hoisted_66$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.document.unknownField7) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField7]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_67$1, [
                  vue.createElementVNode("div", _hoisted_68$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.document.unknownField8) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField8]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_69$1, [
                  vue.createElementVNode("div", _hoisted_70$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.document.unknownField9) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField9]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_71$1, [
                  vue.createElementVNode("div", _hoisted_72$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.document.unknownField10) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField10]
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_73$1, [
              vue.createElementVNode("div", _hoisted_74$1, [
                _hoisted_75$1,
                _hoisted_76$1,
                vue.createElementVNode("div", _hoisted_77$1, [
                  vue.createElementVNode("div", _hoisted_78$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.document.unknownField11) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField11]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_79$1, [
                  vue.createElementVNode("div", _hoisted_80$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.document.unknownField12) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField12]
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_81$1, [
                _hoisted_82$1,
                vue.createElementVNode("div", _hoisted_83$1, [
                  vue.createElementVNode("div", _hoisted_84$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.document.unknownField13) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.document.unknownField13]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_85$1, [
                  vue.createElementVNode("div", _hoisted_86$1, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.document.unknownField14) = $event))
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
  ]))
}

script$6.render = render$6;
script$6.__file = "src/components/Form/AdditionalDocument.vue";

var script$5 = {
  name: "TsoftGoodInformationForm",
  data() {
    return {
      isGoodsOpen: false
    };
  },
  props: {
    good: {
      type: Object,
      required: true
    },
    documents: {
      type: Object,
      required: true
    },
    goodNum: {
      required: true
    }
  }
};

const _hoisted_1$5 = {
  class: "product-info-block my-2",
  id: "productInvoiceBlock"
};
const _hoisted_2$5 = /*#__PURE__*/vue.createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\"><h4 class=\"col-4\">Товар (1 из 2)</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-minus\" id=\"collapseButton\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-1Inner\" aria-expanded=\"true\" aria-controls=\"product-1Inner\"><i class=\"fa-solid fa-sort-down\"></i></button></div></div></div>", 1);
const _hoisted_3$4 = {
  class: "product-inner-block collapse",
  id: "product-1Inner"
};
const _hoisted_4$2 = { class: "row" };
const _hoisted_5$3 = { class: "col-1" };
const _hoisted_6$2 = { class: "col-9" };
const _hoisted_7$2 = { class: "col input-bg" };
const _hoisted_8$2 = { class: "col input-bg mt-3" };
const _hoisted_9$2 = { class: "col-8" };
const _hoisted_10$1 = { class: "input-bg h-100" };
const _hoisted_11$1 = { class: "col-3" };
const _hoisted_12$1 = { class: "changing-code" };
const _hoisted_13$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "label-block" }, [
  /*#__PURE__*/vue.createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_14 = { class: "col-9 d-flex w-100" };
const _hoisted_15 = { class: "col input-bg" };
const _hoisted_16 = { class: "col input-bg" };
const _hoisted_17 = { class: "col input-bg" };
const _hoisted_18 = { class: "col input-bg" };
const _hoisted_19 = { class: "col input-bg" };
const _hoisted_20 = { class: "col input-bg" };
const _hoisted_21 = { class: "col input-bg" };
const _hoisted_22 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_24 = { class: "row" };
const _hoisted_25 = { class: "col-3" };
const _hoisted_26 = { class: "d-flex" };
const _hoisted_27 = { class: "col-5" };
const _hoisted_28 = /*#__PURE__*/vue.createElementVNode("p", { class: "col-11 align-bcntr" }, "ТН ВЭД ЕАЭС", -1 /* HOISTED */);
const _hoisted_29 = { class: "col-11 input-bg" };
const _hoisted_30 = { class: "col-7" };
const _hoisted_31 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Вес, брутто", -1 /* HOISTED */);
const _hoisted_32 = { class: "d-flex" };
const _hoisted_33 = { class: "col-6" };
const _hoisted_34 = { class: "col input-bg" };
const _hoisted_35 = { class: "col-6 d-flex" };
const _hoisted_36 = { class: "col-5" };
const _hoisted_37 = { class: "col input-bg" };
const _hoisted_38 = { class: "col-7" };
const _hoisted_39 = { class: "col input-bg" };
const _hoisted_40 = { class: "d-flex mt-2" };
const _hoisted_41 = { class: "col input-bg" };
const _hoisted_42 = { class: "col-6" };
const _hoisted_43 = { class: "d-flex" };
const _hoisted_44 = { class: "col-4" };
const _hoisted_45 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Вес, нетто", -1 /* HOISTED */);
const _hoisted_46 = { class: "d-flex" };
const _hoisted_47 = { class: "col-6" };
const _hoisted_48 = { class: "col input-bg" };
const _hoisted_49 = { class: "col-6" };
const _hoisted_50 = { class: "d-flex" };
const _hoisted_51 = { class: "col-5" };
const _hoisted_52 = { class: "col input-bg" };
const _hoisted_53 = { class: "col-7" };
const _hoisted_54 = { class: "col input-bg" };
const _hoisted_55 = { class: "col-4" };
const _hoisted_56 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Количество", -1 /* HOISTED */);
const _hoisted_57 = { class: "d-flex" };
const _hoisted_58 = { class: "col-5" };
const _hoisted_59 = { class: "col input-bg" };
const _hoisted_60 = { class: "col-7" };
const _hoisted_61 = { class: "d-flex" };
const _hoisted_62 = { class: "col-5" };
const _hoisted_63 = { class: "col input-bg" };
const _hoisted_64 = { class: "col-7" };
const _hoisted_65 = { class: "col input-bg" };
const _hoisted_66 = { class: "col-4" };
const _hoisted_67 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Таможенная стоимость", -1 /* HOISTED */);
const _hoisted_68 = { class: "d-flex" };
const _hoisted_69 = { class: "col-7" };
const _hoisted_70 = { class: "col input-bg" };
const _hoisted_71 = { class: "col-3" };
const _hoisted_72 = { class: "d-flex" };
const _hoisted_73 = { class: "col input-bg" };
const _hoisted_74 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-2" }, [
  /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-bg-white" }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-note-sticky" })
  ])
], -1 /* HOISTED */);
const _hoisted_75 = { class: "d-flex mt-2" };
const _hoisted_76 = { class: "col-6" };
const _hoisted_77 = { class: "col input-bg" };
const _hoisted_78 = { class: "col-6 d-flex" };
const _hoisted_79 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr ps-2" }, "Трансп. расх.", -1 /* HOISTED */);
const _hoisted_80 = { class: "col input-bg" };
const _hoisted_81 = { class: "col input-bg" };
const _hoisted_82 = { class: "col-3" };
const _hoisted_83 = { class: "" };
const _hoisted_84 = /*#__PURE__*/vue.createElementVNode("p", { class: "align-bcntr" }, "Фактурная стоимость", -1 /* HOISTED */);
const _hoisted_85 = { class: "d-flex" };
const _hoisted_86 = { class: "col-8" };
const _hoisted_87 = { class: "col input-bg" };
const _hoisted_88 = { class: "col-4" };
const _hoisted_89 = { class: "col input-bg" };
const _hoisted_90 = { class: "d-flex mt-2" };
const _hoisted_91 = { class: "d-flex" };
const _hoisted_92 = { class: "col-8" };
const _hoisted_93 = { class: "col input-bg" };
const _hoisted_94 = { class: "col-4" };
const _hoisted_95 = { class: "col input-bg" };
const _hoisted_96 = { class: "row mt-2" };
const _hoisted_97 = { class: "col-9 d-flex" };
const _hoisted_98 = { class: "col-9 d-flex" };
const _hoisted_99 = { class: "col input-bg" };
const _hoisted_100 = { class: "col input-bg" };
const _hoisted_101 = { class: "col-3 d-flex batch-info-anchors" };
const _hoisted_102 = /*#__PURE__*/vue.createTextVNode("РОИС");
const _hoisted_103 = /*#__PURE__*/vue.createTextVNode("Предшествующий документ");
const _hoisted_104 = { class: "col-3 d-flex" };
const _hoisted_105 = { class: "d-flex batch-info-anchors" };
const _hoisted_106 = /*#__PURE__*/vue.createTextVNode("Дополнительный документ ");

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    _hoisted_2$5,
    vue.createElementVNode("div", _hoisted_3$4, [
      vue.createElementVNode("div", _hoisted_4$2, [
        vue.createElementVNode("div", _hoisted_5$3, [
          vue.createElementVNode("div", _hoisted_6$2, [
            vue.createElementVNode("div", _hoisted_7$2, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.good.numeric) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, $props.good.numeric]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_8$2, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.good.totalNumeric) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, $props.good.totalNumeric]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_9$2, [
          vue.createElementVNode("div", _hoisted_10$1, [
            vue.withDirectives(vue.createElementVNode("textarea", {
              type: "text",
              class: "form-control h-100",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.good.description) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [vue.vModelText, $props.good.description]
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_11$1, [
          vue.createElementVNode("div", _hoisted_12$1, [
            _hoisted_13$1,
            vue.createElementVNode("div", _hoisted_14, [
              vue.createElementVNode("div", _hoisted_15, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.good.changeDetailsType.stageChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.stageChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_16, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.good.changeDetailsType.reasonChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.reasonChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_17, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.good.changeDetailsType.quantityChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.quantityChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_18, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.good.changeDetailsType.TNVEDChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.TNVEDChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_19, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.good.changeDetailsType.customsCostChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.customsCostChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_20, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.good.changeDetailsType.customsPaymentChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.customsPaymentChangeCode]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_21, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.good.changeDetailsType.otherChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.changeDetailsType.otherChangeCode]
                ])
              ]),
              _hoisted_22
            ]),
            _hoisted_23
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_24, [
        vue.createElementVNode("div", _hoisted_25, [
          vue.createElementVNode("div", _hoisted_26, [
            vue.createElementVNode("div", _hoisted_27, [
              _hoisted_28,
              vue.createElementVNode("div", _hoisted_29, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.good.tnved) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.tnved]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_30, [
              _hoisted_31,
              vue.createElementVNode("div", _hoisted_32, [
                vue.createElementVNode("div", _hoisted_33, [
                  vue.createElementVNode("div", _hoisted_34, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.good.grossWeightQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.grossWeightQuantity]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_35, [
                  vue.createElementVNode("div", _hoisted_36, [
                    vue.createElementVNode("div", _hoisted_37, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.good.goodWeightUnit) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.goodWeightUnit]
                      ])
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_38, [
                    vue.createElementVNode("div", _hoisted_39, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control number-code",
                        type: "text",
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.good.goodWeightUnknown) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.goodWeightUnknown]
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_40, [
            vue.createElementVNode("div", _hoisted_41, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                placeholder: "наименование товарного знака, объекта авторского",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.good.tradeMark) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, $props.good.tradeMark]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_42, [
          vue.createElementVNode("div", _hoisted_43, [
            vue.createElementVNode("div", _hoisted_44, [
              _hoisted_45,
              vue.createElementVNode("div", _hoisted_46, [
                vue.createElementVNode("div", _hoisted_47, [
                  vue.createElementVNode("div", _hoisted_48, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.good.netWeightQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.netWeightQuantity]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_49, [
                  vue.createElementVNode("div", _hoisted_50, [
                    vue.createElementVNode("div", _hoisted_51, [
                      vue.createElementVNode("div", _hoisted_52, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.good.netWeightUnit) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.netWeightUnit]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_53, [
                      vue.createElementVNode("div", _hoisted_54, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.good.netWeightUnknown) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.netWeightUnknown]
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_55, [
              _hoisted_56,
              vue.createElementVNode("div", _hoisted_57, [
                vue.createElementVNode("div", _hoisted_58, [
                  vue.createElementVNode("div", _hoisted_59, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.good.goodQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.goodQuantity]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_60, [
                  vue.createElementVNode("div", _hoisted_61, [
                    vue.createElementVNode("div", _hoisted_62, [
                      vue.createElementVNode("div", _hoisted_63, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.good.goodUnit) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.goodUnit]
                        ])
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_64, [
                      vue.createElementVNode("div", _hoisted_65, [
                        vue.withDirectives(vue.createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.good.goodUnknown) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue.vModelText, $props.good.goodUnknown]
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_66, [
              _hoisted_67,
              vue.createElementVNode("div", _hoisted_68, [
                vue.createElementVNode("div", _hoisted_69, [
                  vue.createElementVNode("div", _hoisted_70, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.good.customsCost) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vue.vModelText, $props.good.customsCost]
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_71, [
                  vue.createElementVNode("div", _hoisted_72, [
                    vue.createElementVNode("div", _hoisted_73, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.good.customsCostCurrency) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vue.vModelText, $props.good.customsCostCurrency]
                      ])
                    ])
                  ])
                ]),
                _hoisted_74
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_75, [
            vue.createElementVNode("div", _hoisted_76, [
              vue.createElementVNode("div", _hoisted_77, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  placeholder: "наименование места происх.",
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.good.productionPlaceName) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.productionPlaceName]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_78, [
              _hoisted_79,
              vue.createElementVNode("div", _hoisted_80, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.good.transportCost) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.transportCost]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_81, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.good.transportCostCurrency) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vue.vModelText, $props.good.transportCostCurrency]
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_82, [
          vue.createElementVNode("div", _hoisted_83, [
            _hoisted_84,
            vue.createElementVNode("div", _hoisted_85, [
              vue.createElementVNode("div", _hoisted_86, [
                vue.createElementVNode("div", _hoisted_87, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.good.invoiceValue) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.invoiceValue]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_88, [
                vue.createElementVNode("div", _hoisted_89, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.good.invoiceValueCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.invoiceValueCurrency]
                  ])
                ])
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_90, [
            vue.createElementVNode("div", _hoisted_91, [
              vue.createElementVNode("div", _hoisted_92, [
                vue.createElementVNode("div", _hoisted_93, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($props.good.invoiceValueRus) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.invoiceValueRus]
                  ])
                ])
              ]),
              vue.createElementVNode("div", _hoisted_94, [
                vue.createElementVNode("div", _hoisted_95, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.good.invoiceValueRusCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vue.vModelText, $props.good.invoiceValueRusCurrency]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_96, [
        vue.createElementVNode("div", _hoisted_97, [
          vue.createElementVNode("div", _hoisted_98, [
            vue.createElementVNode("div", _hoisted_99, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                placeholder: "примечание",
                "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($props.good.note) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, $props.good.note]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_100, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($props.good.url) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelText, $props.good.url]
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_101, [
            vue.createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: vue.withCtx(() => [
                _hoisted_102
              ]),
              _: 1 /* STABLE */
            }),
            vue.createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: vue.withCtx(() => [
                _hoisted_103
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        vue.createElementVNode("div", _hoisted_104, [
          vue.createElementVNode("div", _hoisted_105, [
            vue.createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr",
              id: "extraDocLink"
            }, {
              default: vue.withCtx(() => [
                _hoisted_106
              ]),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ])
  ]))
}

script$5.render = render$5;
script$5.__file = "src/components/Form/GoodInformation.vue";

var script$4 = {
  name: "TsoftDeclaration",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      awbInfo: this.data.awbInfo,
      registry: this.data.registry.regInfo,
      isGeneralOpen: false,
      isOrdersOpen: false,
      isDocumentOpen: false
    };
  }
};

const _hoisted_1$4 = { class: "forms" };
const _hoisted_2$4 = /*#__PURE__*/vue.createElementVNode("p", null, "Заказы", -1 /* HOISTED */);
const _hoisted_3$3 = { class: "arrow" };
const _hoisted_4$1 = /*#__PURE__*/vue.createElementVNode("p", null, "Документы", -1 /* HOISTED */);
const _hoisted_5$2 = { class: "arrow" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_general_declaration_form = vue.resolveComponent("tsoft-general-declaration-form");
  const _component_tsoft_goods_awb_information_form = vue.resolveComponent("tsoft-goods-awb-information-form");
  const _component_tsoft_additional_document_form = vue.resolveComponent("tsoft-additional-document-form");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
    vue.createElementVNode("div", null, [
      vue.createVNode(_component_tsoft_general_declaration_form, {
        "awb-info": this.awbInfo,
        registry: this.registry
      }, null, 8 /* PROPS */, ["awb-info", "registry"]),
      vue.createElementVNode("div", null, [
        vue.createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[0] || (_cache[0] = $event => ($data.isOrdersOpen = !$data.isOrdersOpen))
        }, [
          _hoisted_2$4,
          vue.createElementVNode("div", _hoisted_3$3, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrdersOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["group-panel-content", {'open': $data.isOrdersOpen}])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.data.registry.orders, (order, index) => {
            return (vue.openBlock(), vue.createBlock(_component_tsoft_goods_awb_information_form, {
              order: order.orderInfo,
              goods: order.goods,
              orderNum: index
            }, null, 8 /* PROPS */, ["order", "goods", "orderNum"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ]),
      vue.createElementVNode("div", null, [
        vue.createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[1] || (_cache[1] = $event => ($data.isDocumentOpen = !$data.isDocumentOpen))
        }, [
          _hoisted_4$1,
          vue.createElementVNode("div", _hoisted_5$2, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isDocumentOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["group-panel-content", {'open': $data.isDocumentOpen}])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.data.registry.documents, (document, index) => {
            return (vue.openBlock(), vue.createBlock(_component_tsoft_additional_document_form, {
              key: index,
              document: document
            }, null, 8 /* PROPS */, ["document"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ])
    ])
  ]))
}

var css_248z$3 = "\n.common-inf p {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.common-inf label {\r\n  box-sizing: border-box;\r\n  font-size: 10px;\n}\n.product-batch p {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.product-batch label {\r\n  font-size: 10px;\n}\n.product-batch a {\r\n  font-size: 10px;\n}\n.product-info-block p {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\n}\n.product-info-block label {\r\n  font-size: 10px;\n}\n.product-info-block a {\r\n  font-size: 10px;\n}\n.optional-inf-block a {\r\n  box-sizing: border-box;\r\n  font-size: 10px;\n}\n.optional-inf-block p {\r\n  font-size: 10px;\n}\n.optional-inf-block label {\r\n  font-size: 10px;\n}\n.arrow {\r\n  margin-right: 5px;\r\n  margin-top: -3px;\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\n}\n.forms {\r\n  padding-top: 10px;\n}\n.fa-caret-right {\r\n  transform: rotate(0deg);\r\n  transition: 0.15s;\n}\n.fa-caret-right.down-rotate {\r\n  transform: rotate(90deg);\r\n  transition: 0.15s;\n}\n.group-panel-label {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding-left: 15px;\r\n  padding-top: 7px;\r\n  font-weight: bold;\r\n  border: 1px solid #c4c4c4;\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\n}\n.group-panel-content {\r\n  width: 100%;\r\n  height: 0;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in;\n}\n.goods {\r\n  padding: 10px 10px 0;\n}\n.order {\r\n  padding: 10px 10px 0;\n}\n.group-panel-content.open {\r\n  height: auto;\r\n  opacity: 1;\r\n  transition: opacity 0.3s ease-in;\r\n  margin-bottom: 10px;\n}\nli a {\r\n  color: black;\r\n  text-decoration: unset;\r\n  font-size: 14px;\n}\r\n\r\n/*Стили текстовых инпутов*/\n.form-control {\r\n  padding: 0 5px 0 3px;\r\n  background-color: #21a0fe;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px white;\n}\n.form-control:focus {\r\n  outline: unset;\r\n  border: unset;\r\n  background-color: #80ffff;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px #9f9f9f;\r\n  border: 1px solid black;\n}\n.form-control::placeholder {\r\n  color: #597a93;\r\n  font-weight: bold;\r\n  font-size: 11px;\r\n  padding-left: 10px;\n}\r\n\r\n/*Стиль чекбоксовых инпутов*/\n.form-check-input {\r\n  background-color: #21a0fe;\r\n  box-shadow: 1px 1px 1px white;\r\n  font-size: 10px;\n}\n.number-code::-webkit-outer-spin-button,\r\n.number-code::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\n}\n.number-code[type='number'] {\r\n  -moz-appearance: textfield;\n}\r\n\r\n/*Region Стили блока декларации*/\n.declaration {\r\n  background-color: #d1d1d1;\r\n  padding: 10px;\r\n  border: 1px solid black;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  font-size: 10px;\r\n  margin: 0 auto;\n}\nh4 {\r\n  font-size: 14px;\n}\nh4.declaration-title {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\nh5 {\r\n  text-align: center;\r\n  font-size: 10px;\n}\n.inf-block {\r\n  margin-bottom: 10px;\n}\nlabel {\r\n  margin-top: 7px;\n}\n.inputs-group > div {\r\n  padding: unset;\r\n  min-width: 30px;\r\n  margin-right: 7px;\n}\n.form-check-input {\r\n  min-width: 20px;\r\n  min-height: 20px;\n}\n.sheets-input {\r\n  max-width: 70px;\n}\n.certificate-block div:first-child {\r\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div {\r\n  padding: 0;\r\n  margin-right: 6px;\n}\r\n\r\n/*Стили текстовых инпутов*/\n.form-control {\r\n  padding: 0 5px 0 3px;\r\n  background-color: #21a0fe;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px white;\n}\n.form-control:focus {\r\n  outline: unset;\r\n  border: unset;\r\n  background-color: #80ffff;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  box-shadow: 1px 1px 1px #9f9f9f;\r\n  border: 1px solid black;\n}\n.form-control::placeholder {\r\n  color: #597a93;\r\n  font-weight: bold;\r\n  font-size: 11px;\r\n  padding-left: 10px;\n}\r\n\r\n/**/\r\n/*Стиль чекбоксовых инпутов*/\n.form-check-input {\r\n  background-color: #21a0fe;\r\n  box-shadow: 1px 1px 1px white;\n}\r\n\r\n/**/\r\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph {\r\n  min-width: 250px;\r\n  max-width: 270px;\r\n  margin: 5px 0 auto 0;\n}\r\n\r\n/**/\n.changing-declaration .inf-block div {\r\n  padding: unset;\r\n  margin-right: 5px;\n}\n.changing-code {\r\n  margin-top: 10px;\n}\r\n\r\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code::-webkit-outer-spin-button,\r\n.number-code::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\n}\r\n\r\n/**/\r\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form {\r\n  padding: 0 10px 0 10px;\n}\n.batch-form div:first-child {\r\n  padding-left: 0;\n}\n.batch-block {\r\n  padding-left: 10px;\n}\n.batch-block div {\r\n  padding: 0;\n}\r\n\r\n/**/\r\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information {\r\n  width: fit-content;\r\n  color: gray;\r\n  text-decoration: underline;\r\n  font-size: 10px;\n}\n.payment-information:hover {\r\n  cursor: pointer;\n}\r\n\r\n/**/\r\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button:focus {\r\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i {\r\n  transform: rotate(180deg);\n}\n.collapsing-block {\r\n  background-color: white;\r\n  border: 1px solid black;\r\n  padding: 5px 10px;\r\n  font-weight: bold;\n}\n.collapsing-block span,\r\ni {\r\n  font-size: 14px;\n}\r\n\r\n/**/\n.card-body {\r\n  background-color: unset;\r\n  border: 1px solid black;\n}\n.point-name {\r\n  width: fit-content;\r\n  margin: auto auto 0;\r\n  color: #3274dd;\r\n  text-decoration: underline;\n}\n.personal-data div {\r\n  padding: 0 0 0 3px;\n}\r\n\r\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative {\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  margin: 0 0 8px;\n}\r\n\r\n/**/\r\n/*Стили кнопки календаря*/\n.button-calendar {\r\n  background-color: white;\r\n  border: unset;\r\n  border-radius: 8px;\r\n  padding: 1px 5px;\n}\n.button-calendar:focus {\r\n  box-shadow: unset;\n}\r\n\r\n/**/\r\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr {\r\n  display: flex;\r\n  margin: 5px auto 0;\n}\r\n\r\n/*Стили блока информации о товарной партии*/\n.product-batch {\r\n  background-color: #d1d1d1;\r\n  padding: 0 0 10px;\r\n  border: 1px solid black;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\r\n\r\n/*Стиль синего хэдера с кнопками */\n.product-batch-header {\r\n  padding: 0 10px;\r\n  background-color: #3274dd;\r\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\r\n  color: white;\n}\n.batch-button:focus {\r\n  box-shadow: unset;\n}\n.batch-button i:before {\r\n  color: white;\n}\n.batch-button:last-child i {\r\n  transform: rotate(180deg);\n}\r\n\r\n/**/\n.product-inner-block {\r\n  padding: 10px;\n}\n.fs-12 {\r\n  font-size: 12px;\n}\r\n\r\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  padding: 1px 5px;\n}\n.new-window-button:hover {\r\n  box-shadow: unset;\n}\n.new-window-button:focus {\r\n  box-shadow: unset;\n}\n.new-window-button i {\r\n  font-size: 15px;\r\n  color: #3274dd;\n}\r\n\r\n/**/\r\n\r\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors > a, router-link {\r\n  display: block;\r\n  color: gray;\r\n  text-decoration: underline;\r\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link:hover {\r\n  color: blue;\r\n  cursor: pointer;\n}\r\n\r\n/**/\n.product-info-block {\r\n  background-color: #d1d1d1;\r\n  padding: 0 0 10px;\r\n  border: 1px solid black;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\n.product-info-actions button:focus {\r\n  box-shadow: unset;\n}\n.product-info-actions i:before {\r\n  color: white;\n}\n.product-info-actions .fa-sort-down:before {\r\n  color: black;\n}\n.product-actions-button:not(.collapsed) {\r\n  transform: rotate(180deg);\n}\r\n\r\n/*.btn {*/\r\n/*  padding: 1rem;*/\r\n/*}*/\n.btn-bg-white {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  padding: 1px 5px;\n}\n.btn-bg-white:focus {\r\n  box-shadow: unset;\n}\n.fa-note-sticky {\r\n  font-size: 16px;\n}\r\n\r\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block {\r\n  background-color: #d1d1d1;\r\n  padding: 0 0 10px;\r\n  border: 1px solid black;\r\n  max-width: 950px;\r\n  min-width: 900px;\r\n  margin: 0 auto;\n}\n.optional-inf-header {\r\n  padding: 0 10px;\r\n  background-color: #3274dd;\r\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\r\n  color: white;\n}\r\n";
styleInject(css_248z$3);

script$4.render = render$4;
script$4.__file = "src/components/Declaration/Declaration.vue";

var script$3 = {
  name: "TsoftLeftmenuGoods",
  props: {
    treeGoods: {
      type: Object,
      required: true,
    }
  },
};

const _hoisted_1$3 = { class: "sidebar me-3" };
const _hoisted_2$3 = { id: "goodsList" };
const _hoisted_3$2 = { href: "#declaration" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
    vue.createElementVNode("ol", _hoisted_2$3, [
      vue.createElementVNode("li", null, [
        vue.createElementVNode("a", _hoisted_3$2, vue.toDisplayString($props.treeGoods.title), 1 /* TEXT */)
      ]),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.treeGoods.goods, (good, index) => {
        return (vue.openBlock(), vue.createElementBlock("li", { key: index }, vue.toDisplayString(good), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var css_248z$2 = "\n.sidebar[data-v-6ebd9650] {\r\n  height: fit-content;\r\n  min-width: 300px;\r\n  margin-top: 10px;\n}\n.form-switch .form-check-input[data-v-6ebd9650] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")\n}\n.goods-switcher-block[data-v-6ebd9650] {\r\n  padding: 2px 0 0;\r\n  margin: 0 10px;\n}\n.goods-menu-switcher[data-v-6ebd9650] {\r\n  width: 50px;\r\n  background-color: #E67926;\r\n  box-shadow: unset;\r\n  border: unset;\r\n  margin: 0;\n}\n.goods-icon[data-v-6ebd9650] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.tree-icon[data-v-6ebd9650] {\r\n  color: gray;\r\n  font-size: 18px;\n}\n.goods-menu-switcher[data-v-6ebd9650]:checked {\r\n  background-color: #0D6247;\n}\n.goods-menu-switcher[data-v-6ebd9650]:hover {\r\n  cursor: pointer;\n}\n.goods-icon.active[data-v-6ebd9650] {\r\n  color: #0D6247;\n}\n.tree-icon.active[data-v-6ebd9650] {\r\n  color: #E67926;\n}\nli a[data-v-6ebd9650] {\r\n  color: black;\r\n  text-decoration: unset;\r\n  font-size: 14px;\n}\r\n";
styleInject(css_248z$2);

script$3.render = render$3;
script$3.__scopeId = "data-v-6ebd9650";
script$3.__file = "src/components/Menu/LeftMenuGoods.vue";

var script$2 = {
  name: "TsoftInstrumentsMenu",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    }
  },
  emits: ['close']
};

const _hoisted_1$2 = { class: "d-flex instruments" };
const _hoisted_2$2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"dropdown\" title=\"создать документ\"><button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa-solid fa-file\" style=\"color:orange;font-size:20px;\"></i></button><div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" style=\"width:500px;\"><div class=\"d-flex\"></div><div class=\"d-flex\"><div class=\"col-6\"><div class=\"mt-2 p-3\"><select class=\"w-100\" name=\"\" id=\"\"><option> выберите перевозчика </option><option> Transporter-1 </option><option> Transporter-2 </option><option> Transporter-3 </option><option> Transporter... </option></select><p class=\"\" style=\"font-size:12px;\"> (не влияет на оформление, можно писать, что угодно) </p></div><div class=\"row mt-1 p-3\"><p>Тип транспорта</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\"><label class=\"\" for=\"btnradio1\">Авиационный</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\"><label class=\"\" for=\"btnradio2\">Автомобильный</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio3\" autocomplete=\"off\"><label class=\"\" for=\"btnradio3\">Морской</label></div></div></div><div class=\"row p-3 mt-2\"><div class=\"d-flex\"><input class=\"checkbox\" type=\"checkbox\" id=\"reestr\"><label class=\"ms-2\" for=\"reestr\" style=\"font-size:13px;\"> Реестр по 158/142 решению ЕЭК </label></div><p>Тип</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"radio1\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio1\" style=\"font-size:13px;\">ПТДЭГ</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"radio2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">ДТЭГ</label></div></div></div><div class=\"row mt-2 p-3\"><p>Тр. расходы к там. стоимости</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"io1\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio1\" style=\"font-size:13px;\">Прибавлять</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"bio2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">Вычитать</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"io2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">Не использовать</label></div><div class=\"d-flex\"><input class=\"checkbox\" type=\"checkbox\" id=\"reestr\"><label class=\"ms-2\" for=\"reestr\" style=\"font-size:13px;\"> Поменять местами отп-я и пол-я </label></div></div></div><div class=\"row mt-2\"></div><div class=\"row mt-2\"></div></div><div class=\"col-6\"><img src=\"img/menushka.png\" style=\"width:250px;height:100%;\"></div></div><div class=\"d-flex\"><div class=\"col-8\"></div><div class=\"col-4 d-flex p-1\"><button class=\"btn me-2\" style=\"border:1px solid;\"><a href=\"alta-maket/index.html\" style=\"color:black;text-decoration:unset;\">ОК</a></button><button class=\"btn\" style=\"border:1px solid;\">Отмена</button></div></div></div></div><div class=\"import-doc\"><button class=\"btn\" id=\"sendRegistry\" title=\"Отправить документ\"><i class=\"fa-solid fa-file-import\" style=\"font-size:20px;color:red;\"></i></button></div><div class=\"import-doc\"><button class=\"btn\" title=\"переместить в архив\"><i class=\"fa-solid fa-box-archive\" id=\"archivingButton\" style=\"font-size:20px;color:#18b14e;\"></i></button></div>", 3);
const _hoisted_5$1 = { class: "import-doc" };
const _hoisted_6$1 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn",
  title: "сохранить"
}, [
  /*#__PURE__*/vue.createElementVNode("a", { href: "../index.html" }, [
    /*#__PURE__*/vue.createElementVNode("i", {
      class: "fa-solid fa-floppy-disk",
      style: {"background-color":"white","color":"black","font-size":"20px"}
    })
  ])
], -1 /* HOISTED */);
const _hoisted_7$1 = /*#__PURE__*/vue.createElementVNode("i", {
  class: "fa-solid fa-file-arrow-down",
  style: {"font-size":"20px","color":"brown"}
}, null, -1 /* HOISTED */);
const _hoisted_8$1 = [
  _hoisted_7$1
];
const _hoisted_9$1 = /*#__PURE__*/vue.createElementVNode("button", {
  type: "button",
  class: "btn",
  title: "Изменить структуру"
}, [
  /*#__PURE__*/vue.createElementVNode("i", {
    class: "fa-solid fa-screwdriver-wrench",
    style: {"font-size":"20px","color":"blue"}
  })
], -1 /* HOISTED */);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_modal_window = vue.resolveComponent("tsoft-modal-window");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    vue.createElementVNode("div", _hoisted_5$1, [
      _hoisted_6$1,
      vue.createElementVNode("button", {
        class: "btn",
        title: "Загрузить реестр",
        type: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.openModal && $options.openModal(...args)))
      }, _hoisted_8$1),
      _hoisted_9$1
    ]),
    vue.createVNode(_component_tsoft_modal_window, {
      onClose: $options.openModal,
      turn: $data.showModal,
      tabindex: "0"
    }, null, 8 /* PROPS */, ["onClose", "turn"])
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/Menu/InstrumentsMenu.vue";

var script$1 = {
  name: "TsoftModalWindow",
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  },
  props: {
    turn: {
      type: Boolean,
      required: true
    },
    nameComponent: {
      type: String,
      required: false
    }
  },
};

const _withScopeId = n => (vue.pushScopeId("data-v-477f0afb"),n=n(),vue.popScopeId(),n);
const _hoisted_1$1 = { class: "wrapper d-flex" };
const _hoisted_2$1 = { class: "mod-container" };
const _hoisted_3$1 = { class: "mod-block" };
const _hoisted_4 = { class: "mod-header d-flex" };
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", { class: "mod-title" }, "Заголовок", -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "xmark" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fa-solid fa-xmark" })
], -1 /* HOISTED */));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "mod-body" };
const _hoisted_9 = { class: "mod-footer" };
const _hoisted_10 = { class: "footer-button" };
const _hoisted_11 = ["disabled"];
const _hoisted_12 = ["disabled"];
const _hoisted_13 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "footer-label" }, [
  /*#__PURE__*/vue.createElementVNode("span", { class: "mod-title" }, "Заключение")
], -1 /* HOISTED */));

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_preloader = vue.resolveComponent("tsoft-preloader");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode("Region Modal "),
    vue.withDirectives(vue.createElementVNode("div", {
      class: vue.normalizeClass(["modal-window", {open: $props.turn}])
    }, [
      vue.createElementVNode("div", _hoisted_1$1, [
        vue.createElementVNode("div", _hoisted_2$1, [
          vue.createElementVNode("div", _hoisted_3$1, [
            vue.createElementVNode("div", _hoisted_4, [
              _hoisted_5,
              vue.createElementVNode("div", {
                class: "btn close-modal-button",
                type: "button",
                onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close'))),
                onKeyup: _cache[1] || (_cache[1] = vue.withKeys($event => (_ctx.$emit('close')), ["esc"]))
              }, _hoisted_7, 32 /* HYDRATE_EVENTS */)
            ]),
            vue.createElementVNode("div", _hoisted_8, [
              (!this.loading)
                ? (vue.openBlock(), vue.createBlock(_component_tsoft_preloader, { key: 0 }))
                : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, $props.nameComponent)
            ]),
            vue.createElementVNode("div", _hoisted_9, [
              vue.createElementVNode("div", _hoisted_10, [
                vue.createElementVNode("button", {
                  class: "btn cancel",
                  type: "button",
                  disabled: this.loading
                }, "Отменить", 8 /* PROPS */, _hoisted_11),
                vue.createElementVNode("button", {
                  class: "btn accept",
                  type: "button",
                  disabled: this.loading
                }, "Применить", 8 /* PROPS */, _hoisted_12)
              ]),
              _hoisted_13
            ])
          ])
        ])
      ])
    ], 2 /* CLASS */), [
      [vue.vShow, $props.turn]
    ]),
    vue.createCommentVNode(" endregion ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

var css_248z$1 = "\n.modal-window[data-v-477f0afb] {\r\n  background: rgba(0, 0, 0, 0);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 997;\n}\n.modal-window.open[data-v-477f0afb] {\r\n  background: rgba(0, 0, 0, 0.4);\r\n  transition: 0.5s;\n}\n.wrapper[data-v-477f0afb] {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 998;\n}\n.mod-block[data-v-477f0afb] {\r\n  position: relative;\r\n  margin: 0 auto auto auto;\r\n  background-color: white;\r\n  min-width: 400px;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  max-height: 1000px;\r\n  z-index: 11;\r\n  box-shadow: 4px 4px 10px 0 #343434;\r\n  border-radius: 4px;\r\n  overflow: auto;\n}\n.mod-title[data-v-477f0afb] {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: grey;\n}\n.mod-container[data-v-477f0afb] {\r\n  background-color: white;\r\n  opacity: 1;\r\n  z-index: 10;\r\n  margin: auto;\r\n  border-radius: 4px;\n}\n.mod-header[data-v-477f0afb] {\r\n  margin: 10px;\r\n  border-bottom: 1px solid #c4c4c4;\r\n  justify-content: space-between;\n}\n.close-modal-button[data-v-477f0afb] {\r\n  color: white;\r\n  border-radius: 14px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: lightgray;\r\n  padding: 4px;\r\n  box-shadow: unset;\n}\n.close-modal-button[data-v-477f0afb]:hover {\r\n  background-color: #0D6247;\r\n  color: #ffffff;\n}\n.close-modal-button .fa-xmark[data-v-477f0afb] {\r\n  font-size: 12px;\n}\n.xmark[data-v-477f0afb] {\r\n  margin-top: -7px;\n}\n.mod-body[data-v-477f0afb] {\r\n  margin: 10px;\r\n  position: relative;\r\n  min-height: 80px  ;\n}\n.mod-footer[data-v-477f0afb] {\r\n  display: contents;\n}\n.footer-label[data-v-477f0afb] {\r\n  margin: 10px;\r\n  border-top: 1px solid #c4c4c4;\n}\n.footer-button[data-v-477f0afb] {\r\n  display: flex;\r\n  justify-content: end;\n}\n.footer-button .btn[data-v-477f0afb] {\r\n  margin-right: 10px;\r\n  color: white;\r\n  box-shadow: 2px 2px 6px 0 #818181;\r\n  font-weight: bold;\n}\n.btn.cancel[data-v-477f0afb] {\r\n  background: #E57A26;\n}\n.btn.accept[data-v-477f0afb] {\r\n  background: #0D6247;\n}\n.btn.cancel[data-v-477f0afb]:hover {\r\n  color: #E57A26;\r\n  background: white;\n}\n.btn.accept[data-v-477f0afb]:hover {\r\n  color: #0D6247;\r\n  background: white;\n}\n.download-block .btn[data-v-477f0afb]:hover {\r\n  color: orange;\r\n  /*font-weight: bold;*/\r\n  background-color: white;\r\n  box-shadow: 2px 2px 6px 0 #9b9b9b;\r\n  transition: 0.3s;\n}\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-477f0afb";
script$1.__file = "src/components/Modal/ModalWindow.vue";

var script = {
  name: 'TsoftPreloader',
};

const _hoisted_1 = { class: "preloader-main" };
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("div", { class: "lds-ring" }, [
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div"),
  /*#__PURE__*/vue.createElementVNode("div")
], -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_3))
}

var css_248z = "\n.preloader-main {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 200;\n}\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: auto;\n}\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 8px;\r\n  border: 8px solid #fff;\r\n  border-radius: 50%;\r\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #cccccc transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\r\n  animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\r\n  animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\r\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\r\n\r\n";
styleInject(css_248z);

script.render = render;
script.__file = "src/components/Loader/Preloader.vue";

var components = { 
    InputTextarea: script$f,
    InputText: script$g,
    TsoftTable: script$e,
    TsoftTree: script$c,
    TsoftLeftmenuFolder: script$9,
    TsoftLeftmenuGoods: script$3,
    TsoftGeneralDeclarationForm: script$8,
    TsoftGoodsAwbInformationForm: script$7,
    TsoftAdditionalDocumentForm: script$6,
    TsoftGoodInformationForm: script$5,
    TsoftDeclaration: script$4,
    TsoftInstrumentsMenu: script$2,
    TsoftModalWindow: script$1,
    TsoftPreloader: script,
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
