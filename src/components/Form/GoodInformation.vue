<template>
      <div class="product-info-block my-2" id="productInvoiceBlock">
        <div class="d-flex product-batch-header justify-content-between">
          <h4 class="col-4">Товар (1 из 2)</h4>
          <div class="product-info-actions col-4 d-flex justify-content-end">
            <div class="col-2">
              <button class="btn product-actions-button">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="col-2">
              <button class="btn product-actions-button">
                <i class="fa-solid fa-minus" id="collapseButton"></i>
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
                data-bs-target="#product-1Inner"
                aria-expanded="true"
                aria-controls="product-1Inner"
              >
                <i class="fa-solid fa-sort-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="product-inner-block collapse" id="product-1Inner">
          <div class="row">
            <div class="col-1">
              <div class="col-9">
                <div class="col input-bg">
                  <input class="form-control" type="text" v-model="good.numeric" />
                </div>
                <div class="col input-bg mt-3">
                  <input class="form-control" type="text" v-model="good.totalNumeric" />
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="input-bg h-100">
                <textarea type="text" class="form-control h-100" v-model="good.description" />
              </div>
            </div>
            <div class="col-3">
              <div class="changing-code">
                <div class="label-block">
                  <label class="fs-5">Код изменений</label>
                </div>
                <div class="col-9 d-flex w-100">
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.stageChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.reasonChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.quantityChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.TNVEDChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.customsCostChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.customsPaymentChangeCode" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control number-code" type="number"
                           v-model="good.changeDetailsType.otherChangeCode" />
                  </div>
                  <button class="btn info-button p-1">
                    <i class="fa-solid fa-circle-info"></i>
                  </button>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="d-flex">
                <div class="col-5">
                  <p class="col-11 align-bcntr">ТН ВЭД ЕАЭС</p>
                  <div class="col-11 input-bg">
                    <input class="form-control" type="text" v-model="good.tnved" />
                  </div>
                </div>
                <div class="col-7">
                  <p class="align-bcntr">Вес, брутто</p>
                  <div class="d-flex">
                    <div class="col-6">
                      <div class="col input-bg">
                        <input class="form-control" type="text" v-model="good.grossWeightQuantity" />
                      </div>
                    </div>
                    <div class="col-6 d-flex">
                      <div class="col-5">
                        <div class="col input-bg">
                          <input class="form-control" type="text" v-model="good.goodWeightUnit" />
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="col input-bg">
                          <input class="form-control number-code" type="text" v-model="good.goodWeightUnknown" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-2">
                <div class="col input-bg">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="наименование товарного знака, объекта авторского"
                    v-model="good.tradeMark"
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex">
                <div class="col-4">
                  <p class="align-bcntr">Вес, нетто</p>
                  <div class="d-flex">
                    <div class="col-6">
                      <div class="col input-bg">
                        <input class="form-control" type="text" v-model="good.netWeightQuantity" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex">
                        <div class="col-5">
                          <div class="col input-bg">
                            <input class="form-control" type="text" v-model="good.netWeightUnit" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="col input-bg">
                            <input class="form-control" type="text" v-model="good.netWeightUnknown" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <p class="align-bcntr">Количество</p>
                  <div class="d-flex">
                    <div class="col-5">
                      <div class="col input-bg">
                        <input class="form-control" type="text" v-model="good.goodQuantity" />
                      </div>
                    </div>
                    <div class="col-7">
                      <div class="d-flex">
                        <div class="col-5">
                          <div class="col input-bg">
                            <input class="form-control" type="text" v-model="good.goodUnit" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="col input-bg">
                            <input class="form-control" type="text" v-model="good.goodUnknown" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <p class="align-bcntr">Таможенная стоимость</p>
                  <div class="d-flex">
                    <div class="col-7">
                      <div class="col input-bg">
                        <input class="form-control" type="text" v-model="good.customsCost" />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="d-flex">
                        <div class="col input-bg">
                          <input class="form-control" type="text" v-model="good.customsCostCurrency" />
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <button class="btn btn-bg-white">
                        <i class="fa-solid fa-note-sticky"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-2">
                <div class="col-6">
                  <div class="col input-bg">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="наименование места происх."
                      v-model="good.productionPlaceName"
                    />
                  </div>
                </div>
                <div class="col-6 d-flex">
                  <p class="align-bcntr ps-2">Трансп. расх.</p>
                  <div class="col input-bg">
                    <input class="form-control" type="text" v-model="good.transportCost" />
                  </div>
                  <div class="col input-bg">
                    <input class="form-control" type="text" v-model="good.transportCostCurrency" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="">
                <p class="align-bcntr">Фактурная стоимость</p>
                <div class="d-flex">
                  <div class="col-8">
                    <div class="col input-bg">
                      <input class="form-control" type="text" v-model="good.invoiceValue" />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="col input-bg">
                      <input class="form-control" type="text" v-model="good.invoiceValueCurrency" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-2">
                <div class="d-flex">
                  <div class="col-8">
                    <div class="col input-bg">
                      <input class="form-control" type="text" v-model="good.invoiceValueRus" />
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="col input-bg">
                      <input class="form-control" type="text" v-model="good.invoiceValueRusCurrency" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-9 d-flex">
              <div class="col-9 d-flex">
                <div class="col input-bg">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="примечание"
                    v-model="good.note"
                  />
                </div>
                <div class="col input-bg">
                  <input class="form-control" type="text" v-model="good.url" />
                </div>
              </div>
              <div class="col-3 d-flex batch-info-anchors">
                <router-link :to="{ name: 'index' }" class="align-bcntr">РОИС</router-link>
                <router-link :to="{ name: 'index' }" class="align-bcntr">Предшествующий документ</router-link>
              </div>
            </div>
            <div class="col-3 d-flex">
              <div class="d-flex batch-info-anchors">
                <router-link
                  :to="{ name: 'index' }"
                  class="align-bcntr"
                  id="extraDocLink">Дополнительный документ
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
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
</script>