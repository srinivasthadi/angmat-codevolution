import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule,
         MatBadgeModule, MatProgressSpinnerModule,
         MatToolbarModule, MatSidenavModule } from '@angular/material';

const MaterialComponents = [ MatButtonModule, MatButtonToggleModule, 
                              MatIconModule, MatBadgeModule,
                              MatProgressSpinnerModule, MatToolbarModule,
                              MatSidenavModule  ];

@NgModule({
 imports: [MaterialComponents],
 exports: [MaterialComponents]
})
export class MaterialModule { }
