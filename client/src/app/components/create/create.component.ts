import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public formAdn: FormGroup;
  public regex: String = '/[^ATGC]/';
  // Get formAdn Controls
  get f() {
    return this.formAdn.controls;
  }
  constructor(private formBuilder: FormBuilder, private appServices: AppService, private router: Router) { }
  // Esta funcion es para guardar nuestro nuevo ADN
  saveAdn(data) {
    const save = [];
    for (let i = 0; i < 6; i++) {
      save.push(data[i].toUpperCase());
    }
    this.appServices.addAdn(save).subscribe((resp) => {
      this.router.navigate(['/']);
    }, (err) => {});
  }
  ngOnInit() {
    this.formAdn = this.formBuilder.group({
      0: ['', [Validators.required, Validators.minLength(6)]],
      1: ['', [Validators.required, Validators.minLength(6)]],
      2: ['', [Validators.required, Validators.minLength(6)]],
      3: ['', [Validators.required, Validators.minLength(6)]],
      4: ['', [Validators.required, Validators.minLength(6)]],
      5: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
