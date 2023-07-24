import React, {useState, lazy, Suspense} from "react";
import {Spinner} from "../../components/index";
const ExchangeGetCash = lazy(() => import("./Exchange_getCash"));
const ExchangeGetCrypto = lazy(() => import("./Exchange_getCrypto"));

const style = {
	withdrawOptions: `px-4 w-full border text-gray-300 text-xl
        hover:border-gray-400 transition-colors duration-300`,
};

// withdraw types
const withdrawTypes = ["getCash", "getCrypto"];

const Exchange = ({walletAddress, chainId, setNewTransaction}) => {
	const [withdrawType, setWithdrawType] = useState(withdrawTypes[0]);

	return (
		<section className="flex flex-col items-center">
			<div
				className={`px-4 py-3 w-[400px] md:w-[600px] rounded-3xl parentBgColor`}
			>
				<div className="font-bold text-lg text-gray-200">
					<span>Exchange</span>
				</div>
				<section className="relative mt-4">
					<div className="flex flex-col">
						<h3 className="text-gray-600">I want to:</h3>
						<div className="mt-1 flex flex-row w-full h-[50px] justify-center rounded-xl optionSectionColor">
							<button
								type="button"
								id="0"
								className={`rounded-tl-xl rounded-bl-xl ${style.withdrawOptions}
                                        ${
																					withdrawType === withdrawTypes[0]
																						? "border-gray-400"
																						: "border-transparent"
																				}`}
								onClick={() => setWithdrawType(withdrawTypes[0])}
							>
								Get Cash
							</button>
							<button
								type="button"
								id="1"
								className={`rounded-tr-xl rounded-br-xl ${style.withdrawOptions}
                                        ${
																					withdrawType === withdrawTypes[1]
																						? "border-gray-400"
																						: "border-transparent"
																				}`}
								onClick={() => setWithdrawType(withdrawTypes[1])}
							>
								Get Crypto
							</button>
						</div>
					</div>
					<Suspense fallback={<Spinner size="xl" />}>
						{withdrawType === withdrawTypes[0] && (
							<ExchangeGetCash
								chainId={chainId}
								walletAddress={walletAddress}
								setNewTransaction={setNewTransaction}
							/>
						)}
						{withdrawType === withdrawTypes[1] && (
							<ExchangeGetCrypto
								chainId={chainId}
								walletAddress={walletAddress}
								setNewTransaction={setNewTransaction}
							/>
						)}
					</Suspense>
				</section>
			</div>
		</section>
	);
};

export default Exchange;
