import {app} from '@mmcinema-ui/api'
import { handle } from 'hono/vercel'



export const GET = handle(app)
export const POST = handle(app)


