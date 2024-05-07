"use strict";

(() => {
  const data = () => {
    return {
      // state
      status: "loading",
      // functions
      init() {
        this.$nextTick(() => {
          const image = this.$refs.image;
          if (!image) return;
          image.onload = () => {
            this.status = "loaded";
          };
          image.onerror = () => {
            this.status = "error";
          };
        });
      },
      // binds
      image: {
        ["x-ref"]: "image",
        ["x-show"]() {
          return this.status === "loaded";
        },
      },
      fallback: {
        ["x-ref"]: "fallback",
        ["x-show"]() {
          return this.status != "loaded";
        },
      },
    };
  };

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("hsAvatar", data);
  });
})();
