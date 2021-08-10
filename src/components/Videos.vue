<template>
  <div v-if="selectedVideos" class="view">
    <div class="header standard-padding">
      <div>{{ selectedVideos.title }}</div>
      <div class="action-area">
        <span class="material-icons" @click="handleAdd"> add </span>
        <span class="material-icons" @click="handleRandom"> shuffle </span>
      </div>
    </div>
    <div class="video-area scroll standard-padding">
      <div v-for="x in selectedVideos.videos" :key="x" class="video">
        <iframe
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + x"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div v-show="showAdd">
      <AddModal @addVideo="handleAddVideo" @close="handleAdd" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import AddModal from "./AddModal";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["data", "id"],
  components: { AddModal },
  setup(props) {
    let showAdd = ref(false);
    const selectedVideos = computed(() => {
      return props.data?.filter((o) => o.id == props.id)[0];
    });

    const handleRandom = () => {
      const index = Math.floor(
        Math.random() * selectedVideos.value.videos.length
      );
      const url = `https://www.youtube.com/watch/${selectedVideos.value.videos[index]}`;
      window.open(url, "_blank");
    };

    const handleAdd = () => {
      showAdd.value = !showAdd.value;
    };

    const handleAddVideo = async (id) => {
      if (id) {
        let updateData = { ...selectedVideos.value };
        updateData.videos.push(id);
        await projectFirestore
          .collection("workouts")
          .doc(selectedVideos.value.id)
          .set(updateData);

        handleAdd();
      }
    };

    return { selectedVideos, handleRandom, showAdd, handleAdd, handleAddVideo };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video {
  display: flex;
  padding: 12px;
}
</style>
