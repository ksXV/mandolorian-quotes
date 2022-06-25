import fs from "fs";
import { resolve } from "path";
import { Request, Response } from "express";

export const sendQuote = (_req: Request, res: Response) => {
  try {
    const rawData = fs.readFileSync(
      resolve(__dirname, "../../quotes.json"),
      "utf8"
    );
    const data = JSON.parse(rawData);
    const randNumb = Math.floor(Math.random() * (data.length - 1));
    return res.status(200).json(data[randNumb]);
  } catch (err) {
    return res.status(404).json("Something went wrong :(");
  }
};
