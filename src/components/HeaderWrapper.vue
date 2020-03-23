<template>
  <div class="header">
    <img class="header__image" src="../assets/images/pickaxe.svg">
    <h1 class="header__heading">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderWrapper',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  &__image {
    width: 60px;
  }

  &__heading {
    font-weight: 100;
  }
}
</style>
