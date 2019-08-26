import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Personnage } from '../models/personnage';

@Component({
  selector: 'app-form-new-char',
  templateUrl: './form-new-char.component.html',
  styleUrls: ['./form-new-char.component.css']
})
export class FormNewCharComponent implements OnInit {

  model: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
