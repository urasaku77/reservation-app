const Product = require('./model/product')

class SampleDb {
    constructor() {
        this.products = [
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens',
            heading1: 'test1',
            heading2: 'test2',
            heading3: 'test3',
            headingtext1: 'aaaaaaa',
            headingtext2: 'bbbbbbb',
            headingtext3: 'ccccccc'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'test1',
            heading2: 'test2',
            heading3: 'test3',
            headingtext1: 'aaaaaaa',
            headingtext2: 'bbbbbbb',
            headingtext3: 'ccccccc'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Standard',
            price: 299,
            description: 'aaaaaaa',
            heading1: 'test1',
            heading2: 'test2',
            heading3: 'test3',
            headingtext1: 'aaaaaaa',
            headingtext2: 'bbbbbbb',
            headingtext3: 'ccccccc'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Special',
            price: 299,
            description: 'aaaaaaa',
            heading1: 'test1',
            heading2: 'test2',
            heading3: 'test3',
            headingtext1: 'aaaaaaa',
            headingtext2: 'bbbbbbb',
            headingtext3: 'ccccccc'
          }
        ]
    }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
}

module.exports = SampleDb