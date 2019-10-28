import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { EditEstabelecimentoComponent } from './edit-estabelecimento/edit-estabelecimento.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteComponent } from './delete/delete.component';

const appRoutes: Routes = [
    { path: 'home', 
      component: HomeComponent 
    },
    { path: 'cadastro',
      component: CadastroComponent
    },
    {
      path: 'edit/:id',
      component: EditEstabelecimentoComponent
    },
    {
      path: 'delete/:id',
      component: DeleteComponent
    }
  ];
  export default appRoutes;