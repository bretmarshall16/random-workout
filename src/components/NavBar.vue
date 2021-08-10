<template>
  <div id="NavBar" class="view standard-padding primary">
    <div class="top-area fw">
      <img class="fh" src="../assets/logo.png" @click="goHome" />
    </div>
    <div class="titles" v-if="values">
      <div
        v-for="value in values"
        :key="value.id"
        class="item a"
        @click="handleClick(value.id)"
      >
        {{ value.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["values"],
  methods: {
    goHome() {
      this.$router.push({ name: "main" });
    },
    handleClick(id) {
      console.log(id);
      this.$emit("select", id);
    },
  },
};
</script>

<style scoped>
#NavBar {
  width: 200px;
  display: flex;
  flex-direction: column;
}

.top-area {
  display: flex;
  flex-direction: row;
  height: 25px;
}

.titles {
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
}

.item {
  padding: 12px;
  background-color: inherit;
}

.item:hover {
  filter: brightness(85%);
}
</style>
