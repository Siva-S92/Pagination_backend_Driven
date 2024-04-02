import express from 'express'
import { getContents } from '../controllers/contents.js';

const router = express.Router();

router.route("/get-contents").post(getContents)


export const contentRouter = router;