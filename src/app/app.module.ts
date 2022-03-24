import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { JobPlacesBoxComponent } from './components/job-places-box/job-places-box.component';
import { JobPlaceComponent } from './components/job-place/job-place.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectSourceComponent } from './components/select-source/select-source.component';
import { filterReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    SearchInputComponent,
    JobPlacesBoxComponent,
    JobPlaceComponent,
    LoadingComponent,
    PaginationComponent,
    SelectSourceComponent
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
