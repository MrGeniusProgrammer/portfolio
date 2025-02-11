import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	// Optionally, add any other Next.js config below
};

export default withContentCollections(nextConfig);
