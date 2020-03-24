<template>
  <table class="data-list">
    <thead>
      <tr>
        <th>
          Sensor
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>
          {{ item.name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataList',
  props: ['data'],
}
</script>

<style scoped lang="scss">
.data-list {

}
</style>
