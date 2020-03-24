<template>
  <div class="app">
    <HeaderWrapper title="Monitor" />
    <router-view/>
  </div>
</template>

<script>
import HeaderWrapper from '@/components/HeaderWrapper';

export default {
  name: 'App',
  components: {
    HeaderWrapper,
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
