const component = () => {
  return {
    // functions
    copy () {
      const el = this.$refs.content
      const text = el.value === undefined ? el.innerText : el.value
      return window.navigator.clipboard.writeText(text)
    },

    // binds
    root: {
      ['x-ref']: 'root'
    },
    trigger: {
      ['x-ref']: 'trigger',
      ['@click'] () {
        this.copy()
      }
    },
    content: {
      ['x-ref']: 'content'
    }
  }
}

component.register = () => {
  window.Alpine.data('hsClipboard', component)
}

export default component
