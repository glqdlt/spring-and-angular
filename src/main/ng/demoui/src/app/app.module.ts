import {AppComponent} from "./app.component";
import {SupportService} from "./support.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HelloComponent} from "./hello/hello.component";
import {FormsModule} from "@angular/forms";
import {Case001Component} from "./hello/case001/case001.component";
import {Case005Component} from "./hello/case005/case005.component";
import {Case003Component} from "./hello/case003/case003.component";
import {Case002Component} from "./hello/case002/case002.component";
import {Case004Component} from "./hello/case004/case004.component";


const appRoutes: Routes = [
  {path: '', component: HelloComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Case001Component,
    Case002Component,
    Case003Component,
    Case004Component,
    Case005Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SupportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
