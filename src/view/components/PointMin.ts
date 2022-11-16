import { Dom } from "../../core/Dom";
import { SliderComponent } from "../../core/SliderComponent"

export class PointMin extends SliderComponent {
  public static className = 'point-slider-min'

  constructor(el: Dom) {
    super(el)
  }

  toHTML(): string {
    return '<p>0</p>';
    ;
  }
}