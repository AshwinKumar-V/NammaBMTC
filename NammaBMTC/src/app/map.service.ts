import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../environments/environment";
@Injectable({
providedIn: 'root'
})
export class MapService {
map:any;
style = 'mapbox://styles/mapbox/streets-v11';
lat = 12.9715987;
lng = 77.5945627;
zoom = 12
constructor() {
  (mapboxgl as any).accessToken = environment.mapbox.accessToken;
}
buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: this.zoom,
    center: [this.lng, this.lat]
  })
 this.map.addControl(new mapboxgl.NavigationControl());
}
}
