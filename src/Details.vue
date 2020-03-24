<template>
  <div class="details" v-if="machine">
    <h2>{{ machine.name }}</h2>
    <DataList :data="machine.sensors" />
    <router-link to="/" class="link">Go to overview</router-link>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import DataList from '@/components/DataList';

export default {
  name: 'Details',
  components: {
    DataList,
  },
  props: ['id'],
  apollo: {
    machine: {
      query: gql`query MachineQuery($id: ID!) {
        machine(id: $id) {
          id
          name
          sensors {
            name
            sensorDataPoints {
              timestamp
              value
            }
          }
        }
      }`,
      variables () {
        return {
          id: this.id
        }
      },
      skip () {
        return !this.id
      }
    }
  },
}
</script>

<style scoped lang="scss">
.details {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 990px;

  .link {
    margin-top: 32px;
    padding: 8px 32px;
    display: inline-block;
    border-radius: 999px;
    text-decoration: none;
    align-self: center;
    color: #000000;
    background-color: #ecf0f1;
    transition: background-color 0.3s linear;

    &:hover {
      background-color: darken(#ecf0f1, 5%);
    }
  }
}
</style>
