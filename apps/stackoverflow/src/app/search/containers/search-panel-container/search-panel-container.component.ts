import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'so-search-panel',
  templateUrl: './search-panel-container.component.html',
  styleUrls: ['./search-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelContainerComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = fb.group({
      search: ('')
    });
  }

  onSubmitHandler(): void {
    const search = this.formGroup.get('search').value;
    const queryParams = { query: search };
    this.router.navigate(['results'], { queryParams });
  }
}
