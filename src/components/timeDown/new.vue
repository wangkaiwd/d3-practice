<template>
  <button :disabled="disabled">{{text}}</button>
</template>

<script>
// import { XButton } from "vux";
// import { validateEmail, validMobile } from "@/utils/validate";

export default {
  name: "SetTimeout",
  props: {
    isOpenCountDown: {
      type: Boolean,
      default: false
    },
    initText: {
      type: String,
      default: "获取"
    },
    executeText: {
      type: String,
      default: "60s"
    },
    number: {
      type: Number,
      default: 60
    },
    checkOptions: {
      type: Object,
      default() {
        return {};
      },
      validator(val) {
        return ["phone", "email", undefined].indexOf(val.text) > -1;
      }
    }
  },
  data() {
    return {
      disabled: false,
      text: this.initText
    };
  },
  components: {
    XButton
  },
  watch: {
    isOpenCountDown(val) {
      val ? this.countDown() : clearInterval(this.timerId);
    }
  },
  methods: {
    infoChecked() {
      let valid = true;
      const { text, number } = this.checkOptions;
      if (text === "email") {
        // valid = validateEmail(number);
        console.log("email");
      }
      if (text === "phone") {
        // valid = validMobile(number);
        console.log("phone");
      }
      return valid;
    },
    countDown() {
      let { number } = this;
      if (this.infoChecked()) {
        clearInterval(this.timerId);
        this.disabled = true;
        this.timerId = setInterval(() => {
          if (number <= 0) {
            clearInterval(this.timerId);
            this.$emit("changeStatus", false);
            this.disabled = false;
            this.text = this.initText;
            return;
          }
          this.text = `${number}s`;
          --number;
        }, 1000);
      } else {
        this.$emit("changeStatus", false);
      }
    }
  }
};
