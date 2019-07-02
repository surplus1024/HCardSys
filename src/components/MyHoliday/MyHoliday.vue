<template>
    <div>
      <Back :title="title"></Back>
      <div style="" id="myHolidayCard">
        <v-card>
          <div>

          </div>
          <template v-for="e in datas" class="itemCard">

          </template>
        </v-card>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "MyHoliday"
    }
</script>

<style scoped>

</style>
