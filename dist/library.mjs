import { openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, toDisplayString, pushScopeId, popScopeId, resolveComponent, createBlock, createCommentVNode, createVNode, withCtx, createTextVNode, createStaticVNode } from 'vue';

var script$c = {
  name: 'InputText'
};

const _hoisted_1$a = { type: "text" };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$a))
}

script$c.render = render$c;
script$c.__file = "src/InputText.vue";

var script$b = {
  name: 'InputTextarea'
};

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script$b.render = render$b;
script$b.__file = "src/InputTextarea.vue";

var script$a = {
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

const _withScopeId$2 = n => (pushScopeId("data-v-647119ad"),n=n(),popScopeId(),n);
const _hoisted_1$9 = { class: "content" };
const _hoisted_2$9 = { class: "row section" };
const _hoisted_3$6 = { class: "table-section" };
const _hoisted_4$6 = { class: "slider-block" };
const _hoisted_5$3 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6$3 = [
  _hoisted_5$3
];
const _hoisted_7$2 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _hoisted_9$2 = { class: "table" };
const _hoisted_10$2 = { class: "thead" };
const _hoisted_11$3 = { class: "tbody" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("div", _hoisted_2$9, [
      createElementVNode("div", _hoisted_3$6, [
        createElementVNode("div", _hoisted_4$6, [
          createElementVNode("div", {
            class: normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6$3, 34 /* CLASS, HYDRATE_EVENTS */),
          createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8$2, 32 /* HYDRATE_EVENTS */)
        ]),
        createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[4] || (_cache[4] = (...args) => ($options.move && $options.move(...args)))
        }, [
          createElementVNode("table", _hoisted_9$2, [
            createElementVNode("thead", _hoisted_10$2, [
              createElementVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.titles, (title) => {
                  return (openBlock(), createElementBlock("th", { key: title }, toDisplayString(title), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            createElementVNode("tbody", _hoisted_11$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (row) => {
                return (openBlock(), createElementBlock("tr", {
                  class: "document-row",
                  key: row
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (value, key) => {
                    return (openBlock(), createElementBlock("td", { key: key }, [
                      createElementVNode("p", null, toDisplayString(value), 1 /* TEXT */)
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

var css_248z$8 = "\n#tableResponsive[data-v-647119ad] {\n  background: rgb(253, 253, 253);\n  box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);\n}\n.content[data-v-647119ad] {\n  padding: 20px 0 20px 20px;\n}\n.tbody td p[data-v-647119ad] {\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\n  border: 1px solid black;\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 10px;\n  width: auto;\n}\nth p[data-v-647119ad] {\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\n  border: 1px solid #ccc;\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\n  margin: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\n  font-size: 13px;\n  line-height: 18px;\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\n  color: #aaaaaa;\n  font-size: 12px;\n  line-height: 0 !important;\n  text-transform: uppercase;\n  border-top: 2px solid #e4e4e4;\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\n.table td[data-v-647119ad] {\n  margin: 0.75rem;\n  vertical-align: top;\n  /* border: 1px solid #dee2e6; */\n}\n.table-section[data-v-647119ad] {\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\n  display: flex;\n  justify-content: space-between;\n  height: 0;\n  position: sticky;\n  top: 200px;\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\n    center left no-repeat;\n  position: absolute;\n  left: 0;\n}\n.control-next[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\n    center right no-repeat;\n  position: absolute;\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\n  color: black;\n}\n.t-folder[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n";
styleInject(css_248z$8);

script$a.render = render$a;
script$a.__scopeId = "data-v-647119ad";
script$a.__file = "src/components/Table/Table.vue";

var script$9 = {
  name: "node",
  props: {
    node: Object,
  },
};

const _hoisted_1$8 = { class: "node-tree" };
const _hoisted_2$8 = { class: "label" };
const _hoisted_3$5 = { key: 0 };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = resolveComponent("node");

  return (openBlock(), createElementBlock("li", _hoisted_1$8, [
    createElementVNode("span", _hoisted_2$8, toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_3$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, (child) => {
            return (openBlock(), createBlock(_component_node, {
              node: child,
              key: child
            }, null, 8 /* PROPS */, ["node"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$9.render = render$9;
script$9.__file = "src/components/Tree/NodeTreeMenu.vue";

var script$8 = {
  props: {
    folders: {
      type: Object
    },
    folderName: {
      type: String
    }
  },
  components: {
    NodeTree: script$9
  }
};

const _hoisted_1$7 = { class: "tree" };
const _hoisted_2$7 = { class: "tree-list" };

function render$8(_ctx, _cache) {
  const _component_node_tree = resolveComponent("node-tree");

  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("ul", _hoisted_2$7, [
      createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$7 = "\n.tree-list ul {\n  padding-left: 16px;\n  margin: 6px 0;\n}\n";
styleInject(css_248z$7);

script$8.render = render$8;
script$8.__file = "src/components/Tree/TreeMenu.vue";

var script$7 = {
  name: "TreeFile",
  props: {
    filename: {
      required: true,
    },
  },
};

const _withScopeId$1 = n => (pushScopeId("data-v-f314cfaa"),n=n(),popScopeId(),n);
const _hoisted_1$6 = { class: "file-row" };
const _hoisted_2$6 = { class: "file" };
const _hoisted_3$4 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createElementVNode("i", { class: "fas fa-file" }, null, -1 /* HOISTED */));
const _hoisted_4$5 = { class: "file-name" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", _hoisted_2$6, [
      _hoisted_3$4,
      createElementVNode("span", _hoisted_4$5, toDisplayString($props.filename), 1 /* TEXT */)
    ])
  ]))
}

var css_248z$6 = "\n.file-name[data-v-f314cfaa]:hover {\n  color: #e67926;\n}\n.fa-file[data-v-f314cfaa] {\n  color: #252525;\n}\n.file[data-v-f314cfaa] {\n  margin-left: 18px;\n  white-space: nowrap;\n}\n.file-name[data-v-f314cfaa] {\n  margin-left: 9px;\n}\n.file-name[data-v-f314cfaa] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n";
styleInject(css_248z$6);

script$7.render = render$7;
script$7.__scopeId = "data-v-f314cfaa";
script$7.__file = "src/components/Tree/TreeFile.vue";

var script$6 = {
  name: "TreeFolder",
  components: {
    TreeFile: script$7,
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

const _withScopeId = n => (pushScopeId("data-v-61a6cc5d"),n=n(),popScopeId(),n);
const _hoisted_1$5 = { class: "folder-row" };
const _hoisted_2$5 = { class: "folder-container" };
const _hoisted_3$3 = ["onClick"];
const _hoisted_4$4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("i", { class: "fas fa-folder folder-icon" }, null, -1 /* HOISTED */));
const _hoisted_5$2 = { class: "folder-name" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = resolveComponent("tree-folder", true);
  const _component_tree_file = resolveComponent("tree-file");

  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataFiles.folders, (children, folderName) => {
      return (openBlock(), createElementBlock("div", {
        class: "folder",
        key: folderName
      }, [
        createElementVNode("div", _hoisted_2$5, [
          createElementVNode("i", {
            class: normalizeClass(["fa-solid fa-angle-right", {
            'down-rotate': children.isOpen,
          }]),
            onClick: $event => ($options.toggle(folderName))
          }, null, 10 /* CLASS, PROPS */, _hoisted_3$3),
          _hoisted_4$4,
          createElementVNode("span", _hoisted_5$2, toDisplayString(folderName), 1 /* TEXT */)
        ]),
        createElementVNode("div", {
          class: normalizeClass(["file-content", { 'content-open': children.isOpen }])
        }, [
          createVNode(_component_tree_folder, { treeData: children }, null, 8 /* PROPS */, ["treeData"])
        ], 2 /* CLASS */)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataFiles.files, (filename, filetype) => {
      return (openBlock(), createBlock(_component_tree_file, {
        filename: filename,
        key: filetype
      }, null, 8 /* PROPS */, ["filename"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

var css_248z$5 = "\n.toggle-icon[data-v-61a6cc5d] {\n  height: 16px;\n  width: 8px;\n  display: flex;\n}\n.file-content[data-v-61a6cc5d] {\n  padding-left: 21px;\n  margin-right: -20px;\n  height: 0px;\n  overflow: unset;\n  opacity: 0;\n  transition: 0s;\n}\n.content-open[data-v-61a6cc5d] {\n  height: fit-content;\n  overflow: unset;\n  opacity: 1;\n  transition: 0.5s;\n}\n.folder-container[data-v-61a6cc5d] {\n  white-space: nowrap;\n}\n.folder-container.empty[data-v-61a6cc5d] {\n  margin-left: 15px;\n}\n.folder-row[data-v-61a6cc5d] {\n  width: fit-content;\n}\n.folder-name[data-v-61a6cc5d] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n.folder-name[data-v-61a6cc5d]:hover {\n  color: #e67926;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  color: rgb(190, 190, 190);\n  margin-right: 7px;\n  cursor: pointer;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  transition: 0.15s;\n  rotate: 0;\n}\n.fa-angle-right.down-rotate[data-v-61a6cc5d] {\n  transform: rotate(90deg);\n  transition: 0.15s;\n}\n.fa-folder[data-v-61a6cc5d] {\n  color: #e67926;\n  margin-right: 7px;\n}\n";
styleInject(css_248z$5);

script$6.render = render$6;
script$6.__scopeId = "data-v-61a6cc5d";
script$6.__file = "src/components/Tree/TreeFolder.vue";

var script$5 = {
  name: "TreeFileSystem",
  components: {
    TreeFolder: script$6,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = resolveComponent("tree-folder");

  return (openBlock(), createBlock(_component_tree_folder, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"]))
}

script$5.render = render$5;
script$5.__file = "src/components/Tree/TreeFileSystem.vue";

var script$4 = {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFileSystem: script$5,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

const _hoisted_1$4 = { class: "menu-sitemap-tree" };
const _hoisted_2$4 = { class: "file-system" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_file_system = resolveComponent("tree-file-system");

  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$4, [
      createVNode(_component_tree_file_system, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"])
    ])
  ]))
}

var css_248z$4 = "\n.menu-sitemap-tree[data-v-647b20c4] {\n  padding-top: 20px;\n}\n.file-system[data-v-647b20c4] {\n  background: rgb(253, 253, 253);\n  border: 1px solid #ccc;\n  padding: 10px;\n  overflow: scroll;\n}\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-647b20c4";
script$4.__file = "src/components/Menu/LeftmenuFolder.vue";

var script$3 = {
  name: "TsoftGeneralDeclarationForm",
};

const _hoisted_1$3 = {
  class: "declaration mt-3",
  id: "declaration"
};
const _hoisted_2$3 = { class: "common-inf" };
const _hoisted_3$2 = { class: "row" };
const _hoisted_4$3 = { class: "inf-block" };
const _hoisted_5$1 = /*#__PURE__*/createTextVNode(" Подан с ДТ: ");
const _hoisted_6$2 = /*#__PURE__*/createStaticVNode("<div class=\"row\" data-v-06a6f23d><div class=\"inf-block\" data-v-06a6f23d><h5 data-v-06a6f23d> Декларация на товары и пассажирская таможенная декларация для экспресс-грузов </h5></div></div><div class=\"row\" data-v-06a6f23d><div class=\"inf-block row col-12 justify-content-between\" data-v-06a6f23d><div class=\"checkbox-block d-flex col-2\" data-v-06a6f23d><div class=\"checkbox-bg col-2\" data-v-06a6f23d><input class=\"form-check-input\" type=\"checkbox\" id=\"DTEG\" data-v-06a6f23d></div><div class=\"label-block col-4\" data-v-06a6f23d><label for=\"DTEG\" data-v-06a6f23d>ДТЭГ</label></div><div class=\"checkbox-bg col-2\" data-v-06a6f23d><input class=\"form-check-input\" type=\"checkbox\" id=\"PTDEG\" data-v-06a6f23d></div><div class=\"label-block col-4\" data-v-06a6f23d><label for=\"PTDEG\" data-v-06a6f23d>ПТДЭГ</label></div></div><div class=\"checkbox-block d-flex col-2\" data-v-06a6f23d><div class=\"checkbox-bg col-2\" data-v-06a6f23d><input class=\"form-check-input\" type=\"checkbox\" id=\"IM\" data-v-06a6f23d></div><div class=\"label-block col-3\" data-v-06a6f23d><label for=\"IM\" data-v-06a6f23d>ИМ</label></div><div class=\"checkbox-bg col-2\" data-v-06a6f23d><input class=\"form-check-input\" type=\"checkbox\" id=\"EK\" data-v-06a6f23d></div><div class=\"label-block col-3\" data-v-06a6f23d><label for=\"EK\" data-v-06a6f23d>ЭК</label></div></div><div class=\"declaration-number-block justify-content-end d-flex col-5\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"declarationNumber\" data-v-06a6f23d>№</label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input class=\"declaration-number-input form-control\" type=\"text\" id=\"declarationNumber\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"inf-block row col-12\" data-v-06a6f23d><div class=\"inputs-group d-flex col-2\" data-v-06a6f23d><div class=\"col-2\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-2\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-2\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div><div class=\"sheets-block d-flex col-2\" data-v-06a6f23d><div class=\"label-block col-4\" data-v-06a6f23d><label for=\"Sheets\" data-v-06a6f23d>Листов</label></div><div class=\"input-bg col-8\" data-v-06a6f23d><input class=\"sheets-input form-control\" type=\"text\" id=\"Sheets\" data-v-06a6f23d></div></div><div class=\"registry-number-block d-flex justify-content-end col-5\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"registryNumber\" data-v-06a6f23d>Рег. №</label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input class=\"registry-number-input form-control\" type=\"text\" id=\"registryNumber\" data-v-06a6f23d></div></div><div class=\"registry-changes d-flex col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"registry-checkbox form-check-input\" type=\"checkbox\" id=\"registryCheckbox\" data-v-06a6f23d></div><label for=\"registryCheckbox\" data-v-06a6f23d>- реестр с внесёнными изменениями</label></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"inf-block d-grid\" data-v-06a6f23d><div class=\"row col-12\" data-v-06a6f23d><div class=\"col-6\" data-v-06a6f23d><label class=\"express-courier-label\" for=\"expressCourier\" data-v-06a6f23d>Экспресс перевозчик</label><div class=\"express-courier-block col-12 d-flex\" data-v-06a6f23d><div class=\"col-1\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-11\" data-v-06a6f23d><input class=\"col-11 form-control\" type=\"text\" id=\"expressCourier\" data-v-06a6f23d></div></div></div><div class=\"col-1\" data-v-06a6f23d></div><div class=\"col-5\" data-v-06a6f23d><div class=\"inf-paragraph\" data-v-06a6f23d><p data-v-06a6f23d> Регистрационный номер декларации, в которую вносятся изменения </p></div></div></div><div class=\"row col-12\" data-v-06a6f23d><div class=\"col-6\" data-v-06a6f23d><div class=\"\" data-v-06a6f23d><div class=\"\" data-v-06a6f23d><h4 data-v-06a6f23d>Свидетельство о включении в</h4><p data-v-06a6f23d> реестр УЭО, реестр владельцев СВХ, складов хранения собственных товаров, таможенных складов, свободных складов или магазинов БТ </p></div><form class=\"certificate-block row col-12\" data-v-06a6f23d><div class=\"input-bg col-1\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"input-bg col-1\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"input-bg col-7\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"input-bg col-1\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"input-bg col-1\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></form></div></div><div class=\"col-1\" data-v-06a6f23d></div><div class=\"col-5\" data-v-06a6f23d><form class=\"changing-declaration\" action=\"\" data-v-06a6f23d><div class=\"inf-block row\" data-v-06a6f23d><div class=\"col-3 input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-4 input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3 input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-1 input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div><div class=\"inf-block changing-code row\" data-v-06a6f23d><div class=\"label-block\" style=\"width:100%;\" data-v-06a6f23d><label class=\"fs-5\" for=\"\" data-v-06a6f23d>Код изменений</label></div><div class=\"col-8 d-flex\" data-v-06a6f23d><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><div class=\"col input-bg\" data-v-06a6f23d><input class=\"form-control number-code\" type=\"number\" data-v-06a6f23d></div><button class=\"btn info-button p-1\" data-v-06a6f23d><i class=\"fa-solid fa-circle-info\" data-v-06a6f23d></i></button></div><div class=\"col-4\" data-v-06a6f23d></div></div></form></div></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"inf-block\" data-v-06a6f23d><h4 data-v-06a6f23d>Товарная партия</h4><form action=\"\" class=\"batch-form row\" data-v-06a6f23d><div class=\"col-3 inf-block\" data-v-06a6f23d><div class=\"row inf-paragraph\" data-v-06a6f23d><p data-v-06a6f23d> общая служба таможенных и иных платежей, подлежащих уплате по декларации </p></div><div class=\"batch-block row\" data-v-06a6f23d><div class=\"col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"Сумма\" data-v-06a6f23d></div><div class=\"col-2\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"Вал\" data-v-06a6f23d></div></div></div><div class=\"col-3 inf-block\" data-v-06a6f23d><h5 data-v-06a6f23d>Общая стоимость</h5><div class=\"inf-paragraph\" data-v-06a6f23d><p data-v-06a6f23d>по ПТД для экспресс-грузов</p></div><div class=\"batch-block row\" data-v-06a6f23d><div class=\"col-9\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-3 inf-block\" data-v-06a6f23d><h5 data-v-06a6f23d>Общий вес брутто</h5><div class=\"inf-paragraph\" data-v-06a6f23d><p data-v-06a6f23d>по ТД для экспресс-грузов</p></div><div class=\"batch-block row\" data-v-06a6f23d><div class=\"col-6\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-3 inf-block\" data-v-06a6f23d><h5 data-v-06a6f23d>Общая таможенная стоимость</h5><div class=\"inf-paragraph\" data-v-06a6f23d><p data-v-06a6f23d>по ДТ для экспресс-грузов</p></div><div class=\"batch-block row\" data-v-06a6f23d><div class=\"col-9\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div><div class=\"col-3\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div></form></div></div>", 5);
const _hoisted_11$2 = { class: "row" };
const _hoisted_12$2 = { class: "inf-block row justify-content-end" };
const _hoisted_13$2 = { class: "payment-information" };
const _hoisted_14$2 = /*#__PURE__*/createTextVNode(" Сведения об оплате таможенных и иных платежей ");
const _hoisted_15$1 = /*#__PURE__*/createStaticVNode("<div class=\"sender-common-inf\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><button class=\"btn invoice-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsedSenderInfo\" aria-expanded=\"false\" aria-controls=\"collapsedSenderInfo\" data-v-06a6f23d><p class=\"collapsing-block d-flex justify-content-between\" data-v-06a6f23d><span data-v-06a6f23d>ОТПРАВИТЕЛЬ по общей накладной</span><i class=\"fa-solid fa-caret-up\" data-v-06a6f23d></i></p></button><div class=\"collapse\" id=\"collapsedSenderInfo\" data-v-06a6f23d><div class=\"card card-body\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><div class=\"sender-name\" data-v-06a6f23d><form class=\"row form my-2\" data-v-06a6f23d><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d></div><div class=\"col-2 d-flex\" data-v-06a6f23d><div class=\"input-bg col-2\" data-v-06a6f23d><input type=\"checkbox\" class=\"form-check-input\" data-v-06a6f23d></div><div class=\"label-block col-10\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> Декларант (заявитель) </label></div></div></form><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование организации\" data-v-06a6f23d></div></div><div class=\"col-7 d-flex justify-content-between\" data-v-06a6f23d><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> ОГРН </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> ИНН </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> КПП </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1 d-flex\" data-v-06a6f23d></div></div></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"sender-address\" data-v-06a6f23d><div class=\"row my-2\" data-v-06a6f23d><div class=\"d-flex sender-contacts\" data-v-06a6f23d><div class=\"col-1 d-flex\" data-v-06a6f23d><p class=\"point-name\" data-v-06a6f23d>Адрес</p></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"номер телефона\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"Адрес электронной почты\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"номер факса\" data-v-06a6f23d></div></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"address-block\" data-v-06a6f23d><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"язык\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"страна\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"почтовый индекс\" data-v-06a6f23d></div></div><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"область (регион, штат, провинция)\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"район\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"город\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"населённый пункт\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"дом, корпус, строение\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"номер а/я\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-12\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"набор элементов адреса, представленных в свободной форме в виде текста\" data-v-06a6f23d></div></div></div></div></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"personal-inf-block\" data-v-06a6f23d><p data-v-06a6f23d>Документ, удостоверяющий личность</p><div class=\"row my-2\" data-v-06a6f23d><div class=\"row personal-data my-2\" data-v-06a6f23d><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"стр\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"код\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование\" data-v-06a6f23d></div></div><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"серия\" data-v-06a6f23d></div><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"номер\" data-v-06a6f23d></div><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"дата выдачи\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"наименование организации, выдавшей документ\" data-v-06a6f23d></div></div></div><div class=\"row personal-data my-2\" data-v-06a6f23d><div class=\"col-7\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"полное наименование документа, удостоверяющего личность\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"код подразделения\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"строка, иденти-ая орган государства\" data-v-06a6f23d></div></div></div></div></div></div></div></div></div></div>", 1);
const _hoisted_16$1 = /*#__PURE__*/createStaticVNode("<div class=\"recipient-common-inf\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><button class=\"btn invoice-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsedRecipientInfo\" aria-expanded=\"false\" aria-controls=\"collapsedRecipientInfo\" data-v-06a6f23d><div class=\"collapsing-block d-flex justify-content-between\" data-v-06a6f23d><span data-v-06a6f23d>ПОЛУЧАТЕЛЬ по общей накладной</span><i class=\"fa-solid fa-caret-up\" data-v-06a6f23d></i></div></button><div class=\"collapse\" id=\"collapsedRecipientInfo\" data-v-06a6f23d><div class=\"card card-body\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><div class=\"recipient-name\" data-v-06a6f23d><form class=\"row form my-2\" data-v-06a6f23d><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d></div><div class=\"col-2 d-flex\" data-v-06a6f23d><div class=\"input-bg col-2\" data-v-06a6f23d><input type=\"checkbox\" class=\"form-check-input\" data-v-06a6f23d></div><div class=\"label-block col-10\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> Декларант (заявитель) </label></div></div></form><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование организации\" data-v-06a6f23d></div></div><div class=\"col-7 d-flex justify-content-between\" data-v-06a6f23d><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> ОГРН </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> ИНН </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"label-block col-2\" data-v-06a6f23d><label for=\"\" data-v-06a6f23d> КПП </label></div><div class=\"input-bg col-10\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1 d-flex\" data-v-06a6f23d></div></div></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"recipient-address\" data-v-06a6f23d><div class=\"row my-2\" data-v-06a6f23d><div class=\"d-flex recipient-contacts\" data-v-06a6f23d><div class=\"col-1 d-flex\" data-v-06a6f23d><p class=\"point-name\" data-v-06a6f23d>Адрес</p></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"номер телефона\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"Адрес электронной почты\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" placeholder=\"номер факса\" data-v-06a6f23d></div></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"address-block\" data-v-06a6f23d><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"язык\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"страна\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"почтовый индекс\" data-v-06a6f23d></div></div><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"область (регион, штат, провинция)\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"район\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"город\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"населённый пункт\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"дом, корпус, строение\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"номер а/я\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-12\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"набор элементов адреса, представленных в свободной форме в виде текста\" data-v-06a6f23d></div></div></div></div></div></div></div><div class=\"row\" data-v-06a6f23d><div class=\"personal-inf-block\" data-v-06a6f23d><p data-v-06a6f23d>Документ, удостоверяющий личность</p><div class=\"row my-2\" data-v-06a6f23d><div class=\"row personal-data my-2\" data-v-06a6f23d><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"стр\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"код\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование\" data-v-06a6f23d></div></div><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"серия\" data-v-06a6f23d></div><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"номер\" data-v-06a6f23d></div><div class=\"input-bg col-4\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"дата выдачи\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"наименование организации, выдавшей документ\" data-v-06a6f23d></div></div></div><div class=\"row personal-data my-2\" data-v-06a6f23d><div class=\"col-7\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"полное наименование документа, удостоверяющего личность\" data-v-06a6f23d></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"код подразделения\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" placeholder=\"строка, иденти-ая орган государства\" data-v-06a6f23d></div></div></div></div></div></div></div></div></div></div>", 1);
const _hoisted_17$1 = /*#__PURE__*/createStaticVNode("<div class=\"customs-sender-inf my-2\" data-v-06a6f23d><div class=\"col-12 row inf-block\" data-v-06a6f23d><div class=\"col-7\" data-v-06a6f23d><div class=\"col\" data-v-06a6f23d><h4 class=\"customs-representative\" data-v-06a6f23d>Таможенный представитель</h4><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-5\" data-v-06a6f23d><p class=\"align-bcntr\" data-v-06a6f23d> Сведения о включении лица в реестр таможенных представителей </p><div class=\"col d-flex\" data-v-06a6f23d><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-7\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-1\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div></div></div><div class=\"row\" data-v-06a6f23d><button class=\"btn invoice-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsedNaturalPersonInfo\" aria-expanded=\"false\" aria-controls=\"collapsedNaturalPersonInfo\" data-v-06a6f23d><div class=\"collapsing-block d-flex justify-content-between\" data-v-06a6f23d><span data-v-06a6f23d>Сведения о физическом лице, заполнившем (подписавшем) таможенный документ</span><i class=\"fa-solid fa-caret-up\" data-v-06a6f23d></i></div></button><div class=\"collapse\" id=\"collapsedNaturalPersonInfo\" data-v-06a6f23d><div class=\"card card-body\" data-v-06a6f23d><form action=\"\" class=\"form\" data-v-06a6f23d><div class=\"d-flex\" data-v-06a6f23d><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-9 d-flex\" data-v-06a6f23d><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-6\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-3 row\" data-v-06a6f23d><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-4\" data-v-06a6f23d><button class=\"btn button-calendar\" type=\"button\" data-v-06a6f23d><i class=\"fa-solid fa-calendar-days\" data-v-06a6f23d></i></button></div></div></div><div class=\"row my-2\" data-v-06a6f23d><p data-v-06a6f23d> Идентификаторы, присвоенные документу (сведениям) при размещении в хранилище электронных документов </p><div class=\"row\" data-v-06a6f23d><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-7\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"col-6\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-6\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-3 d-flex\" data-v-06a6f23d><div class=\"col-3\" data-v-06a6f23d><div class=\"label-block align-bcntr\" data-v-06a6f23d><label class=\"align-bcntr\" for=\"\" data-v-06a6f23d> аттестат </label></div></div><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"col-3\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"col-3 input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div><div class=\"col-8 input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div><div class=\"col-1 input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><p data-v-06a6f23d> Идентификаторы, присвоенные документу (сведениям) при размещении в хранилище электронных документов </p></div><div class=\"row\" data-v-06a6f23d><div class=\"col-8 d-flex\" data-v-06a6f23d><div class=\"col-6\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div><div class=\"col-6\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input type=\"text\" class=\"form-control\" data-v-06a6f23d></div></div></div></div></div><div class=\"row my-2\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><p data-v-06a6f23d>Документ, удостоверяющий полномочия</p></div><div class=\"row\" data-v-06a6f23d><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"col-4\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div><div class=\"col-8\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-8 row\" data-v-06a6f23d><div class=\"col-4 d-flex\" data-v-06a6f23d><div class=\"col-5\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div><div class=\"col-7\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-8 row\" data-v-06a6f23d><div class=\"col-5 d-flex\" data-v-06a6f23d><div class=\"col-2 align-bcntr\" data-v-06a6f23d><p class=\"align-bcntr\" data-v-06a6f23d>с</p></div><div class=\"col-10\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-5 d-flex\" data-v-06a6f23d><div class=\"col-2 align-bcntr\" data-v-06a6f23d><p class=\"align-bcntr\" data-v-06a6f23d>по</p></div><div class=\"col-10\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div><div class=\"col-2\" data-v-06a6f23d><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div></div></div></div></form></div></div></div></div>", 1);
const _hoisted_18 = /*#__PURE__*/createStaticVNode("<div class=\"inspector-inf my-2\" data-v-06a6f23d><div class=\"row\" data-v-06a6f23d><div class=\"col-7\" data-v-06a6f23d><p class=\"align-bcntr\" data-v-06a6f23d>ФИО инспектора</p><div class=\"input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div><div class=\"col-5\" data-v-06a6f23d><p class=\"align-bcntr\" data-v-06a6f23d>ЛНП</p><div class=\"row\" data-v-06a6f23d><div class=\"col-2 input-bg\" data-v-06a6f23d><input class=\"form-control\" type=\"text\" data-v-06a6f23d></div></div></div></div></div>", 1);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createCommentVNode("Region элемент с общей информацией декларации"),
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$2, [
        createElementVNode("div", _hoisted_4$3, [
          createVNode(_component_router_link, {
            class: "point-name",
            to: { name: 'index' }
          }, {
            default: withCtx(() => [
              _hoisted_5$1
            ]),
            _: 1 /* STABLE */
          })
        ])
      ]),
      _hoisted_6$2,
      createElementVNode("div", _hoisted_11$2, [
        createElementVNode("div", _hoisted_12$2, [
          createElementVNode("div", _hoisted_13$2, [
            createVNode(_component_router_link, { to: { name: 'index' } }, {
              default: withCtx(() => [
                _hoisted_14$2
              ]),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ]),
    createCommentVNode(" endregion"),
    createCommentVNode(" Region элемент с общей информацией по отправителю"),
    _hoisted_15$1,
    createCommentVNode(" endregion"),
    createCommentVNode(" Region элемет с общей информацией по получателю"),
    _hoisted_16$1,
    createCommentVNode("endregion"),
    createCommentVNode(" Region элемент с общей информацией по таможенному представителю и исполнителю"),
    _hoisted_17$1,
    createCommentVNode("endregion"),
    createCommentVNode("Region элемент с информацией по инспектору"),
    _hoisted_18,
    createCommentVNode("endregion")
  ]))
}

var css_248z$3 = "\nli a[data-v-06a6f23d] {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active[data-v-06a6f23d] {\n  color: orange;\n  background-color: green;\n}\n/*Стили текстовых инпутов*/\n.form-control[data-v-06a6f23d] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-06a6f23d]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-06a6f23d]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-06a6f23d] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n*[data-v-06a6f23d] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n\n/*Region Стили блока декларации*/\n.declaration[data-v-06a6f23d] {\n  background-color: #d1d1d1;\n  padding: 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\nh5[data-v-06a6f23d] {\n  text-align: center;\n}\n.inf-block[data-v-06a6f23d] {\n  margin-bottom: 10px;\n}\nlabel[data-v-06a6f23d] {\n  margin-top: 7px;\n}\n.inputs-group > div[data-v-06a6f23d] {\n  padding: unset;\n  min-width: 30px;\n  margin-right: 7px;\n}\n.form-check-input[data-v-06a6f23d] {\n  min-width: 20px;\n  min-height: 20px;\n}\n.sheets-input[data-v-06a6f23d] {\n  max-width: 70px;\n}\n.certificate-block div[data-v-06a6f23d]:first-child {\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div[data-v-06a6f23d] {\n  padding: 0;\n  margin-right: 6px;\n}\n\n/*Стили текстовых инпутов*/\n.form-control[data-v-06a6f23d] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-06a6f23d]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-06a6f23d]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-06a6f23d] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n\n/**/\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph[data-v-06a6f23d] {\n  min-width: 250px;\n  max-width: 270px;\n  margin: 10px 0 auto 0;\n}\n\n/**/\n.changing-declaration .inf-block div[data-v-06a6f23d] {\n  padding: unset;\n  margin-right: 5px;\n}\n.changing-code[data-v-06a6f23d] {\n  margin-top: 10px;\n}\n\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code[data-v-06a6f23d]::-webkit-outer-spin-button,\n.number-code[data-v-06a6f23d]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n/**/\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form[data-v-06a6f23d] {\n  padding: 0 10px 0 4px;\n}\n.batch-form div[data-v-06a6f23d]:first-child {\n  padding-left: 0;\n}\n.batch-block[data-v-06a6f23d] {\n  padding-left: 10px;\n}\n.batch-block div[data-v-06a6f23d] {\n  padding: 0;\n}\n\n/**/\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information[data-v-06a6f23d] {\n  width: fit-content;\n  color: gray;\n  text-decoration: underline;\n  font-size: 10px;\n}\n.payment-information[data-v-06a6f23d]:hover {\n  cursor: pointer;\n}\n\n/**/\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i[data-v-06a6f23d] {\n  transform: rotate(180deg);\n}\n.collapsing-block[data-v-06a6f23d] {\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n.collapsing-block span[data-v-06a6f23d],\ni[data-v-06a6f23d] {\n  font-size: 14px;\n}\n\n/**/\n.card-body[data-v-06a6f23d] {\n  background-color: unset;\n  border: 1px solid black;\n}\n.point-name[data-v-06a6f23d] {\n  width: fit-content;\n  margin: auto auto 0;\n  color: #3274dd;\n  text-decoration: underline;\n}\n.personal-data div[data-v-06a6f23d] {\n  padding: 0 0 0 3px;\n}\n\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative[data-v-06a6f23d] {\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 0 8px;\n}\n\n/**/\n/*Стили кнопки календаря*/\n.button-calendar[data-v-06a6f23d] {\n  background-color: white;\n  border: unset;\n  border-radius: 8px;\n}\n.button-calendar[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n\n/**/\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr[data-v-06a6f23d] {\n  display: flex;\n  margin: 5px auto 0;\n}\n\n/*Стили блока информации о товарной партии*/\n.product-batch[data-v-06a6f23d] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n\n/*Стиль синего хэдера с кнопками */\n.product-batch-header[data-v-06a6f23d] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n.batch-button[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n.batch-button i[data-v-06a6f23d]:before {\n  color: white;\n}\n.batch-button:last-child i[data-v-06a6f23d] {\n  transform: rotate(180deg);\n}\n/**/\n.product-inner-block[data-v-06a6f23d] {\n  padding: 10px;\n}\n.fs-12[data-v-06a6f23d] {\n  font-size: 12px;\n}\n\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button[data-v-06a6f23d] {\n  background-color: white;\n  border-radius: 5px;\n}\n.new-window-button[data-v-06a6f23d]:hover {\n  box-shadow: unset;\n}\n.new-window-button[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n.new-window-button i[data-v-06a6f23d] {\n  font-size: 15px;\n  color: #3274dd;\n}\n/**/\n\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors router-link[data-v-06a6f23d] {\n  display: block;\n  color: gray;\n  text-decoration: underline;\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link[data-v-06a6f23d]:hover {\n  color: blue;\n  cursor: pointer;\n}\n/**/\n.product-info-block[data-v-06a6f23d] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.product-info-actions button[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n.product-info-actions i[data-v-06a6f23d]:before {\n  color: white;\n}\n.product-info-actions .fa-sort-down[data-v-06a6f23d]:before {\n  color: black;\n}\n.product-actions-button[data-v-06a6f23d]:not(.collapsed) {\n  transform: rotate(180deg);\n}\n.btn-bg-white[data-v-06a6f23d] {\n  background-color: white;\n  border-radius: 5px;\n}\n.btn-bg-white[data-v-06a6f23d]:focus {\n  box-shadow: unset;\n}\n.fa-note-sticky[data-v-06a6f23d] {\n  font-size: 16px;\n}\n\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block[data-v-06a6f23d] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.optional-inf-header[data-v-06a6f23d] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-06a6f23d";
script$3.__file = "src/components/Form/GeneralDeclaration.vue";

var script$2 = {
  name: "TsoftGoodsAwbInformationForm",
};

const _hoisted_1$2 = { class: "product-batch my-3" };
const _hoisted_2$2 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\" data-v-87b4174a><h4 class=\"col-4\" data-v-87b4174a>Сведения о товарной партии</h4><div class=\"product-batch-actions col-4 d-flex justify-content-end\" data-v-87b4174a><div class=\"col-2\" data-v-87b4174a><button class=\"btn batch-button\" data-v-87b4174a><i class=\"fa-solid fa-plus\" data-v-87b4174a></i></button></div><div class=\"col-2\" data-v-87b4174a><button class=\"btn batch-button\" data-v-87b4174a><i class=\"fa-solid fa-minus\" data-v-87b4174a></i></button></div><div class=\"col-2\" data-v-87b4174a><button class=\"btn batch-button\" data-v-87b4174a><i class=\"fa-solid fa-border-top-left\" data-v-87b4174a></i></button></div></div></div>", 1);
const _hoisted_3$1 = { class: "product-inner-block" };
const _hoisted_4$2 = { class: "row" };
const _hoisted_5 = { class: "row" };
const _hoisted_6$1 = /*#__PURE__*/createStaticVNode("<div class=\"col-9\" data-v-87b4174a><form action=\"\" data-v-87b4174a><div class=\"d-flex\" data-v-87b4174a><div class=\"col-3 d-flex\" data-v-87b4174a><div class=\"col-6 align-bcntr\" data-v-87b4174a><p class=\"align-bcntr\" data-v-87b4174a>Общая накладная</p></div><div class=\"col-1\" data-v-87b4174a></div><div class=\"input-bg col-5\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-3\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div><div class=\"d-flex my-2\" data-v-87b4174a><div class=\"col-3 d-flex\" data-v-87b4174a><div class=\"col-6 align-bcntr\" data-v-87b4174a><p class=\"align-bcntr\" data-v-87b4174a>Инд. накладная</p></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-3\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div><div class=\"row my-3\" data-v-87b4174a><div class=\"col-4\" data-v-87b4174a><h5 class=\"align-bcntr my-1\" data-v-87b4174a>Общий вес брутто</h5><div class=\"d-flex\" data-v-87b4174a><div class=\"col-6\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-6 d-flex\" data-v-87b4174a><div class=\"col-7\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-5\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div></div></div><div class=\"col-4\" data-v-87b4174a><h5 class=\"align-bcntr my-1\" data-v-87b4174a>Общая таможенная стоимость</h5><div class=\"d-flex\" data-v-87b4174a><div class=\"col-8\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"col-2\" data-v-87b4174a></div><div class=\"col-10\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div></div></div><div class=\"col-4\" data-v-87b4174a><h5 class=\"align-bcntr my-1 fs-12\" data-v-87b4174a> Общая стоимость по инд. накладной </h5><div class=\"d-flex\" data-v-87b4174a><div class=\"col-9\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-3 d-flex\" data-v-87b4174a><div class=\"col-12\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div></div></div></div><div class=\"row align-items-end\" data-v-87b4174a><div class=\"col-8 d-flex\" data-v-87b4174a><div class=\"col-3 d-flex align-bcntr\" data-v-87b4174a><p class=\"align-bcntr\" data-v-87b4174a>Интернет-магазин</p></div><div class=\"col-7\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-2 d-flex\" data-v-87b4174a><div class=\"col-7 d-flex\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-5\" data-v-87b4174a><button class=\"btn new-window-button\" data-v-87b4174a><i class=\"fa-solid fa-pager\" data-v-87b4174a></i></button></div></div></div><div class=\"col-4\" data-v-87b4174a><p class=\"align-bcntr\" data-v-87b4174a>Номер мешка/места</p><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div></form></div>", 1);
const _hoisted_7$1 = { class: "col-3" };
const _hoisted_8$1 = { class: "batch-info-anchors" };
const _hoisted_9$1 = /*#__PURE__*/createTextVNode(" Сведения о товарах в накладной ");
const _hoisted_10$1 = /*#__PURE__*/createTextVNode(" Сведения о там.сборе накладной ");
const _hoisted_11$1 = /*#__PURE__*/createTextVNode(" Суммы пошлин и налогов накладной ");
const _hoisted_12$1 = /*#__PURE__*/createTextVNode(" Исчисление там.пошлин, налогов ");
const _hoisted_13$1 = /*#__PURE__*/createStaticVNode("<div class=\"inf-block changing-code row\" data-v-87b4174a><div class=\"label-block\" style=\"width:100%;\" data-v-87b4174a><label class=\"fs-5\" for=\"\" data-v-87b4174a>Код изменений</label></div><div class=\"col-10 d-flex\" data-v-87b4174a><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control number-code\" type=\"number\" data-v-87b4174a></div><button class=\"btn info-button p-1\" data-v-87b4174a><i class=\"fa-solid fa-circle-info\" data-v-87b4174a></i></button></div><div class=\"col-2\" data-v-87b4174a></div></div>", 1);
const _hoisted_14$1 = /*#__PURE__*/createTextVNode(" Открыть исходную Инд. накладную ");
const _hoisted_15 = /*#__PURE__*/createStaticVNode("<div class=\"row\" data-v-87b4174a><div class=\"my-2\" data-v-87b4174a><p class=\"align-bcntr\" data-v-87b4174a>Решение по инд. накладной</p><div class=\"d-flex\" data-v-87b4174a><div class=\"col-9\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input class=\"form-control\" type=\"text\" data-v-87b4174a></div></div><div class=\"col-3\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input class=\"form-control\" type=\"text\" data-v-87b4174a></div></div></div></div><div class=\"d-flex\" data-v-87b4174a><div class=\"col-7\" data-v-87b4174a><p class=\"align-bcntr fs-5\" data-v-87b4174a>Причина отказа</p><div class=\"input-bg\" data-v-87b4174a><input class=\"form-control\" type=\"text\" data-v-87b4174a></div></div><div class=\"col-5\" data-v-87b4174a><p class=\"align-bcntr fs-5\" data-v-87b4174a>Уникальный идентификатор партии</p><div class=\"col input-bg\" data-v-87b4174a><input class=\"form-control\" type=\"text\" data-v-87b4174a></div></div></div></div>", 1);
const _hoisted_16 = /*#__PURE__*/createStaticVNode("<div class=\"sender-personal-inf mt-4\" data-v-87b4174a><div class=\"row\" data-v-87b4174a><button class=\"btn invoice-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsedBatchSender\" aria-expanded=\"false\" aria-controls=\"collapsedBatchSender\" data-v-87b4174a><div class=\"collapsing-block d-flex justify-content-between\" data-v-87b4174a><span data-v-87b4174a>Отправитель по индивидуальной накладной</span><i class=\"fa-solid fa-caret-up\" data-v-87b4174a></i></div></button><div class=\"collapse\" id=\"collapsedBatchSender\" data-v-87b4174a><div class=\"card card-body\" data-v-87b4174a><div class=\"row\" data-v-87b4174a><div class=\"recipient-name\" data-v-87b4174a><form class=\"row form my-2\" data-v-87b4174a><div class=\"col-8\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"\" data-v-87b4174a></div></div><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-1\" data-v-87b4174a></div><div class=\"col-2 d-flex\" data-v-87b4174a><div class=\"input-bg col-2\" data-v-87b4174a><input type=\"checkbox\" class=\"form-check-input\" data-v-87b4174a></div><div class=\"label-block col-10\" data-v-87b4174a><label for=\"\" data-v-87b4174a> Декларант (заявитель) </label></div></div></form><div class=\"row my-2\" data-v-87b4174a><div class=\"col-6 d-flex justify-content-between\" data-v-87b4174a><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-1\" data-v-87b4174a><label for=\"\" data-v-87b4174a> ОГРН </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-3\" data-v-87b4174a><label for=\"\" data-v-87b4174a> ИНН </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-3\" data-v-87b4174a><label for=\"\" data-v-87b4174a> КПП </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div><div class=\"col-6 d-flex\" data-v-87b4174a><div class=\"input-bg col-6\" data-v-87b4174a><input class=\"form-control\" type=\"text\" placeholder=\"номер телефона\" data-v-87b4174a></div><div class=\"input-bg col-6\" data-v-87b4174a><input class=\"form-control\" type=\"text\" placeholder=\"адрес эл.почты\" data-v-87b4174a></div></div></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"recipient-address\" data-v-87b4174a><div class=\"row my-2\" data-v-87b4174a><div class=\"d-flex recipient-contacts\" data-v-87b4174a><div class=\"col-1 d-flex\" data-v-87b4174a><p class=\"point-name\" data-v-87b4174a>Адрес:</p></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"address-block\" data-v-87b4174a><div class=\"row my-2\" data-v-87b4174a><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"язык\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"страна\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"почтовый индекс\" data-v-87b4174a></div></div><div class=\"col-5\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"область (регион, штат, провинция)\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-5\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"район\" data-v-87b4174a></div></div><div class=\"col-3\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"город\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"населённый пункт\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"улица\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"дом, корпус, строение\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"офис/квартира\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"номер а/я\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-12\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"набор элементов адреса, представленных в свободной форме в виде текста\" data-v-87b4174a></div></div></div></div></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"personal-inf-block\" data-v-87b4174a><p data-v-87b4174a>Документ, удостоверяющий личность</p><div class=\"row my-2\" data-v-87b4174a><div class=\"row personal-data my-2\" data-v-87b4174a><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"стр\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"код вида \" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование\" data-v-87b4174a></div></div><div class=\"col-5 d-flex\" data-v-87b4174a><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"серия\" data-v-87b4174a></div><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"номер\" data-v-87b4174a></div><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"дата выдачи\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"Код подразделения\" data-v-87b4174a></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"col-8\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"наименование организации, выдавшей документ\" data-v-87b4174a></div></div></div></div></div></div></div></div></div></div>", 1);
const _hoisted_17 = /*#__PURE__*/createStaticVNode("<div class=\"recipient-personal-inf\" data-v-87b4174a><div class=\"row\" data-v-87b4174a><button class=\"btn invoice-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsedBatchRecipient\" aria-expanded=\"false\" aria-controls=\"collapsedBatchRecipient\" data-v-87b4174a><div class=\"collapsing-block d-flex justify-content-between\" data-v-87b4174a><span data-v-87b4174a>Получатель по индивидуальной накладной</span><i class=\"fa-solid fa-caret-up\" data-v-87b4174a></i></div></button><div class=\"collapse\" id=\"collapsedBatchRecipient\" data-v-87b4174a><div class=\"card card-body\" data-v-87b4174a><div class=\"row\" data-v-87b4174a><div class=\"recipient-name\" data-v-87b4174a><form class=\"row form my-2\" data-v-87b4174a><div class=\"col-8\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"\" data-v-87b4174a></div></div><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-1\" data-v-87b4174a></div><div class=\"col-2 d-flex\" data-v-87b4174a><div class=\"input-bg col-2\" data-v-87b4174a><input type=\"checkbox\" class=\"form-check-input\" data-v-87b4174a></div><div class=\"label-block col-10\" data-v-87b4174a><label for=\"\" data-v-87b4174a> Декларант (заявитель) </label></div></div></form><div class=\"row my-2\" data-v-87b4174a><div class=\"col-6 d-flex justify-content-between\" data-v-87b4174a><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-1\" data-v-87b4174a><label for=\"\" data-v-87b4174a> ОГРН </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-3\" data-v-87b4174a><label for=\"\" data-v-87b4174a> ИНН </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div><div class=\"col-4 d-flex\" data-v-87b4174a><div class=\"label-block col-3 ps-3\" data-v-87b4174a><label for=\"\" data-v-87b4174a> КПП </label></div><div class=\"input-bg col-9\" data-v-87b4174a><input type=\"text\" class=\"form-control\" data-v-87b4174a></div></div></div><div class=\"col-6 d-flex\" data-v-87b4174a><div class=\"input-bg col-6\" data-v-87b4174a><input class=\"form-control\" type=\"text\" placeholder=\"номер телефона\" data-v-87b4174a></div><div class=\"input-bg col-6\" data-v-87b4174a><input class=\"form-control\" type=\"text\" placeholder=\"адрес эл.почты\" data-v-87b4174a></div></div></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"recipient-address\" data-v-87b4174a><div class=\"row my-2\" data-v-87b4174a><div class=\"d-flex recipient-contacts\" data-v-87b4174a><div class=\"col-1 d-flex\" data-v-87b4174a><p class=\"point-name\" data-v-87b4174a>Адрес:</p></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"address-block\" data-v-87b4174a><div class=\"row my-2\" data-v-87b4174a><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"язык\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"страна\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"почтовый индекс\" data-v-87b4174a></div></div><div class=\"col-5\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"область (регион, штат, провинция)\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-5\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"район\" data-v-87b4174a></div></div><div class=\"col-3\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"город\" data-v-87b4174a></div></div><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"населённый пункт\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-4\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"улица\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"дом, корпус, строение\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"офис/квартира\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"номер а/я\" data-v-87b4174a></div></div></div><div class=\"row my-2\" data-v-87b4174a><div class=\"col-12\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"набор элементов адреса, представленных в свободной форме в виде текста\" data-v-87b4174a></div></div></div></div></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"personal-inf-block\" data-v-87b4174a><p data-v-87b4174a>Документ, удостоверяющий личность</p><div class=\"row my-2\" data-v-87b4174a><div class=\"row personal-data my-2\" data-v-87b4174a><div class=\"col-1\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"стр\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"код вида \" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"краткое наименование\" data-v-87b4174a></div></div><div class=\"col-5 d-flex\" data-v-87b4174a><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"серия\" data-v-87b4174a></div><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"номер\" data-v-87b4174a></div><div class=\"input-bg col-4\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"дата выдачи\" data-v-87b4174a></div></div><div class=\"col-2\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"Код подразделения\" data-v-87b4174a></div></div></div><div class=\"row\" data-v-87b4174a><div class=\"col-8\" data-v-87b4174a><div class=\"input-bg\" data-v-87b4174a><input type=\"text\" class=\"form-control\" placeholder=\"наименование организации, выдавшей документ\" data-v-87b4174a></div></div></div></div></div></div></div></div></div></div>", 1);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createCommentVNode("Region элемент хэдера блока с кнопками"),
    _hoisted_2$2,
    createCommentVNode("endregion"),
    createCommentVNode("Region элемент с информацией о партии, индивидуальной информацией об отправителе, с информацией о получателе"),
    createElementVNode("div", _hoisted_3$1, [
      createCommentVNode("Region элемент с общей информацией о партии"),
      createElementVNode("div", _hoisted_4$2, [
        createElementVNode("div", _hoisted_5, [
          _hoisted_6$1,
          createElementVNode("div", _hoisted_7$1, [
            createElementVNode("div", _hoisted_8$1, [
              createVNode(_component_router_link, {
                to: { name: 'index' },
                id: "productsInfoLink"
              }, {
                default: withCtx(() => [
                  _hoisted_9$1
                ]),
                _: 1 /* STABLE */
              }),
              createVNode(_component_router_link, { to: { name: 'index' } }, {
                default: withCtx(() => [
                  _hoisted_10$1
                ]),
                _: 1 /* STABLE */
              }),
              createVNode(_component_router_link, { to: { name: 'index' } }, {
                default: withCtx(() => [
                  _hoisted_11$1
                ]),
                _: 1 /* STABLE */
              }),
              createVNode(_component_router_link, { to: { name: 'index' } }, {
                default: withCtx(() => [
                  _hoisted_12$1
                ]),
                _: 1 /* STABLE */
              }),
              _hoisted_13$1,
              createVNode(_component_router_link, {
                to: { name: 'index' },
                class: "my-4"
              }, {
                default: withCtx(() => [
                  _hoisted_14$1
                ]),
                _: 1 /* STABLE */
              })
            ])
          ])
        ]),
        _hoisted_15
      ]),
      createCommentVNode("endregion"),
      createCommentVNode("Region элемент с индивидуальной информацией об отправителе"),
      _hoisted_16,
      createCommentVNode("endregion"),
      createCommentVNode("Region элемент с индивидуальной информацией о получателе"),
      _hoisted_17
    ])
  ]))
}

var css_248z$2 = "\nli a[data-v-87b4174a] {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active[data-v-87b4174a] {\n  color: orange;\n  background-color: green;\n}\n/*Стили текстовых инпутов*/\n.form-control[data-v-87b4174a] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-87b4174a]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-87b4174a]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-87b4174a] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n*[data-v-87b4174a] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n\n/*Region Стили блока декларации*/\n.declaration[data-v-87b4174a] {\n  background-color: #d1d1d1;\n  padding: 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\nh5[data-v-87b4174a] {\n  text-align: center;\n}\n.inf-block[data-v-87b4174a] {\n  margin-bottom: 10px;\n}\nlabel[data-v-87b4174a] {\n  margin-top: 7px;\n}\n.inputs-group > div[data-v-87b4174a] {\n  padding: unset;\n  min-width: 30px;\n  margin-right: 7px;\n}\n.form-check-input[data-v-87b4174a] {\n  min-width: 20px;\n  min-height: 20px;\n}\n.sheets-input[data-v-87b4174a] {\n  max-width: 70px;\n}\n.certificate-block div[data-v-87b4174a]:first-child {\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div[data-v-87b4174a] {\n  padding: 0;\n  margin-right: 6px;\n}\n\n/*Стили текстовых инпутов*/\n.form-control[data-v-87b4174a] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-87b4174a]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-87b4174a]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-87b4174a] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n\n/**/\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph[data-v-87b4174a] {\n  min-width: 250px;\n  max-width: 270px;\n  margin: 10px 0 auto 0;\n}\n\n/**/\n.changing-declaration .inf-block div[data-v-87b4174a] {\n  padding: unset;\n  margin-right: 5px;\n}\n.changing-code[data-v-87b4174a] {\n  margin-top: 10px;\n}\n\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code[data-v-87b4174a]::-webkit-outer-spin-button,\n.number-code[data-v-87b4174a]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n/**/\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form[data-v-87b4174a] {\n  padding: 0 10px 0 4px;\n}\n.batch-form div[data-v-87b4174a]:first-child {\n  padding-left: 0;\n}\n.batch-block[data-v-87b4174a] {\n  padding-left: 10px;\n}\n.batch-block div[data-v-87b4174a] {\n  padding: 0;\n}\n\n/**/\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information[data-v-87b4174a] {\n  width: fit-content;\n  color: gray;\n  text-decoration: underline;\n  font-size: 10px;\n}\n.payment-information[data-v-87b4174a]:hover {\n  cursor: pointer;\n}\n\n/**/\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i[data-v-87b4174a] {\n  transform: rotate(180deg);\n}\n.collapsing-block[data-v-87b4174a] {\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n.collapsing-block span[data-v-87b4174a],\ni[data-v-87b4174a] {\n  font-size: 14px;\n}\n\n/**/\n.card-body[data-v-87b4174a] {\n  background-color: unset;\n  border: 1px solid black;\n}\n.point-name[data-v-87b4174a] {\n  width: fit-content;\n  margin: auto auto 0;\n  color: #3274dd;\n  text-decoration: underline;\n}\n.personal-data div[data-v-87b4174a] {\n  padding: 0 0 0 3px;\n}\n\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative[data-v-87b4174a] {\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 0 8px;\n}\n\n/**/\n/*Стили кнопки календаря*/\n.button-calendar[data-v-87b4174a] {\n  background-color: white;\n  border: unset;\n  border-radius: 8px;\n}\n.button-calendar[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n\n/**/\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr[data-v-87b4174a] {\n  display: flex;\n  margin: 5px auto 0;\n}\n\n/*Стили блока информации о товарной партии*/\n.product-batch[data-v-87b4174a] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n\n/*Стиль синего хэдера с кнопками */\n.product-batch-header[data-v-87b4174a] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n.batch-button[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n.batch-button i[data-v-87b4174a]:before {\n  color: white;\n}\n.batch-button:last-child i[data-v-87b4174a] {\n  transform: rotate(180deg);\n}\n/**/\n.product-inner-block[data-v-87b4174a] {\n  padding: 10px;\n}\n.fs-12[data-v-87b4174a] {\n  font-size: 12px;\n}\n\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button[data-v-87b4174a] {\n  background-color: white;\n  border-radius: 5px;\n}\n.new-window-button[data-v-87b4174a]:hover {\n  box-shadow: unset;\n}\n.new-window-button[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n.new-window-button i[data-v-87b4174a] {\n  font-size: 15px;\n  color: #3274dd;\n}\n/**/\n\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors router-link[data-v-87b4174a] {\n  display: block;\n  color: gray;\n  text-decoration: underline;\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link[data-v-87b4174a]:hover {\n  color: blue;\n  cursor: pointer;\n}\n/**/\n.product-info-block[data-v-87b4174a] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.product-info-actions button[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n.product-info-actions i[data-v-87b4174a]:before {\n  color: white;\n}\n.product-info-actions .fa-sort-down[data-v-87b4174a]:before {\n  color: black;\n}\n.product-actions-button[data-v-87b4174a]:not(.collapsed) {\n  transform: rotate(180deg);\n}\n.btn-bg-white[data-v-87b4174a] {\n  background-color: white;\n  border-radius: 5px;\n}\n.btn-bg-white[data-v-87b4174a]:focus {\n  box-shadow: unset;\n}\n.fa-note-sticky[data-v-87b4174a] {\n  font-size: 16px;\n}\n\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block[data-v-87b4174a] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.optional-inf-header[data-v-87b4174a] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-87b4174a";
script$2.__file = "src/components/Form/GoodsAwbInformation.vue";

var script$1 = {
  name: "TsoftAdditionalDocumentForm",
};

const _hoisted_1$1 = {
  class: "optional-inf-block my-3",
  id: "extraDocBlock"
};
const _hoisted_2$1 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex optional-inf-header justify-content-between\" data-v-598fc5a6><h4 class=\"col-4\" data-v-598fc5a6>Сведения о дополнительном документе</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\" data-v-598fc5a6><div class=\"col-2\" data-v-598fc5a6><button class=\"btn product-actions-button\" data-v-598fc5a6><i class=\"fa-solid fa-plus\" data-v-598fc5a6></i></button></div><div class=\"col-2\" data-v-598fc5a6><button class=\"btn product-actions-button\" data-v-598fc5a6><i class=\"fa-solid fa-minus\" id=\"collapseButton2\" data-v-598fc5a6></i></button></div><div class=\"col-2\" data-v-598fc5a6><button class=\"btn product-actions-button\" data-v-598fc5a6><i class=\"fa-solid fa-border-top-left\" data-v-598fc5a6></i></button></div><div class=\"col-2\" data-v-598fc5a6><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-2Inner\" aria-expanded=\"true\" aria-controls=\"product-2Inner\" data-v-598fc5a6><i class=\"fa-solid fa-sort-down\" data-v-598fc5a6></i></button></div></div></div><div class=\"product-inner-block collapse\" id=\"product-2Inner\" data-v-598fc5a6><div class=\"optional-inf-card\" data-v-598fc5a6><div class=\"row\" data-v-598fc5a6><div class=\"d-flex\" data-v-598fc5a6><div class=\"col-5 d-flex\" data-v-598fc5a6><div class=\"col-3 d-flex\" data-v-598fc5a6><div class=\"col-8\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-1\" data-v-598fc5a6><p class=\"fs-3 my-0\" data-v-598fc5a6>/</p></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div><div class=\"col-9 ps-2\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div><div class=\"col-7 row\" data-v-598fc5a6><div class=\"col-2\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-3 d-flex\" data-v-598fc5a6><p class=\"align-bcntr pe-1\" data-v-598fc5a6>от</p><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"дата\" data-v-598fc5a6></div></div><div class=\"col-3 d-flex\" data-v-598fc5a6><p class=\"align-bcntr pe-1\" data-v-598fc5a6>с</p><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"дата начала\" data-v-598fc5a6></div></div><div class=\"col-3 d-flex\" data-v-598fc5a6><p class=\"align-bcntr pe-1\" data-v-598fc5a6>по</p><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"дата окончания\" data-v-598fc5a6></div></div><div class=\"col-1\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div></div></div><div class=\"row mt-3\" data-v-598fc5a6><div class=\"d-flex\" data-v-598fc5a6><div class=\"col-5 d-flex\" data-v-598fc5a6><div class=\"col-2\" data-v-598fc5a6><div class=\"row pe-4\" data-v-598fc5a6><div class=\"col-6\" data-v-598fc5a6><button class=\"btn\" data-v-598fc5a6><i class=\"fa-solid fa-bolt-lightning\" data-v-598fc5a6></i></button></div><div class=\"col-6\" data-v-598fc5a6><button class=\"btn\" data-v-598fc5a6><i class=\"fa-solid fa-folder-open\" data-v-598fc5a6></i></button></div></div><div class=\"row\" data-v-598fc5a6></div></div><div class=\"col-10 d-flex\" data-v-598fc5a6><div class=\"col-8\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"Полное наименование государственной\" data-v-598fc5a6></div></div><div class=\"col-4\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"AuthorityId\" data-v-598fc5a6></div></div></div></div><div class=\"col-7 d-flex\" data-v-598fc5a6><div class=\"col-4\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"Информационного ресурс\" data-v-598fc5a6></div></div><div class=\"col-5\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"URL\" data-v-598fc5a6></div></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" placeholder=\"Дата обращения\" data-v-598fc5a6></div></div></div></div></div><div class=\"row justify-content-center mt-2\" data-v-598fc5a6><div class=\"col-11\" data-v-598fc5a6><div class=\"\" data-v-598fc5a6><p class=\"align-bcntr\" data-v-598fc5a6> Сведения о фактическом представлении документа </p></div><div class=\"d-flex\" data-v-598fc5a6><div class=\"col-2 d-flex\" data-v-598fc5a6><div class=\"input-bg col-4\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div><div class=\"input-bg col-8\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-5 d-flex\" data-v-598fc5a6><div class=\"align-bcntr\" data-v-598fc5a6><p class=\"col-1 align-bcntr\" data-v-598fc5a6>ДТ</p></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-4\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-1\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div><div class=\"col-5 d-flex\" data-v-598fc5a6><div class=\"align-bcntr\" data-v-598fc5a6><p class=\"col-1 align-bcntr\" data-v-598fc5a6>ТС</p></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-4\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-1\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div></div><div class=\"d-flex mt-2\" data-v-598fc5a6><div class=\"col-2 d-flex\" data-v-598fc5a6><div class=\"col-1\" data-v-598fc5a6></div><div class=\"col-2 align-bcntr\" data-v-598fc5a6><p class=\"align-bcntr\" data-v-598fc5a6>TIR</p></div><div class=\"col-2\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-7\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div><div class=\"col-6 d-flex\" data-v-598fc5a6><div class=\"col-3 align-bcntr\" data-v-598fc5a6><p class=\"align-bcntr\" data-v-598fc5a6>Иной документ</p></div><div class=\"col-6\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div><div class=\"col-3\" data-v-598fc5a6><div class=\"input-bg\" data-v-598fc5a6><input type=\"text\" class=\"form-control\" data-v-598fc5a6></div></div></div></div></div></div></div></div>", 2);
const _hoisted_4$1 = [
  _hoisted_2$1
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_4$1))
}

var css_248z$1 = "\nli a[data-v-598fc5a6] {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active[data-v-598fc5a6] {\n  color: orange;\n  background-color: green;\n}\n/*Стили текстовых инпутов*/\n.form-control[data-v-598fc5a6] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-598fc5a6]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-598fc5a6]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-598fc5a6] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n*[data-v-598fc5a6] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n\n/*Region Стили блока декларации*/\n.declaration[data-v-598fc5a6] {\n  background-color: #d1d1d1;\n  padding: 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\nh5[data-v-598fc5a6] {\n  text-align: center;\n}\n.inf-block[data-v-598fc5a6] {\n  margin-bottom: 10px;\n}\nlabel[data-v-598fc5a6] {\n  margin-top: 7px;\n}\n.inputs-group > div[data-v-598fc5a6] {\n  padding: unset;\n  min-width: 30px;\n  margin-right: 7px;\n}\n.form-check-input[data-v-598fc5a6] {\n  min-width: 20px;\n  min-height: 20px;\n}\n.sheets-input[data-v-598fc5a6] {\n  max-width: 70px;\n}\n.certificate-block div[data-v-598fc5a6]:first-child {\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div[data-v-598fc5a6] {\n  padding: 0;\n  margin-right: 6px;\n}\n\n/*Стили текстовых инпутов*/\n.form-control[data-v-598fc5a6] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-598fc5a6]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-598fc5a6]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-598fc5a6] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n\n/**/\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph[data-v-598fc5a6] {\n  min-width: 250px;\n  max-width: 270px;\n  margin: 10px 0 auto 0;\n}\n\n/**/\n.changing-declaration .inf-block div[data-v-598fc5a6] {\n  padding: unset;\n  margin-right: 5px;\n}\n.changing-code[data-v-598fc5a6] {\n  margin-top: 10px;\n}\n\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code[data-v-598fc5a6]::-webkit-outer-spin-button,\n.number-code[data-v-598fc5a6]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n/**/\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form[data-v-598fc5a6] {\n  padding: 0 10px 0 4px;\n}\n.batch-form div[data-v-598fc5a6]:first-child {\n  padding-left: 0;\n}\n.batch-block[data-v-598fc5a6] {\n  padding-left: 10px;\n}\n.batch-block div[data-v-598fc5a6] {\n  padding: 0;\n}\n\n/**/\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information[data-v-598fc5a6] {\n  width: fit-content;\n  color: gray;\n  text-decoration: underline;\n  font-size: 10px;\n}\n.payment-information[data-v-598fc5a6]:hover {\n  cursor: pointer;\n}\n\n/**/\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i[data-v-598fc5a6] {\n  transform: rotate(180deg);\n}\n.collapsing-block[data-v-598fc5a6] {\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n.collapsing-block span[data-v-598fc5a6],\ni[data-v-598fc5a6] {\n  font-size: 14px;\n}\n\n/**/\n.card-body[data-v-598fc5a6] {\n  background-color: unset;\n  border: 1px solid black;\n}\n.point-name[data-v-598fc5a6] {\n  width: fit-content;\n  margin: auto auto 0;\n  color: #3274dd;\n  text-decoration: underline;\n}\n.personal-data div[data-v-598fc5a6] {\n  padding: 0 0 0 3px;\n}\n\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative[data-v-598fc5a6] {\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 0 8px;\n}\n\n/**/\n/*Стили кнопки календаря*/\n.button-calendar[data-v-598fc5a6] {\n  background-color: white;\n  border: unset;\n  border-radius: 8px;\n}\n.button-calendar[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n\n/**/\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr[data-v-598fc5a6] {\n  display: flex;\n  margin: 5px auto 0;\n}\n\n/*Стили блока информации о товарной партии*/\n.product-batch[data-v-598fc5a6] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n\n/*Стиль синего хэдера с кнопками */\n.product-batch-header[data-v-598fc5a6] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n.batch-button[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n.batch-button i[data-v-598fc5a6]:before {\n  color: white;\n}\n.batch-button:last-child i[data-v-598fc5a6] {\n  transform: rotate(180deg);\n}\n/**/\n.product-inner-block[data-v-598fc5a6] {\n  padding: 10px;\n}\n.fs-12[data-v-598fc5a6] {\n  font-size: 12px;\n}\n\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button[data-v-598fc5a6] {\n  background-color: white;\n  border-radius: 5px;\n}\n.new-window-button[data-v-598fc5a6]:hover {\n  box-shadow: unset;\n}\n.new-window-button[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n.new-window-button i[data-v-598fc5a6] {\n  font-size: 15px;\n  color: #3274dd;\n}\n/**/\n\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors router-link[data-v-598fc5a6] {\n  display: block;\n  color: gray;\n  text-decoration: underline;\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link[data-v-598fc5a6]:hover {\n  color: blue;\n  cursor: pointer;\n}\n/**/\n.product-info-block[data-v-598fc5a6] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.product-info-actions button[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n.product-info-actions i[data-v-598fc5a6]:before {\n  color: white;\n}\n.product-info-actions .fa-sort-down[data-v-598fc5a6]:before {\n  color: black;\n}\n.product-actions-button[data-v-598fc5a6]:not(.collapsed) {\n  transform: rotate(180deg);\n}\n.btn-bg-white[data-v-598fc5a6] {\n  background-color: white;\n  border-radius: 5px;\n}\n.btn-bg-white[data-v-598fc5a6]:focus {\n  box-shadow: unset;\n}\n.fa-note-sticky[data-v-598fc5a6] {\n  font-size: 16px;\n}\n\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block[data-v-598fc5a6] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.optional-inf-header[data-v-598fc5a6] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-598fc5a6";
script$1.__file = "src/components/Form/AdditionalDocument.vue";

var script = {
  name: "TsoftGoodInformationForm",
};

const _hoisted_1 = {
  class: "product-info-block my-3",
  id: "productInvoiceBlock"
};
const _hoisted_2 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\" data-v-d878b218><h4 class=\"col-4\" data-v-d878b218>Товар (1 из 2)</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\" data-v-d878b218><div class=\"col-2\" data-v-d878b218><button class=\"btn product-actions-button\" data-v-d878b218><i class=\"fa-solid fa-plus\" data-v-d878b218></i></button></div><div class=\"col-2\" data-v-d878b218><button class=\"btn product-actions-button\" data-v-d878b218><i class=\"fa-solid fa-minus\" id=\"collapseButton\" data-v-d878b218></i></button></div><div class=\"col-2\" data-v-d878b218><button class=\"btn product-actions-button\" data-v-d878b218><i class=\"fa-solid fa-border-top-left\" data-v-d878b218></i></button></div><div class=\"col-2\" data-v-d878b218><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-1Inner\" aria-expanded=\"true\" aria-controls=\"product-1Inner\" data-v-d878b218><i class=\"fa-solid fa-sort-down\" data-v-d878b218></i></button></div></div></div>", 1);
const _hoisted_3 = {
  class: "product-inner-block collapse",
  id: "product-1Inner"
};
const _hoisted_4 = /*#__PURE__*/createStaticVNode("<div class=\"row\" data-v-d878b218><div class=\"col-1\" data-v-d878b218><div class=\"col-9\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div><div class=\"col input-bg mt-3\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div><div class=\"col-8\" data-v-d878b218><div class=\"input-bg h-100\" data-v-d878b218><textarea type=\"text\" class=\"form-control h-100\" data-v-d878b218></textarea></div></div><div class=\"col-3\" data-v-d878b218><div class=\"changing-code\" data-v-d878b218><div class=\"label-block\" data-v-d878b218><label class=\"fs-5\" for=\"\" data-v-d878b218>Код изменений</label></div><div class=\"col-9 d-flex\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"number\" data-v-d878b218></div><button class=\"btn info-button p-1\" data-v-d878b218><i class=\"fa-solid fa-circle-info\" data-v-d878b218></i></button></div><div class=\"col-2\" data-v-d878b218></div></div></div></div><div class=\"row\" data-v-d878b218><div class=\"col-3\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col-5\" data-v-d878b218><p class=\"col-11 align-bcntr\" data-v-d878b218>ТН ВЭД ЕАЭС</p><div class=\"col-11 input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-7\" data-v-d878b218><p class=\"align-bcntr\" data-v-d878b218>Вес, брутто</p><div class=\"d-flex\" data-v-d878b218><div class=\"col-6\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-6 d-flex\" data-v-d878b218><div class=\"col-5\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-7\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control number-code\" type=\"text\" data-v-d878b218></div></div></div></div></div></div><div class=\"d-flex mt-2\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" placeholder=\"наименование товарного знака, объекта авторского\" data-v-d878b218></div></div></div><div class=\"col-6\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col-4\" data-v-d878b218><p class=\"align-bcntr\" data-v-d878b218>Вес, нетто</p><div class=\"d-flex\" data-v-d878b218><div class=\"col-6\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-6\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col-5\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-7\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div></div></div></div><div class=\"col-4\" data-v-d878b218><p class=\"align-bcntr\" data-v-d878b218>Количество</p><div class=\"d-flex\" data-v-d878b218><div class=\"col-5\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-7\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col-5\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-7\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div></div></div></div><div class=\"col-4\" data-v-d878b218><p class=\"align-bcntr\" data-v-d878b218>Таможенная стоимость</p><div class=\"d-flex\" data-v-d878b218><div class=\"col-7\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-3\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div><div class=\"col-2\" data-v-d878b218><button class=\"btn btn-bg-white\" data-v-d878b218><i class=\"fa-solid fa-note-sticky\" data-v-d878b218></i></button></div></div></div></div><div class=\"d-flex mt-2\" data-v-d878b218><div class=\"col-6\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" placeholder=\"наименование места происх.\" data-v-d878b218></div></div><div class=\"col-6 d-flex\" data-v-d878b218><p class=\"align-bcntr ps-2\" data-v-d878b218>Трансп. расх.</p><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div></div><div class=\"col-3\" data-v-d878b218><div class=\"\" data-v-d878b218><p class=\"align-bcntr\" data-v-d878b218>Фактурная стоимость</p><div class=\"d-flex\" data-v-d878b218><div class=\"col-8\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-4\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div></div><div class=\"d-flex mt-2\" data-v-d878b218><div class=\"d-flex\" data-v-d878b218><div class=\"col-8\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div><div class=\"col-4\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div></div></div></div></div>", 2);
const _hoisted_6 = { class: "row" };
const _hoisted_7 = { class: "col-9 d-flex" };
const _hoisted_8 = /*#__PURE__*/createStaticVNode("<div class=\"col-9 d-flex\" data-v-d878b218><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" placeholder=\"примечание\" data-v-d878b218></div><div class=\"col input-bg\" data-v-d878b218><input class=\"form-control\" type=\"text\" data-v-d878b218></div></div>", 1);
const _hoisted_9 = { class: "col-3 d-flex batch-info-anchors" };
const _hoisted_10 = /*#__PURE__*/createTextVNode("РОИС");
const _hoisted_11 = /*#__PURE__*/createTextVNode("Предшествующий документ");
const _hoisted_12 = { class: "col-3 d-flex" };
const _hoisted_13 = { class: "d-flex batch-info-anchors" };
const _hoisted_14 = /*#__PURE__*/createTextVNode("Дополнительный документ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createElementVNode("div", _hoisted_3, [
      _hoisted_4,
      createElementVNode("div", _hoisted_6, [
        createElementVNode("div", _hoisted_7, [
          _hoisted_8,
          createElementVNode("div", _hoisted_9, [
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        createElementVNode("div", _hoisted_12, [
          createElementVNode("div", _hoisted_13, [
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr",
              id: "extraDocLink"
            }, {
              default: withCtx(() => [
                _hoisted_14
              ]),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ])
  ]))
}

var css_248z = "\nli a[data-v-d878b218] {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active[data-v-d878b218] {\n  color: orange;\n  background-color: green;\n}\n/*Стили текстовых инпутов*/\n.form-control[data-v-d878b218] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-d878b218]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-d878b218]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-d878b218] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n*[data-v-d878b218] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n\n/*Region Стили блока декларации*/\n.declaration[data-v-d878b218] {\n  background-color: #d1d1d1;\n  padding: 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\nh5[data-v-d878b218] {\n  text-align: center;\n}\n.inf-block[data-v-d878b218] {\n  margin-bottom: 10px;\n}\nlabel[data-v-d878b218] {\n  margin-top: 7px;\n}\n.inputs-group > div[data-v-d878b218] {\n  padding: unset;\n  min-width: 30px;\n  margin-right: 7px;\n}\n.form-check-input[data-v-d878b218] {\n  min-width: 20px;\n  min-height: 20px;\n}\n.sheets-input[data-v-d878b218] {\n  max-width: 70px;\n}\n.certificate-block div[data-v-d878b218]:first-child {\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div[data-v-d878b218] {\n  padding: 0;\n  margin-right: 6px;\n}\n\n/*Стили текстовых инпутов*/\n.form-control[data-v-d878b218] {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control[data-v-d878b218]:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control[data-v-d878b218]::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input[data-v-d878b218] {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n\n/**/\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph[data-v-d878b218] {\n  min-width: 250px;\n  max-width: 270px;\n  margin: 10px 0 auto 0;\n}\n\n/**/\n.changing-declaration .inf-block div[data-v-d878b218] {\n  padding: unset;\n  margin-right: 5px;\n}\n.changing-code[data-v-d878b218] {\n  margin-top: 10px;\n}\n\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code[data-v-d878b218]::-webkit-outer-spin-button,\n.number-code[data-v-d878b218]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n/**/\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form[data-v-d878b218] {\n  padding: 0 10px 0 4px;\n}\n.batch-form div[data-v-d878b218]:first-child {\n  padding-left: 0;\n}\n.batch-block[data-v-d878b218] {\n  padding-left: 10px;\n}\n.batch-block div[data-v-d878b218] {\n  padding: 0;\n}\n\n/**/\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information[data-v-d878b218] {\n  width: fit-content;\n  color: gray;\n  text-decoration: underline;\n  font-size: 10px;\n}\n.payment-information[data-v-d878b218]:hover {\n  cursor: pointer;\n}\n\n/**/\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i[data-v-d878b218] {\n  transform: rotate(180deg);\n}\n.collapsing-block[data-v-d878b218] {\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n.collapsing-block span[data-v-d878b218],\ni[data-v-d878b218] {\n  font-size: 14px;\n}\n\n/**/\n.card-body[data-v-d878b218] {\n  background-color: unset;\n  border: 1px solid black;\n}\n.point-name[data-v-d878b218] {\n  width: fit-content;\n  margin: auto auto 0;\n  color: #3274dd;\n  text-decoration: underline;\n}\n.personal-data div[data-v-d878b218] {\n  padding: 0 0 0 3px;\n}\n\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative[data-v-d878b218] {\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 0 8px;\n}\n\n/**/\n/*Стили кнопки календаря*/\n.button-calendar[data-v-d878b218] {\n  background-color: white;\n  border: unset;\n  border-radius: 8px;\n}\n.button-calendar[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n\n/**/\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr[data-v-d878b218] {\n  display: flex;\n  margin: 5px auto 0;\n}\n\n/*Стили блока информации о товарной партии*/\n.product-batch[data-v-d878b218] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n\n/*Стиль синего хэдера с кнопками */\n.product-batch-header[data-v-d878b218] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n.batch-button[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n.batch-button i[data-v-d878b218]:before {\n  color: white;\n}\n.batch-button:last-child i[data-v-d878b218] {\n  transform: rotate(180deg);\n}\n/**/\n.product-inner-block[data-v-d878b218] {\n  padding: 10px;\n}\n.fs-12[data-v-d878b218] {\n  font-size: 12px;\n}\n\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button[data-v-d878b218] {\n  background-color: white;\n  border-radius: 5px;\n}\n.new-window-button[data-v-d878b218]:hover {\n  box-shadow: unset;\n}\n.new-window-button[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n.new-window-button i[data-v-d878b218] {\n  font-size: 15px;\n  color: #3274dd;\n}\n/**/\n\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors router-link[data-v-d878b218] {\n  display: block;\n  color: gray;\n  text-decoration: underline;\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link[data-v-d878b218]:hover {\n  color: blue;\n  cursor: pointer;\n}\n/**/\n.product-info-block[data-v-d878b218] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.product-info-actions button[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n.product-info-actions i[data-v-d878b218]:before {\n  color: white;\n}\n.product-info-actions .fa-sort-down[data-v-d878b218]:before {\n  color: black;\n}\n.product-actions-button[data-v-d878b218]:not(.collapsed) {\n  transform: rotate(180deg);\n}\n.btn-bg-white[data-v-d878b218] {\n  background-color: white;\n  border-radius: 5px;\n}\n.btn-bg-white[data-v-d878b218]:focus {\n  box-shadow: unset;\n}\n.fa-note-sticky[data-v-d878b218] {\n  font-size: 16px;\n}\n\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block[data-v-d878b218] {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n}\n.optional-inf-header[data-v-d878b218] {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-d878b218";
script.__file = "src/components/Form/GoodInformation.vue";

var components = { 
    InputTextarea: script$b,
    InputText: script$c,
    TsoftTable: script$a,
    TsoftTree: script$8,
    TsoftLeftmenuFolder: script$4,
    TsoftGeneralDeclarantionForm: script$3,
    TsoftGoodsAwbInformationForm: script$2,
    TsoftAdditionalDocumentForm: script$1,
    TsoftGoodInformationForm: script
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

export { plugin as default };
