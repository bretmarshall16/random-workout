<template>
  <div class="modal fw fh" @click="close">
    <div @click.stop="" class="box standard-padding">
      <div class="title">Add Video</div>
      <input type="text" v-model="video" />
      <div>
        <button class="primary" @click="handleAdd">Add Video</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "",
    };
  },
  methods: {
    handleAdd() {
      this.$emit("addVideo", this.stripVideoUrl());
      this.video = "";
    },
    stripVideoUrl() {
      const paramStr = this.video.split("?")[1];
      const paramSplit = paramStr.split("&");
      let paramMap = new Map();
      for (const x of paramSplit) {
        const k = x.split("=");
        paramMap.set(k[0], k[1]);
      }
      return paramMap.get("v");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
}

.box > *:not(:last-child) {
  margin-bottom: 16px;
}

input {
  border: 1px solid lightgray;
  width: 400px;
  border-radius: 4px;
}

input:hover {
  border: 1px solid black;
}

.title {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
</style>
