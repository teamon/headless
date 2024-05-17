import Alpine from '../../vendor/alpine.js'

import Avatar from './avatar'
import Clipboard from './clipboard'
import Popover from './popover'

export { Alpine, Avatar, Clipboard, Popover }

export default {
  start () {
    this.register(Alpine)
    Alpine.start()
  },
  register (alpine) {
    Avatar.register(alpine)
    Clipboard.register(alpine)
    Popover.register(alpine)
  }
}
