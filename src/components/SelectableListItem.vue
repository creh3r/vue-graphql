<template>
  <router-link class="list-item" :to="{ name: 'details', params: { id: data.id } }">
    <ItemIcon />
    <div class="list-item__text">
      {{ data.name }}
    </div>
  </router-link>
</template>

<script>
import ItemIcon from './ItemIcon.vue';

export default {
  name: 'SelectableListItem',
  props: ['data'],
  components: {
    ItemIcon,
  }
}
</script>

<style scoped lang="scss">
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #000000;

  &__text {
    margin-left: 16px;
  }

  &:not(:first-child) {
    margin-top: 8px;
  }

  &:hover {
    animation: drop-shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
}

@keyframes drop-shadow {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}

</style>
