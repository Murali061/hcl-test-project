import { Component, OnInit } from '@angular/core';
import {ResultModel} from '../model/result-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private title = 'hcl-test-project';
  private processedResult: ResultModel;
  private cityForm: FormGroup;
  private loading = false;
  constructor(private appService: AppService) {

  }

  public ngOnInit(): void {
    this.cityForm = new FormGroup({
      cityName: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {
    this.resetValues();
    const cityName = this.cityForm.get('cityName').value || '';
    if (cityName) {
      this.loading = true;
      this.appService.getLatitudeAndLongitudes(cityName).subscribe((data) => {
        this.processedResult = data;
        this.loading = false;
      });
    }
  }
  private resetValues(): void {
    this.processedResult = null;
  }
}
