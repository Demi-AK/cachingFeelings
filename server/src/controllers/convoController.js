import Convo from '../models/convoModel.js';

export async function getConvo(req, res){
    try{
        const convoID = req.body.convoID;
        
        const convo = await Convo.findOne({_id: convoID});

        const unauthorized = !convo.users.includes(req.user._id);
        if(unauthorized){
            res.status(401).send({message: "Accessing Unauthorized Resources"});
        } else {
            res.status(201).send({ convo });
        }
    } catch (error) {
        if (error.kind == 'ObjectId'){
            res.status(404).send({message: "There's no Conversation ID to see here"});
        }else {
            res.status(400).send({ message: error.message });
        }
    }
}