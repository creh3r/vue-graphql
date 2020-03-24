<template>
  <div class="home" v-if="machines">
    <SelectableList :data="machines"/>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import SelectableList from '@/components/SelectableList';

export default {
  name: 'Home',
  components: {
    SelectableList,
  },
  apollo: {
    machines: gql`query {
      machines {
        id
        name
      }
    }`,
  },
}
</script>
