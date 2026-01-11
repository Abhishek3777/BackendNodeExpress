import Task from "../models/Task.js";   // assume already created
import express from "express";

const router = express.Router();

// post or create route
router.post("/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch (err) {

    }
});
// read all
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch (err) {
        console.log(err.message);
    }
})
// // update
router.patch("/tasks/:id", async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        res.json(updated);
    }
    catch (err) {

    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const deleted = await findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: 'Not found' });
        res.json({message: 'Deleted'});
    }
    catch (err) {

    }
})