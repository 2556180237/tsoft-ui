<template>
  <div class="optional-inf-block my-3" id="extraDocBlock">
    <div class="d-flex optional-inf-header justify-content-between">
      <h4 class="col-4">Сведения о дополнительном документе</h4>
      <div class="product-info-actions col-4 d-flex justify-content-end">
        <div class="col-2">
          <button class="btn product-actions-button">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div class="col-2">
          <button class="btn product-actions-button">
            <i class="fa-solid fa-minus" id="collapseButton2"></i>
          </button>
        </div>
        <div class="col-2">
          <button class="btn product-actions-button">
            <i class="fa-solid fa-border-top-left"></i>
          </button>
        </div>
        <div class="col-2">
          <button
            class="btn product-actions-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#product-2Inner"
            aria-expanded="true"
            aria-controls="product-2Inner"
          >
            <i class="fa-solid fa-sort-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="product-inner-block collapse" id="product-2Inner">
      <div class="optional-inf-card">
        <div class="row">
          <div class="d-flex">
            <div class="col-5 d-flex">
              <div class="col-3 d-flex">
                <div class="col-8">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-1">
                  <p class="fs-3 my-0">/</p>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-9 ps-2">
                <div class="input-bg">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="col-7 row">
              <div class="col-2">
                <div class="input-bg">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-3 d-flex">
                <p class="align-bcntr pe-1">от</p>
                <div class="input-bg">
                  <input type="text" class="form-control" placeholder="дата" />
                </div>
              </div>
              <div class="col-3 d-flex">
                <p class="align-bcntr pe-1">с</p>
                <div class="input-bg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="дата начала"
                  />
                </div>
              </div>
              <div class="col-3 d-flex">
                <p class="align-bcntr pe-1">по</p>
                <div class="input-bg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="дата окончания"
                  />
                </div>
              </div>
              <div class="col-1">
                <div class="input-bg">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="d-flex">
            <div class="col-5 d-flex">
              <div class="col-2">
                <div class="row pe-4">
                  <div class="col-6">
                    <button class="btn">
                      <i class="fa-solid fa-bolt-lightning"></i>
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn">
                      <i class="fa-solid fa-folder-open"></i>
                    </button>
                  </div>
                </div>
                <div class="row"></div>
              </div>
              <div class="col-10 d-flex">
                <div class="col-8">
                  <div class="input-bg">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Полное наименование государственной"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-bg">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="AuthorityId"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7 d-flex">
              <div class="col-4">
                <div class="input-bg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Информационного ресурс"
                  />
                </div>
              </div>
              <div class="col-5">
                <div class="input-bg">
                  <input type="text" class="form-control" placeholder="URL" />
                </div>
              </div>
              <div class="col-3">
                <div class="input-bg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Дата обращения"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <div class="col-11">
            <div class="">
              <p class="align-bcntr">
                Сведения о фактическом представлении документа
              </p>
            </div>
            <div class="d-flex">
              <div class="col-2 d-flex">
                <div class="input-bg col-4">
                  <input type="text" class="form-control" />
                </div>
                <div class="input-bg col-8">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-5 d-flex">
                <div class="align-bcntr">
                  <p class="col-1 align-bcntr">ДТ</p>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-5 d-flex">
                <div class="align-bcntr">
                  <p class="col-1 align-bcntr">ТС</p>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex mt-2">
              <div class="col-2 d-flex">
                <div class="col-1"></div>
                <div class="col-2 align-bcntr">
                  <p class="align-bcntr">TIR</p>
                </div>
                <div class="col-2">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-7">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex">
                <div class="col-3 align-bcntr">
                  <p class="align-bcntr">Иной документ</p>
                </div>
                <div class="col-6">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftAdditionalDocumentForm",
};
</script>

<style scoped>
li a {
  color: black;
  text-decoration: unset;
  font-size: 14px;
}

.sidebar-prods.active {
  color: orange;
  background-color: green;
}
/*Стили текстовых инпутов*/
.form-control {
  padding: 0 5px 0 3px;
  background-color: #21a0fe;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px white;
}

.form-control:focus {
  outline: unset;
  border: unset;
  background-color: #80ffff;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px #9f9f9f;
  border: 1px solid black;
}

.form-control::placeholder {
  color: #597a93;
  font-weight: bold;
  font-size: 11px;
  padding-left: 10px;
}

/**/
/*Стиль чекбоксовых инпутов*/
.form-check-input {
  background-color: #21a0fe;
  box-shadow: 1px 1px 1px white;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

/*Region Стили блока декларации*/

.declaration {
  background-color: #d1d1d1;
  padding: 10px;
  border: 1px solid black;
  max-width: 950px;
  min-width: 900px;
}

h5 {
  text-align: center;
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

/*Стили текстовых инпутов*/
.form-control {
  padding: 0 5px 0 3px;
  background-color: #21a0fe;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px white;
}

.form-control:focus {
  outline: unset;
  border: unset;
  background-color: #80ffff;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 1px 1px 1px #9f9f9f;
  border: 1px solid black;
}

.form-control::placeholder {
  color: #597a93;
  font-weight: bold;
  font-size: 11px;
  padding-left: 10px;
}

/**/
/*Стиль чекбоксовых инпутов*/
.form-check-input {
  background-color: #21a0fe;
  box-shadow: 1px 1px 1px white;
}

/**/
/*Стиль блоков-обёрток для <p>*/
.inf-paragraph {
  min-width: 250px;
  max-width: 270px;
  margin: 10px 0 auto 0;
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
  padding: 0 10px 0 4px;
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
  border: 1px solid black;
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
  border: 1px solid black;
}

.point-name {
  width: fit-content;
  margin: auto auto 0;
  color: #3274dd;
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
  background-color: #d1d1d1;
  padding: 0 0 10px;
  border: 1px solid black;
  max-width: 950px;
  min-width: 900px;
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
.batch-info-anchors router-link {
  display: block;
  color: gray;
  text-decoration: underline;
  margin-bottom: 3px;
}

.batch-info-anchors router-link:hover {
  color: blue;
  cursor: pointer;
}
/**/

.product-info-block {
  background-color: #d1d1d1;
  padding: 0 0 10px;
  border: 1px solid black;
  max-width: 950px;
  min-width: 900px;
}

.product-info-actions button:focus {
  box-shadow: unset;
}

.product-info-actions i:before {
  color: white;
}

.product-info-actions .fa-sort-down:before {
  color: black;
}

.product-actions-button:not(.collapsed) {
  transform: rotate(180deg);
}

.btn-bg-white {
  background-color: white;
  border-radius: 5px;
}
.btn-bg-white:focus {
  box-shadow: unset;
}

.fa-note-sticky {
  font-size: 16px;
}

/*Стили блока со сведениями о дополнительном документе*/

.optional-inf-block {
  background-color: #d1d1d1;
  padding: 0 0 10px;
  border: 1px solid black;
  max-width: 950px;
  min-width: 900px;
}

.optional-inf-header {
  padding: 0 10px;
  background-color: #3274dd;
  box-shadow: inset 1px 1px 6px 0 #0d3195;
  color: white;
}
</style>
