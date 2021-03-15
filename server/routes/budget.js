const express = require('express')
const router = express.Router()

const BudgetController = require('../controllers/BudgetController')

router.post('/addBudget', BudgetController.addBudget)
router.get('/getBudget', BudgetController.getBudget)
router.delete('/deleteBudget/:id&:file', BudgetController.deleteBudget)
// router.delete('/deleteBudget/:id', BudgetController.deleteBudget)
router.get('/searchBudget/:id', BudgetController.searchBudget)

module.exports = router