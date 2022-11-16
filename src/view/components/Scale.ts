import { Dom } from "../../core/Dom";
import { SliderComponent } from "../../core/SliderComponent"

export class Scale extends SliderComponent {
  public static className = 'scale-slider'

  constructor(el: Dom) {
    super(el)   
    this.$root.el.offsetWidth
  }

  toHTML(): string {
    return ``;
  }
}