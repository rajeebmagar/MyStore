import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // first get the product id from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromParams = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIDFromParams
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart!');
  }
}
