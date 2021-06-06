const express = require('express');
const router = express.Router();

const EcommerceController = require('../controllers/EcommerceController');

router.post('/addEcommerce', EcommerceController.addEcommerce);
router.get('/getEcommerce', EcommerceController.getEcommerce);
router.delete(
	'/deleteEcommerce/:id&:file',
	EcommerceController.deleteEcommerce,
);
router.get('/searchEcommerce/:id', EcommerceController.searchEcommerce);
router.get('/typeEcommerce/:type', EcommerceController.typeEcommerce);
router.post('/purchaseEcommerce/', EcommerceController.purchaseEcommerce);
// router.get('/searchEcommerce/:id&:type', EcommerceController.searchEcommerce)
router.patch('/updateStock/:id', EcommerceController.updateStock);
router.get('/getSrcPurchase', EcommerceController.getSrcPurchase);
router.delete(
	'/deleteSrcPurchase/:id&:user',
	EcommerceController.deleteSrcPurchase,
);
router.get('/getStudentPurchase/:user', EcommerceController.getStudentPurchase);
router.delete(
	'/deleteStudentPurchase/:id',
	EcommerceController.deleteStudentPurchase,
);
router.get('/report/:user&:startDate&:endDate', EcommerceController.report);

module.exports = router;
