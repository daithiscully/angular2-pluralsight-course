import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component'

@Component({
  selector: 'pm-app',
  template: `
  <div class="container"><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  directives: [ProductListComponent]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}