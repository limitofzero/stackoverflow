import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultContainerComponent } from './containers/result-container/result-container.component';
import { RouterModule } from '@angular/router';
import { QuickPanelComponent } from './components/quick-access-panel/quick-panel.component';
import { QuickPanelContainerComponent } from './containers/quick-panel-container/quick-panel-container.component';
import { QuickPanelService } from './services/quick-panel.service';
import { TableModule } from './table/table.module';
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    ResultContainerComponent,
    QuickPanelComponent,
    QuickPanelContainerComponent,
    TableContainerComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    TableModule
  ],
  providers: [
    QuickPanelService
  ],
  exports: [
    ResultContainerComponent
  ]
})
export class ResultsModule { }
