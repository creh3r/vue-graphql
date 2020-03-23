<template>
  <div id="app">
    <HeaderWrapper title="Monitor" />
    <SelectableList />
  </div>
</template>

<script>
import HeaderWrapper from './components/HeaderWrapper.vue';
import SelectableList from './components/SelectableList.vue';

export default {
  name: 'App',
  components: {
    HeaderWrapper,
    SelectableList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
