import {Component, OnInit} from '@angular/core';
import {ResultModel} from './model/result-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private appTitle = 'Search Latitude and Longitude';
}
