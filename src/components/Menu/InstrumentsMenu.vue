<template>
  <div class="row instruments">
    <div class="col-6 d-flex">
      <div class="dropdown" title="создать документ">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-file" style="color: orange; font-size: 20px"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1"
             style="width: 500px; ">
          <div class="d-flex"></div>
          <div class="d-flex">
            <div class="col-6">
              <div class="mt-2 p-3">
                <select class="w-100" name="" id="">
                  <option>
                    выберите перевозчика
                  </option>
                  <option>
                    Transporter-1
                  </option>
                  <option>
                    Transporter-2
                  </option>
                  <option>
                    Transporter-3
                  </option>
                  <option>
                    Transporter...
                  </option>
                </select>
                <p class="" style="font-size: 12px">
                  (не влияет на оформление, можно писать, что угодно)
                </p>
              </div>
              <div class="row mt-1 p-3">
                <p>Тип транспорта</p>
                <div class="btn-group-vertical">
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="btnradio1" autocomplete="off">
                    <label class="" for="btnradio1">Авиационный</label>
                  </div>
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="btnradio2" autocomplete="off">
                    <label class="" for="btnradio2">Автомобильный</label>
                  </div>
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="btnradio3" autocomplete="off">
                    <label class="" for="btnradio3">Морской</label>
                  </div>
                </div>
              </div>
              <div class="row p-3 mt-2">
                <div class="d-flex">
                  <input class="checkbox" type="checkbox" id="reestr">
                  <label class="ms-2" for="reestr" style="font-size: 13px;">
                    Реестр по 158/142 решению ЕЭК
                  </label>
                </div>
                <p>Тип</p>
                <div class="btn-group-vertical">
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="radio1" autocomplete="off">
                    <label class="ms-2" for="btnradio1"
                           style="font-size: 13px;">ПТДЭГ</label>
                  </div>
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="radio2" autocomplete="off">
                    <label class="ms-2" for="btnradio2"
                           style="font-size: 13px;">ДТЭГ</label>
                  </div>
                </div>
              </div>
              <div class="row mt-2 p-3">
                <p>Тр. расходы к там. стоимости</p>
                <div class="btn-group-vertical">
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="io1" autocomplete="off">
                    <label class="ms-2" for="btnradio1"
                           style="font-size: 13px;">Прибавлять</label>
                  </div>
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="bio2" autocomplete="off">
                    <label class="ms-2" for="btnradio2"
                           style="font-size: 13px;">Вычитать</label>
                  </div>
                  <div class="d-flex">
                    <input type="radio" class="radio" name="btnradio"
                           id="io2" autocomplete="off">
                    <label class="ms-2" for="btnradio2"
                           style="font-size: 13px;">Не использовать</label>
                  </div>
                  <div class="d-flex">
                    <input class="checkbox" type="checkbox" id="reestr">
                    <label class="ms-2" for="reestr" style="font-size: 13px;">
                      Поменять местами отп-я и пол-я
                    </label>
                  </div>
                </div>

              </div>
              <div class="row mt-2"></div>
              <div class="row mt-2"></div>
            </div>
            <div class="col-6">
              <img src="img/menushka.png" style="width: 250px; height: 100%">
            </div>
          </div>
          <div class="d-flex">
            <div class="col-8"></div>
            <div class="col-4 d-flex p-1">
              <button class="btn me-2" style="border: 1px solid">
                <a href="alta-maket/index.html"
                   style="color: black; text-decoration: unset">ОК</a>
              </button>
              <button class="btn" style="border: 1px solid">Отмена</button>
            </div>
          </div>
        </div>
      </div>
      <div class="import-doc">
        <button class="btn" id="sendRegistry" title="Отправить документ">
          <i class="fa-solid fa-file-import" style="font-size: 20px; color: red"></i>
        </button>
      </div>
      <div class="import-doc">
        <button class="btn" title="переместить в архив">
          <i class="fa-solid fa-box-archive" id="archivingButton"
             style="font-size: 20px; color: #18b14e"></i>
        </button>
      </div>
      <div class="import-doc">
        <button class="btn" title="сохранить">
          <a href="../index.html">
            <i class="fa-solid fa-floppy-disk" style=" background-color: white; color: black; font-size: 20px"></i>
          </a>
        </button>
        <button class="btn" title="Загрузить реестр" type="button" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
          <i class="fa-solid fa-file-arrow-down" style="font-size: 20px; color: brown"></i>
        </button>
        <!--Region Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!--        endregion-->
        <button type="button" class="btn" title="Изменить структуру">
          <i class="fa-solid fa-screwdriver-wrench" style="font-size: 20px; color: blue"></i>
        </button>
      </div>
    </div>
    <div class="col-6"></div>
  </div>
</template>

<script>
export default {
  name: "TsoftInstrumentsMenu"
}
</script>

<style scoped>
 .instruments {
   margin-left: 50px;
 }
</style>