import { Routes } from '@angular/router';
import { WordsComponent } from './component/words/words.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    // write route to words component with /words path
    { path: '', component: HomeComponent },
    { path: 'words', component: WordsComponent },
];
