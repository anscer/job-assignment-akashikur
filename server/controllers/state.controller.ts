import { Request, Response } from "express";
import State from "../models/Stats";
import { User } from "../models/Users";

export const createState = async (req: Request, res: Response) => {
  try {
    const { name, description, status } = req.body;

    const user = req.user as User;
    const { username } = user;

    const statsObj = new State({
      name,
      description,
      status,
      createdBy: username,
    });
    await statsObj.save();
    return res.status(201).json({ message: "stats created successfully" });
  } catch (err) {
    const error = err as Error;
    res.status(400).send(error.message);
  }
};

export const getStates = async (req: Request, res: Response) => {
  // Fetch states from the database
  const user = req.user as User;
  const { username, id } = user;
  try {
    const statsData = await State.find({ createdBy: username });
    return res
      .status(200)
      .json({ message: "stats fetched successfully", data: statsData });
  } catch (err) {
    const error = err as Error;
    res.status(400).send(error.message);
  }
};
export const updateState = async (req: Request, res: Response) => {
  // Update state in the database
  const { id } = req.params;
  const { name, description, status } = req.body;

  try {
    const updatedState = await State.findByIdAndUpdate(
      id,
      {
        name,
        description,
        status,
        updatedAt: new Date(),
      },
      { new: true } // Return the updated document
    );

    if (!updatedState) {
      return res.status(404).send("State not found");
    }

    return res.status(200).json(updatedState);
  } catch (err) {
    const error = err as Error;
    return res.status(400).send(error.message);
  }
};
export const deleteState = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await State.findByIdAndDelete(id);
    return res.status(200).send("Stats deleted successfully");
  } catch (err) {
    const error = err as Error;
    return res.status(400).send(error.message);
  }
};
