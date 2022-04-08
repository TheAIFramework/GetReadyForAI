import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn, } from '@angular/forms';

export interface TypedAbstractControl<T = any> extends AbstractControl {
  value: T;
  setValue: (value: T, options?: object) => void;
  patchValue: (value: Partial<T>, options?: object) => void;
}

export type TypedFormControl<T = any> = FormControl & TypedAbstractControl<T>;

export class TypedFormArray<T = any> extends FormArray implements TypedAbstractControl<T[]> {
  override controls!: TypedFormGroup<T[]>['controls'];

  override value!: T[];
  override setValue!: (value: T[], options?: object) => void;
  override patchValue!: (value: Partial<T[]>, options?: object) => void;

  constructor(controls: TypedFormArray<T>['controls'],
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);

  }
}

export class TypedFormGroup<T> extends FormGroup implements TypedAbstractControl<T> {
  override controls!: {
    [key in keyof T]: T[key] extends Array<infer Item>
      ? TypedFormArray<Item> | TypedFormControl<Item>
      : T[key] extends object
        ? TypedFormGroup<T[key]>
        : TypedAbstractControl<T[key]>;
  };

  override value!: T;
  override patchValue!: (value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }) => void;

  override get!: (
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
