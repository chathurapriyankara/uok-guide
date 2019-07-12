import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = new Map('mapId').setView([28.644800, 77.216721], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([28.6, 77]).addTo(this.map)
        .bindPopup('Ionic 4 <br> Leaflet.')
        .openPopup();
  }
}
