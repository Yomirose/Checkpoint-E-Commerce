const Cart = require("../models/Cart"); 
const router = require("express").Router();


//CREATE

router.post("/",  async (req, res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})


 // UPDATE CART
router.put("/:id",  async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE CART
router.delete("/delete/:id",  async (req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
});

// GET USER PRODECT
router.get("/find/:userId",  async (req, res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json({cart});
    }catch(err){
        res.status(500).json(err)
    }
});

// GET ALL PRODUCT
router.get("/", async (req, res)=>{
    try {
        const cart = await Cart.find();
        res.status(200).json({cart});
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router;