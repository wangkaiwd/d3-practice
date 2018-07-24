<template>
  <div class="time-down">
    <el-button type="primary"
               @click="handleClick"
               :disabled="disabled">
      {{text}}
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'Timeout',
    data () {
      return {
        text: '发送验证码',
        disabled: false
      }
    },
    methods: {
      handleClick () {
        let totalTime = 60, originText = this.text
        clearInterval(this.timerId)
        this.disabled = true
        this.timerId = setInterval(() => {
          totalTime--
          this.text = `${totalTime}秒后重新发送`
          if (totalTime <= 0) {
            clearInterval(this.timerId)
            this.disabled = false
            this.text = originText
          }
        }, 1000)
      },
    }
  }
</script>

<style scoped>

</style>
