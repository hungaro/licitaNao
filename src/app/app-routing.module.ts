import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AlertaComponent } from './page/alerta/alerta.component';
import { ProatividadeComponent } from './page/proatividade/proatividade.component';
import { SobreComponent } from './page/sobre/sobre.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerta', component: AlertaComponent },
  { path: 'proatividade', component: ProatividadeComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
