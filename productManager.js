class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        // Validación de campos obligatorios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            throw new Error('Todos los campos son obligatorios');
        }

        // Validar que no se repita el código
        if (this.products.find(product => product.code === code)) {
            throw new Error('El código del producto ya existe');
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error('Not found');
            return null;
        }
        return product;
    }
}

// Uso de la clase
const productManager = new ProductManager();

try {
    productManager.addProduct({
        title: "Laptop",
        description: "Una laptop de alta gama",
        price: 1500,
        thumbnail: "ruta/a/imagen.jpg",
        code: "LAP123",
        stock: 10
    });

    console.log(productManager.getProducts());

    const product = productManager.getProductById(1);
    console.log(product);
} catch (error) {
    console.error(error.message);
}
