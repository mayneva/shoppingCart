import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'flowers',
    loadChildren: () => import('./pages/flowers/flowers.module').then( m => m.FlowersPageModule)
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('./pages/policy/policy.module').then((m) => m.PolicyPageModule),
  },
  {
    path: 'your-profile',
    loadChildren: () => import('./pages/your-profile/your-profile.module').then( m => m.YourProfilePageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'funeral',
    loadChildren: () => import('./pages/funeral/funeral.module').then( m => m.FuneralPageModule)
  },
  {
    path: 'candles',
    loadChildren: () => import('./pages/candles/candles.module').then( m => m.CandlesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
