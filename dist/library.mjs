import { openBlock, createElementBlock, resolveComponent, createElementVNode, normalizeClass, Fragment, renderList, toDisplayString, createBlock, withCtx, createTextVNode, pushScopeId, popScopeId, createCommentVNode, createVNode, withDirectives, vShow, vModelText, vModelCheckbox, createStaticVNode } from 'vue';

var script$g = {
  name: 'InputText'
};

const _hoisted_1$e = { type: "text" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$e))
}

script$g.render = render$g;
script$g.__file = "src/InputText.vue";

var script$f = {
  name: 'InputTextarea'
};

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
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

const _withScopeId$4 = n => (pushScopeId("data-v-647119ad"),n=n(),popScopeId(),n);
const _hoisted_1$d = { class: "content" };
const _hoisted_2$d = { class: "row section" };
const _hoisted_3$a = { class: "table-section" };
const _hoisted_4$9 = { class: "slider-block" };
const _hoisted_5$8 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Предыдущий", -1 /* HOISTED */));
const _hoisted_6$6 = [
  _hoisted_5$8
];
const _hoisted_7$6 = /*#__PURE__*/ _withScopeId$4(() => /*#__PURE__*/createElementVNode("span", { class: "visually-hidden" }, "Следующий", -1 /* HOISTED */));
const _hoisted_8$6 = [
  _hoisted_7$6
];
const _hoisted_9$5 = { class: "table" };
const _hoisted_10$5 = { class: "thead" };
const _hoisted_11$4 = { class: "tbody" };
const _hoisted_12$4 = { key: 1 };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$d, [
    createElementVNode("div", _hoisted_2$d, [
      createElementVNode("div", _hoisted_3$a, [
        createElementVNode("div", _hoisted_4$9, [
          createElementVNode("div", {
            class: normalizeClass(["control-prev btn-left", { active: this.leftScroll }]),
            id: "tableSliderLeft",
            "data-bs-slide": "prev",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[0] || (_cache[0] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.moveLeft && $options.moveLeft(...args)))
          }, _hoisted_6$6, 34 /* CLASS, HYDRATE_EVENTS */),
          createElementVNode("div", {
            class: "control-next btn-right",
            id: "tableSliderRight",
            "data-bs-slide": "next",
            style: {"transform":"translate3d(0px, 48px, 0px)"},
            onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.stop && $options.stop(...args))),
            onMouseover: _cache[3] || (_cache[3] = (...args) => ($options.moveRight && $options.moveRight(...args)))
          }, _hoisted_8$6, 32 /* HYDRATE_EVENTS */)
        ]),
        createElementVNode("div", {
          class: "table-responsive table-statuses",
          id: "tableResponsive",
          onScroll: _cache[4] || (_cache[4] = (...args) => ($options.move && $options.move(...args)))
        }, [
          createElementVNode("table", _hoisted_9$5, [
            createElementVNode("thead", _hoisted_10$5, [
              createElementVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.titles, (title) => {
                  return (openBlock(), createElementBlock("th", { key: title }, toDisplayString(title), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            createElementVNode("tbody", _hoisted_11$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (row, index) => {
                return (openBlock(), createElementBlock("tr", {
                  class: "document-row",
                  key: index
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (value, key) => {
                    return (openBlock(), createElementBlock("td", { key: key }, [
                      (key === 'num')
                        ? (openBlock(), createBlock(_component_router_link, {
                            key: 0,
                            to: {name: 'declaration', params: {reester_id: index}}
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(value), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                        : (openBlock(), createElementBlock("p", _hoisted_12$4, toDisplayString(value), 1 /* TEXT */))
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

var css_248z$7 = "\n#tableResponsive[data-v-647119ad] {\n  background: rgb(253, 253, 253);\n  box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);\n}\n.content[data-v-647119ad] {\n  padding: 20px 0 20px 20px;\n}\n.tbody td p[data-v-647119ad] {\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\n  border: 1px solid black;\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 10px;\n  width: auto;\n}\nth p[data-v-647119ad] {\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\n  border: 1px solid #ccc;\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\n  margin: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\n  font-size: 13px;\n  line-height: 18px;\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\n  color: #aaaaaa;\n  font-size: 12px;\n  line-height: 0 !important;\n  text-transform: uppercase;\n  border-top: 2px solid #e4e4e4;\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\n.table td[data-v-647119ad] {\n  margin: 0.75rem;\n  vertical-align: top;\n  /* border: 1px solid #dee2e6; */\n}\n.table-section[data-v-647119ad] {\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\n  display: flex;\n  justify-content: space-between;\n  height: 0;\n  position: sticky;\n  top: 200px;\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\n    center left no-repeat;\n  position: absolute;\n  left: 0;\n}\n.control-next[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\n    center right no-repeat;\n  position: absolute;\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\n  color: black;\n}\n.t-folder[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n";
styleInject(css_248z$7);

script$e.render = render$e;
script$e.__scopeId = "data-v-647119ad";
script$e.__file = "src/components/Table/Table.vue";

var script$d = {
  name: "node",
  props: {
    node: Object,
  },
};

const _hoisted_1$c = { class: "node-tree" };
const _hoisted_2$c = { class: "label" };
const _hoisted_3$9 = { key: 0 };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = resolveComponent("node");

  return (openBlock(), createElementBlock("li", _hoisted_1$c, [
    createElementVNode("span", _hoisted_2$c, toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_3$9, [
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

const _hoisted_1$b = { class: "tree" };
const _hoisted_2$b = { class: "tree-list" };

function render$c(_ctx, _cache) {
  const _component_node_tree = resolveComponent("node-tree");

  return (openBlock(), createElementBlock("div", _hoisted_1$b, [
    createElementVNode("ul", _hoisted_2$b, [
      createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$6 = "\n.tree-list ul {\n  padding-left: 16px;\n  margin: 6px 0;\n}\n";
styleInject(css_248z$6);

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

const _withScopeId$3 = n => (pushScopeId("data-v-f314cfaa"),n=n(),popScopeId(),n);
const _hoisted_1$a = { class: "file-row" };
const _hoisted_2$a = { class: "file" };
const _hoisted_3$8 = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/createElementVNode("i", { class: "fas fa-file" }, null, -1 /* HOISTED */));
const _hoisted_4$8 = { class: "file-name" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("div", _hoisted_2$a, [
      _hoisted_3$8,
      createElementVNode("span", _hoisted_4$8, toDisplayString($props.filename), 1 /* TEXT */)
    ])
  ]))
}

var css_248z$5 = "\n.file-name[data-v-f314cfaa]:hover {\n  color: #e67926;\n}\n.fa-file[data-v-f314cfaa] {\n  color: #252525;\n}\n.file[data-v-f314cfaa] {\n  margin-left: 18px;\n  white-space: nowrap;\n}\n.file-name[data-v-f314cfaa] {\n  margin-left: 9px;\n}\n.file-name[data-v-f314cfaa] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n";
styleInject(css_248z$5);

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
    },
    someProps: ''
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
        this.$emit('getData', {
          info: name,
        });
        alert('done');
        console.log(this.info);
        console.log(name);
      } else {
        alert(2);
      }
    }
  },
  mounted() {
    // console.log(this.treeData.settings);
  }
};

const _withScopeId$2 = n => (pushScopeId("data-v-61a6cc5d"),n=n(),popScopeId(),n);
const _hoisted_1$9 = { class: "folder-row" };
const _hoisted_2$9 = { class: "folder-container" };
const _hoisted_3$7 = ["onClick"];
const _hoisted_4$7 = /*#__PURE__*/ _withScopeId$2(() => /*#__PURE__*/createElementVNode("i", { class: "fas fa-folder folder-icon" }, null, -1 /* HOISTED */));
const _hoisted_5$7 = ["onClick"];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = resolveComponent("tree-folder", true);
  const _component_tree_file = resolveComponent("tree-file");

  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(this.treeData.folders, (folder, folderName) => {
      return (openBlock(), createElementBlock("div", {
        class: "folder",
        key: folderName
      }, [
        createElementVNode("div", _hoisted_2$9, [
          createElementVNode("i", {
            class: normalizeClass(["fa-solid fa-angle-right", {'down-rotate': folder.settings.isOpen}]),
            onClick: $event => ($options.toggle(folderName))
          }, null, 10 /* CLASS, PROPS */, _hoisted_3$7),
          _hoisted_4$7,
          createElementVNode("span", {
            class: "folder-name",
            onClick: $event => ($options.getRegisters(folderName))
          }, toDisplayString(folderName), 9 /* TEXT, PROPS */, _hoisted_5$7)
        ]),
        createElementVNode("div", {
          class: normalizeClass(["file-content", {'content-open': folder.settings.isOpen}])
        }, [
          withDirectives(createVNode(_component_tree_folder, { "tree-data": folder }, null, 8 /* PROPS */, ["tree-data"]), [
            [vShow, folder.settings.isOpen]
          ])
        ], 2 /* CLASS */)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(this.treeData.files, (filename, filetype) => {
      return (openBlock(), createBlock(_component_tree_file, {
        filename: filename,
        key: filetype
      }, null, 8 /* PROPS */, ["filename"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

var css_248z$4 = "\n.toggle-icon[data-v-61a6cc5d] {\n  height: 16px;\n  width: 8px;\n  display: flex;\n}\n.file-content[data-v-61a6cc5d] {\n  padding-left: 21px;\n  margin-right: -20px;\n  height: 0;\n  overflow: unset;\n  opacity: 0;\n  transition: all 0s;\n}\n.content-open[data-v-61a6cc5d] {\n  height: fit-content;\n  overflow: unset;\n  opacity: 1;\n  transition: all 0.5s;\n}\n.folder-container[data-v-61a6cc5d] {\n  white-space: nowrap;\n}\n.folder-container.empty[data-v-61a6cc5d] {\n  margin-left: 15px;\n}\n.folder-row[data-v-61a6cc5d] {\n  width: fit-content;\n}\n.folder-name[data-v-61a6cc5d] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n.folder-name[data-v-61a6cc5d]:hover {\n  color: #e67926;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  color: rgb(190, 190, 190);\n  margin-right: 7px;\n  cursor: pointer;\n}\n.fa-angle-right[data-v-61a6cc5d] {\n  transition: 0.15s;\n}\n.fa-angle-right.down-rotate[data-v-61a6cc5d] {\n  transform: rotate(90deg);\n  transition: 0.15s;\n}\n.fa-folder[data-v-61a6cc5d] {\n  color: #e67926;\n  margin-right: 7px;\n}\n";
styleInject(css_248z$4);

script$a.render = render$a;
script$a.__scopeId = "data-v-61a6cc5d";
script$a.__file = "src/components/Tree/TreeFolder.vue";

var script$9 = {
  name: "TreeFileSystem",
  components: {
    TreeFolder: script$a,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_folder = resolveComponent("tree-folder");

  return (openBlock(), createBlock(_component_tree_folder, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"]))
}

script$9.render = render$9;
script$9.__file = "src/components/Tree/TreeFileSystem.vue";

var script$8 = {
  name: "TsoftLeftmenuFolder",
  components: {
    TreeFileSystem: script$9,
  },
  props: {
    treeData: {
      required: true,
    },
  },
};

const _hoisted_1$8 = { class: "menu-sitemap-tree" };
const _hoisted_2$8 = { class: "file-system" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_file_system = resolveComponent("tree-file-system");

  return (openBlock(), createElementBlock("div", _hoisted_1$8, [
    createElementVNode("div", _hoisted_2$8, [
      createVNode(_component_tree_file_system, { "tree-data": $props.treeData }, null, 8 /* PROPS */, ["tree-data"])
    ])
  ]))
}

var css_248z$3 = "\n.menu-sitemap-tree[data-v-647b20c4] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  height: 685px;\n}\n.file-system[data-v-647b20c4] {\n  background: rgb(253, 253, 253);\n  border: 1px solid #ccc;\n  padding: 10px;\n  overflow: auto;\n  height: 100%;\n}\n";
styleInject(css_248z$3);

script$8.render = render$8;
script$8.__scopeId = "data-v-647b20c4";
script$8.__file = "src/components/Menu/LeftmenuFolder.vue";

var script$7 = {
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

const _hoisted_1$7 = {
  class: "declaration mb-3",
  id: "declaration"
};
const _hoisted_2$7 = { class: "common-inf" };
const _hoisted_3$6 = { class: "row" };
const _hoisted_4$6 = { class: "inf-block" };
const _hoisted_5$6 = /*#__PURE__*/createTextVNode(" Подан с ДТ: ");
const _hoisted_6$5 = /*#__PURE__*/createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/createElementVNode("div", { class: "inf-block" }, [
    /*#__PURE__*/createElementVNode("h4", { class: "declaration-title" }, " Декларация на товары и пассажирская таможенная декларация для экспресс-грузов ")
  ])
], -1 /* HOISTED */);
const _hoisted_7$5 = { class: "row" };
const _hoisted_8$5 = { class: "inf-block row col-12 justify-content-between" };
const _hoisted_9$4 = { class: "checkbox-block d-flex col-2" };
const _hoisted_10$4 = { class: "checkbox-bg col-2" };
const _hoisted_11$3 = ["checked"];
const _hoisted_12$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/createElementVNode("label", null, "ДТЭГ")
], -1 /* HOISTED */);
const _hoisted_13$3 = { class: "checkbox-bg col-2" };
const _hoisted_14$3 = ["checked"];
const _hoisted_15$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/createElementVNode("label", null, "ПТДЭГ")
], -1 /* HOISTED */);
const _hoisted_16$3 = { class: "checkbox-block d-flex col-2" };
const _hoisted_17$3 = { class: "checkbox-bg col-2" };
const _hoisted_18$3 = ["checked"];
const _hoisted_19$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/createElementVNode("label", null, "ИМ")
], -1 /* HOISTED */);
const _hoisted_20$3 = { class: "checkbox-bg col-2" };
const _hoisted_21$3 = ["checked"];
const _hoisted_22$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3" }, [
  /*#__PURE__*/createElementVNode("label", null, "ЭК")
], -1 /* HOISTED */);
const _hoisted_23$3 = { class: "declaration-number-block justify-content-end d-flex col-5" };
const _hoisted_24$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, "№")
], -1 /* HOISTED */);
const _hoisted_25$3 = { class: "input-bg col-10" };
const _hoisted_26$3 = /*#__PURE__*/createElementVNode("div", { class: "col-3" }, null, -1 /* HOISTED */);
const _hoisted_27$3 = { class: "row" };
const _hoisted_28$3 = { class: "inf-block row col-12" };
const _hoisted_29$3 = { class: "inputs-group d-flex col-2" };
const _hoisted_30$3 = { class: "col-2" };
const _hoisted_31$3 = { class: "col-2" };
const _hoisted_32$3 = { class: "col-3" };
const _hoisted_33$3 = { class: "col-2" };
const _hoisted_34$3 = { class: "sheets-block d-flex col-2" };
const _hoisted_35$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-4" }, [
  /*#__PURE__*/createElementVNode("label", null, "Листов")
], -1 /* HOISTED */);
const _hoisted_36$3 = { class: "input-bg col-8" };
const _hoisted_37$3 = { class: "registry-number-block d-flex justify-content-end col-5" };
const _hoisted_38$3 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", { for: "registryNumber" }, "Рег. №")
], -1 /* HOISTED */);
const _hoisted_39$3 = { class: "input-bg col-10" };
const _hoisted_40$3 = { class: "registry-changes d-flex col-3" };
const _hoisted_41$3 = { class: "input-bg" };
const _hoisted_42$3 = /*#__PURE__*/createElementVNode("label", null, "- реестр с внесёнными изменениями", -1 /* HOISTED */);
const _hoisted_43$3 = { class: "row" };
const _hoisted_44$3 = { class: "inf-block d-grid" };
const _hoisted_45$3 = { class: "row col-12" };
const _hoisted_46$3 = { class: "col-6" };
const _hoisted_47$3 = /*#__PURE__*/createElementVNode("label", { class: "express-courier-label" }, "Экспресс перевозчик", -1 /* HOISTED */);
const _hoisted_48$3 = { class: "express-courier-block col-12 d-flex" };
const _hoisted_49$3 = { class: "col-1" };
const _hoisted_50$3 = { class: "col-11" };
const _hoisted_51$3 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_52$3 = /*#__PURE__*/createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/createElementVNode("div", { class: "inf-paragraph" }, [
    /*#__PURE__*/createElementVNode("p", null, " Регистрационный номер декларации, в которую вносятся изменения ")
  ])
], -1 /* HOISTED */);
const _hoisted_53$3 = { class: "row col-12" };
const _hoisted_54$3 = { class: "col-6" };
const _hoisted_55$3 = { class: "" };
const _hoisted_56$3 = /*#__PURE__*/createElementVNode("div", { class: "" }, [
  /*#__PURE__*/createElementVNode("h4", null, "Свидетельство о включении в"),
  /*#__PURE__*/createElementVNode("p", null, " реестр УЭО, реестр владельцев СВХ, складов хранения собственных товаров, таможенных складов, свободных складов или магазинов БТ ")
], -1 /* HOISTED */);
const _hoisted_57$3 = { class: "certificate-block row col-12" };
const _hoisted_58$3 = { class: "input-bg col-1" };
const _hoisted_59$3 = { class: "input-bg col-1" };
const _hoisted_60$3 = { class: "input-bg col-7" };
const _hoisted_61$3 = { class: "input-bg col-1" };
const _hoisted_62$3 = { class: "input-bg col-1" };
const _hoisted_63$3 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
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
const _hoisted_72$3 = /*#__PURE__*/createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_73$3 = { class: "col-8 d-flex" };
const _hoisted_74$3 = { class: "col input-bg" };
const _hoisted_75$3 = { class: "col input-bg" };
const _hoisted_76$3 = { class: "col input-bg" };
const _hoisted_77$3 = { class: "col input-bg" };
const _hoisted_78$3 = { class: "col input-bg" };
const _hoisted_79$3 = { class: "col input-bg" };
const _hoisted_80$3 = { class: "col input-bg" };
const _hoisted_81$3 = /*#__PURE__*/createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_82$3 = /*#__PURE__*/createElementVNode("div", { class: "col-4" }, null, -1 /* HOISTED */);
const _hoisted_83$3 = { class: "row" };
const _hoisted_84$3 = { class: "inf-block" };
const _hoisted_85$3 = /*#__PURE__*/createElementVNode("h4", null, "Товарная партия", -1 /* HOISTED */);
const _hoisted_86$3 = {
  action: "",
  class: "batch-form row"
};
const _hoisted_87$2 = { class: "col-3 inf-block" };
const _hoisted_88$2 = /*#__PURE__*/createElementVNode("div", { class: "row inf-paragraph" }, [
  /*#__PURE__*/createElementVNode("p", null, " общая сумма таможенных и иных платежей, подлежащих уплате по декларации ")
], -1 /* HOISTED */);
const _hoisted_89$2 = { class: "batch-block row" };
const _hoisted_90$2 = { class: "col-10" };
const _hoisted_91$2 = { class: "col-2" };
const _hoisted_92$2 = { class: "col-3 inf-block" };
const _hoisted_93$2 = /*#__PURE__*/createElementVNode("h5", null, "Общая стоимость", -1 /* HOISTED */);
const _hoisted_94$2 = /*#__PURE__*/createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/createElementVNode("p", null, "по ПТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_95$2 = { class: "batch-block row" };
const _hoisted_96$2 = { class: "col-9" };
const _hoisted_97$2 = { class: "col-3" };
const _hoisted_98$2 = { class: "col-3 inf-block" };
const _hoisted_99$2 = /*#__PURE__*/createElementVNode("h5", null, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_100$2 = /*#__PURE__*/createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/createElementVNode("p", null, "по ТД для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_101$2 = { class: "batch-block row" };
const _hoisted_102$2 = { class: "col-6" };
const _hoisted_103$2 = { class: "col-3" };
const _hoisted_104$2 = { class: "col-3" };
const _hoisted_105$2 = { class: "col-3 inf-block" };
const _hoisted_106$2 = /*#__PURE__*/createElementVNode("h5", null, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_107$1 = /*#__PURE__*/createElementVNode("div", { class: "inf-paragraph" }, [
  /*#__PURE__*/createElementVNode("p", null, "по ДТ для экспресс-грузов")
], -1 /* HOISTED */);
const _hoisted_108$1 = { class: "batch-block row" };
const _hoisted_109$1 = { class: "col-9" };
const _hoisted_110$1 = { class: "col-3" };
const _hoisted_111$1 = { class: "row" };
const _hoisted_112$1 = { class: "inf-block row justify-content-end" };
const _hoisted_113$1 = { class: "payment-information" };
const _hoisted_114$1 = /*#__PURE__*/createTextVNode(" Сведения об оплате таможенных и иных платежей ");
const _hoisted_115$1 = { class: "sender-common-inf" };
const _hoisted_116$1 = { class: "row" };
const _hoisted_117$1 = /*#__PURE__*/createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedSenderInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedSenderInfo"
}, [
  /*#__PURE__*/createElementVNode("p", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/createElementVNode("span", null, "ОТПРАВИТЕЛЬ по общей накладной"),
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-caret-up" })
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
const _hoisted_127$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_128$1 = { class: "col-2 d-flex" };
const _hoisted_129$1 = { class: "input-bg col-2" };
const _hoisted_130$1 = ["checked"];
const _hoisted_131$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_132$1 = { class: "row my-2" };
const _hoisted_133$1 = { class: "col-5" };
const _hoisted_134$1 = { class: "input-bg" };
const _hoisted_135$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_136$1 = { class: "col-4 d-flex" };
const _hoisted_137$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_138$1 = { class: "input-bg col-10" };
const _hoisted_139$1 = { class: "col-3 d-flex" };
const _hoisted_140$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_141$1 = { class: "input-bg col-10" };
const _hoisted_142$1 = { class: "col-3 d-flex" };
const _hoisted_143$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_144$1 = { class: "input-bg col-10" };
const _hoisted_145$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_146$1 = { class: "row" };
const _hoisted_147$1 = { class: "sender-address" };
const _hoisted_148$1 = { class: "row my-2" };
const _hoisted_149$1 = { class: "d-flex sender-contacts" };
const _hoisted_150$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/createElementVNode("p", { class: "point-name" }, "Адрес")
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
const _hoisted_189$1 = /*#__PURE__*/createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
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
const _hoisted_213$1 = /*#__PURE__*/createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedRecipientInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedRecipientInfo"
}, [
  /*#__PURE__*/createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/createElementVNode("span", null, "ПОЛУЧАТЕЛЬ по общей накладной"),
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-caret-up" })
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
const _hoisted_223$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_224$1 = { class: "col-2 d-flex" };
const _hoisted_225$1 = { class: "input-bg col-2" };
const _hoisted_226$1 = ["checked"];
const _hoisted_227$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_228$1 = { class: "row my-2" };
const _hoisted_229$1 = { class: "col-5" };
const _hoisted_230$1 = { class: "input-bg" };
const _hoisted_231$1 = { class: "col-7 d-flex justify-content-between" };
const _hoisted_232$1 = { class: "col-4 d-flex" };
const _hoisted_233$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_234$1 = { class: "input-bg col-10" };
const _hoisted_235$1 = { class: "col-3 d-flex" };
const _hoisted_236$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_237$1 = { class: "input-bg col-10" };
const _hoisted_238$1 = { class: "col-3 d-flex" };
const _hoisted_239$1 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-2" }, [
  /*#__PURE__*/createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_240$1 = { class: "input-bg col-10" };
const _hoisted_241$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, null, -1 /* HOISTED */);
const _hoisted_242$1 = { class: "row" };
const _hoisted_243$1 = { class: "sender-address" };
const _hoisted_244$1 = { class: "row my-2" };
const _hoisted_245$1 = { class: "d-flex sender-contacts" };
const _hoisted_246$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, [
  /*#__PURE__*/createElementVNode("p", { class: "point-name" }, "Адрес")
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
const _hoisted_285 = /*#__PURE__*/createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
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
const _hoisted_311 = /*#__PURE__*/createElementVNode("h4", { class: "customs-representative" }, "Таможенный представитель", -1 /* HOISTED */);
const _hoisted_312 = { class: "input-bg" };
const _hoisted_313 = { class: "col-5" };
const _hoisted_314 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, " Сведения о включении лица в реестр таможенных представителей ", -1 /* HOISTED */);
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
const _hoisted_327 = /*#__PURE__*/createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedNaturalPersonInfo",
  "aria-expanded": "false",
  "aria-controls": "collapsedNaturalPersonInfo"
}, [
  /*#__PURE__*/createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/createElementVNode("span", null, "Сведения о физическом лице, заполнившем (подписавшем) таможенный документ"),
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-caret-up" })
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
const _hoisted_351 = /*#__PURE__*/createElementVNode("div", { class: "col-4" }, [
  /*#__PURE__*/createElementVNode("button", {
    class: "btn button-calendar",
    type: "button"
  }, [
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-calendar-days" })
  ])
], -1 /* HOISTED */);
const _hoisted_352 = { class: "row my-2" };
const _hoisted_353 = /*#__PURE__*/createElementVNode("p", null, " Сведения о документе, удостоверяющем личность лица, заоплневшего (подписавшего) таможенного документ ", -1 /* HOISTED */);
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
const _hoisted_371 = /*#__PURE__*/createElementVNode("div", { class: "col-3" }, [
  /*#__PURE__*/createElementVNode("div", { class: "label-block align-bcntr" }, [
    /*#__PURE__*/createElementVNode("label", { class: "align-bcntr" }, " аттестат ")
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
const _hoisted_385 = /*#__PURE__*/createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/createElementVNode("p", null, " Идентификаторы, присвоенные документу (сведениям) при размещении в хранилище электронных документов ")
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
const _hoisted_395 = /*#__PURE__*/createElementVNode("div", { class: "row" }, [
  /*#__PURE__*/createElementVNode("p", null, "Документ, удостоверяющий полномочия")
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
const _hoisted_410 = /*#__PURE__*/createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "с")
], -1 /* HOISTED */);
const _hoisted_411 = { class: "col-10" };
const _hoisted_412 = { class: "input-bg" };
const _hoisted_413 = { class: "col-5 d-flex" };
const _hoisted_414 = /*#__PURE__*/createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "по")
], -1 /* HOISTED */);
const _hoisted_415 = { class: "col-10" };
const _hoisted_416 = { class: "input-bg" };
const _hoisted_417 = { class: "col-2" };
const _hoisted_418 = { class: "input-bg" };
const _hoisted_419 = { class: "inspector-inf my-2" };
const _hoisted_420 = { class: "row" };
const _hoisted_421 = { class: "col-7" };
const _hoisted_422 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "ФИО инспектора", -1 /* HOISTED */);
const _hoisted_423 = { class: "input-bg" };
const _hoisted_424 = { class: "col-5" };
const _hoisted_425 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "ЛНП", -1 /* HOISTED */);
const _hoisted_426 = { class: "row" };
const _hoisted_427 = { class: "col-2 input-bg" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createCommentVNode("Region элемент с общей информацией декларации"),
    createElementVNode("div", _hoisted_2$7, [
      createElementVNode("div", _hoisted_3$6, [
        createElementVNode("div", _hoisted_4$6, [
          createVNode(_component_router_link, {
            class: "point-name",
            to: { name: 'index' }
          }, {
            default: withCtx(() => [
              _hoisted_5$6
            ]),
            _: 1 /* STABLE */
          })
        ])
      ]),
      _hoisted_6$5,
      createElementVNode("div", _hoisted_7$5, [
        createElementVNode("div", _hoisted_8$5, [
          createElementVNode("div", _hoisted_9$4, [
            createElementVNode("div", _hoisted_10$4, [
              createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.docType.dteg
              }, null, 8 /* PROPS */, _hoisted_11$3)
            ]),
            _hoisted_12$3,
            createElementVNode("div", _hoisted_13$3, [
              createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.docType.ptdeg
              }, null, 8 /* PROPS */, _hoisted_14$3)
            ]),
            _hoisted_15$3
          ]),
          createElementVNode("div", _hoisted_16$3, [
            createElementVNode("div", _hoisted_17$3, [
              createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.declarationKindCode.import
              }, null, 8 /* PROPS */, _hoisted_18$3)
            ]),
            _hoisted_19$3,
            createElementVNode("div", _hoisted_20$3, [
              createElementVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: this.registry.declarationKindCode.export
              }, null, 8 /* PROPS */, _hoisted_21$3)
            ]),
            _hoisted_22$3
          ]),
          createElementVNode("div", _hoisted_23$3, [
            _hoisted_24$3,
            createElementVNode("div", _hoisted_25$3, [
              withDirectives(createElementVNode("input", {
                class: "declaration-number-input form-control",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((this.registry.registryNum) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.registryNum]
              ])
            ])
          ]),
          _hoisted_26$3
        ])
      ]),
      createElementVNode("div", _hoisted_27$3, [
        createElementVNode("div", _hoisted_28$3, [
          createElementVNode("div", _hoisted_29$3, [
            createElementVNode("div", _hoisted_30$3, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((this.registry.customsCodeMode) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.customsCodeMode]
              ])
            ]),
            createElementVNode("div", _hoisted_31$3, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((this.registry.previousCustomsCodeMode) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.previousCustomsCodeMode]
              ])
            ]),
            createElementVNode("div", _hoisted_32$3, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((this.registry.declarationKind) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.declarationKind]
              ])
            ]),
            createElementVNode("div", _hoisted_33$3, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((this.registry.electronicDocumentSign) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.electronicDocumentSign]
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_34$3, [
            _hoisted_35$3,
            createElementVNode("div", _hoisted_36$3, [
              withDirectives(createElementVNode("input", {
                class: "sheets-input form-control",
                type: "text",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((this.registry.countList) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.countList]
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_37$3, [
            _hoisted_38$3,
            createElementVNode("div", _hoisted_39$3, [
              withDirectives(createElementVNode("input", {
                class: "registry-number-input form-control",
                type: "text",
                id: "registryNumber",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((this.registry.customNum) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.customNum]
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_40$3, [
            createElementVNode("div", _hoisted_41$3, [
              withDirectives(createElementVNode("input", {
                class: "registry-checkbox form-check-input",
                type: "checkbox",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((this.registry.isRegistryWasChanged) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelCheckbox, this.registry.isRegistryWasChanged]
              ])
            ]),
            _hoisted_42$3
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_43$3, [
        createElementVNode("div", _hoisted_44$3, [
          createElementVNode("div", _hoisted_45$3, [
            createElementVNode("div", _hoisted_46$3, [
              _hoisted_47$3,
              createElementVNode("div", _hoisted_48$3, [
                createElementVNode("div", _hoisted_49$3, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((this.registry.expressCourierCode) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.expressCourierCode]
                  ])
                ]),
                createElementVNode("div", _hoisted_50$3, [
                  withDirectives(createElementVNode("input", {
                    class: "col-11 form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((this.registry.expressCourierName) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.expressCourierName]
                  ])
                ])
              ])
            ]),
            _hoisted_51$3,
            _hoisted_52$3
          ]),
          createElementVNode("div", _hoisted_53$3, [
            createElementVNode("div", _hoisted_54$3, [
              createElementVNode("div", _hoisted_55$3, [
                _hoisted_56$3,
                createElementVNode("form", _hoisted_57$3, [
                  createElementVNode("div", _hoisted_58$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((this.registry.registerDocumentUnknownString1) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.registerDocumentUnknownString1]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_59$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((this.registry.registerDocumentIdCountryCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.registerDocumentIdCountryCode]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_60$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((this.registry.registerDocumentIdNumber) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.registerDocumentIdNumber]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_61$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((this.registry.registerDocumentUnknownString2) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.registerDocumentUnknownString2]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_62$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((this.registry.registerDocumentUnknownString3) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.registerDocumentUnknownString3]
                    ])
                  ])
                ])
              ])
            ]),
            _hoisted_63$3,
            createElementVNode("div", _hoisted_64$3, [
              createElementVNode("form", _hoisted_65$3, [
                createElementVNode("div", _hoisted_66$3, [
                  createElementVNode("div", _hoisted_67$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((this.registry.changingDeclarationNumber.customPoint) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.changingDeclarationNumber.customPoint]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_68$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((this.registry.changingDeclarationNumber.date) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.changingDeclarationNumber.date]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_69$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((this.registry.changingDeclarationNumber.innerNum) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.changingDeclarationNumber.innerNum]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_70$3, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ((this.registry.changingDeclarationNumber.unknownNum) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.changingDeclarationNumber.unknownNum]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_71$3, [
                  _hoisted_72$3,
                  createElementVNode("div", _hoisted_73$3, [
                    createElementVNode("div", _hoisted_74$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => ((this.registry.changeDetailsType.stageChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.stageChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_75$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => ((this.registry.changeDetailsType.reasonChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.reasonChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_76$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => ((this.registry.changeDetailsType.quantityChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.quantityChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_77$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => ((this.registry.changeDetailsType.TNVEDChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.TNVEDChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_78$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => ((this.registry.changeDetailsType.customsCostChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.customsCostChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_79$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => ((this.registry.changeDetailsType.customsPaymentChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.customsPaymentChangeCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_80$3, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "number",
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => ((this.registry.changeDetailsType.otherChangeCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.changeDetailsType.otherChangeCode]
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
      createElementVNode("div", _hoisted_83$3, [
        createElementVNode("div", _hoisted_84$3, [
          _hoisted_85$3,
          createElementVNode("form", _hoisted_86$3, [
            createElementVNode("div", _hoisted_87$2, [
              _hoisted_88$2,
              createElementVNode("div", _hoisted_89$2, [
                createElementVNode("div", _hoisted_90$2, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Сумма",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => ((this.registry.totalPaymentAmountDetailsSum) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.totalPaymentAmountDetailsSum]
                  ])
                ]),
                createElementVNode("div", _hoisted_91$2, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Валюта",
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => ((this.registry.totalPaymentAmountDetailsCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.totalPaymentAmountDetailsCurrency]
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_92$2, [
              _hoisted_93$2,
              _hoisted_94$2,
              createElementVNode("div", _hoisted_95$2, [
                createElementVNode("div", _hoisted_96$2, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => ((this.registry.CAValueAmountSum) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.CAValueAmountSum]
                  ])
                ]),
                createElementVNode("div", _hoisted_97$2, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => ((this.registry.CAValueAmountCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.CAValueAmountCurrency]
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_98$2, [
              _hoisted_99$2,
              _hoisted_100$2,
              createElementVNode("div", _hoisted_101$2, [
                createElementVNode("div", _hoisted_102$2, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => ((this.registry.unifiedGrossWeightQuantity) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.unifiedGrossWeightQuantity]
                  ])
                ]),
                createElementVNode("div", _hoisted_103$2, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => ((this.registry.weightUnit) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.weightUnit]
                  ])
                ]),
                createElementVNode("div", _hoisted_104$2, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => ((this.registry.unknownStringUnit) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.unknownStringUnit]
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_105$2, [
              _hoisted_106$2,
              _hoisted_107$1,
              createElementVNode("div", _hoisted_108$1, [
                createElementVNode("div", _hoisted_109$1, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => ((this.registry.customCost) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.customCost]
                  ])
                ]),
                createElementVNode("div", _hoisted_110$1, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => ((this.registry.customCostCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, this.registry.customCostCurrency]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_111$1, [
        createElementVNode("div", _hoisted_112$1, [
          createElementVNode("div", _hoisted_113$1, [
            createVNode(_component_router_link, { to: { name: 'index' } }, {
              default: withCtx(() => [
                _hoisted_114$1
              ]),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ]),
    createCommentVNode(" endregion"),
    createCommentVNode(" Region элемент с общей информацией по отправителю"),
    createElementVNode("div", _hoisted_115$1, [
      createElementVNode("div", _hoisted_116$1, [
        _hoisted_117$1,
        createElementVNode("div", _hoisted_118$1, [
          createElementVNode("div", _hoisted_119$1, [
            createElementVNode("div", _hoisted_120$1, [
              createElementVNode("div", _hoisted_121$1, [
                createElementVNode("form", _hoisted_122$1, [
                  createElementVNode("div", _hoisted_123$1, [
                    createElementVNode("div", _hoisted_124$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => ((this.registry.consignor.fullName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignor.fullName]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_125$1, [
                    createElementVNode("div", _hoisted_126$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => ((this.registry.consignor.countryCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignor.countryCode]
                      ])
                    ])
                  ]),
                  _hoisted_127$1,
                  createElementVNode("div", _hoisted_128$1, [
                    createElementVNode("div", _hoisted_129$1, [
                      createElementVNode("input", {
                        type: "checkbox",
                        class: "form-check-input",
                        checked: this.registry.consignor.isDeclarant
                      }, null, 8 /* PROPS */, _hoisted_130$1)
                    ]),
                    _hoisted_131$1
                  ])
                ]),
                createElementVNode("div", _hoisted_132$1, [
                  createElementVNode("div", _hoisted_133$1, [
                    createElementVNode("div", _hoisted_134$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "краткое наименование организации",
                        "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => ((this.registry.consignor.shortName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignor.shortName]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_135$1, [
                    createElementVNode("div", _hoisted_136$1, [
                      _hoisted_137$1,
                      createElementVNode("div", _hoisted_138$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => ((this.registry.consignor.fullName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.fullName]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_139$1, [
                      _hoisted_140$1,
                      createElementVNode("div", _hoisted_141$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => ((this.registry.consignor.INN) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.INN]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_142$1, [
                      _hoisted_143$1,
                      createElementVNode("div", _hoisted_144$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => ((this.registry.consignor.KPP) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.KPP]
                        ])
                      ])
                    ]),
                    _hoisted_145$1
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_146$1, [
              createElementVNode("div", _hoisted_147$1, [
                createElementVNode("div", _hoisted_148$1, [
                  createElementVNode("div", _hoisted_149$1, [
                    _hoisted_150$1,
                    createElementVNode("div", _hoisted_151$1, [
                      createElementVNode("div", _hoisted_152$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "номер телефона",
                          "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => ((this.registry.consignor.phone) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.phone]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_153$1, [
                      createElementVNode("div", _hoisted_154$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "Адрес электронной почты",
                          "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => ((this.registry.consignor.email) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.email]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_155$1, [
                      createElementVNode("div", _hoisted_156$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "номер факса",
                          "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => ((this.registry.consignor.fax) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.fax]
                        ])
                      ])
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_157$1, [
                  createElementVNode("div", _hoisted_158$1, [
                    createElementVNode("div", _hoisted_159$1, [
                      createElementVNode("div", _hoisted_160$1, [
                        createElementVNode("div", _hoisted_161$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "язык",
                            "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => ((this.registry.consignor.language) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.language]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_162$1, [
                        createElementVNode("div", _hoisted_163$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "страна",
                            "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => ((this.registry.consignor.country) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.country]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_164$1, [
                        createElementVNode("div", _hoisted_165$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "почтовый индекс",
                            "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => ((this.registry.consignor.mailIndex) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.mailIndex]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_166$1, [
                        createElementVNode("div", _hoisted_167$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "область (регион, штат, провинция)",
                            "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => ((this.registry.consignor.region) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.region]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_168$1, [
                      createElementVNode("div", _hoisted_169$1, [
                        createElementVNode("div", _hoisted_170$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "район",
                            "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => ((this.registry.consignor.area) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.area]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_171$1, [
                        createElementVNode("div", _hoisted_172$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "город",
                            "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => ((this.registry.consignor.city) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.city]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_173$1, [
                        createElementVNode("div", _hoisted_174$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "населённый пункт",
                            "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => ((this.registry.consignor.settlement) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.settlement]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_175$1, [
                      createElementVNode("div", _hoisted_176$1, [
                        createElementVNode("div", _hoisted_177$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => ((this.registry.consignor.address) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.address]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_178$1, [
                        createElementVNode("div", _hoisted_179$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "дом, корпус, строение",
                            "onUpdate:modelValue": _cache[52] || (_cache[52] = $event => ((this.registry.consignor.house) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.house]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_180$1, [
                        createElementVNode("div", _hoisted_181$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => ((this.registry.consignor.office) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.office]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_182$1, [
                        createElementVNode("div", _hoisted_183$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "номер а/я",
                            "onUpdate:modelValue": _cache[54] || (_cache[54] = $event => ((this.registry.consignor.officeLetter) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.officeLetter]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_184$1, [
                      createElementVNode("div", _hoisted_185$1, [
                        createElementVNode("div", _hoisted_186$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                            "onUpdate:modelValue": _cache[55] || (_cache[55] = $event => ((this.registry.consignor.fullAddress) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignor.fullAddress]
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_187$1, [
              createElementVNode("div", _hoisted_188$1, [
                _hoisted_189$1,
                createElementVNode("div", _hoisted_190$1, [
                  createElementVNode("div", _hoisted_191$1, [
                    createElementVNode("div", _hoisted_192$1, [
                      createElementVNode("div", _hoisted_193$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "стр",
                          "onUpdate:modelValue": _cache[56] || (_cache[56] = $event => ((this.registry.consignor.document.country) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.country]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_194$1, [
                      createElementVNode("div", _hoisted_195$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "код",
                          "onUpdate:modelValue": _cache[57] || (_cache[57] = $event => ((this.registry.consignor.document.countryCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.countryCode]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_196$1, [
                      createElementVNode("div", _hoisted_197$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "краткое наименование",
                          "onUpdate:modelValue": _cache[58] || (_cache[58] = $event => ((this.registry.consignor.document.shortType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.shortType]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_198$1, [
                      createElementVNode("div", _hoisted_199$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "серия",
                          "onUpdate:modelValue": _cache[59] || (_cache[59] = $event => ((this.registry.consignor.document.series) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.series]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_200$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "номер",
                          "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => ((this.registry.consignor.document.number) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.number]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_201$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "дата выдачи",
                          "onUpdate:modelValue": _cache[61] || (_cache[61] = $event => ((this.registry.consignor.document.releaseDate) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.releaseDate]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_202$1, [
                      createElementVNode("div", _hoisted_203$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "наименование организации, выдавшей документ",
                          "onUpdate:modelValue": _cache[62] || (_cache[62] = $event => ((this.registry.consignor.document.issuedBy) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.issuedBy]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_204$1, [
                    createElementVNode("div", _hoisted_205$1, [
                      createElementVNode("div", _hoisted_206$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "полное наименование документа, удостоверяющего личность",
                          "onUpdate:modelValue": _cache[63] || (_cache[63] = $event => ((this.registry.consignor.document.fullType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.fullType]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_207$1, [
                      createElementVNode("div", _hoisted_208$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "код подразделения",
                          "onUpdate:modelValue": _cache[64] || (_cache[64] = $event => ((this.registry.consignor.document.divisionCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.divisionCode]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_209$1, [
                      createElementVNode("div", _hoisted_210$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "строка, иденти-ая орган государства",
                          "onUpdate:modelValue": _cache[65] || (_cache[65] = $event => ((this.registry.consignor.document.countryIdString) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignor.document.countryIdString]
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
    createCommentVNode(" endregion"),
    createCommentVNode(" Region элемет с общей информацией по получателю"),
    createElementVNode("div", _hoisted_211$1, [
      createElementVNode("div", _hoisted_212$1, [
        _hoisted_213$1,
        createElementVNode("div", _hoisted_214$1, [
          createElementVNode("div", _hoisted_215$1, [
            createElementVNode("div", _hoisted_216$1, [
              createElementVNode("div", _hoisted_217$1, [
                createElementVNode("form", _hoisted_218$1, [
                  createElementVNode("div", _hoisted_219$1, [
                    createElementVNode("div", _hoisted_220$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => ((this.registry.consignee.fullName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignee.fullName]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_221$1, [
                    createElementVNode("div", _hoisted_222$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => ((this.registry.consignee.countryCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignee.countryCode]
                      ])
                    ])
                  ]),
                  _hoisted_223$1,
                  createElementVNode("div", _hoisted_224$1, [
                    createElementVNode("div", _hoisted_225$1, [
                      createElementVNode("input", {
                        type: "checkbox",
                        class: "form-check-input",
                        checked: this.registry.consignee.isDeclarant
                      }, null, 8 /* PROPS */, _hoisted_226$1)
                    ]),
                    _hoisted_227$1
                  ])
                ]),
                createElementVNode("div", _hoisted_228$1, [
                  createElementVNode("div", _hoisted_229$1, [
                    createElementVNode("div", _hoisted_230$1, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "краткое наименование организации",
                        "onUpdate:modelValue": _cache[68] || (_cache[68] = $event => ((this.registry.consignee.shortName) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.consignee.shortName]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_231$1, [
                    createElementVNode("div", _hoisted_232$1, [
                      _hoisted_233$1,
                      createElementVNode("div", _hoisted_234$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => ((this.registry.consignee.fullName) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.fullName]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_235$1, [
                      _hoisted_236$1,
                      createElementVNode("div", _hoisted_237$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => ((this.registry.consignee.INN) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.INN]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_238$1, [
                      _hoisted_239$1,
                      createElementVNode("div", _hoisted_240$1, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => ((this.registry.consignee.KPP) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.KPP]
                        ])
                      ])
                    ]),
                    _hoisted_241$1
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_242$1, [
              createElementVNode("div", _hoisted_243$1, [
                createElementVNode("div", _hoisted_244$1, [
                  createElementVNode("div", _hoisted_245$1, [
                    _hoisted_246$1,
                    createElementVNode("div", _hoisted_247$1, [
                      createElementVNode("div", _hoisted_248$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "номер телефона",
                          "onUpdate:modelValue": _cache[72] || (_cache[72] = $event => ((this.registry.consignee.phone) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.phone]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_249$1, [
                      createElementVNode("div", _hoisted_250$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "Адрес электронной почты",
                          "onUpdate:modelValue": _cache[73] || (_cache[73] = $event => ((this.registry.consignee.email) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.email]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_251$1, [
                      createElementVNode("div", _hoisted_252$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          placeholder: "номер факса",
                          "onUpdate:modelValue": _cache[74] || (_cache[74] = $event => ((this.registry.consignee.fax) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.fax]
                        ])
                      ])
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_253$1, [
                  createElementVNode("div", _hoisted_254$1, [
                    createElementVNode("div", _hoisted_255$1, [
                      createElementVNode("div", _hoisted_256$1, [
                        createElementVNode("div", _hoisted_257$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "язык",
                            "onUpdate:modelValue": _cache[75] || (_cache[75] = $event => ((this.registry.consignee.language) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.language]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_258$1, [
                        createElementVNode("div", _hoisted_259$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "страна",
                            "onUpdate:modelValue": _cache[76] || (_cache[76] = $event => ((this.registry.consignee.country) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.country]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_260$1, [
                        createElementVNode("div", _hoisted_261$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "почтовый индекс",
                            "onUpdate:modelValue": _cache[77] || (_cache[77] = $event => ((this.registry.consignee.mailIndex) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.mailIndex]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_262$1, [
                        createElementVNode("div", _hoisted_263$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "область (регион, штат, провинция)",
                            "onUpdate:modelValue": _cache[78] || (_cache[78] = $event => ((this.registry.consignee.region) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.region]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_264$1, [
                      createElementVNode("div", _hoisted_265$1, [
                        createElementVNode("div", _hoisted_266$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "район",
                            "onUpdate:modelValue": _cache[79] || (_cache[79] = $event => ((this.registry.consignee.area) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.area]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_267$1, [
                        createElementVNode("div", _hoisted_268$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "город",
                            "onUpdate:modelValue": _cache[80] || (_cache[80] = $event => ((this.registry.consignee.city) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.city]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_269$1, [
                        createElementVNode("div", _hoisted_270$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "населённый пункт",
                            "onUpdate:modelValue": _cache[81] || (_cache[81] = $event => ((this.registry.consignee.settlement) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.settlement]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_271$1, [
                      createElementVNode("div", _hoisted_272$1, [
                        createElementVNode("div", _hoisted_273$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => ((this.registry.consignee.address) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.address]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_274$1, [
                        createElementVNode("div", _hoisted_275$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "дом, корпус, строение",
                            "onUpdate:modelValue": _cache[83] || (_cache[83] = $event => ((this.registry.consignee.house) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.house]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_276$1, [
                        createElementVNode("div", _hoisted_277$1, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => ((this.registry.consignee.office) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.office]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_278, [
                        createElementVNode("div", _hoisted_279, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "номер а/я",
                            "onUpdate:modelValue": _cache[85] || (_cache[85] = $event => ((this.registry.consignee.officeLetter) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.officeLetter]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_280, [
                      createElementVNode("div", _hoisted_281, [
                        createElementVNode("div", _hoisted_282, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                            "onUpdate:modelValue": _cache[86] || (_cache[86] = $event => ((this.registry.consignee.fullAddress) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.consignee.fullAddress]
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_283, [
              createElementVNode("div", _hoisted_284, [
                _hoisted_285,
                createElementVNode("div", _hoisted_286, [
                  createElementVNode("div", _hoisted_287, [
                    createElementVNode("div", _hoisted_288, [
                      createElementVNode("div", _hoisted_289, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "стр",
                          "onUpdate:modelValue": _cache[87] || (_cache[87] = $event => ((this.registry.consignee.document.country) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.country]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_290, [
                      createElementVNode("div", _hoisted_291, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "код",
                          "onUpdate:modelValue": _cache[88] || (_cache[88] = $event => ((this.registry.consignee.document.countryCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.countryCode]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_292, [
                      createElementVNode("div", _hoisted_293, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "краткое наименование",
                          "onUpdate:modelValue": _cache[89] || (_cache[89] = $event => ((this.registry.consignee.document.shortType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.shortType]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_294, [
                      createElementVNode("div", _hoisted_295, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "серия",
                          "onUpdate:modelValue": _cache[90] || (_cache[90] = $event => ((this.registry.consignee.document.series) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.series]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_296, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "номер",
                          "onUpdate:modelValue": _cache[91] || (_cache[91] = $event => ((this.registry.consignee.document.number) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.number]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_297, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "дата выдачи",
                          "onUpdate:modelValue": _cache[92] || (_cache[92] = $event => ((this.registry.consignee.document.releaseDate) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.releaseDate]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_298, [
                      createElementVNode("div", _hoisted_299, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "наименование организации, выдавшей документ",
                          "onUpdate:modelValue": _cache[93] || (_cache[93] = $event => ((this.registry.consignee.document.issuedBy) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.issuedBy]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_300, [
                    createElementVNode("div", _hoisted_301, [
                      createElementVNode("div", _hoisted_302, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "полное наименование документа, удостоверяющего личность",
                          "onUpdate:modelValue": _cache[94] || (_cache[94] = $event => ((this.registry.consignee.document.fullType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.fullType]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_303, [
                      createElementVNode("div", _hoisted_304, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "код подразделения",
                          "onUpdate:modelValue": _cache[95] || (_cache[95] = $event => ((this.registry.consignee.document.divisionCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.divisionCode]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_305, [
                      createElementVNode("div", _hoisted_306, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          placeholder: "строка, иденти-ая орган государства",
                          "onUpdate:modelValue": _cache[96] || (_cache[96] = $event => ((this.registry.consignee.document.countryIdString) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.consignee.document.countryIdString]
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
    createCommentVNode("endregion"),
    createCommentVNode(" Region элемент с общей информацией по таможенному представителю и исполнителю"),
    createElementVNode("div", _hoisted_307, [
      createElementVNode("div", _hoisted_308, [
        createElementVNode("div", _hoisted_309, [
          createElementVNode("div", _hoisted_310, [
            _hoisted_311,
            createElementVNode("div", _hoisted_312, [
              withDirectives(createElementVNode("input", {
                type: "text",
                class: "form-control",
                "onUpdate:modelValue": _cache[97] || (_cache[97] = $event => ((this.registry.brokerName) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.brokerName]
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_313, [
          _hoisted_314,
          createElementVNode("div", _hoisted_315, [
            createElementVNode("div", _hoisted_316, [
              createElementVNode("div", _hoisted_317, [
                withDirectives(createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[98] || (_cache[98] = $event => ((this.registry.brokerRegistryDocDetails[0]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, this.registry.brokerRegistryDocDetails[0]]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_318, [
              createElementVNode("div", _hoisted_319, [
                withDirectives(createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[99] || (_cache[99] = $event => ((this.registry.brokerRegistryDocDetails[1]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, this.registry.brokerRegistryDocDetails[1]]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_320, [
              createElementVNode("div", _hoisted_321, [
                withDirectives(createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[100] || (_cache[100] = $event => ((this.registry.brokerRegistryDocDetails[2]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, this.registry.brokerRegistryDocDetails[2]]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_322, [
              createElementVNode("div", _hoisted_323, [
                withDirectives(createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[101] || (_cache[101] = $event => ((this.registry.brokerRegistryDocDetails[3]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, this.registry.brokerRegistryDocDetails[3]]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_324, [
              createElementVNode("div", _hoisted_325, [
                withDirectives(createElementVNode("input", {
                  type: "text",
                  class: "form-control",
                  "onUpdate:modelValue": _cache[102] || (_cache[102] = $event => ((this.registry.brokerRegistryDocDetails[4]) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, this.registry.brokerRegistryDocDetails[4]]
                ])
              ])
            ])
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_326, [
        _hoisted_327,
        createElementVNode("div", _hoisted_328, [
          createElementVNode("div", _hoisted_329, [
            createElementVNode("form", _hoisted_330, [
              createElementVNode("div", _hoisted_331, [
                createElementVNode("div", _hoisted_332, [
                  createElementVNode("div", _hoisted_333, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[103] || (_cache[103] = $event => ((this.registry.signatoryPersonIdentityDetails.lastName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.signatoryPersonIdentityDetails.lastName]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_334, [
                  createElementVNode("div", _hoisted_335, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[104] || (_cache[104] = $event => ((this.registry.signatoryPersonIdentityDetails.firstName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.signatoryPersonIdentityDetails.firstName]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_336, [
                  createElementVNode("div", _hoisted_337, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[105] || (_cache[105] = $event => ((this.registry.signatoryPersonIdentityDetails.middleName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.signatoryPersonIdentityDetails.middleName]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_338, [
                  createElementVNode("div", _hoisted_339, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[106] || (_cache[106] = $event => ((this.registry.signatoryPersonIdentityDetails.profession) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, this.registry.signatoryPersonIdentityDetails.profession]
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_340, [
                createElementVNode("div", _hoisted_341, [
                  createElementVNode("div", _hoisted_342, [
                    createElementVNode("div", _hoisted_343, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[107] || (_cache[107] = $event => ((this.registry.signatoryPersonIdentityDetails.mobilePhone) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.mobilePhone]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_344, [
                    createElementVNode("div", _hoisted_345, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[108] || (_cache[108] = $event => ((this.registry.signatoryPersonIdentityDetails.fax) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.fax]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_346, [
                    createElementVNode("div", _hoisted_347, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[109] || (_cache[109] = $event => ((this.registry.signatoryPersonIdentityDetails.email) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.email]
                      ])
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_348, [
                  createElementVNode("div", _hoisted_349, [
                    createElementVNode("div", _hoisted_350, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[110] || (_cache[110] = $event => ((this.registry.signatoryPersonIdentityDetails.appealDocumentDate) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.appealDocumentDate]
                      ])
                    ])
                  ]),
                  _hoisted_351
                ])
              ]),
              createElementVNode("div", _hoisted_352, [
                _hoisted_353,
                createElementVNode("div", _hoisted_354, [
                  createElementVNode("div", _hoisted_355, [
                    createElementVNode("div", _hoisted_356, [
                      createElementVNode("div", _hoisted_357, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[111] || (_cache[111] = $event => ((this.registry.signatoryPersonIdentityDetails.countyCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.countyCode]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_358, [
                      createElementVNode("div", _hoisted_359, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[112] || (_cache[112] = $event => ((this.registry.signatoryPersonIdentityDetails.personalDocType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.personalDocType]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_360, [
                    createElementVNode("div", _hoisted_361, [
                      createElementVNode("div", _hoisted_362, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[113] || (_cache[113] = $event => ((this.registry.signatoryPersonIdentityDetails.documentSeries) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.documentSeries]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_363, [
                      createElementVNode("div", _hoisted_364, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[114] || (_cache[114] = $event => ((this.registry.signatoryPersonIdentityDetails.documentNumber) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.documentNumber]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_365, [
                    createElementVNode("div", _hoisted_366, [
                      createElementVNode("div", _hoisted_367, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[115] || (_cache[115] = $event => ((this.registry.signatoryPersonIdentityDetails.documentReleaseDate) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.documentReleaseDate]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_368, [
                      createElementVNode("div", _hoisted_369, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[116] || (_cache[116] = $event => ((this.registry.signatoryPersonIdentityDetails.documentDateEnd) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.documentDateEnd]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_370, [
                    _hoisted_371,
                    createElementVNode("div", _hoisted_372, [
                      createElementVNode("div", _hoisted_373, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[117] || (_cache[117] = $event => ((this.registry.signatoryPersonIdentityDetails.qualificationCertificate) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.qualificationCertificate]
                        ])
                      ])
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_374, [
                  createElementVNode("div", _hoisted_375, [
                    createElementVNode("div", _hoisted_376, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[118] || (_cache[118] = $event => ((this.registry.signatoryPersonIdentityDetails.fullDocumentType) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.fullDocumentType]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_377, [
                    createElementVNode("div", _hoisted_378, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[119] || (_cache[119] = $event => ((this.registry.signatoryPersonIdentityDetails.issuedBy) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.issuedBy]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_379, [
                    createElementVNode("div", _hoisted_380, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[120] || (_cache[120] = $event => ((this.registry.signatoryPersonIdentityDetails.divisionCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.divisionCode]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_381, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[121] || (_cache[121] = $event => ((this.registry.signatoryPersonIdentityDetails.countryIdString) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.countryIdString]
                      ])
                    ]),
                    createElementVNode("div", _hoisted_382, [
                      withDirectives(createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        "onUpdate:modelValue": _cache[122] || (_cache[122] = $event => ((this.registry.signatoryPersonIdentityDetails.countryIdCode) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, this.registry.signatoryPersonIdentityDetails.countryIdCode]
                      ])
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_383, [
                createElementVNode("div", _hoisted_384, [
                  _hoisted_385,
                  createElementVNode("div", _hoisted_386, [
                    createElementVNode("div", _hoisted_387, [
                      createElementVNode("div", _hoisted_388, [
                        createElementVNode("div", _hoisted_389, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[123] || (_cache[123] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeId) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.signatoryPersonIdentityDetails.documentModeId]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_390, [
                        createElementVNode("div", _hoisted_391, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[124] || (_cache[124] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeUnknown1) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.signatoryPersonIdentityDetails.documentModeUnknown1]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_392, [
                      createElementVNode("div", _hoisted_393, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[125] || (_cache[125] = $event => ((this.registry.signatoryPersonIdentityDetails.documentModeUnknown2) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.documentModeUnknown2]
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_394, [
                _hoisted_395,
                createElementVNode("div", _hoisted_396, [
                  createElementVNode("div", _hoisted_397, [
                    createElementVNode("div", _hoisted_398, [
                      createElementVNode("div", _hoisted_399, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[126] || (_cache[126] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_400, [
                      createElementVNode("div", _hoisted_401, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[127] || (_cache[127] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docType) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docType]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_402, [
                    createElementVNode("div", _hoisted_403, [
                      createElementVNode("div", _hoisted_404, [
                        createElementVNode("div", _hoisted_405, [
                          withDirectives(createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[128] || (_cache[128] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_406, [
                        createElementVNode("div", _hoisted_407, [
                          withDirectives(createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[129] || (_cache[129] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.appealDate) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.appealDate]
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_408, [
                      createElementVNode("div", _hoisted_409, [
                        _hoisted_410,
                        createElementVNode("div", _hoisted_411, [
                          createElementVNode("div", _hoisted_412, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[130] || (_cache[130] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateStart) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateStart]
                            ])
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_413, [
                        _hoisted_414,
                        createElementVNode("div", _hoisted_415, [
                          createElementVNode("div", _hoisted_416, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              "onUpdate:modelValue": _cache[131] || (_cache[131] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateEnd) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateEnd]
                            ])
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_417, [
                        createElementVNode("div", _hoisted_418, [
                          withDirectives(createElementVNode("input", {
                            class: "form-control",
                            type: "text",
                            "onUpdate:modelValue": _cache[132] || (_cache[132] = $event => ((this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownInput) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownInput]
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
    createCommentVNode("endregion"),
    createCommentVNode("Region элемент с информацией по инспектору"),
    createElementVNode("div", _hoisted_419, [
      createElementVNode("div", _hoisted_420, [
        createElementVNode("div", _hoisted_421, [
          _hoisted_422,
          createElementVNode("div", _hoisted_423, [
            withDirectives(createElementVNode("input", {
              class: "form-control",
              type: "text",
              "onUpdate:modelValue": _cache[133] || (_cache[133] = $event => ((this.registry.inspectorFullName) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [vModelText, this.registry.inspectorFullName]
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_424, [
          _hoisted_425,
          createElementVNode("div", _hoisted_426, [
            createElementVNode("div", _hoisted_427, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[134] || (_cache[134] = $event => ((this.registry.lnp) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, this.registry.lnp]
              ])
            ])
          ])
        ])
      ])
    ]),
    createCommentVNode("endregion")
  ]))
}

script$7.render = render$7;
script$7.__file = "src/components/Form/GeneralDeclaration.vue";

var script$6 = {
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

const _hoisted_1$6 = { class: "order" };
const _hoisted_2$6 = { class: "arrow" };
const _hoisted_3$5 = { class: "product-batch" };
const _hoisted_4$5 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\"><h4 class=\"col-4\">Сведения о товарной партии</h4><div class=\"product-batch-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-minus\"></i></button></div><div class=\"col-2\"><button class=\"btn batch-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div></div></div>", 1);
const _hoisted_5$5 = { class: "product-inner-block" };
const _hoisted_6$4 = { class: "row" };
const _hoisted_7$4 = { class: "row" };
const _hoisted_8$4 = { class: "col-9" };
const _hoisted_9$3 = { action: "" };
const _hoisted_10$3 = { class: "d-flex" };
const _hoisted_11$2 = { class: "col-3 d-flex" };
const _hoisted_12$2 = /*#__PURE__*/createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Общая накладная")
], -1 /* HOISTED */);
const _hoisted_13$2 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_14$2 = { class: "input-bg col-5" };
const _hoisted_15$2 = { class: "col-4" };
const _hoisted_16$2 = { class: "input-bg" };
const _hoisted_17$2 = { class: "col-3" };
const _hoisted_18$2 = { class: "input-bg" };
const _hoisted_19$2 = { class: "col-2" };
const _hoisted_20$2 = { class: "input-bg" };
const _hoisted_21$2 = { class: "d-flex my-2" };
const _hoisted_22$2 = { class: "col-3 d-flex" };
const _hoisted_23$2 = /*#__PURE__*/createElementVNode("div", { class: "col-6 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Инд. накладная")
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
const _hoisted_35$2 = /*#__PURE__*/createElementVNode("h5", { class: "align-bcntr my-1" }, "Общий вес брутто", -1 /* HOISTED */);
const _hoisted_36$2 = { class: "d-flex" };
const _hoisted_37$2 = { class: "col-6" };
const _hoisted_38$2 = { class: "input-bg" };
const _hoisted_39$2 = { class: "col-6 d-flex" };
const _hoisted_40$2 = { class: "col-7" };
const _hoisted_41$2 = { class: "input-bg" };
const _hoisted_42$2 = { class: "col-5" };
const _hoisted_43$2 = { class: "input-bg" };
const _hoisted_44$2 = { class: "col-4" };
const _hoisted_45$2 = /*#__PURE__*/createElementVNode("h5", { class: "align-bcntr my-1" }, "Общая таможенная стоимость", -1 /* HOISTED */);
const _hoisted_46$2 = { class: "d-flex" };
const _hoisted_47$2 = { class: "col-8" };
const _hoisted_48$2 = { class: "input-bg" };
const _hoisted_49$2 = { class: "col-4 d-flex" };
const _hoisted_50$2 = /*#__PURE__*/createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_51$2 = { class: "col-10" };
const _hoisted_52$2 = { class: "input-bg" };
const _hoisted_53$2 = { class: "col-4" };
const _hoisted_54$2 = /*#__PURE__*/createElementVNode("h5", { class: "align-bcntr my-1 fs-12" }, " Общая стоимость по инд. накладной ", -1 /* HOISTED */);
const _hoisted_55$2 = { class: "d-flex" };
const _hoisted_56$2 = { class: "col-9" };
const _hoisted_57$2 = { class: "input-bg" };
const _hoisted_58$2 = { class: "col-3 d-flex" };
const _hoisted_59$2 = { class: "col-12" };
const _hoisted_60$2 = { class: "input-bg" };
const _hoisted_61$2 = { class: "row align-items-end" };
const _hoisted_62$2 = { class: "col-8 d-flex" };
const _hoisted_63$2 = /*#__PURE__*/createElementVNode("div", { class: "col-3 d-flex align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Интернет-магазин")
], -1 /* HOISTED */);
const _hoisted_64$2 = { class: "col-7" };
const _hoisted_65$2 = { class: "input-bg" };
const _hoisted_66$2 = { class: "col-2 d-flex" };
const _hoisted_67$2 = { class: "col-7 d-flex" };
const _hoisted_68$2 = { class: "input-bg" };
const _hoisted_69$2 = /*#__PURE__*/createElementVNode("div", { class: "col-5" }, [
  /*#__PURE__*/createElementVNode("button", { class: "btn new-window-button" }, [
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-pager" })
  ])
], -1 /* HOISTED */);
const _hoisted_70$2 = { class: "col-4" };
const _hoisted_71$2 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Номер мешка/места", -1 /* HOISTED */);
const _hoisted_72$2 = { class: "input-bg" };
const _hoisted_73$2 = { class: "col-3" };
const _hoisted_74$2 = { class: "batch-info-anchors" };
const _hoisted_75$2 = /*#__PURE__*/createTextVNode(" Сведения о товарах в накладной ");
const _hoisted_76$2 = /*#__PURE__*/createTextVNode(" Сведения о там.сборе накладной ");
const _hoisted_77$2 = /*#__PURE__*/createTextVNode(" Суммы пошлин и налогов накладной ");
const _hoisted_78$2 = /*#__PURE__*/createTextVNode(" Исчисление там.пошлин, налогов ");
const _hoisted_79$2 = { class: "inf-block changing-code row" };
const _hoisted_80$2 = /*#__PURE__*/createElementVNode("div", {
  class: "label-block",
  style: {"width":"100%"}
}, [
  /*#__PURE__*/createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_81$2 = { class: "col-10 d-flex w-100" };
const _hoisted_82$2 = { class: "col input-bg" };
const _hoisted_83$2 = { class: "col input-bg" };
const _hoisted_84$2 = { class: "col input-bg" };
const _hoisted_85$2 = { class: "col input-bg" };
const _hoisted_86$2 = { class: "col input-bg" };
const _hoisted_87$1 = { class: "col input-bg" };
const _hoisted_88$1 = { class: "col input-bg" };
const _hoisted_89$1 = /*#__PURE__*/createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_90$1 = /*#__PURE__*/createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_91$1 = /*#__PURE__*/createTextVNode(" Открыть исходную Инд. накладную ");
const _hoisted_92$1 = { class: "row" };
const _hoisted_93$1 = { class: "my-2" };
const _hoisted_94$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Решение по инд. накладной", -1 /* HOISTED */);
const _hoisted_95$1 = { class: "d-flex" };
const _hoisted_96$1 = { class: "col-9" };
const _hoisted_97$1 = { class: "input-bg" };
const _hoisted_98$1 = { class: "col-3" };
const _hoisted_99$1 = { class: "input-bg" };
const _hoisted_100$1 = { class: "d-flex" };
const _hoisted_101$1 = { class: "col-7" };
const _hoisted_102$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr fs-5" }, "Причина отказа", -1 /* HOISTED */);
const _hoisted_103$1 = { class: "input-bg" };
const _hoisted_104$1 = { class: "col-5" };
const _hoisted_105$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr fs-5" }, "Уникальный идентификатор партии", -1 /* HOISTED */);
const _hoisted_106$1 = { class: "col input-bg" };
const _hoisted_107 = { class: "sender-personal-inf mt-4" };
const _hoisted_108 = { class: "row" };
const _hoisted_109 = /*#__PURE__*/createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedBatchSender",
  "aria-expanded": "false",
  "aria-controls": "collapsedBatchSender"
}, [
  /*#__PURE__*/createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/createElementVNode("span", null, "Отправитель по индивидуальной накладной"),
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-caret-up" })
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
const _hoisted_119 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_120 = { class: "col-2 d-flex" };
const _hoisted_121 = { class: "input-bg col-2" };
const _hoisted_122 = ["checked"];
const _hoisted_123 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_124 = { class: "row my-2" };
const _hoisted_125 = { class: "col-6 d-flex justify-content-between" };
const _hoisted_126 = { class: "col-4 d-flex" };
const _hoisted_127 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-1" }, [
  /*#__PURE__*/createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_128 = { class: "input-bg col-9" };
const _hoisted_129 = { class: "col-4 d-flex" };
const _hoisted_130 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_131 = { class: "input-bg col-9" };
const _hoisted_132 = { class: "col-4 d-flex" };
const _hoisted_133 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_134 = { class: "input-bg col-9" };
const _hoisted_135 = { class: "col-6 d-flex" };
const _hoisted_136 = { class: "input-bg col-6" };
const _hoisted_137 = { class: "input-bg col-6" };
const _hoisted_138 = { class: "row" };
const _hoisted_139 = { class: "recipient-address" };
const _hoisted_140 = /*#__PURE__*/createElementVNode("div", { class: "row my-2" }, [
  /*#__PURE__*/createElementVNode("div", { class: "d-flex recipient-contacts" }, [
    /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, [
      /*#__PURE__*/createElementVNode("p", { class: "point-name" }, "Адрес:")
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
const _hoisted_173 = /*#__PURE__*/createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
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
const _hoisted_193 = /*#__PURE__*/createElementVNode("button", {
  class: "btn invoice-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsedBatchRecipient",
  "aria-expanded": "false",
  "aria-controls": "collapsedBatchRecipient"
}, [
  /*#__PURE__*/createElementVNode("div", { class: "collapsing-block d-flex justify-content-between" }, [
    /*#__PURE__*/createElementVNode("span", null, "Получатель по индивидуальной накладной"),
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-caret-up" })
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
const _hoisted_203 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_204 = { class: "col-2 d-flex" };
const _hoisted_205 = { class: "input-bg col-2" };
const _hoisted_206 = ["checked"];
const _hoisted_207 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-10" }, [
  /*#__PURE__*/createElementVNode("label", null, " Декларант (заявитель) ")
], -1 /* HOISTED */);
const _hoisted_208 = { class: "row my-2" };
const _hoisted_209 = { class: "col-6 d-flex justify-content-between" };
const _hoisted_210 = { class: "col-4 d-flex" };
const _hoisted_211 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-1" }, [
  /*#__PURE__*/createElementVNode("label", null, " ОГРН ")
], -1 /* HOISTED */);
const _hoisted_212 = { class: "input-bg col-9" };
const _hoisted_213 = { class: "col-4 d-flex" };
const _hoisted_214 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/createElementVNode("label", null, " ИНН ")
], -1 /* HOISTED */);
const _hoisted_215 = { class: "input-bg col-9" };
const _hoisted_216 = { class: "col-4 d-flex" };
const _hoisted_217 = /*#__PURE__*/createElementVNode("div", { class: "label-block col-3 ps-3" }, [
  /*#__PURE__*/createElementVNode("label", null, " КПП ")
], -1 /* HOISTED */);
const _hoisted_218 = { class: "input-bg col-9" };
const _hoisted_219 = { class: "col-6 d-flex" };
const _hoisted_220 = { class: "input-bg col-6" };
const _hoisted_221 = { class: "input-bg col-6" };
const _hoisted_222 = { class: "row" };
const _hoisted_223 = { class: "recipient-address" };
const _hoisted_224 = /*#__PURE__*/createElementVNode("div", { class: "row my-2" }, [
  /*#__PURE__*/createElementVNode("div", { class: "d-flex recipient-contacts" }, [
    /*#__PURE__*/createElementVNode("div", { class: "col-1 d-flex" }, [
      /*#__PURE__*/createElementVNode("p", { class: "point-name" }, "Адрес:")
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
const _hoisted_257 = /*#__PURE__*/createElementVNode("p", null, "Документ, удостоверяющий личность", -1 /* HOISTED */);
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
const _hoisted_276 = /*#__PURE__*/createElementVNode("p", null, "Товары", -1 /* HOISTED */);
const _hoisted_277 = { class: "arrow" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_tsoft_good_information_form = resolveComponent("tsoft-good-information-form");

  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", {
      class: "group-panel-label",
      onClick: _cache[0] || (_cache[0] = $event => ($data.isOrderOpen= !$data.isOrderOpen))
    }, [
      createElementVNode("p", null, "Товарная партия " + toDisplayString($props.orderNum), 1 /* TEXT */),
      createElementVNode("div", _hoisted_2$6, [
        createElementVNode("span", {
          class: normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrderOpen}])
        }, null, 2 /* CLASS */)
      ])
    ]),
    createElementVNode("div", {
      class: normalizeClass(["group-panel-content", {'open': $data.isOrderOpen}])
    }, [
      createElementVNode("div", _hoisted_3$5, [
        createCommentVNode("Region элемент хэдера блока с кнопками"),
        _hoisted_4$5,
        createCommentVNode("endregion"),
        createCommentVNode("Region элемент с информацией о партии, индивидуальной информацией об отправителе, с информацией о получателе"),
        createElementVNode("div", _hoisted_5$5, [
          createCommentVNode("Region элемент с общей информацией о партии"),
          createElementVNode("div", _hoisted_6$4, [
            createElementVNode("div", _hoisted_7$4, [
              createElementVNode("div", _hoisted_8$4, [
                createElementVNode("form", _hoisted_9$3, [
                  createElementVNode("div", _hoisted_10$3, [
                    createElementVNode("div", _hoisted_11$2, [
                      _hoisted_12$2,
                      _hoisted_13$2,
                      createElementVNode("div", _hoisted_14$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.order.general.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.general.document.code]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_15$2, [
                      createElementVNode("div", _hoisted_16$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.order.general.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.general.document.type]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_17$2, [
                      createElementVNode("div", _hoisted_18$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.order.general.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.general.document.num]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_19$2, [
                      createElementVNode("div", _hoisted_20$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.order.general.document.date) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.general.document.date]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_21$2, [
                    createElementVNode("div", _hoisted_22$2, [
                      _hoisted_23$2,
                      createElementVNode("div", _hoisted_24$2, [
                        createElementVNode("div", _hoisted_25$2, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.order.personal.document.count) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, $props.order.personal.document.count]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_26$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.order.personal.document.code) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.personal.document.code]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_27$2, [
                      createElementVNode("div", _hoisted_28$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.order.personal.document.type) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.personal.document.type]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_29$2, [
                      createElementVNode("div", _hoisted_30$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.order.personal.document.num) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.personal.document.num]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_31$2, [
                      createElementVNode("div", _hoisted_32$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.order.personal.document.date) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.personal.document.date]
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_33$2, [
                    createElementVNode("div", _hoisted_34$2, [
                      _hoisted_35$2,
                      createElementVNode("div", _hoisted_36$2, [
                        createElementVNode("div", _hoisted_37$2, [
                          createElementVNode("div", _hoisted_38$2, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.order.general.grossWeight) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.general.grossWeight]
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_39$2, [
                          createElementVNode("div", _hoisted_40$2, [
                            createElementVNode("div", _hoisted_41$2, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.order.general.grossWeightUnit) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.general.grossWeightUnit]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_42$2, [
                            createElementVNode("div", _hoisted_43$2, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.order.general.grossWeightUnknown) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.general.grossWeightUnknown]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_44$2, [
                      _hoisted_45$2,
                      createElementVNode("div", _hoisted_46$2, [
                        createElementVNode("div", _hoisted_47$2, [
                          createElementVNode("div", _hoisted_48$2, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_49$2, [
                          _hoisted_50$2,
                          createElementVNode("div", _hoisted_51$2, [
                            createElementVNode("div", _hoisted_52$2, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.order.general.customCostCurrency) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.general.customCostCurrency]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_53$2, [
                      _hoisted_54$2,
                      createElementVNode("div", _hoisted_55$2, [
                        createElementVNode("div", _hoisted_56$2, [
                          createElementVNode("div", _hoisted_57$2, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.order.general.customCost) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.general.customCost]
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_58$2, [
                          createElementVNode("div", _hoisted_59$2, [
                            createElementVNode("div", _hoisted_60$2, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.order.general.customCostCurrency) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.general.customCostCurrency]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_61$2, [
                    createElementVNode("div", _hoisted_62$2, [
                      _hoisted_63$2,
                      createElementVNode("div", _hoisted_64$2, [
                        createElementVNode("div", _hoisted_65$2, [
                          withDirectives(createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.order.internetMarketUrl) = $event))
                          }, null, 512 /* NEED_PATCH */), [
                            [vModelText, $props.order.internetMarketUrl]
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_66$2, [
                        createElementVNode("div", _hoisted_67$2, [
                          createElementVNode("div", _hoisted_68$2, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.order.internetMarketUnknown) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.internetMarketUnknown]
                            ])
                          ])
                        ]),
                        _hoisted_69$2
                      ])
                    ]),
                    createElementVNode("div", _hoisted_70$2, [
                      _hoisted_71$2,
                      createElementVNode("div", _hoisted_72$2, [
                        withDirectives(createElementVNode("input", {
                          type: "text",
                          class: "form-control",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.order.placeNum) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.placeNum]
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_73$2, [
                createElementVNode("div", _hoisted_74$2, [
                  createVNode(_component_router_link, {
                    to: { name: 'index' },
                    id: "productsInfoLink"
                  }, {
                    default: withCtx(() => [
                      _hoisted_75$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: withCtx(() => [
                      _hoisted_76$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: withCtx(() => [
                      _hoisted_77$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  createVNode(_component_router_link, { to: { name: 'index' } }, {
                    default: withCtx(() => [
                      _hoisted_78$2
                    ]),
                    _: 1 /* STABLE */
                  }),
                  createElementVNode("div", _hoisted_79$2, [
                    _hoisted_80$2,
                    createElementVNode("div", _hoisted_81$2, [
                      createElementVNode("div", _hoisted_82$2, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.order.changeDetailsType.stageChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.stageChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_83$2, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.order.changeDetailsType.reasonChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.reasonChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_84$2, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.order.changeDetailsType.quantityChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.quantityChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_85$2, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.order.changeDetailsType.TNVEDChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.TNVEDChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_86$2, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.order.changeDetailsType.customsCostChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.customsCostChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_87$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.order.changeDetailsType.customsPaymentChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.customsPaymentChangeCode]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_88$1, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control number-code",
                          type: "number",
                          "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.order.changeDetailsType.otherChangeCode) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.order.changeDetailsType.otherChangeCode]
                        ])
                      ]),
                      _hoisted_89$1
                    ]),
                    _hoisted_90$1
                  ]),
                  createVNode(_component_router_link, {
                    to: { name: 'index' },
                    class: "my-4"
                  }, {
                    default: withCtx(() => [
                      _hoisted_91$1
                    ]),
                    _: 1 /* STABLE */
                  })
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_92$1, [
              createElementVNode("div", _hoisted_93$1, [
                _hoisted_94$1,
                createElementVNode("div", _hoisted_95$1, [
                  createElementVNode("div", _hoisted_96$1, [
                    createElementVNode("div", _hoisted_97$1, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.order.personal.invoiceDecision) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, $props.order.personal.invoiceDecision]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_98$1, [
                    createElementVNode("div", _hoisted_99$1, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($props.order.personal.invoiceDecisionUnknown) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, $props.order.personal.invoiceDecisionUnknown]
                      ])
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_100$1, [
                createElementVNode("div", _hoisted_101$1, [
                  _hoisted_102$1,
                  createElementVNode("div", _hoisted_103$1, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.order.orderRejectReason) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.order.orderRejectReason]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_104$1, [
                  _hoisted_105$1,
                  createElementVNode("div", _hoisted_106$1, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($props.order.orderUniqueId) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.order.orderUniqueId]
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createCommentVNode("endregion"),
          createCommentVNode("Region элемент с индивидуальной информацией об отправителе"),
          createElementVNode("div", _hoisted_107, [
            createElementVNode("div", _hoisted_108, [
              _hoisted_109,
              createElementVNode("div", _hoisted_110, [
                createElementVNode("div", _hoisted_111, [
                  createElementVNode("div", _hoisted_112, [
                    createElementVNode("div", _hoisted_113, [
                      createElementVNode("form", _hoisted_114, [
                        createElementVNode("div", _hoisted_115, [
                          createElementVNode("div", _hoisted_116, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "",
                              "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($props.order.consignor.fullName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignor.fullName]
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_117, [
                          createElementVNode("div", _hoisted_118, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => (($props.order.consignor.countryCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignor.countryCode]
                            ])
                          ])
                        ]),
                        _hoisted_119,
                        createElementVNode("div", _hoisted_120, [
                          createElementVNode("div", _hoisted_121, [
                            createElementVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              checked: $props.order.consignor.isDeclarant
                            }, null, 8 /* PROPS */, _hoisted_122)
                          ]),
                          _hoisted_123
                        ])
                      ]),
                      createElementVNode("div", _hoisted_124, [
                        createElementVNode("div", _hoisted_125, [
                          createElementVNode("div", _hoisted_126, [
                            _hoisted_127,
                            createElementVNode("div", _hoisted_128, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => (($props.order.consignor.OGRN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.OGRN]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_129, [
                            _hoisted_130,
                            createElementVNode("div", _hoisted_131, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => (($props.order.consignor.INN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.INN]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_132, [
                            _hoisted_133,
                            createElementVNode("div", _hoisted_134, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => (($props.order.consignor.KPP) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.KPP]
                              ])
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_135, [
                          createElementVNode("div", _hoisted_136, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "номер телефона",
                              "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => (($props.order.consignor.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignor.phone]
                            ])
                          ]),
                          createElementVNode("div", _hoisted_137, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => (($props.order.consignor.email) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignor.email]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_138, [
                    createElementVNode("div", _hoisted_139, [
                      _hoisted_140,
                      createElementVNode("div", _hoisted_141, [
                        createElementVNode("div", _hoisted_142, [
                          createElementVNode("div", _hoisted_143, [
                            createElementVNode("div", _hoisted_144, [
                              createElementVNode("div", _hoisted_145, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "язык",
                                  "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => (($props.order.consignor.language) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.language]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_146, [
                              createElementVNode("div", _hoisted_147, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "страна",
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => (($props.order.consignor.country) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.country]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_148, [
                              createElementVNode("div", _hoisted_149, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "почтовый индекс",
                                  "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => (($props.order.consignor.mailIndex) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.mailIndex]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_150, [
                              createElementVNode("div", _hoisted_151, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "область (регион, штат, провинция)",
                                  "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => (($props.order.consignor.region) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.region]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_152, [
                            createElementVNode("div", _hoisted_153, [
                              createElementVNode("div", _hoisted_154, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "район",
                                  "onUpdate:modelValue": _cache[42] || (_cache[42] = $event => (($props.order.consignor.area) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.area]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_155, [
                              createElementVNode("div", _hoisted_156, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "город",
                                  "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => (($props.order.consignor.city) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.city]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_157, [
                              createElementVNode("div", _hoisted_158, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "населённый пункт",
                                  "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => (($props.order.consignor.settlement) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.settlement]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_159, [
                            createElementVNode("div", _hoisted_160, [
                              createElementVNode("div", _hoisted_161, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "улица",
                                  "onUpdate:modelValue": _cache[45] || (_cache[45] = $event => (($props.order.consignor.address) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.address]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_162, [
                              createElementVNode("div", _hoisted_163, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "дом, корпус, строение",
                                  "onUpdate:modelValue": _cache[46] || (_cache[46] = $event => (($props.order.consignor.house) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.house]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_164, [
                              createElementVNode("div", _hoisted_165, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "офис/квартира",
                                  "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => (($props.order.consignor.office) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.office]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_166, [
                              createElementVNode("div", _hoisted_167, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "номер а/я",
                                  "onUpdate:modelValue": _cache[48] || (_cache[48] = $event => (($props.order.consignor.officeLetter) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.officeLetter]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_168, [
                            createElementVNode("div", _hoisted_169, [
                              createElementVNode("div", _hoisted_170, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                  "onUpdate:modelValue": _cache[49] || (_cache[49] = $event => (($props.order.consignor.fullAddress) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignor.fullAddress]
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_171, [
                    createElementVNode("div", _hoisted_172, [
                      _hoisted_173,
                      createElementVNode("div", _hoisted_174, [
                        createElementVNode("div", _hoisted_175, [
                          createElementVNode("div", _hoisted_176, [
                            createElementVNode("div", _hoisted_177, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "стр",
                                "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => (($props.order.consignor.document.country) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.country]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_178, [
                            createElementVNode("div", _hoisted_179, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "код вида",
                                "onUpdate:modelValue": _cache[51] || (_cache[51] = $event => (($props.order.consignor.document.code) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.code]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_180, [
                            createElementVNode("div", _hoisted_181, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "краткое наименование",
                                "onUpdate:modelValue": _cache[52] || (_cache[52] = $event => (($props.order.consignor.document.shortName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.shortName]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_182, [
                            createElementVNode("div", _hoisted_183, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "серия",
                                "onUpdate:modelValue": _cache[53] || (_cache[53] = $event => (($props.order.consignor.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.series]
                              ])
                            ]),
                            createElementVNode("div", _hoisted_184, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[54] || (_cache[54] = $event => (($props.order.consignor.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.num]
                              ])
                            ]),
                            createElementVNode("div", _hoisted_185, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[55] || (_cache[55] = $event => (($props.order.consignor.document.dateRelease) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.dateRelease]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_186, [
                            createElementVNode("div", _hoisted_187, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Код подразделения",
                                "onUpdate:modelValue": _cache[56] || (_cache[56] = $event => (($props.order.consignor.document.divisionCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.divisionCode]
                              ])
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_188, [
                          createElementVNode("div", _hoisted_189, [
                            createElementVNode("div", _hoisted_190, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "наименование организации, выдавшей документ",
                                "onUpdate:modelValue": _cache[57] || (_cache[57] = $event => (($props.order.consignor.document.issuedBy) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignor.document.issuedBy]
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
          createCommentVNode("endregion"),
          createCommentVNode("Region элемент с индивидуальной информацией о получателе"),
          createElementVNode("div", _hoisted_191, [
            createElementVNode("div", _hoisted_192, [
              _hoisted_193,
              createElementVNode("div", _hoisted_194, [
                createElementVNode("div", _hoisted_195, [
                  createElementVNode("div", _hoisted_196, [
                    createElementVNode("div", _hoisted_197, [
                      createElementVNode("form", _hoisted_198, [
                        createElementVNode("div", _hoisted_199, [
                          createElementVNode("div", _hoisted_200, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "",
                              "onUpdate:modelValue": _cache[58] || (_cache[58] = $event => (($props.order.consignee.fullName) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignee.fullName]
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_201, [
                          createElementVNode("div", _hoisted_202, [
                            withDirectives(createElementVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": _cache[59] || (_cache[59] = $event => (($props.order.consignee.countryCode) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignee.countryCode]
                            ])
                          ])
                        ]),
                        _hoisted_203,
                        createElementVNode("div", _hoisted_204, [
                          createElementVNode("div", _hoisted_205, [
                            createElementVNode("input", {
                              type: "checkbox",
                              class: "form-check-input",
                              checked: $props.order.consignee.isDeclarant
                            }, null, 8 /* PROPS */, _hoisted_206)
                          ]),
                          _hoisted_207
                        ])
                      ]),
                      createElementVNode("div", _hoisted_208, [
                        createElementVNode("div", _hoisted_209, [
                          createElementVNode("div", _hoisted_210, [
                            _hoisted_211,
                            createElementVNode("div", _hoisted_212, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[60] || (_cache[60] = $event => (($props.order.consignee.OGRN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.OGRN]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_213, [
                            _hoisted_214,
                            createElementVNode("div", _hoisted_215, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[61] || (_cache[61] = $event => (($props.order.consignee.INN) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.INN]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_216, [
                            _hoisted_217,
                            createElementVNode("div", _hoisted_218, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                "onUpdate:modelValue": _cache[62] || (_cache[62] = $event => (($props.order.consignee.KPP) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.KPP]
                              ])
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_219, [
                          createElementVNode("div", _hoisted_220, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "номер телефона",
                              "onUpdate:modelValue": _cache[63] || (_cache[63] = $event => (($props.order.consignee.phone) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignee.phone]
                            ])
                          ]),
                          createElementVNode("div", _hoisted_221, [
                            withDirectives(createElementVNode("input", {
                              class: "form-control",
                              type: "text",
                              placeholder: "адрес эл.почты",
                              "onUpdate:modelValue": _cache[64] || (_cache[64] = $event => (($props.order.consignee.email) = $event))
                            }, null, 512 /* NEED_PATCH */), [
                              [vModelText, $props.order.consignee.email]
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_222, [
                    createElementVNode("div", _hoisted_223, [
                      _hoisted_224,
                      createElementVNode("div", _hoisted_225, [
                        createElementVNode("div", _hoisted_226, [
                          createElementVNode("div", _hoisted_227, [
                            createElementVNode("div", _hoisted_228, [
                              createElementVNode("div", _hoisted_229, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "язык",
                                  "onUpdate:modelValue": _cache[65] || (_cache[65] = $event => (($props.order.consignee.language) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.language]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_230, [
                              createElementVNode("div", _hoisted_231, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "страна",
                                  "onUpdate:modelValue": _cache[66] || (_cache[66] = $event => (($props.order.consignee.country) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.country]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_232, [
                              createElementVNode("div", _hoisted_233, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "почтовый индекс",
                                  "onUpdate:modelValue": _cache[67] || (_cache[67] = $event => (($props.order.consignee.mailIndex) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.mailIndex]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_234, [
                              createElementVNode("div", _hoisted_235, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "область (регион, штат, провинция)",
                                  "onUpdate:modelValue": _cache[68] || (_cache[68] = $event => (($props.order.consignee.region) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.region]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_236, [
                            createElementVNode("div", _hoisted_237, [
                              createElementVNode("div", _hoisted_238, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "район",
                                  "onUpdate:modelValue": _cache[69] || (_cache[69] = $event => (($props.order.consignee.area) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.area]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_239, [
                              createElementVNode("div", _hoisted_240, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "город",
                                  "onUpdate:modelValue": _cache[70] || (_cache[70] = $event => (($props.order.consignee.city) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.city]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_241, [
                              createElementVNode("div", _hoisted_242, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "населённый пункт",
                                  "onUpdate:modelValue": _cache[71] || (_cache[71] = $event => (($props.order.consignee.settlement) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.settlement]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_243, [
                            createElementVNode("div", _hoisted_244, [
                              createElementVNode("div", _hoisted_245, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "улица",
                                  "onUpdate:modelValue": _cache[72] || (_cache[72] = $event => (($props.order.consignee.address) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.address]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_246, [
                              createElementVNode("div", _hoisted_247, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "дом, корпус, строение",
                                  "onUpdate:modelValue": _cache[73] || (_cache[73] = $event => (($props.order.consignee.house) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.house]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_248, [
                              createElementVNode("div", _hoisted_249, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "офис/квартира",
                                  "onUpdate:modelValue": _cache[74] || (_cache[74] = $event => (($props.order.consignee.office) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.office]
                                ])
                              ])
                            ]),
                            createElementVNode("div", _hoisted_250, [
                              createElementVNode("div", _hoisted_251, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "номер а/я",
                                  "onUpdate:modelValue": _cache[75] || (_cache[75] = $event => (($props.order.consignee.officeLetter) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.officeLetter]
                                ])
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_252, [
                            createElementVNode("div", _hoisted_253, [
                              createElementVNode("div", _hoisted_254, [
                                withDirectives(createElementVNode("input", {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "набор элементов адреса, представленных в свободной форме в виде текста",
                                  "onUpdate:modelValue": _cache[76] || (_cache[76] = $event => (($props.order.consignee.fullAddress) = $event))
                                }, null, 512 /* NEED_PATCH */), [
                                  [vModelText, $props.order.consignee.fullAddress]
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_255, [
                    createElementVNode("div", _hoisted_256, [
                      _hoisted_257,
                      createElementVNode("div", _hoisted_258, [
                        createElementVNode("div", _hoisted_259, [
                          createElementVNode("div", _hoisted_260, [
                            createElementVNode("div", _hoisted_261, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "стр",
                                "onUpdate:modelValue": _cache[77] || (_cache[77] = $event => (($props.order.consignee.document.country) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.country]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_262, [
                            createElementVNode("div", _hoisted_263, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "код вида",
                                "onUpdate:modelValue": _cache[78] || (_cache[78] = $event => (($props.order.consignee.document.code) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.code]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_264, [
                            createElementVNode("div", _hoisted_265, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "краткое наименование",
                                "onUpdate:modelValue": _cache[79] || (_cache[79] = $event => (($props.order.consignee.document.shortName) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.shortName]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_266, [
                            createElementVNode("div", _hoisted_267, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "серия",
                                "onUpdate:modelValue": _cache[80] || (_cache[80] = $event => (($props.order.consignee.document.series) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.series]
                              ])
                            ]),
                            createElementVNode("div", _hoisted_268, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "номер",
                                "onUpdate:modelValue": _cache[81] || (_cache[81] = $event => (($props.order.consignee.document.num) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.num]
                              ])
                            ]),
                            createElementVNode("div", _hoisted_269, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "дата выдачи",
                                "onUpdate:modelValue": _cache[82] || (_cache[82] = $event => (($props.order.consignee.document.dateRelease) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.dateRelease]
                              ])
                            ])
                          ]),
                          createElementVNode("div", _hoisted_270, [
                            createElementVNode("div", _hoisted_271, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Код подразделения",
                                "onUpdate:modelValue": _cache[83] || (_cache[83] = $event => (($props.order.consignee.document.divisionCode) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.divisionCode]
                              ])
                            ])
                          ])
                        ]),
                        createElementVNode("div", _hoisted_272, [
                          createElementVNode("div", _hoisted_273, [
                            createElementVNode("div", _hoisted_274, [
                              withDirectives(createElementVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "наименование организации, выдавшей документ",
                                "onUpdate:modelValue": _cache[84] || (_cache[84] = $event => (($props.order.consignee.document.issuedBy) = $event))
                              }, null, 512 /* NEED_PATCH */), [
                                [vModelText, $props.order.consignee.document.issuedBy]
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
      createElementVNode("div", _hoisted_275, [
        createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[85] || (_cache[85] = $event => ($data.isGoodsOpen= !$data.isGoodsOpen))
        }, [
          _hoisted_276,
          createElementVNode("div", _hoisted_277, [
            createElementVNode("span", {
              class: normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isGoodsOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        createElementVNode("div", {
          class: normalizeClass(["group-panel-content", {'open': $data.isGoodsOpen}])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.goods, (good, index) => {
            return (openBlock(), createBlock(_component_tsoft_good_information_form, {
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

script$6.render = render$6;
script$6.__file = "src/components/Form/GoodsAwbInformation.vue";

var script$5 = {
  name: "TsoftAdditionalDocumentForm",
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};

const _hoisted_1$5 = {
  class: "optional-inf-block mt-2",
  id: "extraDocBlock"
};
const _hoisted_2$5 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex optional-inf-header justify-content-between\"><h4 class=\"col-4\">Сведения о дополнительном документе</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-minus\" id=\"collapseButton2\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-2Inner\" aria-expanded=\"true\" aria-controls=\"product-2Inner\"><i class=\"fa-solid fa-sort-down\"></i></button></div></div></div>", 1);
const _hoisted_3$4 = {
  class: "product-inner-block collapse",
  id: "product-2Inner"
};
const _hoisted_4$4 = { class: "optional-inf-card" };
const _hoisted_5$4 = { class: "row" };
const _hoisted_6$3 = { class: "d-flex" };
const _hoisted_7$3 = { class: "col-5 d-flex" };
const _hoisted_8$3 = { class: "col-3 d-flex" };
const _hoisted_9$2 = { class: "col-8" };
const _hoisted_10$2 = { class: "input-bg" };
const _hoisted_11$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, [
  /*#__PURE__*/createElementVNode("p", { class: "fs-5 my-0" }, "/")
], -1 /* HOISTED */);
const _hoisted_12$1 = { class: "col-3" };
const _hoisted_13$1 = { class: "input-bg" };
const _hoisted_14$1 = { class: "col-9 ps-2" };
const _hoisted_15$1 = { class: "input-bg" };
const _hoisted_16$1 = { class: "col-7 row" };
const _hoisted_17$1 = { class: "col-2" };
const _hoisted_18$1 = { class: "input-bg" };
const _hoisted_19$1 = { class: "col-3 d-flex" };
const _hoisted_20$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr pe-1" }, "от", -1 /* HOISTED */);
const _hoisted_21$1 = { class: "input-bg" };
const _hoisted_22$1 = { class: "col-3 d-flex" };
const _hoisted_23$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr pe-1" }, "с", -1 /* HOISTED */);
const _hoisted_24$1 = { class: "input-bg" };
const _hoisted_25$1 = { class: "col-3 d-flex" };
const _hoisted_26$1 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr pe-1" }, "по", -1 /* HOISTED */);
const _hoisted_27$1 = { class: "input-bg" };
const _hoisted_28$1 = { class: "col-1" };
const _hoisted_29$1 = { class: "input-bg" };
const _hoisted_30$1 = { class: "row mt-3" };
const _hoisted_31$1 = { class: "d-flex" };
const _hoisted_32$1 = { class: "col-5 d-flex" };
const _hoisted_33$1 = /*#__PURE__*/createStaticVNode("<div class=\"col-2\"><div class=\"row pe-4\"><div class=\"col-6\"><button class=\"btn\"><i class=\"fa-solid fa-bolt-lightning\"></i></button></div><div class=\"col-6\"><button class=\"btn\"><i class=\"fa-solid fa-folder-open\"></i></button></div></div><div class=\"row\"></div></div>", 1);
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
const _hoisted_48$1 = /*#__PURE__*/createElementVNode("div", { class: "" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, " Сведения о фактическом представлении документа ")
], -1 /* HOISTED */);
const _hoisted_49$1 = { class: "d-flex" };
const _hoisted_50$1 = { class: "col-2 d-flex" };
const _hoisted_51$1 = { class: "input-bg col-4" };
const _hoisted_52$1 = { class: "input-bg col-8" };
const _hoisted_53$1 = { class: "col-5 d-flex" };
const _hoisted_54$1 = /*#__PURE__*/createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "col-1 align-bcntr" }, "ДТ")
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
const _hoisted_64$1 = /*#__PURE__*/createElementVNode("div", { class: "align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "col-1 align-bcntr" }, "ТС")
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
const _hoisted_75$1 = /*#__PURE__*/createElementVNode("div", { class: "col-1" }, null, -1 /* HOISTED */);
const _hoisted_76$1 = /*#__PURE__*/createElementVNode("div", { class: "col-2 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "TIR")
], -1 /* HOISTED */);
const _hoisted_77$1 = { class: "col-2" };
const _hoisted_78$1 = { class: "input-bg" };
const _hoisted_79$1 = { class: "col-7" };
const _hoisted_80$1 = { class: "input-bg" };
const _hoisted_81$1 = { class: "col-6 d-flex" };
const _hoisted_82$1 = /*#__PURE__*/createElementVNode("div", { class: "col-3 align-bcntr" }, [
  /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Иной документ")
], -1 /* HOISTED */);
const _hoisted_83$1 = { class: "col-6" };
const _hoisted_84$1 = { class: "input-bg" };
const _hoisted_85$1 = { class: "col-3" };
const _hoisted_86$1 = { class: "input-bg" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    _hoisted_2$5,
    createElementVNode("div", _hoisted_3$4, [
      createElementVNode("div", _hoisted_4$4, [
        createElementVNode("div", _hoisted_5$4, [
          createElementVNode("div", _hoisted_6$3, [
            createElementVNode("div", _hoisted_7$3, [
              createElementVNode("div", _hoisted_8$3, [
                createElementVNode("div", _hoisted_9$2, [
                  createElementVNode("div", _hoisted_10$2, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.document.typeCode) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.typeCode]
                    ])
                  ])
                ]),
                _hoisted_11$1,
                createElementVNode("div", _hoisted_12$1, [
                  createElementVNode("div", _hoisted_13$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.document.typeCodeCount) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.typeCodeCount]
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_14$1, [
                createElementVNode("div", _hoisted_15$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.document.type) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.type]
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_16$1, [
              createElementVNode("div", _hoisted_17$1, [
                createElementVNode("div", _hoisted_18$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.document.number) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.number]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_19$1, [
                _hoisted_20$1,
                createElementVNode("div", _hoisted_21$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.document.dateRelease) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.dateRelease]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_22$1, [
                _hoisted_23$1,
                createElementVNode("div", _hoisted_24$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата начала",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.document.dateStart) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.dateStart]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_25$1, [
                _hoisted_26$1,
                createElementVNode("div", _hoisted_27$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "дата окончания",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.document.dateEnd) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.dateEnd]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_28$1, [
                createElementVNode("div", _hoisted_29$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.document.fieldUnknown) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.fieldUnknown]
                  ])
                ])
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_30$1, [
          createElementVNode("div", _hoisted_31$1, [
            createElementVNode("div", _hoisted_32$1, [
              _hoisted_33$1,
              createElementVNode("div", _hoisted_34$1, [
                createElementVNode("div", _hoisted_35$1, [
                  createElementVNode("div", _hoisted_36$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      placeholder: "Полное наименование государственной",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.document.countryFullName) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.countryFullName]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_37$1, [
                  createElementVNode("div", _hoisted_38$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      placeholder: "AuthorityId",
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.document.authorityId) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.authorityId]
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_39$1, [
              createElementVNode("div", _hoisted_40$1, [
                createElementVNode("div", _hoisted_41$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Информационного ресурс",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.document.informationSource) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.informationSource]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_42$1, [
                createElementVNode("div", _hoisted_43$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "URL",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.document.url) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.url]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_44$1, [
                createElementVNode("div", _hoisted_45$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    placeholder: "Дата обращения",
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.document.dateUrlAppeal) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.dateUrlAppeal]
                  ])
                ])
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_46$1, [
          createElementVNode("div", _hoisted_47$1, [
            _hoisted_48$1,
            createElementVNode("div", _hoisted_49$1, [
              createElementVNode("div", _hoisted_50$1, [
                createElementVNode("div", _hoisted_51$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.document.unknownField1) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.unknownField1]
                  ])
                ]),
                createElementVNode("div", _hoisted_52$1, [
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "form-control",
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.document.unknownField2) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.document.unknownField2]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_53$1, [
                _hoisted_54$1,
                createElementVNode("div", _hoisted_55$1, [
                  createElementVNode("div", _hoisted_56$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.document.unknownField3) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField3]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_57$1, [
                  createElementVNode("div", _hoisted_58$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.document.unknownField4) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField4]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_59$1, [
                  createElementVNode("div", _hoisted_60$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.document.unknownField5) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField5]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_61$1, [
                  createElementVNode("div", _hoisted_62$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.document.unknownField6) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField6]
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_63$1, [
                _hoisted_64$1,
                createElementVNode("div", _hoisted_65$1, [
                  createElementVNode("div", _hoisted_66$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.document.unknownField7) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField7]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_67$1, [
                  createElementVNode("div", _hoisted_68$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.document.unknownField8) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField8]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_69$1, [
                  createElementVNode("div", _hoisted_70$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.document.unknownField9) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField9]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_71$1, [
                  createElementVNode("div", _hoisted_72$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.document.unknownField10) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField10]
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_73$1, [
              createElementVNode("div", _hoisted_74$1, [
                _hoisted_75$1,
                _hoisted_76$1,
                createElementVNode("div", _hoisted_77$1, [
                  createElementVNode("div", _hoisted_78$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.document.unknownField11) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField11]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_79$1, [
                  createElementVNode("div", _hoisted_80$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.document.unknownField12) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField12]
                    ])
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_81$1, [
                _hoisted_82$1,
                createElementVNode("div", _hoisted_83$1, [
                  createElementVNode("div", _hoisted_84$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.document.unknownField13) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField13]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_85$1, [
                  createElementVNode("div", _hoisted_86$1, [
                    withDirectives(createElementVNode("input", {
                      type: "text",
                      class: "form-control",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.document.unknownField14) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.document.unknownField14]
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

script$5.render = render$5;
script$5.__file = "src/components/Form/AdditionalDocument.vue";

var script$4 = {
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

const _hoisted_1$4 = {
  class: "product-info-block my-2",
  id: "productInvoiceBlock"
};
const _hoisted_2$4 = /*#__PURE__*/createStaticVNode("<div class=\"d-flex product-batch-header justify-content-between\"><h4 class=\"col-4\">Товар (1 из 2)</h4><div class=\"product-info-actions col-4 d-flex justify-content-end\"><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-plus\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-minus\" id=\"collapseButton\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button\"><i class=\"fa-solid fa-border-top-left\"></i></button></div><div class=\"col-2\"><button class=\"btn product-actions-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#product-1Inner\" aria-expanded=\"true\" aria-controls=\"product-1Inner\"><i class=\"fa-solid fa-sort-down\"></i></button></div></div></div>", 1);
const _hoisted_3$3 = {
  class: "product-inner-block collapse",
  id: "product-1Inner"
};
const _hoisted_4$3 = { class: "row" };
const _hoisted_5$3 = { class: "col-1" };
const _hoisted_6$2 = { class: "col-9" };
const _hoisted_7$2 = { class: "col input-bg" };
const _hoisted_8$2 = { class: "col input-bg mt-3" };
const _hoisted_9$1 = { class: "col-8" };
const _hoisted_10$1 = { class: "input-bg h-100" };
const _hoisted_11 = { class: "col-3" };
const _hoisted_12 = { class: "changing-code" };
const _hoisted_13 = /*#__PURE__*/createElementVNode("div", { class: "label-block" }, [
  /*#__PURE__*/createElementVNode("label", { class: "fs-5" }, "Код изменений")
], -1 /* HOISTED */);
const _hoisted_14 = { class: "col-9 d-flex w-100" };
const _hoisted_15 = { class: "col input-bg" };
const _hoisted_16 = { class: "col input-bg" };
const _hoisted_17 = { class: "col input-bg" };
const _hoisted_18 = { class: "col input-bg" };
const _hoisted_19 = { class: "col input-bg" };
const _hoisted_20 = { class: "col input-bg" };
const _hoisted_21 = { class: "col input-bg" };
const _hoisted_22 = /*#__PURE__*/createElementVNode("button", { class: "btn info-button p-1" }, [
  /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-circle-info" })
], -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/createElementVNode("div", { class: "col-2" }, null, -1 /* HOISTED */);
const _hoisted_24 = { class: "row" };
const _hoisted_25 = { class: "col-3" };
const _hoisted_26 = { class: "d-flex" };
const _hoisted_27 = { class: "col-5" };
const _hoisted_28 = /*#__PURE__*/createElementVNode("p", { class: "col-11 align-bcntr" }, "ТН ВЭД ЕАЭС", -1 /* HOISTED */);
const _hoisted_29 = { class: "col-11 input-bg" };
const _hoisted_30 = { class: "col-7" };
const _hoisted_31 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Вес, брутто", -1 /* HOISTED */);
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
const _hoisted_45 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Вес, нетто", -1 /* HOISTED */);
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
const _hoisted_56 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Количество", -1 /* HOISTED */);
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
const _hoisted_67 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Таможенная стоимость", -1 /* HOISTED */);
const _hoisted_68 = { class: "d-flex" };
const _hoisted_69 = { class: "col-7" };
const _hoisted_70 = { class: "col input-bg" };
const _hoisted_71 = { class: "col-3" };
const _hoisted_72 = { class: "d-flex" };
const _hoisted_73 = { class: "col input-bg" };
const _hoisted_74 = /*#__PURE__*/createElementVNode("div", { class: "col-2" }, [
  /*#__PURE__*/createElementVNode("button", { class: "btn btn-bg-white" }, [
    /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-note-sticky" })
  ])
], -1 /* HOISTED */);
const _hoisted_75 = { class: "d-flex mt-2" };
const _hoisted_76 = { class: "col-6" };
const _hoisted_77 = { class: "col input-bg" };
const _hoisted_78 = { class: "col-6 d-flex" };
const _hoisted_79 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr ps-2" }, "Трансп. расх.", -1 /* HOISTED */);
const _hoisted_80 = { class: "col input-bg" };
const _hoisted_81 = { class: "col input-bg" };
const _hoisted_82 = { class: "col-3" };
const _hoisted_83 = { class: "" };
const _hoisted_84 = /*#__PURE__*/createElementVNode("p", { class: "align-bcntr" }, "Фактурная стоимость", -1 /* HOISTED */);
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
const _hoisted_102 = /*#__PURE__*/createTextVNode("РОИС");
const _hoisted_103 = /*#__PURE__*/createTextVNode("Предшествующий документ");
const _hoisted_104 = { class: "col-3 d-flex" };
const _hoisted_105 = { class: "d-flex batch-info-anchors" };
const _hoisted_106 = /*#__PURE__*/createTextVNode("Дополнительный документ ");

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$4,
    createElementVNode("div", _hoisted_3$3, [
      createElementVNode("div", _hoisted_4$3, [
        createElementVNode("div", _hoisted_5$3, [
          createElementVNode("div", _hoisted_6$2, [
            createElementVNode("div", _hoisted_7$2, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.good.numeric) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, $props.good.numeric]
              ])
            ]),
            createElementVNode("div", _hoisted_8$2, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.good.totalNumeric) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, $props.good.totalNumeric]
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_9$1, [
          createElementVNode("div", _hoisted_10$1, [
            withDirectives(createElementVNode("textarea", {
              type: "text",
              class: "form-control h-100",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.good.description) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [vModelText, $props.good.description]
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_11, [
          createElementVNode("div", _hoisted_12, [
            _hoisted_13,
            createElementVNode("div", _hoisted_14, [
              createElementVNode("div", _hoisted_15, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.good.changeDetailsType.stageChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.stageChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_16, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($props.good.changeDetailsType.reasonChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.reasonChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_17, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($props.good.changeDetailsType.quantityChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.quantityChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_18, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($props.good.changeDetailsType.TNVEDChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.TNVEDChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_19, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($props.good.changeDetailsType.customsCostChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.customsCostChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_20, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($props.good.changeDetailsType.customsPaymentChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.customsPaymentChangeCode]
                ])
              ]),
              createElementVNode("div", _hoisted_21, [
                withDirectives(createElementVNode("input", {
                  class: "form-control number-code",
                  type: "number",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($props.good.changeDetailsType.otherChangeCode) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.changeDetailsType.otherChangeCode]
                ])
              ]),
              _hoisted_22
            ]),
            _hoisted_23
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_24, [
        createElementVNode("div", _hoisted_25, [
          createElementVNode("div", _hoisted_26, [
            createElementVNode("div", _hoisted_27, [
              _hoisted_28,
              createElementVNode("div", _hoisted_29, [
                withDirectives(createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($props.good.tnved) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.tnved]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_30, [
              _hoisted_31,
              createElementVNode("div", _hoisted_32, [
                createElementVNode("div", _hoisted_33, [
                  createElementVNode("div", _hoisted_34, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($props.good.grossWeightQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.good.grossWeightQuantity]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_35, [
                  createElementVNode("div", _hoisted_36, [
                    createElementVNode("div", _hoisted_37, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($props.good.goodWeightUnit) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, $props.good.goodWeightUnit]
                      ])
                    ])
                  ]),
                  createElementVNode("div", _hoisted_38, [
                    createElementVNode("div", _hoisted_39, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control number-code",
                        type: "text",
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($props.good.goodWeightUnknown) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, $props.good.goodWeightUnknown]
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_40, [
            createElementVNode("div", _hoisted_41, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                placeholder: "наименование товарного знака, объекта авторского",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($props.good.tradeMark) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, $props.good.tradeMark]
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_42, [
          createElementVNode("div", _hoisted_43, [
            createElementVNode("div", _hoisted_44, [
              _hoisted_45,
              createElementVNode("div", _hoisted_46, [
                createElementVNode("div", _hoisted_47, [
                  createElementVNode("div", _hoisted_48, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($props.good.netWeightQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.good.netWeightQuantity]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_49, [
                  createElementVNode("div", _hoisted_50, [
                    createElementVNode("div", _hoisted_51, [
                      createElementVNode("div", _hoisted_52, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($props.good.netWeightUnit) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.good.netWeightUnit]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_53, [
                      createElementVNode("div", _hoisted_54, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($props.good.netWeightUnknown) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.good.netWeightUnknown]
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_55, [
              _hoisted_56,
              createElementVNode("div", _hoisted_57, [
                createElementVNode("div", _hoisted_58, [
                  createElementVNode("div", _hoisted_59, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($props.good.goodQuantity) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.good.goodQuantity]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_60, [
                  createElementVNode("div", _hoisted_61, [
                    createElementVNode("div", _hoisted_62, [
                      createElementVNode("div", _hoisted_63, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($props.good.goodUnit) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.good.goodUnit]
                        ])
                      ])
                    ]),
                    createElementVNode("div", _hoisted_64, [
                      createElementVNode("div", _hoisted_65, [
                        withDirectives(createElementVNode("input", {
                          class: "form-control",
                          type: "text",
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($props.good.goodUnknown) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vModelText, $props.good.goodUnknown]
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_66, [
              _hoisted_67,
              createElementVNode("div", _hoisted_68, [
                createElementVNode("div", _hoisted_69, [
                  createElementVNode("div", _hoisted_70, [
                    withDirectives(createElementVNode("input", {
                      class: "form-control",
                      type: "text",
                      "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($props.good.customsCost) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                      [vModelText, $props.good.customsCost]
                    ])
                  ])
                ]),
                createElementVNode("div", _hoisted_71, [
                  createElementVNode("div", _hoisted_72, [
                    createElementVNode("div", _hoisted_73, [
                      withDirectives(createElementVNode("input", {
                        class: "form-control",
                        type: "text",
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($props.good.customsCostCurrency) = $event))
                      }, null, 512 /* NEED_PATCH */), [
                        [vModelText, $props.good.customsCostCurrency]
                      ])
                    ])
                  ])
                ]),
                _hoisted_74
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_75, [
            createElementVNode("div", _hoisted_76, [
              createElementVNode("div", _hoisted_77, [
                withDirectives(createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  placeholder: "наименование места происх.",
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($props.good.productionPlaceName) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.productionPlaceName]
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_78, [
              _hoisted_79,
              createElementVNode("div", _hoisted_80, [
                withDirectives(createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($props.good.transportCost) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.transportCost]
                ])
              ]),
              createElementVNode("div", _hoisted_81, [
                withDirectives(createElementVNode("input", {
                  class: "form-control",
                  type: "text",
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($props.good.transportCostCurrency) = $event))
                }, null, 512 /* NEED_PATCH */), [
                  [vModelText, $props.good.transportCostCurrency]
                ])
              ])
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_82, [
          createElementVNode("div", _hoisted_83, [
            _hoisted_84,
            createElementVNode("div", _hoisted_85, [
              createElementVNode("div", _hoisted_86, [
                createElementVNode("div", _hoisted_87, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($props.good.invoiceValue) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.good.invoiceValue]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_88, [
                createElementVNode("div", _hoisted_89, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($props.good.invoiceValueCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.good.invoiceValueCurrency]
                  ])
                ])
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_90, [
            createElementVNode("div", _hoisted_91, [
              createElementVNode("div", _hoisted_92, [
                createElementVNode("div", _hoisted_93, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => (($props.good.invoiceValueRus) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.good.invoiceValueRus]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_94, [
                createElementVNode("div", _hoisted_95, [
                  withDirectives(createElementVNode("input", {
                    class: "form-control",
                    type: "text",
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($props.good.invoiceValueRusCurrency) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, $props.good.invoiceValueRusCurrency]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_96, [
        createElementVNode("div", _hoisted_97, [
          createElementVNode("div", _hoisted_98, [
            createElementVNode("div", _hoisted_99, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                placeholder: "примечание",
                "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => (($props.good.note) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, $props.good.note]
              ])
            ]),
            createElementVNode("div", _hoisted_100, [
              withDirectives(createElementVNode("input", {
                class: "form-control",
                type: "text",
                "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($props.good.url) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, $props.good.url]
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_101, [
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: withCtx(() => [
                _hoisted_102
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr"
            }, {
              default: withCtx(() => [
                _hoisted_103
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        createElementVNode("div", _hoisted_104, [
          createElementVNode("div", _hoisted_105, [
            createVNode(_component_router_link, {
              to: { name: 'index' },
              class: "align-bcntr",
              id: "extraDocLink"
            }, {
              default: withCtx(() => [
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

script$4.render = render$4;
script$4.__file = "src/components/Form/GoodInformation.vue";

var script$3 = {
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

const _hoisted_1$3 = { class: "forms" };
const _hoisted_2$3 = /*#__PURE__*/createElementVNode("p", null, "Заказы", -1 /* HOISTED */);
const _hoisted_3$2 = { class: "arrow" };
const _hoisted_4$2 = /*#__PURE__*/createElementVNode("p", null, "Документы", -1 /* HOISTED */);
const _hoisted_5$2 = { class: "arrow" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_general_declaration_form = resolveComponent("tsoft-general-declaration-form");
  const _component_tsoft_goods_awb_information_form = resolveComponent("tsoft-goods-awb-information-form");
  const _component_tsoft_additional_document_form = resolveComponent("tsoft-additional-document-form");

  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", null, [
      createVNode(_component_tsoft_general_declaration_form, {
        "awb-info": this.awbInfo,
        registry: this.registry
      }, null, 8 /* PROPS */, ["awb-info", "registry"]),
      createElementVNode("div", null, [
        createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[0] || (_cache[0] = $event => ($data.isOrdersOpen = !$data.isOrdersOpen))
        }, [
          _hoisted_2$3,
          createElementVNode("div", _hoisted_3$2, [
            createElementVNode("span", {
              class: normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isOrdersOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        createElementVNode("div", {
          class: normalizeClass(["group-panel-content", {'open': $data.isOrdersOpen}])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(this.data.registry.orders, (order, index) => {
            return (openBlock(), createBlock(_component_tsoft_goods_awb_information_form, {
              order: order.orderInfo,
              goods: order.goods,
              orderNum: index
            }, null, 8 /* PROPS */, ["order", "goods", "orderNum"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ]),
      createElementVNode("div", null, [
        createElementVNode("div", {
          class: "group-panel-label",
          onClick: _cache[1] || (_cache[1] = $event => ($data.isDocumentOpen = !$data.isDocumentOpen))
        }, [
          _hoisted_4$2,
          createElementVNode("div", _hoisted_5$2, [
            createElementVNode("span", {
              class: normalizeClass(["fa-solid fa-caret-right", {'down-rotate': $data.isDocumentOpen}])
            }, null, 2 /* CLASS */)
          ])
        ]),
        createElementVNode("div", {
          class: normalizeClass(["group-panel-content", {'open': $data.isDocumentOpen}])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(this.data.registry.documents, (document, index) => {
            return (openBlock(), createBlock(_component_tsoft_additional_document_form, {
              key: index,
              document: document
            }, null, 8 /* PROPS */, ["document"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ])
    ])
  ]))
}

var css_248z$2 = "\n.common-inf p {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n.common-inf label {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n.product-batch p {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n.product-batch label {\n  font-size: 10px;\n}\n.product-batch a {\n  font-size: 10px;\n}\n.product-info-block p {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n}\n.product-info-block label {\n  font-size: 10px;\n}\n.product-info-block a {\n  font-size: 10px;\n}\n.optional-inf-block a {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n.optional-inf-block p {\n  font-size: 10px;\n}\n.optional-inf-block label {\n  font-size: 10px;\n}\n.arrow {\n  margin-right: 5px;\n  margin-top: -3px;\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n.forms {\n  padding-top: 10px;\n}\n.fa-caret-right {\n  transform: rotate(0deg);\n  transition: 0.15s;\n}\n.fa-caret-right.down-rotate {\n  transform: rotate(90deg);\n  transition: 0.15s;\n}\n.group-panel-label {\n  width: 100%;\n  height: 40px;\n  padding-left: 15px;\n  padding-top: 7px;\n  font-weight: bold;\n  border: 1px solid #c4c4c4;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.group-panel-content {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.3s ease-in;\n}\n.goods {\n  padding: 10px 10px 0;\n}\n.order {\n  padding: 10px 10px 0;\n}\n.group-panel-content.open {\n  height: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease-in;\n  margin-bottom: 10px;\n}\nli a {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active {\n  color: orange;\n  background-color: green;\n}\n\n/*Стили текстовых инпутов*/\n.form-control {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/*Стиль чекбоксовых инпутов*/\n.form-check-input {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n  font-size: 10px;\n}\n.number-code::-webkit-outer-spin-button,\n.number-code::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.number-code[type='number'] {\n  -moz-appearance: textfield;\n}\n\n/*Region Стили блока декларации*/\n.declaration {\n  background-color: #d1d1d1;\n  padding: 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n  font-size: 10px;\n  margin: 0 auto;\n}\nh4 {\n  font-size: 14px;\n}\nh4.declaration-title {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n}\nh5 {\n  text-align: center;\n  font-size: 10px;\n}\n.inf-block {\n  margin-bottom: 10px;\n}\nlabel {\n  margin-top: 7px;\n}\n.inputs-group > div {\n  padding: unset;\n  min-width: 30px;\n  margin-right: 7px;\n}\n.form-check-input {\n  min-width: 20px;\n  min-height: 20px;\n}\n.sheets-input {\n  max-width: 70px;\n}\n.certificate-block div:first-child {\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n}\n.certificate-block div {\n  padding: 0;\n  margin-right: 6px;\n}\n\n/*Стили текстовых инпутов*/\n.form-control {\n  padding: 0 5px 0 3px;\n  background-color: #21a0fe;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px white;\n}\n.form-control:focus {\n  outline: unset;\n  border: unset;\n  background-color: #80ffff;\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 1px 1px 1px #9f9f9f;\n  border: 1px solid black;\n}\n.form-control::placeholder {\n  color: #597a93;\n  font-weight: bold;\n  font-size: 11px;\n  padding-left: 10px;\n}\n\n/**/\n/*Стиль чекбоксовых инпутов*/\n.form-check-input {\n  background-color: #21a0fe;\n  box-shadow: 1px 1px 1px white;\n}\n\n/**/\n/*Стиль блоков-обёрток для <p>*/\n.inf-paragraph {\n  min-width: 250px;\n  max-width: 270px;\n  margin: 5px 0 auto 0;\n}\n\n/**/\n.changing-declaration .inf-block div {\n  padding: unset;\n  margin-right: 5px;\n}\n.changing-code {\n  margin-top: 10px;\n}\n\n/*стиль, отменяющий стрелки в <input type =\"number\"> в разделе \"Код изменений\"*/\n.number-code::-webkit-outer-spin-button,\n.number-code::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n/**/\n/*Стили блоков с инпутами из раздела \"Товарная партия\"*/\n.batch-form {\n  padding: 0 10px 0 10px;\n}\n.batch-form div:first-child {\n  padding-left: 0;\n}\n.batch-block {\n  padding-left: 10px;\n}\n.batch-block div {\n  padding: 0;\n}\n\n/**/\n/*Стили \"Сведений об оплате таможенных и иных платежей*/\n.payment-information {\n  width: fit-content;\n  color: gray;\n  text-decoration: underline;\n  font-size: 10px;\n}\n.payment-information:hover {\n  cursor: pointer;\n}\n\n/**/\n/*Стили кнопок со скрывающимся контентом*/\n.invoice-button:focus {\n  box-shadow: unset;\n}\n.invoice-button.collapsed .collapsing-block i {\n  transform: rotate(180deg);\n}\n.collapsing-block {\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-weight: bold;\n}\n.collapsing-block span,\ni {\n  font-size: 14px;\n}\n\n/**/\n.card-body {\n  background-color: unset;\n  border: 1px solid black;\n}\n.point-name {\n  width: fit-content;\n  margin: auto auto 0;\n  color: #3274dd;\n  text-decoration: underline;\n}\n.personal-data div {\n  padding: 0 0 0 3px;\n}\n\n/*Стиль заголовка \"Таможенный представитель\"*/\n.customs-representative {\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 0 8px;\n}\n\n/**/\n/*Стили кнопки календаря*/\n.button-calendar {\n  background-color: white;\n  border: unset;\n  border-radius: 8px;\n  padding: 1px 5px;\n}\n.button-calendar:focus {\n  box-shadow: unset;\n}\n\n/**/\n/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/\n.align-bcntr {\n  display: flex;\n  margin: 5px auto 0;\n}\n\n/*Стили блока информации о товарной партии*/\n.product-batch {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n  margin: 0 auto;\n}\n\n/*Стиль синего хэдера с кнопками */\n.product-batch-header {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n.batch-button:focus {\n  box-shadow: unset;\n}\n.batch-button i:before {\n  color: white;\n}\n.batch-button:last-child i {\n  transform: rotate(180deg);\n}\n\n/**/\n.product-inner-block {\n  padding: 10px;\n}\n.fs-12 {\n  font-size: 12px;\n}\n\n/*Стиль кнопки \"интернет-магазин\", которая находится в элементе с общей информацией о партии*/\n.new-window-button {\n  background-color: white;\n  border-radius: 5px;\n  padding: 1px 5px;\n}\n.new-window-button:hover {\n  box-shadow: unset;\n}\n.new-window-button:focus {\n  box-shadow: unset;\n}\n.new-window-button i {\n  font-size: 15px;\n  color: #3274dd;\n}\n\n/**/\n\n/*Стили группы серых ссылок в элементе с общей информацией о партии*/\n.batch-info-anchors > a, router-link {\n  display: block;\n  color: gray;\n  text-decoration: underline;\n  margin-bottom: 3px;\n}\n.batch-info-anchors router-link:hover {\n  color: blue;\n  cursor: pointer;\n}\n\n/**/\n.product-info-block {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n  margin: 0 auto;\n}\n.product-info-actions button:focus {\n  box-shadow: unset;\n}\n.product-info-actions i:before {\n  color: white;\n}\n.product-info-actions .fa-sort-down:before {\n  color: black;\n}\n.product-actions-button:not(.collapsed) {\n  transform: rotate(180deg);\n}\n\n/*.btn {*/\n/*  padding: 1rem;*/\n/*}*/\n.btn-bg-white {\n  background-color: white;\n  border-radius: 5px;\n  padding: 1px 5px;\n}\n.btn-bg-white:focus {\n  box-shadow: unset;\n}\n.fa-note-sticky {\n  font-size: 16px;\n}\n\n/*Стили блока со сведениями о дополнительном документе*/\n.optional-inf-block {\n  background-color: #d1d1d1;\n  padding: 0 0 10px;\n  border: 1px solid black;\n  max-width: 950px;\n  min-width: 900px;\n  margin: 0 auto;\n}\n.optional-inf-header {\n  padding: 0 10px;\n  background-color: #3274dd;\n  box-shadow: inset 1px 1px 6px 0 #0d3195;\n  color: white;\n}\n";
styleInject(css_248z$2);

script$3.render = render$3;
script$3.__file = "src/components/Declaration/Declaration.vue";

var script$2 = {
  name: "TsoftLeftmenuGoods",
  props: {
    treeGoods: {
      type: Object,
      required: true,
    }
  }
};

const _withScopeId$1 = n => (pushScopeId("data-v-6ebd9650"),n=n(),popScopeId(),n);
const _hoisted_1$2 = { class: "sidebar col-md-2 me-3" };
const _hoisted_2$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createElementVNode("div", { class: "menu-sitemap-tree" }, [
  /*#__PURE__*/createElementVNode("div", { class: "d-flex p-2 tree-buttons-block" }, [
    /*#__PURE__*/createElementVNode("button", {
      class: "btn sidebar-prods active me-3 fs-5",
      id: "goodsButton"
    }, " Товары "),
    /*#__PURE__*/createElementVNode("button", {
      class: "btn fs-5 sidebar-prods",
      id: "treeButton"
    }, " Дерево ")
  ])
], -1 /* HOISTED */));
const _hoisted_3$1 = { id: "goodsList" };
const _hoisted_4$1 = { href: "#declaration" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    createElementVNode("ol", _hoisted_3$1, [
      createElementVNode("li", null, [
        createElementVNode("a", _hoisted_4$1, toDisplayString($props.treeGoods.title) + "а", 1 /* TEXT */)
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.treeGoods.goods, (good, index) => {
        return (openBlock(), createElementBlock("li", { key: index }, toDisplayString(good), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

var css_248z$1 = "\n.sidebar[data-v-6ebd9650] {\n  position: sticky;\n  top: 0;\n  height: fit-content;\n  min-width: 300px;\n  margin-top: 10px ;\n}\n.tree-buttons-block[data-v-6ebd9650]{\n  background-color: #d7d8d4\n}\n.sidebar-prods[data-v-6ebd9650] {\n  border: 1px solid\n}\nli a[data-v-6ebd9650] {\n  color: black;\n  text-decoration: unset;\n  font-size: 14px;\n}\n.sidebar-prods.active[data-v-6ebd9650] {\n  color: orange;\n  background-color: green;\n}\n";
styleInject(css_248z$1);

script$2.render = render$2;
script$2.__scopeId = "data-v-6ebd9650";
script$2.__file = "src/components/Menu/LeftMenuGoods.vue";

var script$1 = {
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

const _hoisted_1$1 = { class: "d-flex instruments" };
const _hoisted_2$1 = /*#__PURE__*/createStaticVNode("<div class=\"dropdown\" title=\"создать документ\"><button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa-solid fa-file\" style=\"color:orange;font-size:20px;\"></i></button><div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" style=\"width:500px;\"><div class=\"d-flex\"></div><div class=\"d-flex\"><div class=\"col-6\"><div class=\"mt-2 p-3\"><select class=\"w-100\" name=\"\" id=\"\"><option> выберите перевозчика </option><option> Transporter-1 </option><option> Transporter-2 </option><option> Transporter-3 </option><option> Transporter... </option></select><p class=\"\" style=\"font-size:12px;\"> (не влияет на оформление, можно писать, что угодно) </p></div><div class=\"row mt-1 p-3\"><p>Тип транспорта</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\"><label class=\"\" for=\"btnradio1\">Авиационный</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\"><label class=\"\" for=\"btnradio2\">Автомобильный</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"btnradio3\" autocomplete=\"off\"><label class=\"\" for=\"btnradio3\">Морской</label></div></div></div><div class=\"row p-3 mt-2\"><div class=\"d-flex\"><input class=\"checkbox\" type=\"checkbox\" id=\"reestr\"><label class=\"ms-2\" for=\"reestr\" style=\"font-size:13px;\"> Реестр по 158/142 решению ЕЭК </label></div><p>Тип</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"radio1\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio1\" style=\"font-size:13px;\">ПТДЭГ</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"radio2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">ДТЭГ</label></div></div></div><div class=\"row mt-2 p-3\"><p>Тр. расходы к там. стоимости</p><div class=\"btn-group-vertical\"><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"io1\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio1\" style=\"font-size:13px;\">Прибавлять</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"bio2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">Вычитать</label></div><div class=\"d-flex\"><input type=\"radio\" class=\"radio\" name=\"btnradio\" id=\"io2\" autocomplete=\"off\"><label class=\"ms-2\" for=\"btnradio2\" style=\"font-size:13px;\">Не использовать</label></div><div class=\"d-flex\"><input class=\"checkbox\" type=\"checkbox\" id=\"reestr\"><label class=\"ms-2\" for=\"reestr\" style=\"font-size:13px;\"> Поменять местами отп-я и пол-я </label></div></div></div><div class=\"row mt-2\"></div><div class=\"row mt-2\"></div></div><div class=\"col-6\"><img src=\"img/menushka.png\" style=\"width:250px;height:100%;\"></div></div><div class=\"d-flex\"><div class=\"col-8\"></div><div class=\"col-4 d-flex p-1\"><button class=\"btn me-2\" style=\"border:1px solid;\"><a href=\"alta-maket/index.html\" style=\"color:black;text-decoration:unset;\">ОК</a></button><button class=\"btn\" style=\"border:1px solid;\">Отмена</button></div></div></div></div><div class=\"import-doc\"><button class=\"btn\" id=\"sendRegistry\" title=\"Отправить документ\"><i class=\"fa-solid fa-file-import\" style=\"font-size:20px;color:red;\"></i></button></div><div class=\"import-doc\"><button class=\"btn\" title=\"переместить в архив\"><i class=\"fa-solid fa-box-archive\" id=\"archivingButton\" style=\"font-size:20px;color:#18b14e;\"></i></button></div>", 3);
const _hoisted_5$1 = { class: "import-doc" };
const _hoisted_6$1 = /*#__PURE__*/createElementVNode("button", {
  class: "btn",
  title: "сохранить"
}, [
  /*#__PURE__*/createElementVNode("a", { href: "../index.html" }, [
    /*#__PURE__*/createElementVNode("i", {
      class: "fa-solid fa-floppy-disk",
      style: {"background-color":"white","color":"black","font-size":"20px"}
    })
  ])
], -1 /* HOISTED */);
const _hoisted_7$1 = /*#__PURE__*/createElementVNode("i", {
  class: "fa-solid fa-file-arrow-down",
  style: {"font-size":"20px","color":"brown"}
}, null, -1 /* HOISTED */);
const _hoisted_8$1 = [
  _hoisted_7$1
];
const _hoisted_9 = /*#__PURE__*/createElementVNode("button", {
  type: "button",
  class: "btn",
  title: "Изменить структуру"
}, [
  /*#__PURE__*/createElementVNode("i", {
    class: "fa-solid fa-screwdriver-wrench",
    style: {"font-size":"20px","color":"blue"}
  })
], -1 /* HOISTED */);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tsoft_modal_window = resolveComponent("tsoft-modal-window");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2$1,
    createElementVNode("div", _hoisted_5$1, [
      _hoisted_6$1,
      createElementVNode("button", {
        class: "btn",
        title: "Загрузить реестр",
        type: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.openModal && $options.openModal(...args)))
      }, _hoisted_8$1),
      _hoisted_9
    ]),
    createVNode(_component_tsoft_modal_window, {
      onClose: $options.openModal,
      turn: $data.showModal
    }, null, 8 /* PROPS */, ["onClose", "turn"])
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/Menu/InstrumentsMenu.vue";

var script = {
  name: "TsoftModalWindow",
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  props: {
    turn: {
      type: Boolean,
      required: true,
    },
    component: {
      required: false,
    }
  },
  mounted() {
    console.log(this.turn);
  }
};

const _withScopeId = n => (pushScopeId("data-v-477f0afb"),n=n(),popScopeId(),n);
const _hoisted_1 = { class: "mod-container" };
const _hoisted_2 = { class: "mod-block" };
const _hoisted_3 = { class: "mod-header d-flex justify-content-around" };
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("h1", null, "Заголовок", -1 /* HOISTED */));
const _hoisted_5 = { class: "esc-btn" };
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("i", { class: "fa-solid fa-xmark" }, null, -1 /* HOISTED */));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /*#__PURE__*/createStaticVNode("<div class=\"mod-body\" data-v-477f0afb><div class=\"img-block\" style=\"height:fit-content;width:fit-content;padding:60px;border:2px gray;margin:0 auto;\" data-v-477f0afb><i class=\"fa-regular fa-rectangle-list\" style=\"font-size:100px;\" data-v-477f0afb></i></div></div><div class=\"mod-footer\" data-v-477f0afb><div class=\"px-4 download-block\" data-v-477f0afb><button class=\"btn\" type=\"button\" data-v-477f0afb>Загрузить</button></div><div class=\"\" data-v-477f0afb><h4 data-v-477f0afb>Заключение</h4></div></div>", 2);
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("div", { class: "mod-content" }, null, -1 /* HOISTED */));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode("Region Modal "),
    withDirectives(createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        createElementVNode("div", _hoisted_3, [
          _hoisted_4,
          createElementVNode("div", _hoisted_5, [
            createElementVNode("button", {
              class: "btn close-modal-button",
              type: "button",
              onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close')))
            }, _hoisted_7)
          ])
        ]),
        _hoisted_8
      ]),
      _hoisted_10
    ], 512 /* NEED_PATCH */), [
      [vShow, $props.turn]
    ]),
    createCommentVNode("        endregion")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

var css_248z = "\n.mod-content[data-v-477f0afb] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: white;\n    opacity: 0.9  ;\n    z-index: 5;\n}\n.mod-block[data-v-477f0afb] {\n    position: relative;\n    margin: 0 auto auto auto;\n    background-color: white;\n    width: 500px;\n    opacity: 1;\n    z-index: 11;\n    box-shadow: 4px 4px 10px 0 #b3b3b3;\n    border-radius: 10px;\n    overflow: auto;\n}\n.mod-container[data-v-477f0afb] {\n    position:fixed;\n    margin: 63px auto 0 407px;\n    background-color: white;\n    width: 500px;\n    opacity: 1;\n    z-index: 10;\n}\n.mod-header[data-v-477f0afb] {\n    height: 50px;\n}\n.esc-btn[data-v-477f0afb] {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n}\n.close-modal-button[data-v-477f0afb] {\n    color: white;\n    border-radius: 14px;\n    width: 30px;\n    background: lightgray;\n    height: 29px;\n    padding: 4px;\n    box-shadow: unset;\n}\n.close-modal-button[data-v-477f0afb]:hover {\n    background-color: orange;\n    color: green;\n}\n.close-modal-button .fa-xmark[data-v-477f0afb] {\n    font-size: 20px;\n}\n.mod-body[data-v-477f0afb] {\n}\n.mod-footer[data-v-477f0afb] {\n}\n.download-block[data-v-477f0afb] {\n    text-align: center;\n}\n.download-block .btn[data-v-477f0afb] {\n    border: unset;\n    border-radius: 5px;\n    background-color: green;\n    color: white;\n    box-shadow: 2px 2px 6px 0 #818181;\n    font-weight: bold;\n}\n.download-block .btn[data-v-477f0afb]:hover {\n    color: orange;\n    /*font-weight: bold;*/\n    background-color: white;\n    box-shadow: 2px 2px 6px 0 #9b9b9b;\n    transition: 0.3s;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-477f0afb";
script.__file = "src/components/Modal/ModalWindow.vue";

var components = { 
    InputTextarea: script$f,
    InputText: script$g,
    TsoftTable: script$e,
    TsoftTree: script$c,
    TsoftLeftmenuFolder: script$8,
    TsoftLeftmenuGoods: script$2,
    TsoftGeneralDeclarationForm: script$7,
    TsoftGoodsAwbInformationForm: script$6,
    TsoftAdditionalDocumentForm: script$5,
    TsoftGoodInformationForm: script$4,
    TsoftDeclaration: script$3,
    TsoftInstrumentsMenu: script$1,
    TsoftModalWindow: script,
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
