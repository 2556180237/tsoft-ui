<template>
  <div class="order">
    <div class="group-panel-label" @click="isOrderOpen= !isOrderOpen">
      <p>Товарная партия {{ orderNum }}</p>
      <div class="arrow">
        <span class="fa-solid fa-caret-right" :class="{'down-rotate': isOrderOpen}" />
      </div>
    </div>
    <div class="group-panel-content" :class="{'open': isOrderOpen}">
      <div class="product-batch">
        <!--Region элемент с информацией о партии, индивидуальной информацией об отправителе, с информацией о получателе-->
        <div class="product-inner-block">
          <!--Region элемент с общей информацией о партии-->
          <div class="row">
            <div class="row">
              <div class="col-9">
                <form action="">
                  <div class="d-flex">
                    <div class="col-3 d-flex">
                      <div class="col-6 align-bcntr">
                        <p class="align-bcntr">Общая накладная</p>
                      </div>
                      <div class="col-1"></div>
                      <div class="input-bg col-5">
                        <input type="text" class="form-control" v-model="order.general.document.code" />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.general.document.type" />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.general.document.num" />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.general.document.date" />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex my-2">
                    <div class="col-3 d-flex">
                      <div class="col-6 align-bcntr">
                        <p class="align-bcntr">Инд. накладная</p>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input type="text" class="form-control" v-model="order.personal.document.count" />
                        </div>
                      </div>
                      <div class="input-bg col-4">
                        <input type="text" class="form-control" v-model="order.personal.document.code" />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.personal.document.type" />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.personal.document.num" />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.personal.document.date" />
                      </div>
                    </div>
                  </div>
                  <div class="row my-3">
                    <div class="col-4">
                      <h5 class="align-bcntr my-1">Общий вес брутто</h5>
                      <div class="d-flex">
                        <div class="col-6">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.general.grossWeight" />
                          </div>
                        </div>
                        <div class="col-6 d-flex">
                          <div class="col-7">
                            <div class="input-bg">
                              <input type="text" class="form-control" v-model="order.general.grossWeightUnit" />
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="input-bg">
                              <input type="text" class="form-control" v-model="order.general.grossWeightUnknown" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <h5 class="align-bcntr my-1">Общая таможенная стоимость</h5>
                      <div class="d-flex">
                        <div class="col-8">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.general.customCost" />
                          </div>
                        </div>
                        <div class="col-4 d-flex">
                          <div class="col-2"></div>
                          <div class="col-10">
                            <div class="input-bg">
                              <input type="text" class="form-control" v-model="order.general.customCostCurrency" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <h5 class="align-bcntr my-1 fs-12">
                        Общая стоимость по инд. накладной
                      </h5>
                      <div class="d-flex">
                        <div class="col-9">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.general.customCost" />
                          </div>
                        </div>
                        <div class="col-3 d-flex">
                          <div class="col-12">
                            <div class="input-bg">
                              <input type="text" class="form-control" v-model="order.general.customCostCurrency" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-end">
                    <div class="col-8 d-flex">
                      <div class="col-3 d-flex align-bcntr">
                        <p class="align-bcntr">Интернет-магазин</p>
                      </div>
                      <div class="col-7">
                        <div class="input-bg">
                          <input type="text" class="form-control" v-model="order.internetMarketUrl" />
                        </div>
                      </div>
                      <div class="col-2 d-flex">
                        <div class="col-7 d-flex">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.internetMarketUnknown" />
                          </div>
                        </div>
                        <div class="col-5">
                          <button class="btn new-window-button">
                            <i class="fa-solid fa-pager"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <p class="align-bcntr">Номер мешка/места</p>
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="order.placeNum" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-3">
                <div class="batch-info-anchors">
                  <router-link :to="{ name: 'index' }" id="productsInfoLink">
                    Сведения о товарах в накладной
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    Сведения о там.сборе накладной
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    Суммы пошлин и налогов накладной
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    Исчисление там.пошлин, налогов
                  </router-link>
                  <div class="inf-block changing-code row">
                    <div class="label-block" style="width: 100%">
                      <label class="fs-5">Код изменений</label>
                    </div>
                    <div class="col-10 d-flex w-100">
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.stageChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.reasonChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.quantityChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.TNVEDChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.customsCostChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.customsPaymentChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="order.changeDetailsType.otherChangeCode" />
                      </div>
                      <button class="btn info-button p-1">
                        <i class="fa-solid fa-circle-info"></i>
                      </button>
                    </div>
                    <div class="col-2"></div>
                  </div>
                  <router-link :to="{ name: 'index' }" class="my-4">
                    Открыть исходную Инд. накладную
                  </router-link>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="my-2">
                <p class="align-bcntr">Решение по инд. накладной</p>
                <div class="d-flex">
                  <div class="col-9">
                    <div class="input-bg">
                      <input class="form-control" type="text" v-model="order.personal.invoiceDecision" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input class="form-control" type="text" v-model="order.personal.invoiceDecisionUnknown" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="col-7">
                  <p class="align-bcntr fs-5">Причина отказа</p>
                  <div class="input-bg">
                    <input class="form-control" type="text" v-model="order.orderRejectReason" />
                  </div>
                </div>
                <div class="col-5">
                  <p class="align-bcntr fs-5">Уникальный идентификатор партии</p>
                  <div class="col input-bg">
                    <input class="form-control" type="text" v-model="order.orderUniqueId" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--endregion-->
          <!--Region элемент с индивидуальной информацией об отправителе-->
          <div class="sender-personal-inf mt-4">
            <div class="row">
              <button
                class="btn invoice-button collapsed"
                type="button"
              >
                <div class="collapsing-block d-flex justify-content-between" @click="sender = !sender">
                  <span>Отправитель по индивидуальной накладной</span>
                </div>
              </button>
              <div v-show="sender">
                <div class="card card-body">
                  <div class="row">
                    <div class="recipient-name">
                      <form class="row form my-2">
                        <div class="col-8">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                              v-model="order.consignor.fullName"
                            />
                          </div>
                        </div>
                        <div class="col-1">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.consignor.countryCode" />
                          </div>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-2 d-flex">
                          <div class="input-bg col-2">
                            <input type="checkbox" class="form-check-input"
                                   v-bind:checked="order.consignor.isDeclarant" />
                          </div>
                          <div class="label-block col-10">
                            <label> Декларант (заявитель) </label>
                          </div>
                        </div>
                      </form>
                      <div class="row my-2">
                        <div class="col-6 d-flex justify-content-between">
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-1">
                              <label> ОГРН </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignor.OGRN" />
                            </div>
                          </div>
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-3">
                              <label> ИНН </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignor.INN" />
                            </div>
                          </div>
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-3">
                              <label> КПП </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignor.KPP" />
                            </div>
                          </div>
                        </div>
                        <div class="col-6 d-flex">
                          <div class="input-bg col-6">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="номер телефона"
                              v-model="order.consignor.phone"
                            />
                          </div>
                          <div class="input-bg col-6">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="адрес эл.почты"
                              v-model="order.consignor.email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="recipient-address">
                      <div class="row my-2">
                        <div class="d-flex recipient-contacts">
                          <div class="col-1 d-flex">
                            <p class="point-name">Адрес:</p>
                          </div>
                        </div>
                      </div>
                      <div class="row my-2">
                        <div class="address-block">
                          <div class="row my-2">
                            <div class="col-1">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="язык"
                                  v-model="order.consignor.language"
                                />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="страна"
                                  v-model="order.consignor.country"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="почтовый индекс"
                                  v-model="order.consignor.mailIndex"
                                />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="область (регион, штат, провинция)"
                                  v-model="order.consignor.region"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-5">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="район"
                                  v-model="order.consignor.area"
                                />
                              </div>
                            </div>
                            <div class="col-3">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="город"
                                  v-model="order.consignor.city"
                                />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="населённый пункт"
                                  v-model="order.consignor.settlement"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="улица"
                                  v-model="order.consignor.address"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="дом, корпус, строение"
                                  v-model="order.consignor.house"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="офис/квартира"
                                  v-model="order.consignor.office"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="номер а/я"
                                  v-model="order.consignor.officeLetter"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-12">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="набор элементов адреса, представленных в свободной форме в виде текста"
                                  v-model="order.consignor.fullAddress"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="personal-inf-block">
                      <p>Документ, удостоверяющий личность</p>
                      <div class="row my-2">
                        <div class="row personal-data my-2">
                          <div class="col-1">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="стр"
                                v-model="order.consignor.document.country"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="код вида"
                                v-model="order.consignor.document.code"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="краткое наименование"
                                v-model="order.consignor.document.shortName"
                              />
                            </div>
                          </div>
                          <div class="col-5 d-flex">
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="серия"
                                v-model="order.consignor.document.series"
                              />
                            </div>
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="номер"
                                v-model="order.consignor.document.num"
                              />
                            </div>
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="дата выдачи"
                                v-model="order.consignor.document.dateRelease"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Код подразделения"
                                v-model="order.consignor.document.divisionCode"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-8">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="наименование организации, выдавшей документ"
                                v-model="order.consignor.document.issuedBy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--endregion-->
          <!--Region элемент с индивидуальной информацией о получателе-->
          <div class="recipient-personal-inf">
            <div class="row">
              <button
                class="btn invoice-button collapsed"
                type="button"
              >
                <div class="collapsing-block d-flex justify-content-between" @click="recipient = !recipient">
                  <span>Получатель по индивидуальной накладной</span>
                </div>
              </button>
              <div v-show="recipient">
                <div class="card card-body">
                  <div class="row">
                    <div class="recipient-name">
                      <form class="row form my-2">
                        <div class="col-8">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                              v-model="order.consignee.fullName"
                            />
                          </div>
                        </div>
                        <div class="col-1">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="order.consignee.countryCode" />
                          </div>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-2 d-flex">
                          <div class="input-bg col-2">
                            <input type="checkbox" class="form-check-input"
                                   v-bind:checked="order.consignee.isDeclarant" />
                          </div>
                          <div class="label-block col-10">
                            <label> Декларант (заявитель) </label>
                          </div>
                        </div>
                      </form>
                      <div class="row my-2">
                        <div class="col-6 d-flex justify-content-between">
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-1">
                              <label> ОГРН </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignee.OGRN" />
                            </div>
                          </div>
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-3">
                              <label> ИНН </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignee.INN" />
                            </div>
                          </div>
                          <div class="col-4 d-flex">
                            <div class="label-block col-3 ps-3">
                              <label> КПП </label>
                            </div>
                            <div class="input-bg col-9">
                              <input type="text" class="form-control" v-model="order.consignee.KPP" />
                            </div>
                          </div>
                        </div>
                        <div class="col-6 d-flex">
                          <div class="input-bg col-6">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="номер телефона"
                              v-model="order.consignee.phone"
                            />
                          </div>
                          <div class="input-bg col-6">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="адрес эл.почты"
                              v-model="order.consignee.email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="recipient-address">
                      <div class="row my-2">
                        <div class="d-flex recipient-contacts">
                          <div class="col-1 d-flex">
                            <p class="point-name">Адрес:</p>
                          </div>
                        </div>
                      </div>
                      <div class="row my-2">
                        <div class="address-block">
                          <div class="row my-2">
                            <div class="col-1">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="язык"
                                  v-model="order.consignee.language"
                                />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="страна"
                                  v-model="order.consignee.country"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="почтовый индекс"
                                  v-model="order.consignee.mailIndex"
                                />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="область (регион, штат, провинция)"
                                  v-model="order.consignee.region"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-5">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="район"
                                  v-model="order.consignee.area"
                                />
                              </div>
                            </div>
                            <div class="col-3">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="город"
                                  v-model="order.consignee.city"
                                />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="населённый пункт"
                                  v-model="order.consignee.settlement"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-4">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="улица"
                                  v-model="order.consignee.address"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="дом, корпус, строение"
                                  v-model="order.consignee.house"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="офис/квартира"
                                  v-model="order.consignee.office"
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="номер а/я"
                                  v-model="order.consignee.officeLetter"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-2">
                            <div class="col-12">
                              <div class="input-bg">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="набор элементов адреса, представленных в свободной форме в виде текста"
                                  v-model="order.consignee.fullAddress"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="personal-inf-block">
                      <p>Документ, удостоверяющий личность</p>
                      <div class="row my-2">
                        <div class="row personal-data my-2">
                          <div class="col-1">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="стр"
                                v-model="order.consignee.document.country"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="код вида"
                                v-model="order.consignee.document.code"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="краткое наименование"
                                v-model="order.consignee.document.shortName"
                              />
                            </div>
                          </div>
                          <div class="col-5 d-flex">
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="серия"
                                v-model="order.consignee.document.series"
                              />
                            </div>
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="номер"
                                v-model="order.consignee.document.num"
                              />
                            </div>
                            <div class="input-bg col-4">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="дата выдачи"
                                v-model="order.consignee.document.dateRelease"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Код подразделения"
                                v-model="order.consignee.document.divisionCode"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-8">
                            <div class="input-bg">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="наименование организации, выдавшей документ"
                                v-model="order.consignee.document.issuedBy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods">
        <div class="group-panel-label mb-2" @click="isGoodsOpen= !isGoodsOpen">
          <p>Товары</p>
          <div class="arrow">
            <i class="fa-solid fa-caret-right" :class="{'down-rotate': isGoodsOpen}" />
          </div>
        </div>
        <div class="group-panel-content" :class="{'open': isGoodsOpen}">
          <tsoft-good-information-form
            v-for="(good, index) in goods"
            :goodNum="index"
            :good="good.goodInfo"
            :documents="good.documents"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftGoodsAwbInformationForm",
  data() {
    return {
      isGoodsOpen: false,
      isOrderOpen: false,
      sender: false,
      recipient: false
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
</script>
