import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
                    },
                    {
                        path: 'get-appointment/:id',
                        loadChildren: () => import('./get-appointment/get-appointment.module').then(m => m.GetAppointmentPageModule)
                    },
                ]

            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'appointment',
                loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentPageModule)
            },

            {
                path: 'maps',
                loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule)
            },
        ]
    },
    {
        path: 'logout',
        loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
    },





];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
