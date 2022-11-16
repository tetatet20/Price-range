import { SliderComponent } from "../../core/SliderComponent"

export class PointMin extends SliderComponent {
  // static className = 'point_slider_min'
  
  toHTML(): string {
    return '<span class="point-slider-min">';
  }
}