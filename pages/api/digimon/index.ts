import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Stat } from "./interface";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			const { data: digimonList } = await axios.get<Stat[]>(
				`${process.env.HOST_URL}/json/digimon_list.json`
			);

			if (digimonList) {
				res.status(200).json(digimonList);
				break;
			}

			res.status(404).end(`Cannot find any data`);
			break;

		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
