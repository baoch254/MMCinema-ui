import { hc } from "hono/client"

import { AppType } from '@mmcinema-ui/api'

export const client = hc<AppType>('http://localhost:3000')
