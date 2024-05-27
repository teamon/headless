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

// js/headless/index.js
var _alpine = null;
var headless_default = {
  configure(Alpine) {
    _alpine = Alpine;
    _alpine.data(avatar_default.id, avatar_default);
    _alpine.data(clipboard_default.id, clipboard_default);
    _alpine.data(popover_default.id, popover_default);
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
  headless_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYXNzZXRzL2pzL2hlYWRsZXNzL2F2YXRhci5qcyIsICIuLi8uLi9hc3NldHMvanMvaGVhZGxlc3MvY2xpcGJvYXJkLmpzIiwgIi4uLy4uL2Fzc2V0cy9qcy9oZWFkbGVzcy9wb3BvdmVyLmpzIiwgIi4uLy4uL2Fzc2V0cy9qcy9oZWFkbGVzcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgY29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIHN0YXRlXG4gICAgc3JjOiBudWxsLFxuXG4gICAgLy8gZnVuY3Rpb25zXG4gICAgaW5pdCAoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuJHJlZnMuaW1hZ2UuZGF0YXNldC5zcmNcbiAgICAgICAgaWYgKCFzcmMpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG1lZGlhID0gbmV3IEltYWdlKClcbiAgICAgICAgbWVkaWEub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNyYyA9IHNyY1xuICAgICAgICB9XG4gICAgICAgIG1lZGlhLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcmMgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgbWVkaWEuc3JjID0gc3JjXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyBiaW5kc1xuICAgIGltYWdlOiB7XG4gICAgICBbJ3gtcmVmJ106ICdpbWFnZScsXG4gICAgICBbJ3gtc2hvdyddICgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBbJ3gtYmluZDpzcmMnXTogJ3NyYydcbiAgICB9LFxuICAgIGZhbGxiYWNrOiB7XG4gICAgICBbJ3gtcmVmJ106ICdmYWxsYmFjaycsXG4gICAgICBbJ3gtc2hvdyddICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnNyY1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb21wb25lbnQuaWQgPSBcImhzX2F2YXRhclwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRcbiIsICJjb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gZnVuY3Rpb25zXG4gICAgY29weSAoKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgY29uc3QgdGV4dCA9IGVsLnZhbHVlID09PSB1bmRlZmluZWQgPyBlbC5pbm5lclRleHQgOiBlbC52YWx1ZVxuICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgIH0sXG5cbiAgICAvLyBiaW5kc1xuICAgIHRyaWdnZXI6IHtcbiAgICAgIFsnQGNsaWNrJ10gKCkge1xuICAgICAgICB0aGlzLmNvcHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgWyd4LXJlZiddOiAnY29udGVudCdcbiAgICB9XG4gIH1cbn1cblxuY29tcG9uZW50LmlkID0gXCJoc19jbGlwYm9hcmRcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50XG4iLCAiY29uc3QgY29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIHN0YXRlXG4gICAgaXNPcGVuOiBmYWxzZSxcblxuICAgIC8vIGZ1bmN0aW9uc1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpXG4gICAgfSxcbiAgICBvcGVuICgpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyBiaW5kc1xuICAgIHJvb3Q6IHtcbiAgICAgIFsneC1yZWYnXTogJ3Jvb3QnLFxuICAgICAgWyd4LWlkJ10gKCkge1xuICAgICAgICByZXR1cm4gWydoc3AtY29udGVudCddXG4gICAgICB9LFxuICAgICAgWydAa2V5ZG93bi5lc2NhcGUucHJldmVudC5zdG9wJ10gKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgdGhpcy4kcmVmcy50cmlnZ2VyLmZvY3VzKClcbiAgICAgIH0sXG4gICAgICBbJ0Bmb2N1c2luLndpbmRvdyddIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuJHJlZnMucm9vdC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbJ0BjbGljay5vdXRzaWRlJ10gKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyaWdnZXI6IHtcbiAgICAgIFsneC1yZWYnXTogJ3RyaWdnZXInLFxuICAgICAgWydAY2xpY2snXSAoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgIH0sXG4gICAgICBbJzphcmlhLWV4cGFuZGVkJ10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5cbiAgICAgIH0sXG4gICAgICBbJzphcmlhLWNvbnRyb2xzJ10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaWQoJ2hzcC1jb250ZW50JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIFsneC1yZWYnXTogJ2NvbnRlbnQnLFxuICAgICAgWyc6aWQnXSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpZCgnaHNwLWNvbnRlbnQnKVxuICAgICAgfSxcbiAgICAgIFsneC1zaG93J10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29tcG9uZW50LmlkID0gXCJoc19wb3BvdmVyXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudFxuIiwgImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInXG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gJy4vY2xpcGJvYXJkJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyJ1xuXG5leHBvcnQgeyBBdmF0YXIsIENsaXBib2FyZCwgUG9wb3ZlciB9XG5cbmxldCBfYWxwaW5lID0gbnVsbFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZ3VyZShBbHBpbmUpIHtcbiAgICBfYWxwaW5lID0gQWxwaW5lXG5cbiAgICBfYWxwaW5lLmRhdGEoQXZhdGFyLmlkLCBBdmF0YXIpXG4gICAgX2FscGluZS5kYXRhKENsaXBib2FyZC5pZCwgQ2xpcGJvYXJkKVxuICAgIF9hbHBpbmUuZGF0YShQb3BvdmVyLmlkLCBQb3BvdmVyKVxuICB9LFxuXG4gIGRvbToge1xuICAgIG9uQmVmb3JlRWxVcGRhdGVkIChmcm9tLCB0bykge1xuICAgICAgaWYgKGZyb20uX3hfZGF0YVN0YWNrKSB7XG4gICAgICAgIF9hbHBpbmUuY2xvbmUoZnJvbSwgdG8pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsSUFBTSxZQUFZLE1BQU07QUFDdEIsU0FBTztBQUFBO0FBQUEsSUFFTCxLQUFLO0FBQUE7QUFBQSxJQUdMLE9BQVE7QUFDTixXQUFLLFVBQVUsTUFBTTtBQUNuQixjQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sUUFBUTtBQUNyQyxZQUFJLENBQUM7QUFBSztBQUVWLGNBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsY0FBTSxTQUFTLENBQUMsTUFBTTtBQUNwQixlQUFLLE1BQU07QUFBQSxRQUNiO0FBQ0EsY0FBTSxVQUFVLE1BQU07QUFDcEIsZUFBSyxNQUFNO0FBQUEsUUFDYjtBQUNBLGNBQU0sTUFBTTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLElBR0EsT0FBTztBQUFBLE1BQ0wsQ0FBQyxPQUFPLEdBQUc7QUFBQSxNQUNYLENBQUMsUUFBUSxJQUFLO0FBQ1osZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxDQUFDLFlB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
