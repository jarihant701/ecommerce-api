const router = require('express').Router();
const Product = require('../model/Product');

/* 
  @desc     Get all product details
  @route    /api/products/
  @access   public
*/
router.get('/', async (req, res) => {
  const sort = req.query.sort === 'desc' ? -1 : 1;
  const data = await Product.find()
    .limit(+req.query.limit)
    .select('-_id -__v')
    .sort({ id: sort });
  res.send(data);
});

/* 
  @desc     Get a product by id
  @route    /api/products/:id
  @access   public
*/
router.get('/:id', async (req, res) => {
  const data = await Product.findOne({ id: req.params.id }).select('-_id -__v');
  res.send(data);
});

/*
  @desc     Create a new product
  @route    /api/products/
  @access   public
*/
router.post('/', async (req, res) => {
  const productCount = await Product.countDocuments({});
  const newId = productCount + 1;
  const newProduct = new Product({
    id: newId,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    images: req.body.images,
  });
  await newProduct.save();
  res.send(newProduct);
});

/*
  @desc     Update a product
  @route    /api/products/:id
  @access   public
*/
router.put('/:id', async (req, res) => {
  const data = await Product.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
  }).select('-_id -__v');
  res.send(data);
});

/*
  @desc     Delete a product
  @route    /api/products/:id
  @access   public
*/
router.delete('/:id', async (req, res) => {
  const data = await Product.findOneAndRemove(
    { id: req.params.id },
    {
      new: true,
    }
  ).select('-_id -__v');
  res.send(data);
});

module.exports = router;
