import * as T from "io-ts";
import { failure } from "io-ts/PathReporter";
import { pipe } from "fp-ts/function";
import { either } from "fp-ts";

const decodeWith =
	<ApplicationType = any, EncodeTo = ApplicationType, DecodeFrom = unknown>(
		codec: T.Type<ApplicationType, EncodeTo, DecodeFrom>
	) =>
	(input: DecodeFrom): ApplicationType =>
		pipe(
			codec.decode(input),
			either.getOrElseW((errors) => {
				console.info("Failed while validating");
				console.info(JSON.stringify(input, null, 4));
				throw new Error(failure(errors).join("\n"));
			})
		);

export default decodeWith;
