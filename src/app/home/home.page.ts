import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, polyline } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  map: Map;
  startLocation;
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = new Map('mapId').setView([6.97427, 79.91637], 17);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

  }

  selectStart(item) {
      this.startLocation = item.detail.value;
      switch (item.detail.value) {
          case 'fcs': {
              // Following values should be loaded from a JSON
              marker([6.97389, 79.91580]).addTo(this.map).bindPopup('Faculty of Science').openPopup();
              break;
          }
          case 'dh': {
              marker([6.97291, 79.91533]).addTo(this.map).bindPopup('Dharmaloka Hall').openPopup();
              break;
          }
          case 'lib': {
              marker([6.97503, 79.91531]).addTo(this.map).bindPopup('Library').openPopup();
              break;
          }
      }
  }

    selectDestination(item) {
        switch (item.detail.value) {
            case 'nelrc': {
                // Following values should be loaded from a JSON
                marker([6.97285, 79.91675]).addTo(this.map).bindPopup('NELRC').openPopup();
                if (this.startLocation === 'fcs') {
                    const pointA = latLng(6.97284, 79.91546);
                    const pointB = latLng(6.97325, 79.91537);
                    const pointC = latLng(6.97344, 79.91545);
                    const pointD = latLng(6.97358, 79.91602);
                    const pointE = latLng(6.97362, 79.91606);
                    const pointF = latLng(6.97367, 79.91607);
                    const pointG = latLng(6.97409, 79.91598);
                    const pointH = latLng(6.97415, 79.91617);
                    const pointI = latLng(6.97524, 79.91606);
                    const pointJ = latLng(6.97507, 79.91540);
                    const pointList = [pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointI, pointJ];
                    const line = new polyline(pointList, {
                        color: 'blue',
                        weight: 8,
                        opacity: 0.5,
                        smoothFactor: 1
                    });
                    line.addTo(this.map);
                }
                break;
            }
            case 'mc': {
                marker([6.97645, 79.91450]).addTo(this.map).bindPopup('Medical Center').openPopup();
                break;
            }
        }
    }
}
