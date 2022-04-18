<template>
  <div class="doc">
    <div class="group-panel-label" @click="isDocumentOpen = !isDocumentOpen">
      <p>Документы №</p>
      <div class="arrow">
        <span class="fa-solid fa-caret-right" :class="{'down-rotate': isDocumentOpen}" />
      </div>
    </div>
    <div class="group-panel-content doc" :class="{'open': isDocumentOpen}">
      <div class="optional-inf-block">
        <div class="product-inner-block">
          <div class="optional-inf-card">
            <div class="row">
              <div class="d-flex">
                <div class="col-5 d-flex">
                  <div class="col-3 d-flex">
                    <div class="col-8">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.typeCode"/>
                      </div>
                    </div>
                    <div class="col-1">
                      <p class="fs-5 my-0">/</p>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.typeCodeCount"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-9 ps-2">
                    <div class="input-bg">
                      <input type="text" class="form-control" v-model="document.type"/>
                    </div>
                  </div>
                </div>
                <div class="col-7 row">
                  <div class="col-2">
                    <div class="input-bg">
                      <input type="text" class="form-control" v-model="document.number"/>
                    </div>
                  </div>
                  <div class="col-3 d-flex">
                    <p class="align-bcntr pe-1">от</p>
                    <div class="input-bg">
                      <input type="text" class="form-control" placeholder="дата" v-model="document.dateRelease"/>
                    </div>
                  </div>
                  <div class="col-3 d-flex">
                    <p class="align-bcntr pe-1">с</p>
                    <div class="input-bg">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="дата начала"
                        v-model="document.dateStart"
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
                        v-model="document.dateEnd"
                      />
                    </div>
                  </div>
                  <div class="col-1">
                    <div class="input-bg">
                      <input type="text" class="form-control" v-model="document.fieldUnknown" />
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
                          v-model="document.countryFullName"
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="AuthorityId"
                          v-model="document.authorityId"
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
                        v-model="document.informationSource"
                      />
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="input-bg">
                      <input type="text" class="form-control" placeholder="URL" v-model="document.url"/>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-bg">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Дата обращения"
                        v-model="document.dateUrlAppeal"
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
                      <input type="text" class="form-control" v-model="document.unknownField1" />
                    </div>
                    <div class="input-bg col-8">
                      <input type="text" class="form-control" v-model="document.unknownField2"/>
                    </div>
                  </div>
                  <div class="col-5 d-flex">
                    <div class="align-bcntr">
                      <p class="col-1 align-bcntr">ДТ</p>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField3"/>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField4"/>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField5"/>
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField6"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-5 d-flex">
                    <div class="align-bcntr">
                      <p class="col-1 align-bcntr">ТС</p>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField7"/>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField8"/>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField9"/>
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField10"/>
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
                        <input type="text" class="form-control" v-model="document.unknownField11"/>
                      </div>
                    </div>
                    <div class="col-7">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField12"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-flex">
                    <div class="col-3 align-bcntr">
                      <p class="align-bcntr">Иной документ</p>
                    </div>
                    <div class="col-6">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField13"/>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="input-bg">
                        <input type="text" class="form-control" v-model="document.unknownField14"/>
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
  name: "TsoftAdditionalDocumentForm",
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isDocumentOpen: false
    }
  }
};
</script>

<style scoped>
.optional-inf-block a {
  box-sizing: border-box;
  font-size: 10px;
}

.optional-inf-block p {
  font-size: 10px;
}

.optional-inf-block label {
  font-size: 10px;
}

.optional-inf-block {
  padding: 0 0 10px;
  max-width: 950px;
  min-width: 900px;
  margin: 0 auto;
}
.group-panel-content.doc {
  border: 1px solid #c4c4c4;
  border-top: unset;
}
</style>
