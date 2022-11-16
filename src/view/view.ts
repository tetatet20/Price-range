// //файл Excel.js
import { Dom } from "../core/Dom"
import { IOptions } from "../interface/ISlider"
import "../scss/index.scss"
import { PointMax } from "./components/PointMax"
import { PointMin } from "./components/PointMin"
import { Scale } from "./components/Scale"

export class View {
  el: Dom
  components:any[]
  constructor(selector: string){
    this.el = new Dom(selector)
    this.components = [Scale,PointMin,PointMax]
    console.log(this.components)
    this.getRoot()
  }

  getRoot() {
    const root = this.el.createElement('div', 'slider')
    root.classList.add()
    this.el.append(root)
    
    this.components.forEach(Component => {
    const el = document.createElement('div')
    // el.classList.add(Component.className)
    const component = new Component (el)
    el.innerHTML = component.toHTML()
    root.append(el)
  })
  }
//   render() {
//     this.el.append(this.getRoot())
//   }
}

