
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RootEffects } from './effects';
import { rootReducer } from './reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({rootReducer}),
    EffectsModule.forRoot([RootEffects]),
    StoreDevtoolsModule.instrument()
  ]
})
export class RootStoreModule {}