var express = require('express');
var router = express.Router();
const multer  = require('multer')
const USER = require('../model/feedback')
const SIGNUP = require('../model/sign_up')
const RESET = require('../model/reset')
const LOGIN = require('../model/login')
const adminlogin = require('../model/adminlogin')
const mongoose = require('mongoose');
const watch = require('../model/watch')
const perfumes = require('../model/Perfumes')
const accessories = require('../model/accessories')
const bag = require('../model/bag')
const sunglasses = require('../model/sunglasses')
const shoes = require('../model/shoes')
const cart = require('../model/cart')
const bag_cart = require('../model/bag_cart')
const acc_cart = require('../model/Accessories_cart')
const sung_cart = require('../model/Sunglasses_cart')
const per_cart = require('../model/perfumes_cart')
const shoes_cart = require('../model/Shoes_cart')
// const per_cart = require('../model/perfumes_cart')

/* GET home page. */




router.get('/',async function(req, res, next) {
  res.render('home', {  });
});

router.get('/adminlogin',async function(req, res, next) {  
res.render('admin_login', {  });
});

router.post('/adminlogins',async function(req, res, next) {

  if(!req.body.password || !req.body.username){
    return res.send('Please enter valid fields');
  }

  const checkuser = await adminlogin.findOne({username: req.body.username})
  if(!checkuser ){
    return res.send('Please enter valid username');
  }

  const checkPass = req.body.password == checkuser.password
  if(!checkPass){
    return res.send('Please enter valid password');
  }
  

  res.redirect('/desboard')
});



router.get('/desboard',async function(req, res, next) {
  res.render('desboard', {  });
});

router.get('/signup',async function(req, res, next) {
res.render('sign_up', { });
});

router.get('/login',async function(req, res, next) {
  res.render('log_in', {});
});

router.get('/reset',async function(req, res, next) {
  res.render('reset_pass', {});
});

router.post('/reset_page',async function(req, res, next) {
  await RESET.create(req.body)
  res.redirect('/reset')
});


router.post('/feedback',async function(req, res, next) {
  console.log(req.body);
  await USER.create(req.body)
  res.redirect('/')
});

router.post('/signup_page',async function(req, res, next) {
  console.log(req.body);
  await SIGNUP.create(req.body)
  res.redirect('/signup')
});

router.post('/login_page',async function(req, res, next) {
  await LOGIN.create(req.body)
  res.redirect('/login')
});

router.get('/watch',async function(req, res, next) {
  let wat = await watch.find()
  res.render('watch', { a:wat });
});

router.get('/bag',async function(req, res, next) {
  let baag = await bag.find()
  res.render('bags', { f:baag });
});

router.get('/sunglasses',async function(req, res, next) {
  let sun = await sunglasses.find()
  res.render('sunglasses', {b:sun});
});

router.get('/shoes',async function(req, res, next) {
  let sho = await shoes.find()
  res.render('shoes', { c:sho });
});

router.get('/accessories',async function(req, res, next) {
  let acce = await accessories.find()
  res.render('accessories', { d:acce });
});

router.get('/perfumes',async function(req, res, next) {
  let per = await perfumes.find()
  res.render('perfumes', { e:per });
});


router.get('/admin',async function(req, res, next) {
  let feedback = await USER.find()
  let signup = await SIGNUP.find()
  let login = await LOGIN.find()
  let reset = await RESET.find()
  let perf = await perfumes.find()
  let acces = await accessories.find()
  let shoe = await shoes.find()
  let sung = await sunglasses.find()
  let watc = await watch.find()
  let baagg = await bag.find()
  if(req.query.did){
    await USER.findByIdAndDelete(req.query.did)
    res.redirect('admin')
  }
  if(req.query.sdid){
    await SIGNUP.findByIdAndDelete(req.query.sdid)
    res.redirect('admin')
  }
  if(req.query.ldid){
    await LOGIN.findByIdAndDelete(req.query.ldid)
    res.redirect('admin')
  }
  if(req.query.wdid){
    await watch.findByIdAndDelete(req.query.wdid)
    res.redirect('admin')
  }
  if(req.query.ssdid){
    await sunglasses.findByIdAndDelete(req.query.ssdid)
    res.redirect('admin')
  }
  if(req.query.msdid){
    await shoes.findByIdAndDelete(req.query.msdid)
    res.redirect('admin')
  }
  if(req.query.adid){
    await accessories.findByIdAndDelete(req.query.adid)
    res.redirect('admin')
  }
  if(req.query.kdid){
    await perfumes.findByIdAndDelete(req.query.kdid)
    res.redirect('admin')
  }
  if(req.query.pdid){
    await bag.findByIdAndDelete(req.query.pdid)
    res.redirect('admin')
  }
  res.render('admin',{ g:feedback , h:signup   , s:login , o:watc , n:sung , m:shoe , l:acces , k:perf , p:baagg });
  // res.render('admin', {   , j:reset   });
});

router.get('/seller',async function(req, res, next) {
  res.render('seller', {});
});

router.get('/bagdetails',async function(req, res, next) {
  if(req.query.abid){
    datas = await bag.findById(req.query.abid)
  }
  res.render('bag_details', { datas:datas });
});

router.get('/accessoriesdetails',async function(req, res, next) {
  if(req.query.aaid){
    datas = await accessories.findById(req.query.aaid)
  }
  res.render('acce_details', { datas:datas });
});

router.get('/sundetails',async function(req, res, next) {
  if(req.query.asid){
    datas = await sunglasses.findById(req.query.asid)
    
  }
  res.render('sun_details', { datas:datas });
});

router.get('/perfumedetails',async function(req, res, next) {
  if(req.query.apid){
    datas = await perfumes.findById(req.query.apid)
  }
  res.render('per_details', { datas:datas });
});

router.get('/shoesdetails',async function(req, res, next) {
  if(req.query.asssid){
    datas = await shoes.findById(req.query.asssid)
  }
  res.render('shoes_details', { datas:datas });
});



router.get('/cart',async function(req, res, next) {
  // delete
  if(req.query.delteid){
    await cart.findByIdAndDelete(req.query.delteid)
    return res.redirect('cart')
  }
  if(req.query.sundelteid){
    await sung_cart.findByIdAndDelete(req.query.sundelteid)
    return res.redirect('cart')
  }
  
  if(req.query.shoesdelteid){
    await shoes_cart.findByIdAndDelete(req.query.shoesdelteid)
    return res.redirect('cart')
  }
  if(req.query.accedelteid){
    await acc_cart.findByIdAndDelete(req.query.accedelteid)
    return res.redirect('cart')
  }
  if(req.query.perfdelteid){
    await per_cart.findByIdAndDelete(req.query.perfdelteid)
    return res.redirect('cart')
  }
  if(req.query.bagdelteid){
    await bag_cart.findByIdAndDelete(req.query.bagdelteid)
    return res.redirect('cart')
  }
  // cart
  if(req.query.shoeid){
     await shoes_cart.create({product_Shoes: req.query.shoeid})
  }
  let shoes = await shoes_cart.find().populate('product_Shoes')

  if(req.query.accid){
     await acc_cart.create({product_Accessories: req.query.accid})
  }
  let acce= await acc_cart.find().populate('product_Accessories')

  if(req.query.sunid){
     await sung_cart.create({product_sunglasses: req.query.sunid})
  }
  let sun= await sung_cart.find().populate('product_sunglasses')
  


  if(req.query.cartid){
    await cart.create({product: req.query.cartid})
  }
  let watchh = await cart.find().populate('product')
  

  if(req.query.perid){
    await per_cart.create({product_Perfumes: req.query.perid})
  }
  let perf = await per_cart.find().populate('product_Perfumes')

  if(req.query.bagid){
    await bag_cart.create({product_bag: req.query.bagid})
  }
  
  let bag = await bag_cart.find().populate('product_bag')
  res.render('cart', {  bag:bag,watchh:watchh ,perf:perf ,shoes:shoes ,acce:acce,sun:sun});
});

router.get('/aboutitem',async function(req, res, next) {
  let datas = []
  if(req.query.awid){
    datas = await watch.findById(req.query.awid)
  }

  // if(req.query.asid){
  //   datas = await sunglasses.findById(req.query.asid)
  // }

  // if(req.query.assid){
  //   datas = await shoes.findById(req.query.assid)
  // }

  // if(req.query.aaid){
  //   datas = await accessories.findById(req.query.aaid)
  // }

  // if(req.query.apid){
  //   datas = await perfumes.findById(req.query.apid)
  // }

  // if(req.query.abid){
  //   datas = await bag.findById(req.query.abid)
  // }

  

  res.render('about_of_item', { awatch:datas });
});



router.get('/details',async function(req, res, next) {
  // console.log(req.query.sid);
  let data = []
  if(req.query.sid){
    data = await SIGNUP.findById(req.query.sid)
  }
  if(req.query.id){
    data = await USER.findById(req.query.id)
  }
  res.render('details', {q:data });
});

router.get('/adminabout',async function(req, res, next) {
  let admin_about = []
  if(req.query.detailw_id){
    admin_about = await watch.findById(req.query.detailw_id)
  }
  if(req.query.detailb_id){
    admin_about = await bag.findById(req.query.detailb_id)
  }
  if(req.query.detailp_id){
    admin_about = await perfumes.findById(req.query.detailp_id)
  }
  if(req.query.detaila_id){
    admin_about = await accessories.findById(req.query.detaila_id)
  }
  if(req.query.detailss_id){
    admin_about = await shoes.findById(req.query.detailss_id)
  }
  if(req.query.details_id){
    admin_about = await sunglasses.findById(req.query.details_id)
  }
  
  

  res.render('admin_about', { about : admin_about });
});

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './public/images')
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })


router.post('/sell_watch',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await watch.create(req.body)  
  res.redirect('/seller')
});

router.post('/sell_sunglasses',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await sunglasses.create(req.body)  
  res.redirect('/seller')
});

router.post('/sell_Shoes',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await shoes.create(req.body)  
  res.redirect('/seller')
});

router.post('/sell_Accessories',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await accessories.create(req.body)  
  res.redirect('/seller')
});

router.post('/sell_Perfumes',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await perfumes.create(req.body)  
  res.redirect('/seller')
});

router.post('/sell_Bags',  upload.single('product_images'),async function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  req.body.product_images = req.file.filename
  await bag.create(req.body)  
  res.redirect('/seller')
});



module.exports = router;
