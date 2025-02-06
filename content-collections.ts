import {
  Context,
  defineCollection,
  defineConfig,
  Document,
} from "@content-collections/core";
import {
  compileMDX as baseCompileMDX,
  Options,
} from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const compileMDX = (
  context: Pick<Context, "cache">,
  document: Document & { content: string },
  options?: Options,
) => {
  let rehypePlugins = options?.rehypePlugins || [];
  rehypePlugins = rehypePlugins.concat([rehypeSlug, rehypeAutolinkHeadings]);

  let remarkPlugins = options?.remarkPlugins || [];
  remarkPlugins = remarkPlugins.concat([remarkGfm]);

  return baseCompileMDX(context, document, {
    rehypePlugins,
    remarkPlugins,
  });
};

const blogs = defineCollection({
  name: "blog",
  directory: "src/content/blogs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    overview: z.string(),
    attachment: z.string(),
    tags: z.string().array(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      mdx,
      title: document.title,
      overview: document.overview,
      attachment: document.attachment,
      tags: document.tags,
      created: document.created,
      updated: document.updated,
      meta: document._meta,
      raw: document.content,
    };
  },
});

const caseStudies = defineCollection({
  name: "caseStudy",
  directory: "src/content/case-studies",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    overview: z.string(),
    attachment: z.string(),
    tags: z.string().array(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      mdx,
      title: document.title,
      overview: document.overview,
      attachment: document.attachment,
      tags: document.tags,
      created: document.created,
      updated: document.updated,
      meta: document._meta,
      raw: document.content,
    };
  },
});

const changelogs = defineCollection({
  name: "changelog",
  directory: "src/content/changelogs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    overview: z.string(),
    attachment: z.string(),
    tags: z.string().array(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      mdx,
      title: document.title,
      overview: document.overview,
      attachment: document.attachment,
      tags: document.tags,
      created: document.created,
      updated: document.updated,
      meta: document._meta,
      raw: document.content,
    };
  },
});

export default defineConfig({
  collections: [blogs, caseStudies, changelogs],
});
