<template>
  <div class="calendarContainer">
    <v-sheet height="260" width="300">
      <v-calendar ref="calendar" :type="type" color="primary"></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data: () => ({
    type: "month",
  }),
};
</script>
<style scoped>
.calendarContainer {
  margin: auto;
  position: fixed;
  bottom: 10%;
  right: 5%;
}
span {
  text-align: center;
}
</style>
