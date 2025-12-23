import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavsDirective } from './Custom/favs.directive';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { MypipePipe } from './Custom/mypipe.pipe';
import { MenuComponent } from './menu/menu.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './Customer/customer-add/customer-add.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { ProductTemplateDrivenComponent } from './product/product-template-driven/product-template-driven.component';
import { ProductModelDrivenComponent } from './product/product-model-driven/product-model-driven.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveSampleComponent,
    FavsDirective,
    PipeSampleComponent,
    MypipePipe,
    MenuComponent,
    PersonalComponent,
    EducationComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ProductTemplateDrivenComponent,
    ProductModelDrivenComponent,
    ObservableSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   // RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
