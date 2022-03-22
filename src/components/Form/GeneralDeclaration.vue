<template>
  <div class="declaration mt-3" id="declaration">
    <!--Region элемент с общей информацией декларации-->
    <div class="common-inf">
      <div class="row">
        <div class="inf-block">
          <router-link class="point-name" :to="{ name: 'index' }">
            Подан с ДТ:
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="inf-block">
          <h5>
            Декларация на товары и пассажирская таможенная декларация для
            экспресс-грузов
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="inf-block row col-12 justify-content-between">
          <div class="checkbox-block d-flex col-2">
            <div class="checkbox-bg col-2">
              <input class="form-check-input" type="checkbox" id="DTEG" />
            </div>
            <div class="label-block col-4">
              <label for="DTEG">ДТЭГ</label>
            </div>
            <div class="checkbox-bg col-2">
              <input class="form-check-input" type="checkbox" id="PTDEG" />
            </div>
            <div class="label-block col-4">
              <label for="PTDEG">ПТДЭГ</label>
            </div>
          </div>
          <div class="checkbox-block d-flex col-2">
            <div class="checkbox-bg col-2">
              <input class="form-check-input" type="checkbox" id="IM" />
            </div>
            <div class="label-block col-3">
              <label for="IM">ИМ</label>
            </div>
            <div class="checkbox-bg col-2">
              <input class="form-check-input" type="checkbox" id="EK" />
            </div>
            <div class="label-block col-3">
              <label for="EK">ЭК</label>
            </div>
          </div>
          <div
            class="declaration-number-block justify-content-end d-flex col-5"
          >
            <div class="label-block col-2">
              <label for="declarationNumber">№</label>
            </div>
            <div class="input-bg col-10">
              <input
                class="declaration-number-input form-control"
                type="text"
                id="declarationNumber"
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
              <input class="form-control" type="text" />
            </div>
            <div class="col-2">
              <input class="form-control" type="text" />
            </div>
            <div class="col-3">
              <input class="form-control" type="text" />
            </div>
            <div class="col-2">
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="sheets-block d-flex col-2">
            <div class="label-block col-4">
              <label for="Sheets">Листов</label>
            </div>
            <div class="input-bg col-8">
              <input
                class="sheets-input form-control"
                type="text"
                id="Sheets"
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
              />
            </div>
          </div>
          <div class="registry-changes d-flex col-3">
            <div class="input-bg">
              <input
                class="registry-checkbox form-check-input"
                type="checkbox"
                id="registryCheckbox"
              />
            </div>
            <label for="registryCheckbox"
              >- реестр с внесёнными изменениями</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="inf-block d-grid">
          <div class="row col-12">
            <div class="col-6">
              <label class="express-courier-label" for="expressCourier"
                >Экспресс перевозчик</label
              >
              <div class="express-courier-block col-12 d-flex">
                <div class="col-1">
                  <input class="form-control" type="text" />
                </div>
                <div class="col-11">
                  <input
                    class="col-11 form-control"
                    type="text"
                    id="expressCourier"
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
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-bg col-1">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-bg col-7">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-bg col-1">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-bg col-1">
                    <input class="form-control" type="text" />
                  </div>
                </form>
              </div>
            </div>
            <div class="col-1"></div>
            <div class="col-5">
              <form class="changing-declaration" action="">
                <div class="inf-block row">
                  <div class="col-3 input-bg">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="col-4 input-bg">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="col-3 input-bg">
                    <input class="form-control" type="text" />
                  </div>
                  <div class="col-1 input-bg">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="inf-block changing-code row">
                  <div class="label-block" style="width: 100%">
                    <label class="fs-5" for="">Код изменений</label>
                  </div>
                  <div class="col-8 d-flex">
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
                    </div>
                    <div class="col input-bg">
                      <input class="form-control number-code" type="number" />
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
                  общая служба таможенных и иных платежей, подлежащих уплате по
                  декларации
                </p>
              </div>
              <div class="batch-block row">
                <div class="col-10">
                  <input type="text" class="form-control" placeholder="Сумма" />
                </div>
                <div class="col-2">
                  <input type="text" class="form-control" placeholder="Вал" />
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
                  <input class="form-control" type="text" />
                </div>
                <div class="col-3">
                  <input class="form-control" type="text" />
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
                  <input class="form-control" type="text" />
                </div>
                <div class="col-3">
                  <input class="form-control" type="text" />
                </div>
                <div class="col-3">
                  <input class="form-control" type="text" />
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
                  <input class="form-control" type="text" />
                </div>
                <div class="col-3">
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="inf-block row justify-content-end">
          <div class="payment-information">
            <router-link :to="{ name: 'index' }">
              Сведения об оплате таможенных и иных платежей
            </router-link>
          </div>
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
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-1">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-1"></div>
                  <div class="col-2 d-flex">
                    <div class="input-bg col-2">
                      <input type="checkbox" class="form-check-input" />
                    </div>
                    <div class="label-block col-10">
                      <label for=""> Декларант (заявитель) </label>
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
                      />
                    </div>
                  </div>
                  <div class="col-7 d-flex justify-content-between">
                    <div class="col-4 d-flex">
                      <div class="label-block col-2">
                        <label for=""> ОГРН </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="label-block col-2">
                        <label for=""> ИНН </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="label-block col-2">
                        <label for=""> КПП </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
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
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Адрес электронной почты"
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="номер факса"
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
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="страна"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="почтовый индекс"
                          />
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="область (регион, штат, провинция)"
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
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="город"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="населённый пункт"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row my-2">
                      <div class="col-4">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="дом, корпус, строение"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="номер а/я"
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
                        />
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="код"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="краткое наименование"
                        />
                      </div>
                    </div>
                    <div class="col-4 d-flex">
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="серия"
                        />
                      </div>
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="номер"
                        />
                      </div>
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="дата выдачи"
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="наименование организации, выдавшей документ"
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
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="код подразделения"
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="строка, иденти-ая орган государства"
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
              <div class="recipient-name">
                <form class="row form my-2">
                  <div class="col-8">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-1">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-1"></div>
                  <div class="col-2 d-flex">
                    <div class="input-bg col-2">
                      <input type="checkbox" class="form-check-input" />
                    </div>
                    <div class="label-block col-10">
                      <label for=""> Декларант (заявитель) </label>
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
                      />
                    </div>
                  </div>
                  <div class="col-7 d-flex justify-content-between">
                    <div class="col-4 d-flex">
                      <div class="label-block col-2">
                        <label for=""> ОГРН </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="label-block col-2">
                        <label for=""> ИНН </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="label-block col-2">
                        <label for=""> КПП </label>
                      </div>
                      <div class="input-bg col-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-1 d-flex"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="recipient-address">
                <div class="row my-2">
                  <div class="d-flex recipient-contacts">
                    <div class="col-1 d-flex">
                      <p class="point-name">Адрес</p>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="номер телефона"
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Адрес электронной почты"
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="номер факса"
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
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="страна"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="почтовый индекс"
                          />
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="область (регион, штат, провинция)"
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
                          />
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="город"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="населённый пункт"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row my-2">
                      <div class="col-4">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="дом, корпус, строение"
                          />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="номер а/я"
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
                        />
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="код"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="краткое наименование"
                        />
                      </div>
                    </div>
                    <div class="col-4 d-flex">
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="серия"
                        />
                      </div>
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="номер"
                        />
                      </div>
                      <div class="input-bg col-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="дата выдачи"
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="наименование организации, выдавшей документ"
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
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="код подразделения"
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="строка, иденти-ая орган государства"
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
              <input type="text" class="form-control" />
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
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-1">
              <div class="input-bg">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-7">
              <div class="input-bg">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-1">
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
            <span
              >Сведения о физическом лице, заполнившем (подписавшем) таможенный
              документ</span
            >
            <i class="fa-solid fa-caret-up"></i>
          </div>
        </button>
        <div class="collapse" id="collapsedNaturalPersonInfo">
          <div class="card card-body">
            <form action="" class="form">
              <div class="d-flex">
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-3">
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
              <div class="row my-2">
                <div class="col-9 d-flex">
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-3 row">
                  <div class="col-8">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
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
                  Идентификаторы, присвоенные документу (сведениям) при
                  размещении в хранилище электронных документов
                </p>
                <div class="row">
                  <div class="col-3 d-flex">
                    <div class="col-5">
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
                  <div class="col-3 d-flex">
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 d-flex">
                    <div class="col-6">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 d-flex">
                    <div class="col-3">
                      <div class="label-block align-bcntr">
                        <label class="align-bcntr" for=""> аттестат </label>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-3">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="input-bg">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-4 d-flex">
                    <div class="col-3 input-bg">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="col-8 input-bg">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="col-1 input-bg">
                      <input type="text" class="form-control" />
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
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
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
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="input-bg">
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="col-8 row">
                    <div class="col-4 d-flex">
                      <div class="col-5">
                        <div class="input-bg">
                          <input class="form-control" type="text" />
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="input-bg">
                          <input class="form-control" type="text" />
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
                            <input class="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div class="col-5 d-flex">
                        <div class="col-2 align-bcntr">
                          <p class="align-bcntr">по</p>
                        </div>
                        <div class="col-10">
                          <div class="input-bg">
                            <input class="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-bg">
                          <input class="form-control" type="text" />
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
            <input class="form-control" type="text" />
          </div>
        </div>
        <div class="col-5">
          <p class="align-bcntr">ЛНП</p>
          <div class="row">
            <div class="col-2 input-bg">
              <input class="form-control" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--endregion-->
  </div>
</template>

<script>
export default {
  name: "TsoftGeneralDeclarationForm",
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
