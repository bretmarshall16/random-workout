<template>
  <div id="autocomplete">
    <input
      :placeholder="placeholder"
      v-model="value"
      @focus="onFocusChange(true)"
      ref="input"
    />
    <div class="modal" @click="onFocusChange(false)" v-show="showData">
      <div
        class="data-area"
        ref="dataArea"
        v-show="showData"
        :style="{
          width: dataAreaWidth + 'px',
          top: dataAreaTop + 'px',
          left: dataAreaLeft + 'px',
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch, onUpdated, onMounted } from "vue";
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    minInputLength: {
      type: Number,
      default: 3,
    },
    displayValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    let value = ref("");
    const input = ref(null);
    const dataArea = ref(null);
    const showData = ref(false);
    let dataAreaWidth = ref(null);
    let dataAreaTop = ref(null);
    let dataAreaLeft = ref(null);
    let inputTimeoutHandler = null;

    onMounted(() => {
      console.log(props.displayValue);
    });

    onUpdated(() => {
      //calculating element info
      const all = input.value.getBoundingClientRect();
      const width = all.width;
      const height = all.height;
      const top = all.top;
      const left = all.left;
      //using info to set height/width of dropdown
      dataAreaWidth.value = width;
      dataAreaTop.value = top + height;
      dataAreaLeft.value = left;
    });

    watch(value, () => {
      if (value.value.length >= props.minInputLength) {
        clearTimeout(inputTimeoutHandler);
        inputTimeoutHandler = setTimeout(emitOnType, 500);
      }
    });

    watch(
      () => props.displayValue,
      () => {
        console.log(props.displayValue);
        value.value = props.displayValue;
      }
    );

    const emitOnType = () => {
      emit("onType", value.value);
    };

    const onFocusChange = (val) => {
      showData.value = val;
    };

    return {
      value,
      showData,
      onFocusChange,
      input,
      dataArea,
      dataAreaWidth,
      dataAreaTop,
      dataAreaLeft,
    };
  },
};
</script>

<style scoped>
#autocomplete {
  width: 100%;
  display: flex;
  box-sizing: border-box;
}

input {
  border: 1px solid lightgray;
  padding: 2px 4px;
}

.data-area {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 4px;
  border: 1px solid lightgray;
  background-color: white;
  z-index: 1000;
  position: absolute;
}
.modal {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
