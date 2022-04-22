<template>
  <div class="d-flex instruments">
    <div @click="callEmit('fileUpload')" class="xml-upload">
      <svg width="45" height="56" viewBox="0 0 45 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.44143 7.85003H8.69143V7.60003V0.25H22.5518H44.75V55.4836H0.353516V27.8668V13.9334V7.85003H8.44143Z"
              fill="#F7F5F5" stroke="black" stroke-width="0.5" />
        <path d="M8.44143 0V7.60003H0.103516L8.44143 0Z" fill="#A6A6A6" />
        <rect x="7.84375" y="18.5779" width="32.5112" height="3.09631" fill="#EA7B27" />
        <rect x="7.84375" y="24.7705" width="26.3186" height="3.09631" fill="#EA7B27" />
        <rect x="7.84375" y="30.9629" width="13.9334" height="3.09631" fill="#E67926" />
      </svg>
      <br>
      <span class="icon-text">Загрузить XML</span>
    </div>
    <div @click="callEmit('fileUpload')" class="create-registry">
      <svg width="47" height="56" viewBox="0 0 47 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.53891 7.88636H7.78891V7.63636V0.25H20.2971H40.3441V55.75H0.25V28V14V7.88636H7.53891Z" fill="#F6F5F5"
              stroke="black" stroke-width="0.5" />
        <path d="M7.53891 0V7.63636H0L7.53891 0Z" fill="#B8B5B5" />
        <rect x="4.64062" y="8.90918" width="31.3155" height="6.36364" fill="#C4C4C4" />
        <rect x="8.11914" y="22.9092" width="24.3565" height="2.54545" fill="#C4C4C4" />
        <rect x="11.6016" y="28" width="17.3975" height="2.54545" fill="#C4C4C4" />
        <rect x="4.64062" y="44.5457" width="31.3155" height="5.09091" fill="#C4C4C4" />
        <rect width="30.0511" height="7.28513" transform="matrix(0.673565 -0.739128 0.673565 0.739128 19.0645 42.7222)"
              fill="#2E6B3C" />
        <line y1="-0.2" x2="26.4086" y2="-0.2" transform="matrix(0.673565 -0.739128 0.673565 0.739128 23.0527 43.7317)"
              stroke="#939292" stroke-width="0.4" />
        <line y1="-0.2" x2="24.5873" y2="-0.2" transform="matrix(0.673565 -0.739128 0.673565 0.739128 25.5059 43.7317)"
              stroke="#A6A6A6" stroke-width="0.4" />
        <line y1="-0.2" x2="24.5873" y2="-0.2" transform="matrix(0.673565 -0.739128 0.673565 0.739128 23.0527 41.0396)"
              stroke="#939292" stroke-width="0.4" />
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.4646 45.4898L17.5316 49.7895L21.4513 48.7654L21.2842 48.7287C21.4163 48.0038 21.0868 47.1622 20.5059 46.5249C19.9251 45.8875 19.1581 45.5259 18.4975 45.6708L18.4646 45.4898ZM18.5418 45.1337C19.3727 45.0177 20.2307 45.4837 20.8427 46.1553C21.455 46.8271 21.8797 47.7691 21.7736 48.6812L23.9721 48.1068L19.0651 42.7221L18.5418 45.1337Z"
              fill="#E4961F" />
        <path
          d="M44.2123 20.5108C45.2004 21.595 45.7458 23.5397 45.1324 24.2127C44.7936 24.5845 43.3091 23.5582 42.3211 22.4739C41.333 21.3897 40.4102 19.7363 40.8387 19.5012C42.0655 18.8281 43.2243 19.4266 44.2123 20.5108Z"
          fill="#2E6B3C" />
        <path d="M39.6113 20.8472L41.1448 19.1645L45.4384 23.876L43.905 25.5587L39.6113 20.8472Z" fill="#E4961F" />
      </svg>
      <br>
      <span class="icon-text">Создать реестр</span>
    </div>
    <div @click="callEmit('fileUpload')" class="delete">
      <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8489 10.7955H18.0989V10.5455V4.25H30.0013H49.0846V51.75H10.918V28V16V10.7955H17.8489Z"
              fill="#F7F5F5" stroke="black" stroke-width="0.5" />
        <path d="M17.8489 4V10.5455H10.668L17.8489 4Z" fill="#A6A6A6" />
        <rect x="17.334" y="12" width="26.8418" height="5.45455" fill="#C4C4C4" />
        <rect x="20.3164" y="24" width="20.877" height="2.18182" fill="#C4C4C4" />
        <rect x="23.3008" y="28.3635" width="14.9121" height="2.18182" fill="#C4C4C4" />
        <rect x="17.334" y="42.5457" width="26.8418" height="4.36364" fill="#C4C4C4" />
        <path d="M23.181 6.79545H23.431V6.54545V0.25H35.3333H54.4167V47.75H16.25V24V12V6.79545H23.181Z" fill="#F7F5F5"
              stroke="black" stroke-width="0.5" />
        <path d="M23.181 0V6.54545H16L23.181 0Z" fill="#A6A6A6" />
        <rect x="22.668" y="8" width="26.8418" height="5.45455" fill="#C4C4C4" />
        <rect x="25.6504" y="20" width="20.877" height="2.18182" fill="#C4C4C4" />
        <rect x="28.6348" y="24.3635" width="14.9121" height="2.18182" fill="#C4C4C4" />
        <rect x="22.668" y="38.5457" width="26.8418" height="4.36364" fill="#C4C4C4" />
        <path
          d="M8.28571 49.3333C8.28571 50.8 9.44286 52 10.8571 52H21.1429C22.5571 52 23.7143 50.8 23.7143 49.3333V33.3333H8.28571V49.3333ZM25 29.3333H20.5L19.2143 28H12.7857L11.5 29.3333H7V32H25V29.3333Z"
          fill="#E67926" />
      </svg>
      <br>
      <span class="icon-text">Удалить</span>
    </div>
    <div @click="callEmit('fileUpload')" class="show-goods">
      <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.189377" y="0.10065" width="13.3837" height="13.1707" rx="0.85"
              transform="matrix(0.959425 -0.281965 0.303088 0.952962 41.1139 21.7769)" fill="#E4961F" stroke="black"
              stroke-width="0.3" />
        <rect x="0.189377" y="0.10065" width="13.3837" height="13.1707" rx="0.85"
              transform="matrix(0.959425 -0.281965 0.303088 0.952962 26.7877 25.9861)" fill="#E4961F" stroke="black"
              stroke-width="0.3" />
        <rect x="0.189377" y="0.10065" width="13.3837" height="13.1707" rx="0.85"
              transform="matrix(0.959425 -0.281965 0.303088 0.952962 36.8502 8.38186)" fill="#E4961F" stroke="black"
              stroke-width="0.3" />
        <path
          d="M23.3434 16.6227L30.5079 9.40949C30.8357 9.07952 31.3906 9.06511 31.7473 9.3773L39.2696 15.9606C39.6263 16.2728 39.6498 16.7934 39.3221 17.1233L32.1575 24.3365C31.8298 24.6665 31.2749 24.6809 30.9182 24.3687L23.3959 17.7854C23.0391 17.4732 23.0156 16.9527 23.3434 16.6227Z"
          fill="#E4961F" stroke="black" stroke-width="0.3" />
        <rect x="0.218705" y="-0.00567917" width="4.85014" height="4.69771" rx="0.85"
              transform="matrix(0.698148 -0.702888 0.759885 0.665027 17.1758 11.9668)" fill="#E4961F" stroke="black"
              stroke-width="0.3" />
        <path d="M27.2656 12.9797L35.9056 20.4495" stroke="black" stroke-width="0.3" stroke-linecap="round" />
        <path d="M47.75 19.9473L51.6589 32.2375" stroke="black" stroke-width="0.3" stroke-linecap="round" />
        <path d="M33.4297 24.1555L37.3386 36.4457" stroke="black" stroke-width="0.3" stroke-linecap="round" />
        <path d="M43.4922 6.55151L47.4011 18.8417" stroke="black" stroke-width="0.3" stroke-linecap="round" />
        <path d="M27.1816 20.9368L35.5512 12.374" stroke="black" stroke-width="0.3" />
        <path d="M43.6777 28.3938L56.3849 24.5556" stroke="black" stroke-width="0.3" />
        <path d="M29.3555 32.6033L42.0627 28.7651" stroke="black" stroke-width="0.3" />
        <path d="M39.418 14.9988L52.1252 11.1606" stroke="black" stroke-width="0.3" />
        <path d="M2 2.56299L11.5789 5.94947L18.2105 24.7633L24.842 43.5771L57.9998 34.5464" stroke="#C4C4C4"
              stroke-width="4" stroke-linecap="round" />
        <path d="M27.8457 50.6761L35.9506 42.7888" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" />
        <path
          d="M30.423 49.7889C30.423 52.9247 27.7727 55.5001 24.4615 55.5001C21.1503 55.5001 18.5 52.9247 18.5 49.7889C18.5 46.6531 21.1503 44.0776 24.4615 44.0776C27.7727 44.0776 30.423 46.6531 30.423 49.7889Z"
          fill="white" stroke="#C4C4C4" />
        <path
          d="M26.9349 49.4931C26.9349 50.6142 25.9836 51.5564 24.7682 51.5564C23.5528 51.5564 22.6016 50.6142 22.6016 49.4931C22.6016 48.3719 23.5528 47.4297 24.7682 47.4297C25.9836 47.4297 26.9349 48.3719 26.9349 49.4931Z"
          fill="white" stroke="#C4C4C4" />
      </svg>
      <br>
      <span class="icon-text">Показать товары</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TsoftInstrumentsMenu",
  methods: {
    callEmit(action) {
      this.$emit('action', action);
    }
  }
};
</script>

<style scoped>
.instruments {
  margin-top: 15px;
  justify-content: center;
  text-align: center;
}

.icon-text {
  font-size: 13px;
  color: #757575;
}

.instruments > div {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>


