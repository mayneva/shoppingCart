import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(public platform: Platform) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
		this.platform.ready().then(() => this.loadMap());
	}

  loadMap() {
		/* The create() function will take the ID of your map element */
		const map = GoogleMaps.create('map');

		map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(41, -87);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(8);
		});
	}

  ngOnInit() {
  }

}
