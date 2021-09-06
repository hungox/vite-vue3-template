<template>
  <div>Axios.vue</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/hungnd101')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res: ', res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('err: ', err)
      })
  }
})
</script>
