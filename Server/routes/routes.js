import express from 'express'
import PostMessage from '../models/post.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.post('/api/posts', auth, async (req, res) => {
    const {creator,
        name,
        title,
        message,
        tags,
        selectedFile} = req.body


        try {
            
            const post = await new PostMessage({creator : req.userId, createdAt: new Date().toISOString(),
                title,
                name,
                message,
                tags,
                selectedFile,
                creator
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

router.delete('/api/posts/delete/:id',auth, async (req, res) => {

    const { id } = req.params

await PostMessage.findByIdAndRemove(id)

res.json({message: 'post deleted'})
    
})
export default router