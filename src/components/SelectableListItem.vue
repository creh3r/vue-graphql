<template>
  <div class="list-item">
    {{ data.name }}
  </div>
</template>

<script>

export default {
  name: 'SelectableListItem',
  props: ['data']
}
</script>

<style scoped>
.list-item {

}
</style>
