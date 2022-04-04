import express from 'express'
import PostMessage from '../models/post.js'

const router = express.Router()

router.post('/api/posts', async (req, res) => {
    const {creator,
        title,
        message,
        tags,
        selectedFile} = req.body


        try {
            
            const post = await new PostMessage({creator,
                title,
                message,
                tags,
                selectedFile
            })

            post.save()

            res.status(200)
        } catch (error) {
            console.log(error)
        }
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