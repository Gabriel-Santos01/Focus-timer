import { Selectors } from './assets/Modules/selectors.js'
import { switchBtn } from './assets/Modules/functions.js'

Selectors.play.addEventListener('click', () => {
  switchBtn.btnSwitch(Selectors.play, Selectors.pause)
})
