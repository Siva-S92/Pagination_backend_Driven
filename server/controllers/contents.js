import { Content } from "../models/contentModel.js";


export const getContents = async(req, res) => {
    try {
        const page = parseInt(req.body.page) || 1;
        const limit = 10;
        let query = {};

        if (req.body.search){
            const search = req.body.search;
            query = {
                $or:[
                    { name: { $regex: search, $options: 'i'} },
                    { email: { $regex: search, $options: 'i'} }
                ]
                
            }
        }
        const totalContents = await Content.countDocuments(query);
        const totalPages = Math.ceil(totalContents / limit);
        const nextPage = page < totalPages ? page + 1 : null;

        const contents = await Content.find(query).skip((page - 1) * limit).limit(limit)
        return res.status(200).json({
            success: true,
            msg: "Contents",
            data: contents,
            page,
            nextPage,
            totalContents,
            totalPages,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            page,

        })
    }
}