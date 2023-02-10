import express from 'express'
import * as requests from '../requests/main'

const router = express.Router();

router.post('/input', requests.calculationStart)
router.get('/output', requests.getResult)
router.get('/inprogress', requests.checkProgress)

export default router
