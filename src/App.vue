<template>
  <div class="container">
    <Header/>
    <Cards/>
  </div>
</template>

<script>

import Cards from "@/components/Cards/Cards";
import Header from "@/components/Header/Header";

export default {
  name: 'App',
  components: {
    Cards,
    Header
  }
}
</script>

<style lang="scss" scoped>
@import 'index.scss';

</style>
