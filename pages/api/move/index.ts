import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Move } from "./interface";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			const { data: moveList } = await axios.get<Move>(
				`${process.env.HOST_URL}/json/move_list.json`
			);

			if (moveList) {
				res.status(200).json(moveList);
				break;
			}

			res.status(404).end(`Cannot find any data`);
			break;

		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
