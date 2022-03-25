import express from 'express'

const router = express.Router()

router.post('/api/posts', (req, res) => {
    console.log('post')
})

export default router