import express from 'express'
import PostMessage from '../models/post.js'

const router = express.Router()

router.post('/api/posts', (req, res) => {
    const { location, date, file } = req.body

    const post = new PostMessage({location, date, file})

    post.save()

    res.json(200)
})

router.get('/api/posts', async (req, res) => {
        try {
            const postMessages = await PostMessage.find();
                    
            res.status(200).json(postMessages);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
)
export default router