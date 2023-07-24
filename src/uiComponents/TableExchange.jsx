import React from "react";

const TableExchange = ({children}) => {
	return (<table className=" w-full text-gray-400">{children}</table>);
};

const TableExchangeHead = ({headArray}) => {
	return (
		<thead className="text-xs bg-gray-700 text-gray-400 uppercase">
			<tr>
				{headArray.map((head, idx) => (
					<th key={idx} scope="col" className="py-3 px-6">
						{head}
					</th>
				))}
			</tr>
		</thead>
	);
};

const TableExchangeBody = ({children}) => {
	return (<tbody className="text-center">{children}</tbody>);
};

export {TableExchange, TableExchangeHead, TableExchangeBody};
