import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'perfil', loadChildren: './cliente/perfil/perfil.module#PerfilPageModule' },
  //{ path: 'perfil', loadChildren: './servico/perfil/perfil.module#PerfilPageModule' },
  { path: 'desc', loadChildren: './servico/desc/desc.module#DescPageModule' },

  //{ path: 'login', loadChildren: './cliente/login/login.module#LoginPageModule' },

  //{ path: 'list-cliente', loadChildren: './cliente/list-cliente/list-cliente.module#ListClientePageModule' },
 // { path: 'list-servico', loadChildren: './servico/list-servico/list-servico.module#ListServicoPageModule' },
  //{ path: 'add-servico', loadChildren: './add-servico/add-servico.module#AddServicoPageModule' },

  // { path: 'add-cliente', loadChildren: './cliente/add-cliente/add-cliente.module#AddClientePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
