<template>
  <footer class="footer">
    <h3 class="company-name">LULLA</h3>
    <p class="company-info">
      사업자 등록번호 : 339-87-02590 | 대표 : 한동규
      <br />
      통신판매업 신고 번호 : 2022-서울성북-1090 | 서울특별시 성북구 고려대로
      27길 30-2, 2층
      <br />
      02-593-0620 | loadit@loadit.co.kr
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayout',
}
</script>

<style>
.footer {
  width: 100%;
  height: auto;
  background-color: #222;
  position: absolute;
  bottom: 0;
  padding: 20px;
  color: #fff;
  text-align: left;
}

.company-name {
  font-size: 16px;
  font-weight: 700;
}

.company-info {
  font-size: 14px;
  margin-top: 20px;
}
</style>
