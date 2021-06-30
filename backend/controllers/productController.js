import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch one product
// @route GET /api/product/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Create a product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'sample',
    price: 0,
    user: req.user._id,
    image: '/iamges/sample.jpg',
    brand: 'sample',
    category: 'sample',
    countInStock: 0,
    numReviews: 0,
    description: 'sample',
  })

  const createdProduct = await product.save()
  res.sendStatus(201).json(createdProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, category, countInStock, brand, description } =
    req.body
  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = name
    product.price = price
    product.image = image
    product.category = category
    product.countInStock = countInStock
    product.brand = brand
    product.description = description

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

// @desc Delete a product
// @route DELETE /api/products
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product Removed' })
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}
