import { Component } from '@angular/core';
import { CachingService } from './caching.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private cachingService: CachingService) {
    this.cachingService.initStorage();
  }
}

