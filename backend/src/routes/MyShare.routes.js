import express from "express"
import { MyShareModel } from "../models/myShareModel.js";
const router = express.Router();
 
router.get('/', async (req, res) => {
    const my_share = await MyShareModel.find();
    res.json(my_share);
});

router.post('/', async (req, res) => {
    const { name, quantity, initialValue, close, total, variation } = req.body;
    const my_share = new MyShareModel({name, quantity, initialValue, close, total, variation});
    await my_share.save();
    res.json({status: 'My Share Saved'});
});

router.put('/:id', async (req, res) => {
    const { name, quantity, initialValue, close, total, variation } = req.body;
    const newShare = {name, quantity, initialValue, close, total, variation};
    await MyShareModel.findByIdAndUpdate(req.params.id, newShare);
    res.json({status: 'Share State Updated'});
});

router.delete('/:id', async (req, res) => {
    await MyShareModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Share Deleted'});
});
 
export const share_router = router