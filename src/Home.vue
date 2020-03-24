<template>
  <SelectableList :data="machines"/>
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
