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
      switch (item.detail.value) {
          case 'fcs': {
              // Following values should be loaded from a JSON
              marker([6.97389, 79.91580]).addTo(this.map).bindPopup('Faculty of Science').openPopup();
              break;
          }
          case 'dh': {
              marker([6.97291, 79.91533]).addTo(this.map).bindPopup('Dharmaloka Hall');
              break;
          }
          case 'lib': {
              marker([6.97503, 79.91531]).addTo(this.map).bindPopup('Library');
              break;
          }
      }
  }

    selectDestination(item) {
        switch (item.detail.value) {
            case 'nelrc': {
                // Following values should be loaded from a JSON
                marker([6.97285, 79.91675]).addTo(this.map).bindPopup('NELRC');
                break;
            }
            case 'mc': {
                marker([6.97645, 79.91450]).addTo(this.map).bindPopup('Medical Center');
                break;
            }
        }
    }
}
