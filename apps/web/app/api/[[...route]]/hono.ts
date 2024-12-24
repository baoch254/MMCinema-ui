import { hc } from "hono/client"

import { AppType } from "./route"

export const client = hc<AppType>('http://localhost:3000')
