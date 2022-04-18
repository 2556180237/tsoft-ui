<template>
  <div class="good">
    <div class="group-panel-label" @click="isGoodOpen = !isGoodOpen">
      <p>Товар №</p>
      <div class="arrow">
        <span class="fa-solid fa-caret-right" :class="{'down-rotate': isGoodOpen}" />
      </div>
    </div>
    <div class="group-panel-content" :class="{'open': isGoodOpen}">
      <div class="product-info-block">
        <div class="product-inner-block">
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
</script>

<style scoped>
.product-batch p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

.product-batch label {
  font-size: 10px;
}

.product-batch a {
  font-size: 10px;
}

.product-info-block p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

.product-info-block label {
  font-size: 10px;
}

.product-info-block a {
  font-size: 10px;
}

.product-info-block {
  border: 1px solid #c4c4c4;
  border-top: unset;
  max-width: 950px;
  min-width: 900px;
  margin: 0 auto;
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
</style>