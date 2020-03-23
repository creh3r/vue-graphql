<template>
  <div class="list">
    <SelectableListItem v-for="machine in machines" :key="machine._id" :data="machine" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import SelectableListItem from './SelectableListItem.vue';

export default {
  name: 'SelectableList',
  apollo: {
    machines: gql`query {
      machines {
        name
      }
    }`,
  },
  components: {
    SelectableListItem,
  }
}
</script>

<style scoped>
.list {

}
</style>
