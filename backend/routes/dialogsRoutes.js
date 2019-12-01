import express from "express";
import authMiddleware from '../middleware/authMiddleware' ;
import {Dialogs, Messages} from "../model";
import io from 'socket.io';
const router = new express.Router();

router.get('/dialogs', authMiddleware, async (req, res)=>{

// owner id
        const owner = await req.user._id;

        Dialogs.find({ owner })
            .populate([ "owner", "partner"])
            .exec((err, response)=>{
                    if(err) return res.send({err});
                res.json(response)
            })
});

router.post('/dialogs/:id', authMiddleware, async (req, res)=>{

        const postData = {
          owner:await req.user._id,
          partner:await req.params.id
        };
       // const dialog = await Dialogs.findOne(postData);

         const newDialog = new Dialogs(postData);

       const dialog = await newDialog.save();

          try {
                  const message = new Messages({
                          text: req.body.text,
                          owner: req.user._id,
                          dialog: dialog._id,
                  });
                 await message.save();
                             dialog.save() ;
                                     res.json(dialog);
                                     io.emit('SERVER:DIALOG_CREATED', {
                                             postData,
                                             dialog,
                                     })
          } catch (e){
                        res.json(e.message)
          }
}

);
export default router;