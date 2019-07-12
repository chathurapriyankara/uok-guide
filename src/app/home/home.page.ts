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
    this.map = new Map('mapId').setView([6.97427, 79.91637], 17);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

  }

  selectStart(item) {
    console.log(item.detail.value);
  }
}
