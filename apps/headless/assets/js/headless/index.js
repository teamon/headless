import Avatar from './avatar'
import Clipboard from './clipboard'
import Popover from './popover'

export { Avatar, Clipboard, Popover }

let _alpine = null

export default {
  configure(Alpine) {
    _alpine = Alpine

    _alpine.data(Avatar.id, Avatar)
    _alpine.data(Clipboard.id, Clipboard)
    _alpine.data(Popover.id, Popover)
  },

  dom: {
    onBeforeElUpdated (from, to) {
      if (from._x_dataStack) {
        _alpine.clone(from, to)
      }
    }
  }
}
