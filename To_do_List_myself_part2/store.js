import logger from "./logger.js"
import reducer from "./reducer.js"

import { createStore } from "./core.js"

const { attach, connect, dispatch } = createStore(logger(reducer));

window.dispatch = dispatch;

export {
    attach,
    connect,
}