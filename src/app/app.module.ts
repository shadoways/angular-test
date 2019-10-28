import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstabelecimentoService } from './services/estabelecimento.service';
import { HttpClientModule } from '@angular/common/http';
import { EditEstabelecimentoComponent } from './edit-estabelecimento/edit-estabelecimento.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EditEstabelecimentoComponent,
    HomeComponent,
    CadastroComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EstabelecimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
