<template>
  <div class="sidebar col-12 col-md-3">
    <div class="menu-sitemap-tree">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Элемент
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            aria-labelledby="headingOne"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_1"
                  aria-expanded="false"
                  aria-controls="collapse1_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_2">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_2"
                  aria-expanded="false"
                  aria-controls="collapse1_2"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_1"
                  aria-expanded="false"
                  aria-controls="collapse1_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_2">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_2"
                  aria-expanded="false"
                  aria-controls="collapse1_2"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_1"
                  aria-expanded="false"
                  aria-controls="collapse1_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1_2">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_2"
                  aria-expanded="false"
                  aria-controls="collapse1_2"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="true"
              aria-controls="collapse2"
            >
              Элемент #2
            </button>
          </h2>
          <div
            id="collapse2"
            class="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading2_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2_1"
                  aria-expanded="false"
                  aria-controls="collapse2_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading3">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="true"
              aria-controls="collapse3"
            >
              Элемент #3
            </button>
          </h2>
          <div
            id="collapse3"
            class="accordion-collapse collapse show"
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample"
            style=""
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading3_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3_1"
                  aria-expanded="false"
                  aria-controls="collapse3_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading4">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              Элемент #4
            </button>
          </h2>
          <div
            id="collapse4"
            class="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample"
            style=""
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading4_1">
                <button
                  class="accordion-button collapsed accordion__sub-item"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4_1"
                  aria-expanded="false"
                  aria-controls="collapse4_1"
                >
                  Подэлемент
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style lang="css">
.sidebar {
  max-width: 300px;
}

.menu-sitemap-tree {
  font-size: 100%;
  position: sticky;
  top: 104px;
  clear: right;
  margin-top: 10px;
}

.menu-sitemap-tree ul {
  list-style-type: none;
  margin: 0;
  padding: 0 1em 0 0;
}

.menu-sitemap-tree li {
  margin: 8px 0 -0.85em 0;
  padding: 0;
  list-style: none;
}

.accordion-item {
  border: unset;
}

.accordion-button {
  width: max-content;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.03em;
  padding: 0.75rem 0.75rem;
  text-transform: uppercase;
  color: #362518;
  display: block;
  text-decoration: none;
}

.accordion-button:not(.collapsed) {
  color: #e77f2f;
  background-color: unset;
  box-shadow: unset;
}

.accordion-button:focus {
  color: #e77f2f;
  background-color: unset;
  box-shadow: unset;
}
.accordion-button:hover {
  color: #e77f2f;
}

.accordion-button::after {
  flex-shrink: 0;
  width: 0;
  height: 0;
  margin-left: unset;
  content: unset;
  background-image: unset;
  background-repeat: unset;
  background-size: unset;
  transition: unset;
}

.accordion-button.collapsed::before {
  color: #e77f2f;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0;
  font-family: fontawesome;
  content: "\f054";
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}

.accordion-button:not(.collapsed)::before {
  color: #e77f2f;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0;
  font-family: fontawesome;
  content: "\f078";
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}

.accordion__sub-item {
  margin-left: 30px;
  font-weight: normal;
}

.accordion__sub-item.collapsed::before {
  font-family: fontawesome;
  content: unset;
  background-image: unset;
}

.accordion__sub-item:not(.collapsed)::before {
  font-family: fontawesome;
  content: unset;
  background-image: unset;
}
</style>
