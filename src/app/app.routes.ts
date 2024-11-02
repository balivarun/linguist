import { Routes } from '@angular/router';
import { WordsComponent } from './component/words/words.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';

export const routes: Routes = [
    // write route to words component with /words path
    { path: '', component: HomeComponent },
    { path: 'words', component: WordsComponent },
    { path: 'header', component: HeaderComponent },

];
