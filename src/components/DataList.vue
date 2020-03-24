<template>
  <div class="data-list">
    <select v-model="sensorData" class="data-list__select">
      <option v-for="item in data" v-bind:value="item.sensorDataPoints" v-bind:key="item.id">
        {{ item.name }}
      </option>
    </select>
    <table class="data-list__table" v-if="sensorData">
      <thead>
        <tr>
          <th>
            Timestamp
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sensorData" :key="item.timestamp">
          <td>
            {{ item.timestamp.substring(0, 10) }}
          </td>
          <td>
            {{ item.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  props: ['data'],
  data: () => {
    return {
      sensorData: null,
    };
  },
}
</script>

<style scoped lang="scss">
.data-list {
  &__select {
    margin-top: 16px;
    padding: 8px 32px;
    display: inline-block;
    text-decoration: none;
    align-self: center;
    border: none;
    outline: none;
    color: #000000;
    background-color: #ecf0f1;
    transition: background-color 0.3s linear;

    &:hover {
      background-color: darken(#ecf0f1, 5%);
    }
  }

  &__table {
    margin-top: 32px;
    width: 100%;
    text-align: left;

    thead {
      tr {
        background-color: #ecf0f1;
      }
    }

    th,
    td {
      padding: 8px;
    }
  }
}
</style>
