"use strict";

(() => {
  const data = () => {
    return {
      // state
      isOpen: false,
      length: 0,
      results: [],
      current: 0,
      selected: null,

      // functions
      init() {
        this.$nextTick(() => {
          this.selected = this.$refs.input.value;
        });
      },
      toggle() {
        this.isOpen ? this.close() : this.open();
      },
      open() {
        this.current = 0;
        this.$refs.search.value = "";
        this.length = this.$refs.panel.children.length;

        this.results = [];
        for (let i = 0; i < this.length; i++) {
          this.results.push(i);
        }

        this.isOpen = true;
        this.$nextTick(() => this.$refs.search.focus(), 0);
      },
      close() {
        this.isOpen = false;
      },
      select(value) {
        this.selected = value;
        this.$refs.input.value = this.selected;
        this.$refs.input.dispatchEvent(new Event("input", { bubbles: true }));
      },
      isVisible() {
        return this.results.includes(this.index);
      },
      isSelected() {
        return this.selected === this.value;
      },
      isHighlighted() {
        return this.results[this.current] === this.index;
      },

      // binds
      main: {
        ["x-ref"]: "main",
        ["x-id"]: "['ux-combobox']",
        ["@keydown.escape.prevent.stop"]() {
          this.close();
          this.$refs.button.focus();
        },
        ["@focusin.window"](event) {
          if (!this.$refs.main.contains(event.target)) {
            this.close();
          }
        },
        ["@click.outside"]() {
          this.close();
        },
      },
      input: {
        ["x-ref"]: "input",
      },
      button: {
        ["x-show"]: "!isOpen",
        ["x-ref"]: "button",
        ["@click"]() {
          this.toggle();
        },
        [":aria-expanded"]: "isOpen",
        [":aria-controls"]: "$id('ux-combobox')",
      },
      panel: {
        ["x-ref"]: "panel",
        ["x-show"]: "isOpen",
        // ["x-transition"]: "",
        [":id"]: "$id('ux-combobox')",
      },
      search: {
        ["x-ref"]: "search",
        ["x-show"]: "isOpen",
        ["x-cloak"]: "",
        ["x-on:input.change"](e) {
          const search = e.target.value.toLowerCase();
          this.current = 0;
          this.results = [];
          for (let i = 0; i < this.length; i++) {
            const item = this.$refs.panel.children[i];
            const data = item._x_dataStack[0];
            if (data.key.toLowerCase().includes(search)) {
              this.results.push(i);
            }
          }
        },
        ["@keydown.arrow-down.prevent"](e) {
          if (this.current < this.results.length - 1) {
            this.current++;
          }
        },
        ["@keydown.arrow-up.prevent"](e) {
          if (this.current > 0) {
            this.current--;
          }
        },
        ["@keydown.enter.prevent"](e) {
          if (this.results.length === 0) return;
          const item = this.$refs.panel.children[this.results[this.current]];
          const data = item._x_dataStack[0];
          this.select(data.value);
          this.close();
        },
      },
      option: {
        ["x-show"]: "isVisible()",
        ["@mouseenter"]() {
          this.current = this.index;
        },
        ["@click"]() {
          if (this.selected == this.value) {
            this.selected = null;
          } else {
            this.select(this.value);
          }

          this.close();
        },
      },
    };
  };

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("headlesscombobox", data);
  });
})();
