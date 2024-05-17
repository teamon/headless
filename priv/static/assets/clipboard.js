"use strict";

(() => {
  const data = () => {
    return {
      // functions
      copy() {
        const el = this.$refs.content;
        console.log(el)
        const text = el.value === undefined ? el.innerText : el.value;
        console.log(text)
        return window.navigator.clipboard.writeText(text);
      },

      // binds
      root: {
        ["x-ref"]: "root",
      },
      trigger: {
        ["x-ref"]: "trigger",
        ["@click"]() {
          this.copy();
        },
      },
      content: {
        ["x-ref"]: "content"
      },
    };
  };

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("hsClipboard", data);
  });
})();
