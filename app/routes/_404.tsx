import { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => c.render(<h1>Not Found...</h1>);

export default handler;
