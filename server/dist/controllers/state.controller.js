"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.getStates = exports.createState = void 0;
const Stats_1 = __importDefault(require("../models/Stats"));
const createState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validation and business logic
    try {
        const { name, description, status } = req.body;
        // const { username } = req.user;
        console.log(req);
        const statsObj = new Stats_1.default({
            name,
            description,
            status,
            // createdBy: username,
        });
        yield statsObj.save();
        return res.status(201).json({ message: "stats created successfully" });
    }
    catch (err) {
        const error = err;
        res.status(400).send(error.message);
    }
});
exports.createState = createState;
const getStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch states from the database
    // const { username, id } = req.user;
    try {
        // const statsData = await State.find({ createdBy: username });
        return res.status(200);
        // .json({ message: "stats fetched successfully", data: statsData });
    }
    catch (err) {
        const error = err;
        res.status(400).send(error.message);
    }
});
exports.getStates = getStates;
const updateState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Update state in the database
    const { id } = req.params;
    const { name, description, status } = req.body;
    try {
        const updatedState = yield Stats_1.default.findByIdAndUpdate(id, {
            name,
            description,
            status,
            updatedAt: new Date(),
        }, { new: true } // Return the updated document
        );
        if (!updatedState) {
            return res.status(404).send("State not found");
        }
        return res.status(200).json(updatedState);
    }
    catch (err) {
        const error = err;
        return res.status(400).send(error.message);
    }
});
exports.updateState = updateState;
const deleteState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Delete state from the database
    const { id } = req.params;
    try {
        yield Stats_1.default.findByIdAndDelete(id);
        return res.status(200).send("Stats deleted successfully");
    }
    catch (err) {
        const error = err;
        return res.status(400).send(error.message);
    }
});
exports.deleteState = deleteState;
