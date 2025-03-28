const prodSchema = require('../model/productSchema');
const stripe = require('stripe')(
  'sk_test_51Qm8uCArW8ZR7one8DVHW8GqxuBOnDEURdGVfjSEO7jE2eWS61Upvb8S56JTyNwsNxWXklH2tlVhx71Y4yIKwu1A00M9J6IeBC',
);
const { v4: uuidv4 } = require('uuid');
const orderSchema = require('../model/orderSchema')

const addItem = async (req, res) => {
  const response = await prodSchema.create(req.body);

  console.log(response);

  if (response) {
    res.send({ message: 'Product Added', success: true });
  }
};

const allProds = async (req, res) => {
  const response = await prodSchema.find();

  res.send(response);
};

const singleCategory = async (req, res) => {
  const { category } = req.params;

  console.log(category);

  const response = await prodSchema.find({ option: category });

  res.send(response);
};

const deleteProd = async (req, res) => {
  const { id } = req.params;

  const response = await prodSchema.findOneAndDelete({ _id: id });

  if (response) {
    res.send({ message: 'Item Deleted', success: true });
  } else if (!response) {
    res.send({ message: 'Item could not be deleted', success: false });
  }
};

const paymentController = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
        images: [product.img],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/payment/success',
    cancel_url: 'http://localhost:3000/payment/cancel',
  });
  console.log(session);

  res.json({ id: session.id });
};

const paymentSuccess = async (req, res) => {
  console.log(req.body?.data?.object?.customer_details);
  var obj = {
    name: req.body?.data?.object?.customer_details?.name,
    email: req.body?.data?.object?.customer_details?.email,
    id: uuidv4(),
    status : req.body?.data?.object?.status,
    payStatus: req.body?.data?.object?.payment_status,
    price: req.body?.data?.object?.amount_total/100,
  }

  //create
  const response = await orderSchema.create(obj)

  if (response) {
    res.send({ message: 'Payment recorded successfully', success: true });
  } else {
    res.send({ message: 'Failed to record payment', success: false });
  }
};

const singleOrder = async (req, res) => {
  const response = await orderSchema.find({email : req.user.email})

  res.send(response)
}

module.exports = {
  addItem,
  allProds,
  paymentSuccess,
  deleteProd,
  paymentController,
  singleCategory,
  singleOrder
};

// const prodSchema = require('../model/productSchema');

// const addItem = async (req, res) => {
//     try {
//         const response = await prodSchema.create(req.body);
//         console.log(response);

//         if (response) {
//             res.send({ message: 'Product Added', success: true });
//         }
//     } catch (error) {
//         res.status(500).send({ message: 'Internal Server Error', success: false });
//     }
// };

// const allProds = async (req, res) => {
//     try {
//         const response = await prodSchema.find();
//         res.send(response);
//     } catch (error) {
//         res.status(500).send({ message: 'Internal Server Error', success: false });
//     }
// };

// module.exports = { addItem, allProds };
