<template>
  <!-- <Autocomplete
    placeholder="Search..."
    @onType="onType"
    :displayValue="displayData"
  >
    <div
      class="data-row a"
      v-for="x in data"
      :key="x.id"
      @click.stop="handleRowClick(x.id)"
    >
      <div>{{ x.data }}</div>
      <div>{{ x.displayId }}</div>
    </div>
    <div class="data-row advanced a" @click="handleAdvancedClick">
      Advanced search...
    </div>
  </Autocomplete> -->
  <div>
    <Modal><div>test</div></Modal>
  </div>
</template>

<script>
// import { Autocomplete } from "./index";
import Modal from "hst-component-library/src/Modal.vue";
import { ref } from "vue";

export default {
  components: {
    // Autocomplete,
    Modal,
  },
  setup() {
    const data = ref([]);
    const displayData = ref("fuck it");
    const onType = (val) => {
      console.log(val);
      data.value.push({
        id: 1,
        displayId: "ID:1",
        data: "test1",
      });
    };

    const handleAdvancedClick = () => {
      console.log("show advanced");
    };

    const handleRowClick = (id) => {
      const x = data.value.filter((o) => o.id == id)[0];
      displayData.value = x.data;
    };

    const test = () => {
      console.log("test");
    };
    return {
      data,
      onType,
      handleAdvancedClick,
      handleRowClick,
      test,
      displayData,
    };
  },
};
</script>

<style scoped>
.data-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px;
  font-size: 14px;
}

.advanced {
  color: #3bacdc;
}
</style>
