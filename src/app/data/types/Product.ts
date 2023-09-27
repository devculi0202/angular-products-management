export class Product {
    productId: number;
    productType: ProductType;
    productName: string;
    productDescription: string;
    productPrice: number;



    static fromHttp(product: any) : Product {
        const newProduct = new Product();
        newProduct.productId = product.id;
        newProduct.productDescription = product.productDescription;
        newProduct.productName = product.productName;
        newProduct.productPrice = product.productPrice;
        newProduct.productType = product.productType;
        return newProduct;
    }
}

export enum ProductType {
    CONVENIENCE = 'convenience',
    SHOPPING = 'shopping',
    UNSOUGHT = 'ansought'
}
