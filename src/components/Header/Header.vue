

<template>
  <div class="header">
    <div class="breadcrumbs">
      <a href="#">Главная</a>
      <span class="breadcrumbs__divider">/</span>
      <a href="#">Системы хранения</a>
      <span class="breadcrumbs__divider">/</span>
      <a class="active" href="#">Комплекты стеллажных систем</a>
    </div>
    <h2>Комплекты стеллажных систем</h2>
    <SelectBar />

  </div>
</template>

<script>

import SelectBar from "@/components/Common/SelectBar/SelectBar";

export default {
  name: "Header",
  components: {
    SelectBar
  }
}
</script>

<style lang="scss" scoped>
  @import 'Header';
</style>

