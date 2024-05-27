const component = () => {
  return {
    // data
    src: null,

    // functions
    load () {
      let file = this.$refs.input.files[0]
      if (!file || file.type.indexOf('image/') === -1) return
      this.src = null
      let reader = new FileReader()
      reader.onload = e => {
        this.src = e.target.result
      }
      reader.readAsDataURL(file)
    },

    // binds
    input: {
      ['x-ref']: 'input',
      ['@change'] (e) {
        this.load()
      }
    },
    preview: {
      ['x-ref']: 'preview',
      ['x-show']: 'src',
      ['x-bind:src']: 'src'
    },
    original: {
      ['x-show'](){
        return !this.src
      }
    }
  }
}

component.id = 'hs_preview'
export default component
