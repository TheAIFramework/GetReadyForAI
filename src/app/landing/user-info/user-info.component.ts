import { Component, OnInit } from '@angular/core';
import { TypedFormGroup } from "@shared/utils/typed-form-group";
import { FormControl, Validators } from "@angular/forms";
import { User } from "@shared/models/user";

interface IForm extends User {
  acceptTerms: boolean;
}

interface IOption {
  value: string | number;
  label: string;
}

interface IInput {
  label: string;
  formControlName: Extract<keyof User, string>;
  colClass?: string;
  inputClass?: string;
  type?: InputTypesEnum;
  options?: IOption[];
  showIf?: {
    control: IInput['formControlName'];
    value: IOption['value'];
  }
}

enum InputTypesEnum {
  Select,
  Text,
  TextArea
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  form: TypedFormGroup<IForm>;
  inputs: IInput[] = [
    { label: 'First name', formControlName: 'firstName', colClass: 'col-md-6' },
    { label: 'Last name', formControlName: 'lastName', colClass: 'col-md-6', inputClass: 'border-start-0' },
    { label: 'Work email', formControlName: 'email' },
    {
      label: 'Title', formControlName: 'title', type: InputTypesEnum.Select, options: [
        'Data Scientist',
        'Software Developer',
        'Engineer',
        'Student or Faculty',
        'Cxo or Manager',
        'Other',
      ].map(x => ({
        label: x,
        value: x
      }))
    },
    { label: 'Your title', formControlName: 'otherTitle', showIf: { control: 'title', value: 'Other' } },
    { label: 'Company name', formControlName: 'companyName' },
    {
      label: 'Industry', formControlName: 'industry', type: InputTypesEnum.Select, options: [
        'Entertainment',
        'Technology',
        'Health',
        'Finance',
        'Manufacturing',
        'Public',
        'Retail',
        'Transport',
        'Other',
      ].map(x => ({
        label: x,
        value: x
      }))
    },
    { label: 'Your industry', formControlName: 'otherIndustry', showIf: { control: 'industry', value: 'Other' } },
    {
      label: 'Company size', formControlName: 'companySize', type: InputTypesEnum.Select, options: [
        '1-49',
        '50-249',
        '250-499',
        '500-999',
        '1000-4999',
        '5000-9999',
        '10000+',
      ].map(x => ({
        label: x,
        value: x
      }))
    },
  ];
  inputTypes = InputTypesEnum;

  constructor() {
    this.form = new TypedFormGroup<IForm>({
      firstName: new FormControl(undefined, [Validators.required]),
      lastName: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required]),
      title: new FormControl(undefined, [Validators.required]),
      otherTitle: new FormControl(),
      companyName: new FormControl(undefined, [Validators.required]),
      industry: new FormControl(undefined, [Validators.required]),
      otherIndustry: new FormControl(),
      companySize: new FormControl(undefined, [Validators.required]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue])
    });
    this.inputs.filter(x => x.showIf).forEach(input => {
      this.form.get(input.showIf!.control)?.valueChanges.subscribe(value => {
        const control = this.form.get(input.formControlName);
        if (value === input.showIf!.value) {
          control?.addValidators(Validators.required);
        } else {
          control?.removeValidators(Validators.required);
        }
        control?.setValue(undefined);
        control?.updateValueAndValidity();
      })
    })
  }

  ngOnInit(): void {
  }

  showInput(input: IInput): boolean {
    if (!input.showIf) {
      return true;
    }
    const { control: formControlName, value } = input.showIf;
    const control = this.form.controls[formControlName];
    return control?.value === value;
  }

  getInputClass(input: IInput): string {
    const classes: string[] = [];
    if (input.inputClass) {
      classes.push(input.inputClass);
    }
    const control = this.form.controls[input.formControlName];
    if (control?.touched && control?.errors) {
      classes.push('is-invalid');
    }
    return classes.join(' ');
  }
}
