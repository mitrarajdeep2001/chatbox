import { Router } from "express";
import authRouter from "./auth";
import chatRouter from "./chat";
import messageRouter from "./message";
import contactRouter from "./contact";
import userRouter from "./user";

const router = Router();

router.use("/auth", authRouter);
router.use("/chat", chatRouter);
router.use("/message", messageRouter);
router.use("/contact", contactRouter);
router.use("/user", userRouter);

export default router;