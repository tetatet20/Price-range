import { SliderComponent } from "../../core/SliderComponent"

export class PointMax extends SliderComponent {
  // static className = 'point_slider_max'
  
  toHTML(): string {
    return '<span class="point-slider-max">';
  }
}