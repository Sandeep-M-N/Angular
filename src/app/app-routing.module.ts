import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {path:"",component:MainDashboardComponent, children:[
    //2 default
  // {path:"",component:databindingComponent},

//3 redirct routing
 {path:"",redirectTo:"data-binding",pathMatch:"full"},

//1 naming routing
//  {path:"data-binidng",component:DatabindingComponent},
//  {path:"directive",component:DirectiveComponent},




// parameterize routing
 //{path:"empdetail/:id",component:DataBinidngComponent},

// child routing

    {path:"angform",component:AngFormComponent}, 
      {path:"rtf",component:RtfComponent},
      {path:"utdf",component:UtdfComponent},
    ]},
    //6 wildcard routing
    {path:"**",component:PagenotfoundComponent}
  ]
  

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
