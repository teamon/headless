import Avatar from './avatar'
import Clipboard from './clipboard'
import Popover from './popover'
import Preview from './preview'

export { Avatar, Clipboard, Popover, Preview }

let _alpine = null

export default {
  configure (Alpine) {
    _alpine = Alpine

    _alpine.data(Avatar.id, Avatar)
    _alpine.data(Clipboard.id, Clipboard)
    _alpine.data(Popover.id, Popover)
    _alpine.data(Preview.id, Preview)
  },

  dom: {
    onBeforeElUpdated (from, to) {
      if (from._x_dataStack) {
        _alpine.clone(from, to)
      }
    }
  }
}
