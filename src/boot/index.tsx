import config from "./configureStore"
import app from "./setup"

export default function() {
	const store = config()
	return app(store)
}
