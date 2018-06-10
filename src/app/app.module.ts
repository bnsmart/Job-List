import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFilterPipe } from './user-filter.pipe';
import { FaultFilterPipe } from './fault-filter.pipe';
import { OrderByUpcomingToLatestPipe } from "./orderBy";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    UserFilterPipe,
    FaultFilterPipe,
    OrderByUpcomingToLatestPipe
  ],
  imports: [
    NgbModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
