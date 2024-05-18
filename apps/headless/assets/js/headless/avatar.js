const component = () => {
  return {
    // state
    src: null,

    // functions
    init () {
      this.$nextTick(() => {
        const src = this.$refs.image.dataset.src
        if (!src) return

        const media = new Image()
        media.onload = (e) => {
          this.src = src
        }
        media.onerror = () => {
          this.src = null
        }
        media.src = src
      })
    },

    // binds
    image: {
      ['x-ref']: 'image',
      ['x-show'] () {
        return !!this.src
      },
      ['x-bind:src']: 'src'
    },
    fallback: {
      ['x-ref']: 'fallback',
      ['x-show'] () {
        return !this.src
      }
    }
  }
}

component.register = () => {
  window.Alpine.data('hsAvatar', component)
}

export default component
