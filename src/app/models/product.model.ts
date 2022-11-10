export class Product {
    // atributos y sus tipos
    // constructor instancair o a instanciar

    _id: string
    name: string
    image: string
    price: number
    description:string
    stock: number
    //keyWords:
    constructor( _id='', name='', image='', description='', stock= 0, price=0){

        this._id = _id
        this.name = name
        this.price = price
        this.image = image
        this.description = description
        this.stock = stock
    }
}