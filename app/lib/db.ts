import { prisma } from './prisma';

export type Article = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export const createArticle = async ({ title, content }: Pick<Article, 'title' | 'content'>): Promise<Article> => {
  const article = await prisma.article.create({
    data: {
      title,
      content,
    },
  });

  return {
    ...article,
    created_at: article.created_at.toISOString(),
    updated_at: article.updated_at.toISOString(),
  };
};

export const getArticles = async (): Promise<Article[]> => {
  const articles = await prisma.article.findMany({
    orderBy: {
      created_at: 'desc',
    },
  });

  return articles.map((article) => ({
    ...article,
    created_at: article.created_at.toISOString(),
    updated_at: article.updated_at.toISOString(),
  }));
};

export const getArticleById = async (id: string): Promise<Article | undefined> => {
  const article = await prisma.article.findUnique({
    where: {
      id,
    },
  });

  if (!article) {
    return undefined;
  }

  return {
    ...article,
    created_at: article.created_at.toISOString(),
    updated_at: article.updated_at.toISOString(),
  };
};

export const deleteArticle = async (
  id: string
): Promise<{ id: string; title: string; content: string; created_at: Date; updated_at: Date }> =>
  prisma.article.delete({
    where: {
      id,
    },
  });
