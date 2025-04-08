import aiService from "../services/ai.service.js";

const getReview = async (req, res)=>{
    const code  = req.body.code;
    if(!code){
        return res.status(400).send("Prompt is required")
    }

    try{
        const response = await aiService(code)
        res.send(response)
    }catch(err){
        console.error("AI service error: ", err);
        res.status(500).send("Internal server error");
    }
}

export default getReview;