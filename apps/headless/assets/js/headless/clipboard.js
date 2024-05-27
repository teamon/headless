const component = () => {
  return {
    // functions
    copy () {
      const el = this.$refs.content
      const text = el.value === undefined ? el.innerText : el.value
      return window.navigator.clipboard.writeText(text)
    },

    // binds
    trigger: {
      ['@click'] () {
        this.copy()
      }
    },
    content: {
      ['x-ref']: 'content'
    }
  }
}

component.id = "hs_clipboard"
export default component
