import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getWorkouts = () => {
  const workouts = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore.collection("workouts");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      workouts.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      workouts.value = null;
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { workouts, error };
};

export default getWorkouts;
