<template>
  <div class="new-settimeout">
    <el-button :disabled="disabled"
               @click="$emit('click')"
               type="primary">
      {{text}}
    </el-button>
  </div>
</template>

<script>
  // import { validateEmail, validMobile } from "@/utils/validate";

  export default {
    name: 'NewSetTimeout',
    props: {
      isOpenCountDown: {type: Boolean, default: false},
      initText: {type: String, default: '获取'},
      executeText: {type: String, default: '60s'},
      number: {type: Number, default: 60},
      checkOptions: {
        type: Object,
        default () {
          return {}
        },
        validator (val) {
          return ['phone', 'email', undefined].indexOf(val.text) > -1
        }
      }
    },
    data () {
      return {disabled: false, text: this.initText}
    },
    watch: {
      isOpenCountDown (val) {
        val ? this.countDown() : clearInterval(this.timerId)
      }
    },
    methods: {
      infoChecked () {
        let valid = true
        const {text, number} = this.checkOptions
        if (text === 'email') {
          // valid = validateEmail(number);
          console.log('合法email')
        }
        if (text === 'phone') {
          // valid = validMobile(number);
          console.log('合法phone')
        }
        return valid
      },
      countDown () {
        let {number} = this
        if (this.infoChecked()) {
          clearInterval(this.timerId)
          this.disabled = true
          this.timerId = setInterval(() => {
            if (number <= 0) {
              clearInterval(this.timerId)
              this.$emit('update:isOpenCountDown', false)
              this.disabled = false
              this.text = this.initText
              return
            }
            this.text = this.replaceNumber(number)
            --number
          }, 1000)
        } else {
          this.$emit('update:isOpenCountDown', false)
        }
      },
      replaceNumber (number) {
        const reg = /\d+/
        return this.executeText.replace(reg, number.toString())
      },
    },
  }
  /**
   * String.prototype.match():
   *  当一个字符串与一个正则表达式匹配时，`match()`方法检索匹配项
   *
   * String.prototype.replace():
   *  方法返回一个由替换值替换一些或所有匹配的模式后的新字符串
   */
</script>
<style lang="less" scoped>
  .new-settimeout {display: inline-block;}
</style>
