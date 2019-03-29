import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';



import {
  MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule
} from '@angular/material';

import {
  CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule, CovalentFileModule
} from '@covalent/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { PatternsComponent } from './patterns/patterns.component';
import { CardsComponent } from './patterns/cards/cards.component';
import { AlertsComponent } from './patterns/alerts/alerts.component';
import { ManagementListComponent } from './patterns/management-list/management-list.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { FileUploadButtonComponent } from './components/file-upload-button/file-upload-button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { JsonComponent } from './components/json/json.component';
import { PagingComponent } from './components/paging/paging.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SearchComponent } from './components/search/search.component';
import { MediaQueriesComponent } from './components/media-queries/media-queries.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { SyntaxHighlightingComponent } from './components/syntax-highlighting/syntax-highlighting.component';
import { MarkdownParserComponent } from './components/markdown-parser/markdown-parser.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { HttpComponent } from './components/http/http.component';
import { NavigationDrawerComponent } from './patterns/navigation-drawer/navigation-drawer.component';
import { SidesheetComponent } from './patterns/sidesheet/sidesheet.component';
import { EmptyStateComponent } from './patterns/empty-state/empty-state.component';
import { OverviewComponent } from './overview/overview.component';
import { StepperFormComponent } from './patterns/stepper-form/stepper-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpModule,
    HttpClientModule,
    JsonpModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    CovalentFileModule,
    routing,
  ],
  declarations: [AppComponent, ComponentsComponent, StepperComponent, PatternsComponent, CardsComponent, AlertsComponent, ManagementListComponent, ExpansionPanelComponent, FileInputComponent, FileUploadButtonComponent, ChipsComponent, LoadingComponent, DialogsComponent, DataTableComponent, VirtualScrollComponent, JsonComponent, PagingComponent, NotificationsComponent, MessagesComponent, SearchComponent, MediaQueriesComponent, DirectivesComponent, PipesComponent, AnimationsComponent, SyntaxHighlightingComponent, MarkdownParserComponent, DynamicFormsComponent, CodeEditorComponent, MarkdownEditorComponent, HttpComponent, NavigationDrawerComponent, SidesheetComponent, EmptyStateComponent, OverviewComponent, StepperFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
