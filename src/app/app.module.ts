import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BusinessService } from './shared/service/business.service';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { SharedModule } from './shared/shared.module';
import { AccountsPayableComponent } from './pages/accounts-payable/accounts-payable.component';
import { AccountsReceivableComponent } from './pages/accounts-receivable/accounts-receivable.component';
import { PeopleComponent } from './pages/people/people.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AccountsPayableFormComponent } from "./pages/accounts-payable/accounts-payable-form/accounts-payable-form.component";
import { AccountsPayableTableComponent } from './pages/accounts-payable/accounts-payable-table/accounts-payable-table.component';
import { AccountsPayablePaginatorComponent } from './pages/accounts-payable/accounts-payable-paginator/accounts-payable-paginator.component';
import { AccountsPayableOrdinationComponent } from './pages/accounts-payable/accounts-payable-ordination/accounts-payable-ordination.component';


registerLocaleData(localePt);


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AccountsPayableComponent,
        AccountsReceivableComponent,
        PeopleComponent,
        ReportsComponent,
        AccountsPayableFormComponent,
        AccountsPayableTableComponent,
        AccountsPayablePaginatorComponent,
        AccountsPayableOrdinationComponent
    ],
    providers: [
        BusinessService,
        provideCharts(withDefaultRegisterables()),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        BaseChartDirective,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule
    ]
})
export class AppModule {
}
