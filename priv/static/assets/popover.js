"use strict";

(() => {
  const data = () => {
    return {
      // state
      isOpen: false,
      // functions

      toggle() {
        this.isOpen ? this.close() : this.open();
      },
      open() {
        this.isOpen = true;
      },
      close() {
        this.isOpen = false;
      },

      // binds
      main: {
        ["x-ref"]: "main",
        ["@keydown.escape.prevent.stop"]() {
          console.log("escape");
          this.close();
          this.$refs.trigger.focus();
        },
        ["@focusin.window"](event) {
          console.log("focusin");
          if (!this.$refs.main.contains(event.target)) {
            this.close();
          }
        },
        ["@click.outside"]() {
          console.log("click.outside");
          this.close();
        },
      },
      trigger: {
        ["x-ref"]: "trigger",
        ["@click"]() {
          console.log("click");
          this.toggle();
        },
      },
      content: {
        ["x-ref"]: "content",
        ["x-show"]() {
          return this.isOpen;
        },
      },
    };
  };

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("hsPopover", data);
  });
})();
