import { openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, toDisplayString, pushScopeId, popScopeId, resolveComponent, createBlock, createCommentVNode, createVNode, createStaticVNode } from 'vue';

var script$5 = {
  name: 'InputText'
};

const _hoisted_1$4 = { type: "text" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$4))
}

script$5.render = render$5;
script$5.__file = "src/InputText.vue";

var script$4 = {
  name: 'InputTextarea'
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script$4.render = render$4;
script$4.__file = "src/InputTextarea.vue";

var script$3 = {
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

const _withScopeId = n => (pushScopeId("data-v-647119ad"),n=n(),popScopeId(),n);
const _hoisted_1$3 = { class: "content" };
const _hoisted_2$3 = { class: "row section" };
const _hoisted_3$2 = { class: "table-section" };
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
const _hoisted_10 = { class: "" };
const _hoisted_11 = { class: "tbody" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$2, [
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
            createElementVNode("thead", _hoisted_10, [
              createElementVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.titles, (title) => {
                  return (openBlock(), createElementBlock("th", { key: title }, toDisplayString(title), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            createElementVNode("tbody", _hoisted_11, [
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

var css_248z$2 = "\n#tableResponsive[data-v-647119ad] {\n  background: rgb(253, 253, 253);\n  box-shadow: inset 1px 1px 10px 1px rgb(0 0 0 / 10%);\n}\n.content[data-v-647119ad] {\n  padding: 20px 0 20px 20px;\n}\n.tbody td p[data-v-647119ad] {\n  padding-bottom: 0;\n}\nthead th[data-v-647119ad] {\n  border: 1px solid black;\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 10px;\n  width: auto;\n}\nth p[data-v-647119ad] {\n  line-height: 0.5rem;\n  min-width: 210px;\n  margin-bottom: 0;\n}\n.tbody tr td[data-v-647119ad] {\n  border: 1px solid #ccc;\n  padding: 1px;\n}\n.tbody tr td p[data-v-647119ad] {\n  margin: 2px;\n}\n.tbody td div[data-v-647119ad] {\n  white-space: nowrap;\n}\n.tbody tr td span[data-v-647119ad] {\n  margin: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.tableRow[data-v-647119ad] {\n  font-size: 13px;\n  line-height: 18px;\n  color: #362518;\n}\n.table tbody + tbody[data-v-647119ad] {\n  border-top: 2px solid #dee2e6;\n}\n.tableContents[data-v-647119ad] {\n  color: #aaaaaa;\n  font-size: 12px;\n  line-height: 0 !important;\n  text-transform: uppercase;\n  border-top: 2px solid #e4e4e4;\n  border-bottom: 2px solid #e4e4e4;\n}\n.tableRow > tr[data-v-647119ad] {\n  border-bottom: 1px solid #eef2f7;\n}\n.table .tableContents[data-v-647119ad] {\n  line-height: 10px !important;\n}\n.table th[data-v-647119ad],\n.table td[data-v-647119ad] {\n  margin: 0.75rem;\n  vertical-align: top;\n  /* border: 1px solid #dee2e6; */\n}\n.table-section[data-v-647119ad] {\n  padding-top: 200px;\n}\n.table-statuses[data-v-647119ad] {\n  margin-top: -700px;\n}\n.table-responsive[data-v-647119ad] {\n  min-height: 645px;\n}\n.slider-block[data-v-647119ad] {\n  display: flex;\n  justify-content: space-between;\n  height: 0;\n  position: sticky;\n  top: 200px;\n  margin-bottom: 500px;\n}\n.control-prev[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n  display: none;\n}\n.control-prev.active[data-v-647119ad] {\n  display: block;\n}\n.control-prev[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-left[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M0%2C0H1.023A40.977%2C40.977%2C0%2C0%2C1%2C42%2C40.977v0A40.024%2C40.024%2C0%2C0%2C1%2C1.977%2C81H0a0%2C0%2C0%2C0%2C1%2C0%2C0V0A0%2C0%2C0%2C0%2C1%2C0%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.8%2C49.09l-8.014-8.576L20.8%2C31.939a0.762%2C0.762%2C0%2C0%2C0%2C0-1.026l-1.563-1.673a0.647%2C0.647%2C0%2C0%2C0-.959%2C0l-8.014%2C8.576h0L8.224%2C40a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026L18.28%2C51.788a0.647%2C0.647%2C0%2C0%2C0%2C.959%2C0L20.8%2C50.116A0.761%2C0.761%2C0%2C0%2C0%2C20.8%2C49.09Z%22/%3E%3C/svg%3E)\n    center left no-repeat;\n  position: absolute;\n  left: 0;\n}\n.control-next[data-v-647119ad] {\n  z-index: 1;\n  width: 50px;\n  height: 100px;\n  transition: opacity 200ms ease, margin 200ms ease, height 200ms ease;\n  -webkit-transform: translate3d(0px, 48px, 0);\n  -moz-transform: translate3d(0px, 48px, 0);\n  -ms-transform: translate3d(0px, 48px, 0);\n  -o-transform: translate3d(0px, 48px, 0);\n  transform: translate3d(0px, 48px, 0);\n  will-change: transform;\n}\n.control-next[data-v-647119ad]:hover {\n  opacity: 0.8;\n}\n.btn-right[data-v-647119ad] {\n  background: url(data:image/svg+xml;charset=US-ASCII,%0A%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2042%2081%22%3E%3Cpath%20fill%3D%22%23535c69%22%20opacity%3D%220.3%22%20d%3D%22M40.024%2C0H42a0%2C0%2C0%2C0%2C1%2C0%2C0V81a0%2C0%2C0%2C0%2C1%2C0%2C0H40.977A40.977%2C40.977%2C0%2C0%2C1%2C0%2C40.024v0A40.024%2C40.024%2C0%2C0%2C1%2C40.024%2C0Z%22/%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M20.2%2C31.91l8.014%2C8.576L20.2%2C49.061a0.762%2C0.762%2C0%2C0%2C0%2C0%2C1.026l1.563%2C1.672a0.647%2C0.647%2C0%2C0%2C0%2C.958%2C0l8.014-8.576h0L32.776%2C41a0.762%2C0.762%2C0%2C0%2C0%2C0-1.025L22.72%2C29.212a0.647%2C0.647%2C0%2C0%2C0-.958%2C0L20.2%2C30.885A0.762%2C0.762%2C0%2C0%2C0%2C20.2%2C31.91Z%22/%3E%3C/svg%3E%0A)\n    center right no-repeat;\n  position: absolute;\n  right: 0;\n}\n.back-anchor[data-v-647119ad] {\n  text-decoration: unset;\n}\n.back-anchor span[data-v-647119ad] {\n  color: black;\n}\n.t-folder[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.t-folder[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n.fa-folder-open[data-v-647119ad] {\n  color: #ff6633;\n}\n.documentNumber[data-v-647119ad] {\n  color: black;\n  text-decoration: unset;\n}\n.documentNumber[data-v-647119ad]:hover {\n  color: #ff6633;\n}\n";
styleInject(css_248z$2);

script$3.render = render$3;
script$3.__scopeId = "data-v-647119ad";
script$3.__file = "src/components/Table/Table.vue";

var script$2 = {
  name: "node",
  props: {
    node: Object
  }
};

const _hoisted_1$2 = { class: "node-tree" };
const _hoisted_2$2 = { class: "label" };
const _hoisted_3$1 = { key: 0 };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_node = resolveComponent("node");

  return (openBlock(), createElementBlock("li", _hoisted_1$2, [
    createElementVNode("span", _hoisted_2$2, toDisplayString($props.node.label), 1 /* TEXT */),
    ($props.node.children && $props.node.children.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, (child) => {
            return (openBlock(), createBlock(_component_node, { node: child }, null, 8 /* PROPS */, ["node"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/Tree/NodeTreeMenu.vue";

var script$1 = {
  props: {
    treeData: Object
  },
  components: {
    NodeTree: script$2
  }
};

const _hoisted_1$1 = { class: "tree" };
const _hoisted_2$1 = { class: "tree-list" };

function render$1(_ctx, _cache) {
  const _component_node_tree = resolveComponent("node-tree");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("ul", _hoisted_2$1, [
      createVNode(_component_node_tree, { node: _ctx.treeData }, null, 8 /* PROPS */, ["node"])
    ])
  ]))
}

var css_248z$1 = "\n.tree-list ul {\n  padding-left: 16px;\n  margin: 6px 0;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__file = "src/components/Tree/TreeMenu.vue";

var script = {
  name: "TsoftLeftmenuFolder",
};

const _hoisted_1 = { class: "menu-sitemap-tree" };
const _hoisted_2 = /*#__PURE__*/createStaticVNode("<div class=\"file-system\" data-v-647b20c4><!-- region Папка --><div class=\"folder-row\" data-v-647b20c4><div class=\"folder\" data-v-647b20c4><!-- region строка папки (переключатель, иконка, название) --><div class=\"folder-container\" data-v-647b20c4><i class=\"fa-solid fa-angle-down\" data-v-647b20c4></i><i class=\"fas fa-folder folder-icon\" data-v-647b20c4></i><span class=\"folder-name\" data-v-647b20c4>Папка с файлами</span></div><!-- endregion cтрока папки --><!-- region содержимое папки --><div class=\"file-content\" data-v-647b20c4><div class=\"folder\" data-v-647b20c4><div class=\"folder-container\" data-v-647b20c4><i class=\"fa-solid fa-angle-down\" data-v-647b20c4></i><i class=\"fas fa-folder folder-icon\" data-v-647b20c4></i><span class=\"folder-name\" data-v-647b20c4>Папка с файлами</span></div><!-- region содержимое подпапки --><div class=\"file-content\" data-v-647b20c4><div class=\"file\" data-v-647b20c4><i class=\"fas fa-file\" data-v-647b20c4></i><span class=\"file-name\" data-v-647b20c4>Название файла</span></div></div><!-- endregion содержимое подпапки --></div></div><!-- endregion содержимое папки --></div></div><!-- endregion папка --><!-- region обычный файл в корне --><div class=\"file-row\" data-v-647b20c4><div class=\"file\" data-v-647b20c4><i class=\"fas fa-file\" data-v-647b20c4></i><span class=\"file-name\" data-v-647b20c4>Название файла</span></div></div><!-- endregion обычный файл в корне --></div>", 1);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3))
}

var css_248z = "\n.menu-sitemap-tree[data-v-647b20c4] {\n  padding-top: 20px;\n}\n.file-system[data-v-647b20c4] {\n  background: rgb(253, 253, 253);\n  /* box-shadow: inset 1px 1px 5px 1px rgb(0 0 0 / 10%); */\n  border: 1px solid #ccc;\n  padding: 10px;\n  overflow: scroll;\n}\n.folder-container[data-v-647b20c4] {\n  white-space: nowrap;\n}\n.folder-name[data-v-647b20c4],\n.file-name[data-v-647b20c4] {\n  white-space: nowrap;\n  cursor: pointer;\n}\n.folder-name[data-v-647b20c4]:hover,\n.file-name[data-v-647b20c4]:hover {\n  color: #e67926;\n}\n.fa-file[data-v-647b20c4] {\n  color: #252525;\n}\n.fa-angle-right[data-v-647b20c4],\n.fa-angle-down[data-v-647b20c4] {\n  color: rgb(190, 190, 190);\n  margin-right: 7px;\n  cursor: pointer;\n}\n.file[data-v-647b20c4] {\n  margin-left: 21px;\n  white-space: nowrap;\n}\n.fa-folder[data-v-647b20c4] {\n  color: #e67926;\n  margin-right: 7px;\n}\n.file-name[data-v-647b20c4] {\n  margin-left: 9px;\n}\n.file-content[data-v-647b20c4] {\n  padding-left: 21px;\n  margin-right: -20px;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-647b20c4";
script.__file = "src/components/Menu/LeftmenuFolder.vue";

var components = { 
    InputTextarea: script$4, 
    InputText: script$5, 
    TsoftTable: script$3, 
    TsoftTree: script$1,
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

export { plugin as default };
