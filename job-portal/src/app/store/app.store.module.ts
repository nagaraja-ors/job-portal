import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { AppStore } from './models/app.model';
import { appReducer } from './reducers/app.reducer';

export const rootReducer = {
    jobsList: appReducer
};


const productionReducer: ActionReducer<any> = combineReducers(rootReducer);

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(rootReducer)
    ]
})
export class AppStoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppStoreModule,
            providers: []
        };
    }
}
