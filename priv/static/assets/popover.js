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
      root: {
        ["x-ref"]: "root",
        ["x-id"]() {
          return ["hsp-content"];
        },
        ["@keydown.escape.prevent.stop"]() {
          this.close();
          this.$refs.trigger.focus();
        },
        ["@focusin.window"](event) {
          if (!this.$refs.root.contains(event.target)) {
            this.close();
          }
        },
        ["@click.outside"]() {
          this.close();
        },
      },
      trigger: {
        ["x-ref"]: "trigger",
        ["@click"]() {
          this.toggle();
        },
        [":aria-expanded"]() {
          return this.isOpen;
        },
        [":aria-controls"]() {
          return this.$id("hsp-content");
        },
      },
      content: {
        ["x-ref"]: "content",
        [":id"]() {
          return this.$id("hsp-content");
        },
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
