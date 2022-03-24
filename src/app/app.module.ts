import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { JobPlacesBoxComponent } from './components/job-places-box/job-places-box.component';
import { JobPlaceComponent } from './components/job-place/job-place.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { filterReducer } from './store/app.state'

@NgModule({
  declarations: [
    AppComponent,    
    SearchInputComponent,
    JobPlacesBoxComponent,
    JobPlaceComponent,
    LoadingComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot({app: filterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
