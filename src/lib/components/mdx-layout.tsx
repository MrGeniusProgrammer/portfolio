import type { MDXComponents } from "mdx/types";
import { Content } from "../entities/content";
import { MDXContent } from "@content-collections/mdx/react";

function useMDXComponents(): MDXComponents {
  return {};
}

export function MDXLayout(props: Content) {
  const mdxComponents = useMDXComponents();

  return (
    <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white ">
      <MDXContent code={props.mdx} components={mdxComponents} />
    </article>
  );
}
