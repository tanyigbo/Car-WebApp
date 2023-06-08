import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
    ],
    exports: [
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
    ]
})

export class MaterialUiModule { }