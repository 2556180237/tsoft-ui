'use strict';

var vue = require('vue');

var script$8 = {
  name: 'InputText'
};

const _hoisted_1$6 = { type: "text" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$6))
}

script$8.render = render$8;
script$8.__file = "src/InputText.vue";

var script$7 = {
  name: 'InputTextarea'
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea"))
}

script$7.render = render$7;
script$7.__file = "src/InputTextarea.vue";

var script$6 = {
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

const _withScopeId$2 = n => (vue.pushScopeId("data-v-647119ad"),n=n(),vue.popScopeId(),n);
const _hoisted_1$5 = { class: "content" };
const _hoisted_2$5 = { class: "row section" };
const _hoisted_3$3 = { class: "table-section" };
const _hoisted_4$2 = { class: "slider-block" };
const _hoisted_5$1 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6 = [
  _hoisted_5$1
];
const _hoisted_7 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = { class: "table" };
const _hoisted_10 = { class: "thead" };
const _hoisted_11 = { class: "tbody" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.createElementVNode("div", _hoisted_2$5, [
      vue.createElementVNode("div", _hoisted_3$3, [
        vue.createElementVNode("div", _hoisted_4$2, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6, 34 /* CLASS, HYDRATE_EVENTS */),
          vue.createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8, 32 /* HYDRATE_EVENTS */)
        ]),
        vue.createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[4] || (_cache[4] = (...args) => ($options.move && $options.move(...args)))
        }, [
          vue.createElementVNode("table", _hoisted_9, [
            vue.createElementVNode("thead", _hoisted_10, [
              vue.createElementVNode("tr", null, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titles, (title) => {
                  return (vue.openBlock(), vue.createElementBlock("th", { key: title }, vue.toDisplayString(title), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            vue.createElementVNode("tbody", _hoisted_11, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rows, (row) => {
                return (vue.openBlock(), vue.createElementBlock("tr", {
                  class: "document-row",
                  key: row
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (value, key) => {
                    return (vue.openBlock(), vue.createElementBlock("td", { key: key }, [
                      vue.createElementVNode("p", null, vue.toDisplayString(value), 1 /* TEXT */)
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

var css_248z$4 = "\n#tableResponsive[data-v-647119ad] {\n  background: rgb(253, 253, 253);\n  box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);\n}\n.content[data-v-647119ad] {\n  padding: 20px 0 20px 20px;\n}\n.tbody td p[data-v-647119ad] {\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\n  border: 1px solid black;\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 10px;\n  width: auto;\n}\nth p[data-v-647119ad] {\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\n  border: 1px solid #ccc;\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\n  margin: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\n  font-size: 13px;\n  line-height: 18px;\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\n  color: #aaaaaa;\n  font-size: 12px;\n  line-height: 0 !important;\n  text-transform: uppercase;\n  border-top: 2px solid #e4e4e4;\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\n.table td[data-v-647119ad] {\n  margin: 0.75rem;\n  vertical-align: top;\n  /* border: 1px solid #dee2e6; */\n}\n.table-section[data-v-647119ad] {\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\n  display: flex;\n  justify-content: space-between;\n  height: 0;\n  position: sticky;\n  top: 200px;\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\n    center left no-repeat;\n  position: absolute;\n  left: 0;\n}\n.control-next[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\n    center right no-repeat;\n  position: absolute;\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\n  color: black;\n}\n.t-folder[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n";
styleInject(css_248z$4);

script$6.render = render$6;
script$6.__scopeId = "data-v-647119ad";
script$6.__file = "src/components/Table/Table.vue";

var script$5 = {
  name: "node",
  props: {
    node: Object,
  },
};

const _hoisted_1$4 = { class: "node-tree" };
const _hoisted_2$4 = { class: "label" };
const _hoisted_3$2 = { key: 0 };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = vue.resolveComponent("node");

  return (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$4, [
    vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_3$2, [
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

script$5.render = render$5;
script$5.__file = "src/components/Tree/NodeTreeMenu.vue";

var script$4 = {
  props: {
    folders: {
      type: Object
    },
    folderName: {
      type: String
    }
  },
  components: {
    NodeTree: script$5
  }
};

const _hoisted_1$3 = { class: "tree" };
const _hoisted_2$3 = { class: "tree-list" };

function render$4(_ctx, _cache) {
  const _component_node_tree = vue.resolveComponent("node-tree");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
    vue.createElementVNode("ul", _hoisted_2$3, [
      vue.createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$3 = "\n.tree-list ul {\n  padding-left: 16px;\n  margin: 6px 0;\n}\n";
styleInject(css_248z$3);

script$4.render = render$4;
script$4.__file = "src/components/Tree/TreeMenu.vue";

var script$3 = {
  name: "TreeFile",
  props: {
    filename: {
      required: true,
    },
  },
};

const _withScopeId$1 = n => (vue.pushScopeId("data-v-f314cfaa"),n=n(),vue.popScopeId(),n);
const _hoisted_1$2 = { class: "file-row" };
const _hoisted_2$2 = { class: "file" };
const _hoisted_3$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-file" }, null, -1 /* HOISTED */));
const _hoisted_4$1 = { class: "file-name" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.createElementVNode("div", _hoisted_2$2, [
      _hoisted_3$1,
      vue.createElementVNode("span", _hoisted_4$1, vue.toDisplayString($props.filename), 1 /* TEXT */)
    ])
  ]))
}

var css_248z$2 = "\n.file-name[data-v-f314cfaa]:hover {\n  color: #e67926;\n}\n.fa-file[data-v-f314cfaa] {\n  color: #252525;\n}\n.file[data-v-f314cfaa] {\n  margin-left: 18px;\n  white-space: nowrap;\n}\n.file-name[data-v-f314cfaa] {\n  margin-left: 9px;\n}\n.file-name[data-v-f314cfaa] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n";
styleInject(css_248z$2);

script$3.render = render$3;
script$3.__scopeId = "data-v-f314cfaa";
script$3.__file = "src/components/Tree/TreeFile.vue";

var script$2 = {
  name: "TreeFolder",
  components: {
    TreeFile: script$3,
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

const _withScopeId = n => (vue.pushScopeId("data-v-61a6cc5d"),n=n(),vue.popScopeId(),n);
const _hoisted_1$1 = { class: "folder-row" };
const _hoisted_2$1 = { class: "folder-container" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-folder folder-icon" }, null, -1 /* HOISTED */));
const _hoisted_5 = { class: "folder-name" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = vue.resolveComponent("tree-folder", true);
  const _component_tree_file = vue.resolveComponent("tree-file");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataFiles.folders, (children, folderName) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: "folder",
        key: folderName
      }, [
        vue.createElementVNode("div", _hoisted_2$1, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(["fa-solid fa-angle-right", {
            'down-rotate': children.isOpen,
          }]),
            onClick: $event => ($options.toggle(folderName))
          }, null, 10 /* CLASS, PROPS */, _hoisted_3),
          _hoisted_4,
          vue.createElementVNode("span", _hoisted_5, vue.toDisplayString(folderName), 1 /* TEXT */)
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["file-content", { 'content-open': children.isOpen }])
        }, [
          vue.createVNode(_component_tree_folder, { treeData: children }, null, 8 /* PROPS */, ["treeData"])
        ], 2 /* CLASS */)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataFiles.files, (filename, filetype) => {
      return (vue.openBlock(), vue.createBlock(_component_tree_file, {
        filename: filename,
        key: filetype
      }, null, 8 /* PROPS */, ["filename"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

var css_248z$1 = "\n.toggle-icon[data-v-61a6cc5d] {\n  height: 16px;\n  width: 8px;\n  display: flex;\n}\n.file-content[data-v-61a6cc5d] {\n  padding-left: 21px;\n  margin-right: -20px;\n  height: 0px;\n  overflow: unset;\n  opacity: 0;\n  transition: 0s;\n}\n.content-open[data-v-61a6cc5d] {\n  height: fit-content;\n  overflow: unset;\n  opacity: 1;\n  transition: 0.5s;\n}\n.folder-container[data-v-61a6cc5d] {\n  white-space: nowrap;\n}\n.folder-container.empty[data-v-61a6cc5d] {\n  margin-left: 15px;\n}\n.folder-row[data-v-61a6cc5d] {\n  width: fit-content;\n}\n.folder-name[data-v-61a6cc5d] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n.folder-name[data-v-61a6cc5d]:hover {\n  color: #e67926;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  color: rgb(190, 190, 190);\n  margin-right: 7px;\n  cursor: pointer;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  transition: 0.15s;\n  rotate: 0;\n}\n.fa-angle-right.down-rotate[data-v-61a6cc5d] {\n  transform: rotate(90deg);\n  transition: 0.15s;\n}\n.fa-folder[data-v-61a6cc5d] {\n  color: #e67926;\n  margin-right: 7px;\n}\n";
styleInject(css_248z$1);

script$2.render = render$2;
script$2.__scopeId = "data-v-61a6cc5d";
script$2.__file = "src/components/Tree/TreeFolder.vue";

var script$1 = {
  name: "TreeFileSystem",
  components: {
    TreeFolder: script$2,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = vue.resolveComponent("tree-folder");

  return (vue.openBlock(), vue.createBlock(_component_tree_folder, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"]))
}

script$1.render = render$1;
script$1.__file = "src/components/Tree/TreeFileSystem.vue";

var script = {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFileSystem: script$1,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

const _hoisted_1 = { class: "menu-sitemap-tree" };
const _hoisted_2 = { class: "file-system" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_file_system = vue.resolveComponent("tree-file-system");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createVNode(_component_tree_file_system, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"])
    ])
  ]))
}

var css_248z = "\n.menu-sitemap-tree[data-v-647b20c4] {\n  padding-top: 20px;\n}\n.file-system[data-v-647b20c4] {\n  background: rgb(253, 253, 253);\n  border: 1px solid #ccc;\n  padding: 10px;\n  overflow: scroll;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-647b20c4";
script.__file = "src/components/Menu/LeftmenuFolder.vue";

var components = { 
    InputTextarea: script$7, 
    InputText: script$8, 
    TsoftTable: script$6, 
    TsoftTree: script$4,
    TsoftLeftmenuFolder: script
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
