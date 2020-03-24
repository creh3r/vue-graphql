<template>
  <div class="list" v-if="data">
    <SelectableListItem v-for="item in data" :key="item.id" :data="item" />
  </div>
</template>

<script>
import SelectableListItem from './SelectableListItem';

export default {
  name: 'SelectableList',
  props: ['data'],
  components: {
    SelectableListItem,
  }
}
</script>

<style scoped>
.list {

}
</style>
