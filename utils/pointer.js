/**
 * Pointer helper
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
import { Vector2 } from 'three'

const elements = []
const elementsMap = new WeakMap()

const mPosition = new Vector2()

let listeners = false

export default function (params) {
  const obj = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    onEnter () {},
    onMove () {},
    onLeave () {},
    ...params
  }

  addElement(params.domElement, obj)

  obj.dispose = () => {
    removeElement(params.domElement)
  }

  return obj
}

function addElement (el, params) {
  if (!elementsMap.has(el)) {
    elements.push(el)
    elementsMap.set(el, params)
    if (!listeners) { addListeners() }
  }
}

function removeElement (el) {
  const i = elements.indexOf(el)
  if (i !== -1) {
    elements.splice(i, 1)
    elementsMap.delete(el)
  }
  if (elements.length === 0) {
    removeListeners()
  }
}

function pointerMove (e) {
  mPosition.x = e.clientX
  mPosition.y = e.clientY
  elements.forEach((el) => {
    const obj = elementsMap.get(el)
    const rect = el.getBoundingClientRect()
    if (isHover(rect)) {
      if (!obj.hover) {
        obj.hover = true
        obj.onEnter(obj)
      }
      const { position, nPosition } = obj
      position.x = mPosition.x - rect.left
      position.y = mPosition.y - rect.top
      nPosition.x = (position.x / rect.width) * 2 - 1
      nPosition.y = -(position.y / rect.height) * 2 + 1
      obj.onMove(obj)
    } else if (obj.hover) {
      obj.hover = false
      obj.onLeave(obj)
    }
  })
}

function pointerLeave () {
  elements.forEach((el) => {
    const obj = elementsMap.get(el)
    if (obj.hover) {
      obj.hover = false
      obj.onLeave(obj)
    }
  })
}

function isHover (rect) {
  const { x, y } = mPosition
  const { left, top, width, height } = rect
  return x >= left && x <= left + width && y >= top && y <= top + height
}

function addListeners () {
  document.body.addEventListener('pointermove', pointerMove)
  document.body.addEventListener('pointerleave', pointerLeave)
  listeners = true
}

function removeListeners () {
  document.body.removeEventListener('pointermove', pointerMove)
  document.body.removeEventListener('pointerleave', pointerLeave)
  listeners = false
}
