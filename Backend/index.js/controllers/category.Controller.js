const categorySchema = require('../model/categorySchema')

const addCategory = async (req, res) => {
    const response = await categorySchema.create(req.body)

    if (response) {
        res.send({ message: 'Category Added', success: true });
      }
}

const allCategories = async (req, res) => {
    const response = await categorySchema.aggregate([
        {
            $lookup: {
                from: "prods",
                localField: "name",
                foreignField: "option",
                as: "products"
            }
        },
    ])

    res.send(response)
}

const delCategory = async (req, res) => {
    const {id} = req.params

    const response = await categorySchema.findOneAndDelete({_id : id})

    if (response) {
        res.send({ message: 'Category Deleted', success: true });
      } else if (!response) {
        res.send({ message: 'Category could not be deleted', success: false });
    }
}

module.exports = {addCategory, allCategories, delCategory}