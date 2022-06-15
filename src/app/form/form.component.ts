import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new FormGroup({});
  formArray = new FormArray([]);

  ngOnInit(): void {
    this.form.addControl('inputArray', this.formArray);
    (window as any).test = (index: string, value: string) => this.form.get(index)?.setValue(value);
  }

  addInput() {
    let inputArray = this.form.get('inputArray')
    if(inputArray instanceof FormArray) {
      inputArray.push(new FormControl());
    }
    console.log(inputArray);
  }

  delete(index: number) {
    let inputArray = this.form.get('inputArray')
    if(inputArray instanceof FormArray) {
      inputArray.removeAt(index);
    }
  }

  get formArrayWithGet() {
    console.log('called')
    return (this.form.controls['inputArray'] as FormArray).controls;
  }
}
