const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
  {
    products: [
      {
        product: {
          type: Schema.ObjectId,
          ref: 'Product',
        },
        count: Number,
        price: Number,
      },
    ],
    cartTotal: Number,
    orderBy: {
      type: Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, id: true }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;
