import express from 'express';
import authMiddleware from '../middleware/authMiddleware' ;
import { UserData, Posts } from "../model";
const router = new express.Router();

router.post('/post', authMiddleware, async (req, res)=>{
    const owner =await req.user._id;
    const post =  await req.user.populate('userDT').execPopulate();
    if(post._id !== owner) throw new Error('Something goes wrong');
    try{

        const newPosts = new Posts({
            postText: req.body.post,
            likes: 0,
            isLiked: false,
            owner
        });
        const  UsersData = await UserData.findOne({ owner } ) || await new UserData({owner}) ;
        UsersData.posts.push(  newPosts  );

       await UsersData.save();
       await newPosts.save();

        res.json( UsersData )
    } catch (e) {
        res.json(e.message)
    }

});

router.get('/post', authMiddleware, async (req, res)=>{

    const owner = await req.user._id;
    const Post =  await UserData.findOne({owner});
    const { posts } = Post;

    res.json( posts)
});

router.delete('/post', authMiddleware, async (req, res)=>{

    const _id = await req.body.postId;
    const owner = await req.user._id;

   const rem = await Posts.findByIdAndDelete( {_id}  );
    
console.log(rem)
res.json(rem)

});

export default router;