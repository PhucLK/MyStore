# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Routing in Application

http://localhost:4200/ : View all products

http://localhost:4200/products/:id : View a detail product

http://localhost:4200/cart : view product in cart

http://localhost:4200/confirmation : Display order information of user

## Components

### ProductListComponent
### ProductItemComponent
### ProductItemDetailComponent
### CartComponent
### ComfirmationComponent
### HeaderComponent
### ServiceComponent

## Models

Product = {
    id: number,
    name: string,
    price: number,
    url: string,
    description: string,
    quantity?: number
}

User = {
    fullName: string,
    address: string,
    creditCard: string,
    total?: number,
}

