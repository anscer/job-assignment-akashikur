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
exports.register = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const secretKey = "your_secret_key";
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const newUser = yield Users_1.default.create({
            username: username,
            password: hashedPassword,
        });
        return res
            .status(201)
            .json({ message: "User registered successfully", data: newUser });
    }
    catch (err) {
        const error = err;
        res.status(400).send(error.message);
    }
});
exports.register = register;
// export const login = async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).send({ message: "User does't exists" });
//     }
//     const ispasswordSame = await bcrypt.compare(password, user.password);
//     if (!ispasswordSame) {
//       return res.status(400).send({ message: "password does't match" });
//     }
//     const token = jwt.sign(
//       { id: user._id, username: user.username },
//       "your_secret_key",
//       { expiresIn: "1h" }
//     );
//     return res.status(200).json({ token: token, message: "User logged In" });
//   } catch (err) {
//     const error = err as Error;
//     res.status(400).send(error.message);
//   }
// };
// export const login = async (req: Request, res: Response) => {
//   res.json({ message: "Logged in successfully" });
// };
