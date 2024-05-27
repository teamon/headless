// js/headless/avatar.js
var component = () => {
  return {
    // state
    src: null,
    // functions
    init() {
      this.$nextTick(() => {
        const src = this.$refs.image.dataset.src;
        if (!src)
          return;
        const media = new Image();
        media.onload = (e) => {
          this.src = src;
        };
        media.onerror = () => {
          this.src = null;
        };
        media.src = src;
      });
    },
    // binds
    image: {
      ["x-ref"]: "image",
      ["x-show"]() {
        return !!this.src;
      },
      ["x-bind:src"]: "src"
    },
    fallback: {
      ["x-ref"]: "fallback",
      ["x-show"]() {
        return !this.src;
      }
    }
  };
};
component.id = "hs_avatar";
var avatar_default = component;

// js/headless/clipboard.js
var component2 = () => {
  return {
    // functions
    copy() {
      const el = this.$refs.content;
      const text = el.value === void 0 ? el.innerText : el.value;
      return window.navigator.clipboard.writeText(text);
    },
    // binds
    trigger: {
      ["@click"]() {
        this.copy();
      }
    },
    content: {
      ["x-ref"]: "content"
    }
  };
};
component2.id = "hs_clipboard";
var clipboard_default = component2;

// js/headless/popover.js
var component3 = () => {
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
      }
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
      }
    },
    content: {
      ["x-ref"]: "content",
      [":id"]() {
        return this.$id("hsp-content");
      },
      ["x-show"]() {
        return this.isOpen;
      }
    }
  };
};
component3.id = "hs_popover";
var popover_default = component3;

// js/headless/preview.js
var component4 = () => {
  return {
    // data
    src: null,
    // functions
    load() {
      let file = this.$refs.input.files[0];
      if (!file || file.type.indexOf("image/") === -1)
        return;
      this.src = null;
      let reader = new FileReader();
      reader.onload = (e) => {
        this.src = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    // binds
    input: {
      ["x-ref"]: "input",
      ["@change"](e) {
        this.load();
      }
    },
    preview: {
      ["x-ref"]: "preview",
      ["x-show"]: "src",
      ["x-bind:src"]: "src"
    },
    original: {
      ["x-show"]() {
        return !this.src;
      }
    }
  };
};
component4.id = "hs_preview";
var preview_default = component4;

// js/headless/index.js
var _alpine = null;
var headless_default = {
  configure(Alpine) {
    _alpine = Alpine;
    _alpine.data(avatar_default.id, avatar_default);
    _alpine.data(clipboard_default.id, clipboard_default);
    _alpine.data(popover_default.id, popover_default);
    _alpine.data(preview_default.id, preview_default);
  },
  dom: {
    onBeforeElUpdated(from, to) {
      if (from._x_dataStack) {
        _alpine.clone(from, to);
      }
    }
  }
};
export {
  avatar_default as Avatar,
  clipboard_default as Clipboard,
  popover_default as Popover,
  preview_default as Preview,
  headless_default as default
};
//# sourceMappingURL=headless.esm.js.map
