import express from 'express'

const router = express.Router()

import { products } from './admin.route.js'

router.get('/', (req, res) => {
    res.render('shop', {
        products,
        path: "/",
        title: "my products",
        activeShop: true,
        productCSS: true
    })
})

export default router