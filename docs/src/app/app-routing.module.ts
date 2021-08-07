import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { SingleanimalComponent } from './singleanimal/singleanimal.component';

const routes: Routes = [
 {
    component:SingleanimalComponent,
    path:'single'
},
{
    component:GroupComponent,
    path:'group'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
