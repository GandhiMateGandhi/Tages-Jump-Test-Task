<template>
  <div class="select">

    <div class="select-price">
      <label>Cортировать по:</label>
      <v-select class="select-input" placeholder="Сортировать по цене" @input="sortByPrice($event)"
                :options="sortingOptions"></v-select>
    </div>

    <div class="select-material">
      <label>Материал</label>
      <v-select class="select-input" placeholder="Выберите материал" @input="filterItems($event)"
                :options="filterOptions"></v-select>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "SelectBar",
  computed: mapGetters(['sortingOptions', 'filterOptions']),
  methods: {
    ...mapActions(['filterItems', 'sortByPrice'])
  },

}
</script>

<style lang="scss" scoped>
@import 'SelectBar';
</style>