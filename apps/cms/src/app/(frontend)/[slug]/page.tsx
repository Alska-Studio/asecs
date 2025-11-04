import config from '@payload-config';
import { getPayload } from 'payload';
import PageClient from './page.client';

// Payload test for pre-generate static pages in Next.js
// TODO: remove
export async function generateStaticParams() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
      overrideAccess: true, // Bypass access control for build-time static generation
      pagination: false
    });

    return pages.docs
      .filter((page) => page.slug != null && page.slug !== '')
      .map((page) => ({
        slug: page.slug!
      }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PageClient slug={slug} />;
}
