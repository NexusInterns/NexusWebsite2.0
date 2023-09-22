<template>
  <ion-header :translucent="true" class="ion-no-border">
    <div class="ion-title-wrap">
      <ion-title><div class="ion-text-wrap">NEXUS CLOUD IT SOLUTIONS</div></ion-title>
      <ion-icon :src="cloud" name="cloud" color="grey"></ion-icon>
    </div>
  <div class="ion-line-break"></div>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { cloud } from "ionicons/icons";

export default defineComponent({
  name: "Header",
  components: { IonHeader, IonToolbar, IonTitle, IonIcon },
  setup() {
    return { cloud };
  },
});
</script>

<style scoped>
ion-header {
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.ion-title-wrap {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px;
}

ion-icon {
  width: 80px;
  height: 80px;
}

ion-title {
  padding:0;
}

.ion-text-wrap {
  color: #1c1c1c;
  font-weight: 700;
  text-align: start;
  font-size: 30px;
  font-weight: bold;
  width: 250px;
  text-wrap: wrap;
}

.ion-line-break {
  display: block;
  position: absolute;
  left: 5%;
  width: 70px;
  height: 8px;
  background: #1C1C1C;
  border-radius: 12px;
  z-index: 99;
}

</style>
