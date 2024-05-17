import Alpine from '../../vendor/alpine.js'

import Avatar from './avatar'
import Clipboard from './clipboard'
import Popover from './popover'

export { Alpine, Avatar, Clipboard, Popover }

export default {
  start () {
    window.Alpine = Alpine
    this.register()
    Alpine.start()
  },
  register () {
    Avatar.register()
    Clipboard.register()
    Popover.register()
  }
}
