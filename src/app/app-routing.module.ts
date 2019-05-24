import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'list-cliente', loadChildren: './cliente/list-cliente/list-cliente.module#ListClientePageModule' },
  { path: 'servico', loadChildren: './servico/servico.module#ServicoPageModule' },

  // { path: 'add-cliente', loadChildren: './cliente/add-cliente/add-cliente.module#AddClientePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
