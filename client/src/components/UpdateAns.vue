<template>
  <div class="container">
      <form @submit.prevent="updateAnswer">
        <div style="font-size: 25px; margin-bottom: 10px;">Your Answer</div>
        <wysiwyg v-model="description" />
        <button class="button is-info">Post Your Answer</button>
      </form>
  </div>
</template>

<script>
import axios from '../helpers/axios'
import alert from '../helpers/alert'

export default {
  name: 'AnswerForm',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    updateAnswer () {
      this.$store.dispatch('updateAnswer', {
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
    },
    getAnswer () {
      axios.get(`answers/${this.$route.params.id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.title = data.title
          this.description = data.description
        })
        .catch(alert)
    }
  },
  watch: {
    '$route.params.id' () {
      this.fetchAnswer()
    }
  },
  created () {
    this.fetchAnswer()
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  padding-top: 50px;
}
.notification {
  margin: 10px;
  text-align: left;
}
.button {
  margin-top: 10px;
  float: right;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
