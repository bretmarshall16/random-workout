<template>
  <div class="view area" v-if="workouts">
    <NavBar :values="workouts" @select="changeSelected" />
    <Videos :data="workouts" :id="selectedId" />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import getWorkouts from "../composables/getWorkouts";
import { NavBar, Videos } from "../components/index.js";
import { ref } from "vue";
export default {
  components: { NavBar, Videos },
  setup() {
    const selectedId = ref(null);
    const { workouts, error } = getWorkouts();

    const changeSelected = (id) => {
      selectedId.value = id;
    };

    return {
      workouts,
      error,
      selectedId,
      changeSelected,
    };
  },
};
</script>

<style scoped>
.area {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
