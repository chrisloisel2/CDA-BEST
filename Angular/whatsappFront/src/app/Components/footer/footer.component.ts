import { Component, OnInit } from '@angular/core';
import { GarenFetcherService } from '../../Services/garen-fetcher.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
	constructor(public garen : GarenFetcherService) {}

	ngOnInit(): void {
		this.garen.getUsers().subscribe((users) => {
			console.log(users);
		});
	}

}
