import { CartService } from './../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    //https://github.com/daneden/animate.css
    const handleAnimationEnd = () => {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    };

    node.addEventListener('animationend', handleAnimationEnd);
  }
}
