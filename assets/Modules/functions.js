export const functions = {
  btnSwitch(target1, target2, target3, target4) {
    target1.classList.add('hiden')
    target2.classList.remove('hiden')
    target3.classList.add('hiden')
    target4.classList.remove('hiden')
  },
  simpleSwitch(target1, target2) {
    target1.classList.add('hiden')
    target2.classList.remove('hiden')
  }
}
