<template>
  <div class="declaration mb-3" id="declaration">
    <tsoft-preloader v-if="!isDeclarationExist" />
    <div v-else>
      <!--Region элемент с общей информацией декларации-->
      <div class="common-inf">
        <div class="row">
        </div>
        <div class="row">
          <div class="inf-block">
            <h4 class="declaration-title">
              Декларация на товары и пассажирская таможенная декларация для
              экспресс-грузов
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="inf-block row col-12 justify-content-between">
            <div class="checkbox-block d-flex col-2">
              <div class="checkbox-bg col-2">
                <input class="form-check-input" type="checkbox" v-bind:checked="this.registry.docType.dteg" />
              </div>
              <div class="label-block col-4">
                <label>ДТЭГ</label>
              </div>
              <div class="checkbox-bg col-2">
                <input class="form-check-input" type="checkbox" v-bind:checked="this.registry.docType.ptdeg" />
              </div>
              <div class="label-block col-4">
                <label>ПТДЭГ</label>
              </div>
            </div>
            <div class="checkbox-block d-flex col-2">
              <div class="checkbox-bg col-2">
                <input class="form-check-input" type="checkbox"
                       v-bind:checked="this.registry.declarationKindCode.import" />
              </div>
              <div class="label-block col-3">
                <label>ИМ</label>
              </div>
              <div class="checkbox-bg col-2">
                <input class="form-check-input" type="checkbox"
                       v-bind:checked="this.registry.declarationKindCode.export" />
              </div>
              <div class="label-block col-3">
                <label>ЭК</label>
              </div>
            </div>
            <div
              class="declaration-number-block justify-content-end d-flex col-5"
            >
              <div class="label-block col-2">
                <label>№</label>
              </div>
              <div class="input-bg col-10">
                <input
                  class="declaration-number-input form-control"
                  type="text"
                  v-model="this.registry.registryNum"
                />
              </div>
            </div>
            <div class="col-3"></div>
          </div>
        </div>
        <div class="row">
          <div class="inf-block row col-12">
            <div class="inputs-group d-flex col-2">
              <div class="col-2">
                <input class="form-control" type="text" v-model="this.registry.customsCodeMode" />
              </div>
              <div class="col-2">
                <input class="form-control" type="text" v-model="this.registry.previousCustomsCodeMode" />
              </div>
              <div class="col-3">
                <input class="form-control" type="text" v-model="this.registry.declarationKind" />
              </div>
              <div class="col-2">
                <input class="form-control" type="text" v-model="this.registry.electronicDocumentSign" />
              </div>
            </div>
            <div class="sheets-block d-flex col-2">
              <div class="label-block col-4">
                <label>Листов</label>
              </div>
              <div class="input-bg col-8">
                <input
                  class="sheets-input form-control"
                  type="text"
                  v-model="this.registry.countList"
                />
              </div>
            </div>
            <div class="registry-number-block d-flex justify-content-end col-5">
              <div class="label-block col-2">
                <label for="registryNumber">Рег. №</label>
              </div>
              <div class="input-bg col-10">
                <input
                  class="registry-number-input form-control"
                  type="text"
                  id="registryNumber"
                  v-model="this.registry.customNum"
                />
              </div>
            </div>
            <div class="registry-changes d-flex col-3">
              <div class="input-bg">
                <input
                  class="registry-checkbox form-check-input"
                  type="checkbox"
                  v-model="this.registry.isRegistryWasChanged"
                />
              </div>
              <label>- реестр с внесёнными изменениями</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="inf-block d-grid">
            <div class="row col-12">
              <div class="col-6">
                <label class="express-courier-label">Экспресс перевозчик</label>
                <div class="express-courier-block col-12 d-flex">
                  <div class="col-1">
                    <input class="form-control" type="text" v-model="this.registry.expressCourierCode" />
                  </div>
                  <div class="col-11">
                    <input
                      class="col-11 form-control"
                      type="text"
                      v-model="this.registry.expressCourierName"
                    />
                  </div>
                </div>
              </div>
              <div class="col-1"></div>
              <div class="col-5">
                <div class="inf-paragraph">
                  <p>
                    Регистрационный номер декларации, в которую вносятся изменения
                  </p>
                </div>
              </div>
            </div>
            <div class="row col-12">
              <div class="col-6">
                <div class="">
                  <div class="">
                    <h4>Свидетельство о включении в</h4>
                    <p>
                      реестр УЭО, реестр владельцев СВХ, складов хранения
                      собственных товаров, таможенных складов, свободных складов
                      или магазинов БТ
                    </p>
                  </div>
                  <form class="certificate-block row col-12">
                    <div class="input-bg col-1">
                      <input class="form-control" type="text" v-model="this.registry.registerDocumentUnknownString1" />
                    </div>
                    <div class="input-bg col-1">
                      <input class="form-control" type="text" v-model="this.registry.registerDocumentIdCountryCode" />
                    </div>
                    <div class="input-bg col-7">
                      <input class="form-control" type="text" v-model="this.registry.registerDocumentIdNumber" />
                    </div>
                    <div class="input-bg col-1">
                      <input class="form-control" type="text" v-model="this.registry.registerDocumentUnknownString2" />
                    </div>
                    <div class="input-bg col-1">
                      <input class="form-control" type="text" v-model="this.registry.registerDocumentUnknownString3" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-1"></div>
              <div class="col-5">
                <form class="changing-declaration" action="">
                  <div class="inf-block row">
                    <div class="col-3 input-bg">
                      <input class="form-control" type="text"
                             v-model="this.registry.changingDeclarationNumber.customPoint" />
                    </div>
                    <div class="col-4 input-bg">
                      <input class="form-control" type="text"
                             v-model="this.registry.changingDeclarationNumber.date" />
                    </div>
                    <div class="col-3 input-bg">
                      <input class="form-control" type="text"
                             v-model="this.registry.changingDeclarationNumber.innerNum" />
                    </div>
                    <div class="col-1 input-bg">
                      <input class="form-control" type="text"
                             v-model="this.registry.changingDeclarationNumber.unknownNum" />
                    </div>
                  </div>
                  <div class="inf-block changing-code row">
                    <div class="label-block" style="width: 100%">
                      <label class="fs-5">Код изменений</label>
                    </div>
                    <div class="col-8 d-flex">
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.stageChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.reasonChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.quantityChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.TNVEDChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.customsCostChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.customsPaymentChangeCode" />
                      </div>
                      <div class="col input-bg">
                        <input class="form-control number-code" type="number"
                               v-model="this.registry.changeDetailsType.otherChangeCode" />
                      </div>
                      <button class="btn info-button p-1">
                        <i class="fa-solid fa-circle-info"></i>
                      </button>
                    </div>
                    <div class="col-4"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="inf-block">
            <h4>Товарная партия</h4>
            <form action="" class="batch-form row">
              <div class="col-3 inf-block">
                <div class="row inf-paragraph">
                  <p>
                    общая сумма таможенных и иных платежей, подлежащих уплате по
                    декларации
                  </p>
                </div>
                <div class="batch-block row">
                  <div class="col-10">
                    <input type="text" class="form-control" placeholder="Сумма"
                           v-model="this.registry.totalPaymentAmountDetailsSum" />
                  </div>
                  <div class="col-2">
                    <input type="text" class="form-control" placeholder="Валюта"
                           v-model="this.registry.totalPaymentAmountDetailsCurrency" />
                  </div>
                </div>
              </div>
              <div class="col-3 inf-block">
                <h5>Общая стоимость</h5>
                <div class="inf-paragraph">
                  <p>по ПТД для экспресс-грузов</p>
                </div>
                <div class="batch-block row">
                  <div class="col-9">
                    <input class="form-control" type="text" v-model="this.registry.CAValueAmountSum" />
                  </div>
                  <div class="col-3">
                    <input class="form-control" type="text" v-model="this.registry.CAValueAmountCurrency" />
                  </div>
                </div>
              </div>
              <div class="col-3 inf-block">
                <h5>Общий вес брутто</h5>
                <div class="inf-paragraph">
                  <p>по ТД для экспресс-грузов</p>
                </div>
                <div class="batch-block row">
                  <div class="col-6">
                    <input class="form-control" type="text" v-model="this.registry.unifiedGrossWeightQuantity" />
                  </div>
                  <div class="col-3">
                    <input class="form-control" type="text" v-model="this.registry.weightUnit" />
                  </div>
                  <div class="col-3">
                    <input class="form-control" type="text" v-model="this.registry.unknownStringUnit" />
                  </div>
                </div>
              </div>
              <div class="col-3 inf-block">
                <h5>Общая таможенная стоимость</h5>
                <div class="inf-paragraph">
                  <p>по ДТ для экспресс-грузов</p>
                </div>
                <div class="batch-block row">
                  <div class="col-9">
                    <input class="form-control" type="text" v-model="this.registry.customCost" />
                  </div>
                  <div class="col-3">
                    <input class="form-control" type="text" v-model="this.registry.customCostCurrency" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- endregion-->
      <!-- Region элемент с общей информацией по отправителю-->
      <div class="sender-common-inf">
        <div class="row">
          <button
            class="btn invoice-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedSenderInfo"
            aria-expanded="false"
            aria-controls="collapsedSenderInfo"
          >
            <p class="collapsing-block d-flex justify-content-between">
              <span>ОТПРАВИТЕЛЬ по общей накладной</span>
              <i class="fa-solid fa-caret-up"></i>
            </p>
          </button>
          <div class="collapse" id="collapsedSenderInfo">
            <div class="card card-body">
              <div class="row">
                <div class="sender-name">
                  <form class="row form my-2">
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="this.registry.consignor.fullName" />
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="this.registry.consignor.countryCode" />
                      </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2 d-flex">
                      <div class="input-bg col-2">
                        <input type="checkbox" class="form-check-input"
                               v-bind:checked="this.registry.consignor.isDeclarant" />
                      </div>
                      <div class="label-block col-10">
                        <label> Декларант (заявитель) </label>
                      </div>
                    </div>
                  </form>
                  <div class="row my-2">
                    <div class="col-5">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="краткое наименование организации"
                          v-model="this.registry.consignor.shortName"
                        />
                      </div>
                    </div>
                    <div class="col-7 d-flex justify-content-between">
                      <div class="col-4 d-flex">
                        <div class="label-block col-2">
                          <label> ОГРН </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control"
                                 v-model="this.registry.consignor.fullName" />
                        </div>
                      </div>
                      <div class="col-3 d-flex">
                        <div class="label-block col-2">
                          <label> ИНН </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control"
                                 v-model="this.registry.consignor.INN" />
                        </div>
                      </div>
                      <div class="col-3 d-flex">
                        <div class="label-block col-2">
                          <label> КПП </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control" v-model="this.registry.consignor.KPP" />
                        </div>
                      </div>
                      <div class="col-1 d-flex"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="sender-address">
                  <div class="row my-2">
                    <div class="d-flex sender-contacts">
                      <div class="col-1 d-flex">
                        <p class="point-name">Адрес</p>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="номер телефона"
                            v-model="this.registry.consignor.phone"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Адрес электронной почты"
                            v-model="this.registry.consignor.email"
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="номер факса"
                            v-model="this.registry.consignor.fax"
                          />
                        </div>
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
                              v-model="this.registry.consignor.language"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="страна"
                              v-model="this.registry.consignor.country"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="почтовый индекс"
                              v-model="this.registry.consignor.mailIndex"
                            />
                          </div>
                        </div>
                        <div class="col-5">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="область (регион, штат, провинция)"
                              v-model="this.registry.consignor.region"
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
                              v-model="this.registry.consignor.area"
                            />
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="город"
                              v-model="this.registry.consignor.city"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="населённый пункт"
                              v-model="this.registry.consignor.settlement"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-2">
                        <div class="col-4">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="this.registry.consignor.address" />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="дом, корпус, строение"
                              v-model="this.registry.consignor.house"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="this.registry.consignor.office" />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="номер а/я"
                              v-model="this.registry.consignor.officeLetter"
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
                              v-model="this.registry.consignor.fullAddress"
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
                            v-model="this.registry.consignor.document.country"
                          />
                        </div>
                      </div>
                      <div class="col-1">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код"
                            v-model="this.registry.consignor.document.countryCode"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="краткое наименование"
                            v-model="this.registry.consignor.document.shortType"
                          />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="серия"
                            v-model="this.registry.consignor.document.series"
                          />
                        </div>
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="номер"
                            v-model="this.registry.consignor.document.number"
                          />
                        </div>
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="дата выдачи"
                            v-model="this.registry.consignor.document.releaseDate"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="наименование организации, выдавшей документ"
                            v-model="this.registry.consignor.document.issuedBy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row personal-data my-2">
                      <div class="col-7">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="полное наименование документа, удостоверяющего личность"
                            v-model="this.registry.consignor.document.fullType"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код подразделения"
                            v-model="this.registry.consignor.document.divisionCode"
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="строка, иденти-ая орган государства"
                            v-model="this.registry.consignor.document.countryIdString"
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
      <!-- endregion-->
      <!-- Region элемет с общей информацией по получателю-->
      <div class="recipient-common-inf">
        <div class="row">
          <button
            class="btn invoice-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedRecipientInfo"
            aria-expanded="false"
            aria-controls="collapsedRecipientInfo"
          >
            <div class="collapsing-block d-flex justify-content-between">
              <span>ПОЛУЧАТЕЛЬ по общей накладной</span>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          </button>
          <div class="collapse" id="collapsedRecipientInfo">
            <div class="card card-body">
              <div class="row">
                <div class="sender-name">
                  <form class="row form my-2">
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="this.registry.consignee.fullName" />
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="this.registry.consignee.countryCode" />
                      </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2 d-flex">
                      <div class="input-bg col-2">
                        <input type="checkbox" class="form-check-input"
                               v-bind:checked="this.registry.consignee.isDeclarant" />
                      </div>
                      <div class="label-block col-10">
                        <label> Декларант (заявитель) </label>
                      </div>
                    </div>
                  </form>
                  <div class="row my-2">
                    <div class="col-5">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="краткое наименование организации"
                          v-model="this.registry.consignee.shortName"
                        />
                      </div>
                    </div>
                    <div class="col-7 d-flex justify-content-between">
                      <div class="col-4 d-flex">
                        <div class="label-block col-2">
                          <label> ОГРН </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control"
                                 v-model="this.registry.consignee.fullName" />
                        </div>
                      </div>
                      <div class="col-3 d-flex">
                        <div class="label-block col-2">
                          <label> ИНН </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control"
                                 v-model="this.registry.consignee.INN" />
                        </div>
                      </div>
                      <div class="col-3 d-flex">
                        <div class="label-block col-2">
                          <label> КПП </label>
                        </div>
                        <div class="input-bg col-10">
                          <input type="text" class="form-control" v-model="this.registry.consignee.KPP" />
                        </div>
                      </div>
                      <div class="col-1 d-flex"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="sender-address">
                  <div class="row my-2">
                    <div class="d-flex sender-contacts">
                      <div class="col-1 d-flex">
                        <p class="point-name">Адрес</p>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="номер телефона"
                            v-model="this.registry.consignee.phone"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Адрес электронной почты"
                            v-model="this.registry.consignee.email"
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="номер факса"
                            v-model="this.registry.consignee.fax"
                          />
                        </div>
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
                              v-model="this.registry.consignee.language"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="страна"
                              v-model="this.registry.consignee.country"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="почтовый индекс"
                              v-model="this.registry.consignee.mailIndex"
                            />
                          </div>
                        </div>
                        <div class="col-5">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="область (регион, штат, провинция)"
                              v-model="this.registry.consignee.region"
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
                              v-model="this.registry.consignee.area"
                            />
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="город"
                              v-model="this.registry.consignee.city"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="населённый пункт"
                              v-model="this.registry.consignee.settlement"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-2">
                        <div class="col-4">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="this.registry.consignee.address" />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="дом, корпус, строение"
                              v-model="this.registry.consignee.house"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input type="text" class="form-control" v-model="this.registry.consignee.office" />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="номер а/я"
                              v-model="this.registry.consignee.officeLetter"
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
                              v-model="this.registry.consignee.fullAddress"
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
                            v-model="this.registry.consignee.document.country"
                          />
                        </div>
                      </div>
                      <div class="col-1">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код"
                            v-model="this.registry.consignee.document.countryCode"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="краткое наименование"
                            v-model="this.registry.consignee.document.shortType"
                          />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="серия"
                            v-model="this.registry.consignee.document.series"
                          />
                        </div>
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="номер"
                            v-model="this.registry.consignee.document.number"
                          />
                        </div>
                        <div class="input-bg col-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="дата выдачи"
                            v-model="this.registry.consignee.document.releaseDate"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="наименование организации, выдавшей документ"
                            v-model="this.registry.consignee.document.issuedBy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row personal-data my-2">
                      <div class="col-7">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="полное наименование документа, удостоверяющего личность"
                            v-model="this.registry.consignee.document.fullType"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код подразделения"
                            v-model="this.registry.consignee.document.divisionCode"
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="строка, иденти-ая орган государства"
                            v-model="this.registry.consignee.document.countryIdString"
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
      <!-- Region элемент с общей информацией по таможенному представителю и исполнителю-->
      <div class="customs-sender-inf my-2">
        <div class="col-12 row inf-block">
          <div class="col-7">
            <div class="col">
              <h4 class="customs-representative">Таможенный представитель</h4>
              <div class="input-bg">
                <input type="text" class="form-control" v-model="this.registry.brokerName" />
              </div>
            </div>
          </div>
          <div class="col-5">
            <p class="align-bcntr">
              Сведения о включении лица в реестр таможенных представителей
            </p>
            <div class="col d-flex">
              <div class="col-2">
                <div class="input-bg">
                  <input type="text" class="form-control" v-model="this.registry.brokerRegistryDocDetails[0]" />
                </div>
              </div>
              <div class="col-1">
                <div class="input-bg">
                  <input type="text" class="form-control" v-model="this.registry.brokerRegistryDocDetails[1]" />
                </div>
              </div>
              <div class="col-7">
                <div class="input-bg">
                  <input type="text" class="form-control" v-model="this.registry.brokerRegistryDocDetails[2]" />
                </div>
              </div>
              <div class="col-1">
                <div class="input-bg">
                  <input type="text" class="form-control" v-model="this.registry.brokerRegistryDocDetails[3]" />
                </div>
              </div>
              <div class="col-1">
                <div class="input-bg">
                  <input type="text" class="form-control" v-model="this.registry.brokerRegistryDocDetails[4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <button
            class="btn invoice-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedNaturalPersonInfo"
            aria-expanded="false"
            aria-controls="collapsedNaturalPersonInfo"
          >
            <div class="collapsing-block d-flex justify-content-between">
            <span>Сведения о физическом лице, заполнившем (подписавшем) таможенный
              документ</span>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          </button>
          <div class="collapse" id="collapsedNaturalPersonInfo">
            <div class="card card-body">
              <form action="" class="form">
                <div class="d-flex">
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control"
                             v-model="this.registry.signatoryPersonIdentityDetails.lastName" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control"
                             v-model="this.registry.signatoryPersonIdentityDetails.firstName" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control"
                             v-model="this.registry.signatoryPersonIdentityDetails.middleName" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control"
                             v-model="this.registry.signatoryPersonIdentityDetails.profession" />
                    </div>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-9 d-flex">
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.mobilePhone" />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.fax" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.email" />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 row">
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.appealDocumentDate" />
                      </div>
                    </div>
                    <div class="col-4">
                      <button class="btn button-calendar" type="button">
                        <i class="fa-solid fa-calendar-days"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row my-2">
                  <p>
                    Сведения о документе, удостоверяющем личность лица, заоплневшего (подписавшего) таможенного документ
                  </p>
                  <div class="row">
                    <div class="col-3 d-flex">
                      <div class="col-5">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.countyCode" />
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.personalDocType" />
                        </div>
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="col-4">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.documentSeries" />
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.documentNumber" />
                        </div>
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="col-6">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.documentReleaseDate" />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.documentDateEnd" />
                        </div>
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="col-3">
                        <div class="label-block align-bcntr">
                          <label class="align-bcntr"> аттестат </label>
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.qualificationCertificate" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.fullDocumentType" />
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.issuedBy" />
                      </div>
                    </div>
                    <div class="col-4 d-flex">
                      <div class="col-3 input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.divisionCode" />
                      </div>
                      <div class="col-8 input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.countryIdString" />
                      </div>
                      <div class="col-1 input-bg">
                        <input type="text" class="form-control"
                               v-model="this.registry.signatoryPersonIdentityDetails.countryIdCode" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="row">
                    <div class="row">
                      <p>
                        Идентификаторы, присвоенные документу (сведениям) при
                        размещении в хранилище электронных документов
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-8 d-flex">
                        <div class="col-6">
                          <div class="input-bg">
                            <input type="text" class="form-control"
                                   v-model="this.registry.signatoryPersonIdentityDetails.documentModeId" />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="input-bg">
                            <input type="text" class="form-control"
                                   v-model="this.registry.signatoryPersonIdentityDetails.documentModeUnknown1" />
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input type="text" class="form-control"
                                 v-model="this.registry.signatoryPersonIdentityDetails.documentModeUnknown2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="row">
                    <p>Документ, удостоверяющий полномочия</p>
                  </div>
                  <div class="row">
                    <div class="col-4 d-flex">
                      <div class="col-4">
                        <div class="input-bg">
                          <input class="form-control" type="text"
                                 v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docSeries" />
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="input-bg">
                          <input class="form-control" type="text"
                                 v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.docType" />
                        </div>
                      </div>
                    </div>
                    <div class="col-8 row">
                      <div class="col-4 d-flex">
                        <div class="col-5">
                          <div class="input-bg">
                            <input class="form-control" type="text"
                                   v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownString" />
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="input-bg">
                            <input class="form-control" type="text"
                                   v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.appealDate" />
                          </div>
                        </div>
                      </div>
                      <div class="col-8 row">
                        <div class="col-5 d-flex">
                          <div class="col-2 align-bcntr">
                            <p class="align-bcntr">с</p>
                          </div>
                          <div class="col-10">
                            <div class="input-bg">
                              <input class="form-control" type="text"
                                     v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateStart" />
                            </div>
                          </div>
                        </div>
                        <div class="col-5 d-flex">
                          <div class="col-2 align-bcntr">
                            <p class="align-bcntr">по</p>
                          </div>
                          <div class="col-10">
                            <div class="input-bg">
                              <input class="form-control" type="text"
                                     v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.dateEnd" />
                            </div>
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-bg">
                            <input class="form-control" type="text"
                                   v-model="this.registry.signatoryPersonIdentityDetails.powerOfAttorney.unknownInput" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--endregion-->
      <!--Region элемент с информацией по инспектору-->
      <div class="inspector-inf my-2">
        <div class="row">
          <div class="col-7">
            <p class="align-bcntr">ФИО инспектора</p>
            <div class="input-bg">
              <input class="form-control" type="text" v-model="this.registry.inspectorFullName" />
            </div>
          </div>
          <div class="col-5">
            <p class="align-bcntr">ЛНП</p>
            <div class="row">
              <div class="col-2 input-bg">
                <input class="form-control" type="text" v-model="this.registry.lnp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--endregion-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftGeneralDeclarationForm",
  props: {
    awbInfo: {
      required: false
    },
    registry: {
      required: false
    }
  },
  computed: {
    isDeclarationExist() {
      return !!Object.keys(this.registry).length;
    }
  }
};
</script>

<style scoped>

</style>
