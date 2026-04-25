import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: 0
  },
  category: {
    type: String,
    default: 'General'
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
