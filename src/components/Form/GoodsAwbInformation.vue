<template>
  <div class="product-batch my-3">
    <!--Region элемент хэдера блока с кнопками-->
    <div class="d-flex product-batch-header justify-content-between">
      <h4 class="col-4">Сведения о товарной партии</h4>
      <div class="product-batch-actions col-4 d-flex justify-content-end">
        <div class="col-2">
          <button class="btn batch-button">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div class="col-2">
          <button class="btn batch-button">
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
        <div class="col-2">
          <button class="btn batch-button">
            <i class="fa-solid fa-border-top-left"></i>
          </button>
        </div>
      </div>
    </div>
    <!--endregion-->
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
                <div class="col-2">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
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
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="input-bg col-4">
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
                <div class="col-2">
                  <div class="input-bg">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-4">
                  <h5 class="align-bcntr my-1">Общий вес брутто</h5>
                  <div class="d-flex">
                    <div class="col-6">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-6 d-flex">
                      <div class="col-7">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
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
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-4 d-flex">
                      <div class="col-2"></div>
                      <div class="col-10">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
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
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-3 d-flex">
                      <div class="col-12">
                        <div class="input-bg">
                          <input type="text" class="form-control" />
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
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-2 d-flex">
                    <div class="col-7 d-flex">
                      <div class="input-bg">
                        <input type="text" class="form-control" />
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
                    <input type="text" class="form-control" />
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
                  <label class="fs-5" for="">Код изменений</label>
                </div>
                <div class="col-10 d-flex">
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
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-3">
                <div class="input-bg">
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="col-7">
              <p class="align-bcntr fs-5">Причина отказа</p>
              <div class="input-bg">
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-5">
              <p class="align-bcntr fs-5">Уникальный идентификатор партии</p>
              <div class="col input-bg">
                <input class="form-control" type="text" />
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
            data-bs-toggle="collapse"
            data-bs-target="#collapsedBatchSender"
            aria-expanded="false"
            aria-controls="collapsedBatchSender"
          >
            <div class="collapsing-block d-flex justify-content-between">
              <span>Отправитель по индивидуальной накладной</span>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          </button>
          <div class="collapse" id="collapsedBatchSender">
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
                        />
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
                    <div class="col-6 d-flex justify-content-between">
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-1">
                          <label for=""> ОГРН </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-3">
                          <label for=""> ИНН </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-3">
                          <label for=""> КПП </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-6 d-flex">
                      <div class="input-bg col-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="номер телефона"
                        />
                      </div>
                      <div class="input-bg col-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="адрес эл.почты"
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
                            <input
                              type="text"
                              class="form-control"
                              placeholder="улица"
                            />
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
                            <input
                              type="text"
                              class="form-control"
                              placeholder="офис/квартира"
                            />
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
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код вида "
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
                      <div class="col-5 d-flex">
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
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Код подразделения"
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
            data-bs-toggle="collapse"
            data-bs-target="#collapsedBatchRecipient"
            aria-expanded="false"
            aria-controls="collapsedBatchRecipient"
          >
            <div class="collapsing-block d-flex justify-content-between">
              <span>Получатель по индивидуальной накладной</span>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          </button>
          <div class="collapse" id="collapsedBatchRecipient">
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
                        />
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
                    <div class="col-6 d-flex justify-content-between">
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-1">
                          <label for=""> ОГРН </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-3">
                          <label for=""> ИНН </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-4 d-flex">
                        <div class="label-block col-3 ps-3">
                          <label for=""> КПП </label>
                        </div>
                        <div class="input-bg col-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-6 d-flex">
                      <div class="input-bg col-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="номер телефона"
                        />
                      </div>
                      <div class="input-bg col-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="адрес эл.почты"
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
                            <input
                              type="text"
                              class="form-control"
                              placeholder="улица"
                            />
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
                            <input
                              type="text"
                              class="form-control"
                              placeholder="офис/квартира"
                            />
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
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="код вида "
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
                      <div class="col-5 d-flex">
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
                      <div class="col-2">
                        <div class="input-bg">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Код подразделения"
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
</template>

<script>
export default {
  name: "TsoftGoodsAwbInformationForm",
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
