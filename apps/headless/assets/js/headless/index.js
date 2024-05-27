import Alpine from '../../vendor/alpine.js'

import Avatar from './avatar'
import Clipboard from './clipboard'
import Popover from './popover'

export { Alpine, Avatar, Clipboard, Popover }

export default {
  start () {
    window.Alpine = Alpine

    Alpine.data(Avatar.id, Avatar)
    Alpine.data(Clipboard.id, Clipboard)
    Alpine.data(Popover.id, Popover)

    Alpine.start()
  },

  dom: {
    onBeforeElUpdated (from, to) {
      if (from._x_dataStack) {
        Alpine.clone(from, to)
      }
    }
  }
}
