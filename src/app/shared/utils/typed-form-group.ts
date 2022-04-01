// @ts-nocheck
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

export interface TypedAbstractControl<T = any> extends AbstractControl {
  value: T;
  // tslint:disable:ban-types
  setValue: (value: T, options?: Object) => void;
  patchValue: (value: Partial<T>, options?: Object) => void;
  // tslint:enable:ban-types
}

export interface TypedFormControl<T = any> extends FormControl, TypedAbstractControl<T> {}

export class TypedFormGroup<T> extends FormGroup {
  controls: {
    [key in keyof T]: T[key] extends Array<infer Item>
      ? FormArray | TypedFormControl<Item>
      : T[key] extends object
      ? TypedFormGroup<T[key]>
      : TypedAbstractControl<T[key]>;
  };

  value: T;
  patchValue: (value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }) => void;

  get: (
    path: Array<Extract<keyof T, string> | number | string> | Extract<keyof T, string> | string
  ) => AbstractControl | null;

  constructor(
    controls: TypedFormGroup<T>['controls'],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }
}
