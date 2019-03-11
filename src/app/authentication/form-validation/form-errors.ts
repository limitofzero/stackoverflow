import { InjectionToken } from '@angular/core';

export const errors = {
  required: (error) => 'This field is required',
  minLength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS');
