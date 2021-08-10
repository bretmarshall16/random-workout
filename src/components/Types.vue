<template>
  <div class="view">
    <h2>types</h2>
    <!-- <div class="item standard-padding a" v-for="x in values" :key="x.id">
      {{ x.title }}
    </div>
    <button type="button" class="btn btn-primary">ADD</button> -->
  </div>
</template>

<script>
export default {
  props: ["values"],
};
</script>

<style scoped>
.view {
  border-right: 1px solid black;
  width: 60px;
}

.item {
  font-size: 16px;
  font-weight: bold;
}

.item:hover {
  background-color: #f2f2f2;
}
</style>
