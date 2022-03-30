<template>
  <div class="sidebar col-md-2 me-3">
    <div class="menu-sitemap-tree">
      <div class="d-flex p-2 tree-buttons-block" >
        <button class="btn sidebar-prods active me-3 fs-5" id="goodsButton">
          Товары
        </button>
        <button class="btn fs-5 sidebar-prods" id="treeButton">
          Дерево
        </button>
      </div>
    </div>
    <ol id="goodsList">
      <li>
        <a href="#declaration">Заголовок документа</a>
      </li>
      <li>
        <a href="#productInvoiceBlock" id="prodLink1">1</a>
      </li>
      <li>
        <a href="#productInvoiceBlock" id="prodLink2">2</a>
      </li>
      <li>
        <a href="#productInvoiceBlock" id="prodLink3">3</a>
      </li>
    </ol>

  </div>
</template>

<script>
export default {
  name: "TsoftLeftmenuGoods"
}
</script>

<style scoped>

.sidebar {
  position: sticky;
  top: 0;
  height: fit-content;
  min-width: 300px;
  margin-top: 40px ;
}

.tree-buttons-block{
  background-color: #d7d8d4
}

.sidebar-prods {
  border: 1px solid
}

li a {
  color: black;
  text-decoration: unset;
  font-size: 14px;
}

.sidebar-prods.active {
  color: orange;
  background-color: green;
}
</style>