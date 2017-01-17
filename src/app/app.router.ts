import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app-component/app.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

export const router: Routes = [
    { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'instructions', component: InstructionsComponent },
    { path: 'recordcard', component: RecordCardComponent },
    { path: 'introduction', component: IntroductionComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);