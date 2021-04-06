import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Course de Chevaux';
	numberOfUsers = 146;
	public name: string = 'Olivier';
	isAuth = false;
	constructor() {
		setTimeout(
			() => {
				this.isAuth = true;
			}, 2000
		);
	}
	onAllumer() {
		console.log('On allume tout !');
	}
}
