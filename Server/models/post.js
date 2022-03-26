import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    location: String,
    date: String,
    file: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage