export class Dom {
  el: HTMLElement | null

  constructor(selector: string) {
    this.el = document.querySelector(selector)
  }

  createElement(tag: string, classes?: string): HTMLElement {
    const createdEl = document.createElement(tag)

    if (classes) {
      createdEl.classList.add(classes)
    }
    
    return createdEl
  }

  append(node: HTMLElement | null) {
    if (node instanceof Dom) {
      node = node.el
    }
    
    if (node) {
      this.el?.append(node)
    }

    return this
  }
}

// export function $() {
//   return new Dom()
// }

// $.create = (tagName:string, classes = '') => {
//   const el = document.createElement(tagName)
//   if(classes){
//     el.classList.add(classes)
//   }
//   return el
// }