<template>
  <div class="forms">
    <div>
      <tsoft-general-declaration-form :awb-info="this.data.awbInfo" :registry="this.data.registry.regInfo"/>
      <div>
        <div class="group-panel-label mb-2" @click="isOrdersOpen = !isOrdersOpen">
          <p>Заказы</p>
          <div class="arrow">
            <span class="fa-solid fa-caret-right" :class="{'down-rotate': isOrdersOpen}" />
          </div>
        </div>
        <div class="group-panel-content" :class="{'open': isOrdersOpen}">
          <tsoft-goods-awb-information-form
            v-if="isOrdersExist"
            v-for="(order, index) in this.data.registry.orders"
            :order="order.orderInfo"
            :goods="order.goods"
            :orderNum="index"
          />
        </div>
      </div>

      <div>
        <div class="group-panel-label mb-2" @click="isDocumentOpen = !isDocumentOpen">
          <p>Документы</p>
          <div class="arrow">
            <span class="fa-solid fa-caret-right" :class="{'down-rotate': isDocumentOpen}" />
          </div>
        </div>
        <div class="group-panel-content" :class="{'open': isDocumentOpen}">
          <tsoft-additional-document-form
            v-if="isDocumentsExist"
            v-for="(document, index) in this.data.registry.documents"
            :key="index"
            :document="document"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</script>

<style>
.common-inf p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

.common-inf label {
  box-sizing: border-box;
  font-size: 10px;
}

.arrow {
  margin-right: 5px;
  margin-top: -3px;
  font-size: 20px;
  height: 20px;
  width: 20px;
}

.forms {
  padding: 10px;
}

.fa-caret-right {
  transform: rotate(0deg);
  transition: 0.15s;
}

.fa-caret-right.down-rotate {
  transform: rotate(90deg);
  transition: 0.15s;
}

.group-panel-label {
  width: 100%;
  height: 40px;
  padding-left: 15px;
  padding-top: 7px;
  font-weight: bold;
  border: 1px solid #c4c4c4;
  /*margin-bottom: 1px;*/
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.group-panel-content {
  width: 100%;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

.goods {
  padding-top: 5px;
  padding-left: 20px;
}

.order {
  padding-left: 10px;
  margin-bottom: 10px;
}

.doc {
  padding-left: 10px;
  margin-bottom: 10px;
}

.good {
  padding-left: 10px;
  margin-bottom: 10px;
}

.group-panel-content.open {
  height: auto;
  opacity: 1;
  transition: opacity 0.3s ease-in;
  margin-bottom: 10px;
}

li a {
  color: black;
  text-decoration: unset;
  font-size: 14px;
}

/*Стили текстовых инпутов*/
.form-control {
  padding: 0 5px 0 3px;
  background-color: #e1e1e1;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px white;
  border: 1px solid #afafaf;
}

.form-control:focus {
  outline: unset;
  border: unset;
  background-color: #38d9a6;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px #9f9f9f;
  border: 1px solid black;
}

.form-control::placeholder {
  color: #989898;
  font-weight: bold;
  font-size: 11px;
  padding-left: 10px;
}

/*Стиль чекбоксовых инпутов*/
.form-check-input {
  background-color: #E67926;
  box-shadow: 1px 1px 1px white;
  font-size: 10px;
}

.form-check-input:checked {
  background-color: #0a9167;
  box-shadow: unset;
  border: unset;
}

.form-check-input:focus {
  box-shadow: unset;
  border: unset;
}

.number-code::-webkit-outer-spin-button,
.number-code::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.number-code[type='number'] {
  -moz-appearance: textfield;
}

/*Region Стили блока декларации*/

.declaration {
  padding: 10px;
  border: 1px solid #c4c4c4;
  max-width: 950px;
  min-width: 900px;
  min-height: 660px;
  font-size: 10px;
  margin: 0 auto;
}

h4 {
  font-size: 14px;
}

h4.declaration-title {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

h5 {
  text-align: center;
  font-size: 10px;
}

.inf-block {
  margin-bottom: 10px;
}

label {
  margin-top: 7px;
}

.inputs-group > div {
  padding: unset;
  min-width: 30px;
  margin-right: 7px;
}

.form-check-input {
  min-width: 20px;
  min-height: 20px;
}

.sheets-input {
  max-width: 70px;
}

.certificate-block div:first-child {
  padding-left: calc(var(--bs-gutter-x) * 0.5);
}

.certificate-block div {
  padding: 0;
  margin-right: 6px;
}

/*Стиль блоков-обёрток для <p>*/
.inf-paragraph {
  min-width: 250px;
  max-width: 270px;
  margin: 5px 0 auto 0;
}
/**/

.changing-declaration .inf-block div {
  padding: unset;
  margin-right: 5px;
}

.changing-code {
  margin-top: 10px;
}

/*стиль, отменяющий стрелки в <input type ="number"> в разделе "Код изменений"*/
.number-code::-webkit-outer-spin-button,
.number-code::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/**/
/*Стили блоков с инпутами из раздела "Товарная партия"*/
.batch-form {
  padding: 0 10px 0 10px;
}

.batch-form div:first-child {
  padding-left: 0;
}

.batch-block {
  padding-left: 10px;
}

.batch-block div {
  padding: 0;
}

/**/
/*Стили "Сведений об оплате таможенных и иных платежей*/
.payment-information {
  width: fit-content;
  color: gray;
  text-decoration: underline;
  font-size: 10px;
}

.payment-information:hover {
  cursor: pointer;
}

/**/
/*Стили кнопок со скрывающимся контентом*/

.invoice-button:focus {
  box-shadow: unset;
}

.invoice-button.collapsed .collapsing-block i {
  transform: rotate(180deg);
}

.collapsing-block {
  background-color: white;
  border: 1px solid #c4c4c4;
  padding: 5px 10px;
  font-weight: bold;
}

.collapsing-block span,
i {
  font-size: 14px;
}

/**/
.card-body {
  background-color: unset;
  border: 1px solid #c4c4c4;
}

.point-name {
  width: fit-content;
  margin: auto auto 0;
  color: #0D6247;
  font-weight: bold;
  text-decoration: underline;
}

.personal-data div {
  padding: 0 0 0 3px;
}

/*Стиль заголовка "Таможенный представитель"*/
.customs-representative {
  font-size: 11px;
  font-weight: bold;
  margin: 0 0 8px;
}

/**/
/*Стили кнопки календаря*/
.button-calendar {
  background-color: white;
  border: unset;
  border-radius: 8px;
  padding: 1px 5px;
}

.button-calendar:focus {
  box-shadow: unset;
}

/**/
/*Стиль для текста, который надо отцентровать внизу и посередине( применяется к родительскому блоку и к тэгу <p>*/
.align-bcntr {
  display: flex;
  margin: 5px auto 0;
}

/*Стили блока информации о товарной партии*/
.product-batch {
  padding: 0 0 10px;
  border: 1px solid #c4c4c4;
  border-top:unset;
  max-width: 950px;
  min-width: 900px;
  margin: 0 auto;
}

/*Стиль синего хэдера с кнопками */
.product-batch-header {
  padding: 0 10px;
  background-color: #3274dd;
  box-shadow: inset 1px 1px 6px 0 #0d3195;
  color: white;
}

.batch-button:focus {
  box-shadow: unset;
}

.batch-button i:before {
  color: white;
}

.batch-button:last-child i {
  transform: rotate(180deg);
}

/**/

.product-inner-block {
  padding: 10px;
}

.fs-12 {
  font-size: 12px;
}

/*Стиль кнопки "интернет-магазин", которая находится в элементе с общей информацией о партии*/

.new-window-button {
  background-color: white;
  border-radius: 5px;
  padding: 1px 5px;
}

.new-window-button:hover {
  box-shadow: unset;
}

.new-window-button:focus {
  box-shadow: unset;
}

.new-window-button i {
  font-size: 15px;
  color: #3274dd;
}

/**/

/*Стили группы серых ссылок в элементе с общей информацией о партии*/
.batch-info-anchors > a, router-link {
  display: block;
  color: gray;
  text-decoration: underline;
  margin-bottom: 3px;
}

.batch-info-anchors router-link:hover {
  color: blue;
  cursor: pointer;
}

.btn-bg-white {
  background-color: white;
  border-radius: 5px;
  padding: 1px 5px;
}

.btn-bg-white:focus {
  box-shadow: unset;
}

.fa-note-sticky {
  font-size: 16px;
}

</style>