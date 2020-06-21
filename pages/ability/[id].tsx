import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function User() {
	const router = useRouter();
	const { data, error } = useSwr(`/json/ability_list.json`, fetcher);
	console.log(data);
	if (error) return <div>Failed to load user</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<pre>
			<div>{JSON.stringify(data, null, 2)}</div>
		</pre>
	);
}
