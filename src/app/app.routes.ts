import { Routes } from '@angular/router';
import { WordsComponent } from './component/words/words.component';

export const routes: Routes = [
    // write route to words component with /words path
    { path: 'words', component: WordsComponent },
];
