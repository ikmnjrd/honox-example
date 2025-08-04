import dayjs from 'dayjs/esm';
import relativeTime from 'dayjs/esm/plugin/relativeTime';
import { css } from 'hono/css';
import { createRoute } from '../../../factory';
import { getArticleById, deleteArticle } from '../../../lib/db';

dayjs.extend(relativeTime);

export const POST =  createRoute(async (c) => {
  const { id } = c.req.param<'/:id/delete'>();
  console.log("delete action", id)
  const article = await getArticleById(id);

  if (!article) {
    return c.notFound();
  }

  await deleteArticle(id);

  return c.redirect('/', 303)
});