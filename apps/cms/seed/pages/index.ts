import { Page } from 'apps/_shared/src/payload-types';
import type { Payload } from 'payload';

/**
 * Seeds the pages collection with essential pages for Asecs shopping center
 */
export async function seedPages(payload: Payload): Promise<void> {
  console.log('Seeding pages...');

  const pages: Omit<Page, 'id' | 'updatedAt' | 'createdAt'>[] = [
    {
      title: 'Hem',
      slug: 'home',
      content: [
        {
          blockType: 'heroParallax',
          headingUpper: 'Välkommen till Asecs',
          headingLower: 'Världens variation - Sveriges största shoppingcenter',
          description: 'Världens variation - Sveriges största shoppingcenter'
        },
        {
          blockType: 'richTextWithHeading',
          heading: 'Med över 100 butiker och restauranger',
          content: {
            root: {
              type: 'root',
              version: 1,
              direction: null,
              format: '',
              indent: 0,
              children: [
                {
                  version: 1,
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      text: 'Asecs är Jönköpings största shoppingcenter med över 100 butiker och restauranger. Vi har 3600 gratis parkeringsplatser och är lättillgängligt med både bil och kollektivtrafik. Välkommen till oss!'
                    }
                  ]
                }
              ]
            }
          },
          colorVariant: 'default'
        }
      ],
      meta: {
        title: 'Asecs - Jönköpings största shoppingcenter',
        description: 'Välkommen till Asecs! Över 100 butiker och restauranger, 3600 gratis parkeringsplatser.',
        robots: 'index, follow'
      },
      status: 'published'
    },
    {
      title: 'Kontakt',
      slug: 'kontakt',
      content: [
        {
          blockType: 'heroParallax',
          headingUpper: 'Kontakta oss',
          headingLower: 'Vi finns här för att hjälpa dig',
          description: 'Vi finns här för att hjälpa dig'
        },
        {
          blockType: 'richTextWithHeading',
          heading: 'Kontaktinformation',
          content: {
            root: {
              type: 'root',
              version: 1,
              direction: null,
              format: '',
              indent: 0,
              children: [
                {
                  version: 1,
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      text: 'Asecs, Kompanigatan 36, 553 05 Jönköping. Telefon: 036-10 50 00. E-post: info@asecs.se'
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      meta: {
        title: 'Kontakt - Asecs',
        description: 'Kontakta Asecs. Adress: Kompanigatan 36, Jönköping.',
        robots: 'index, follow'
      },
      status: 'published'
    }
  ];

  for (const pageData of pages) {
    try {
      // Check if page already exists
      const existing = await payload.find({
        collection: 'pages',
        where: { slug: { equals: pageData.slug } },
        limit: 1
      });

      if (existing.docs.length > 0) {
        console.log(`Page "${pageData.title}" already exists, skipping...`);
        continue;
      }

      await payload.create({
        collection: 'pages',
        data: {
          title: pageData.title,
          slug: pageData.slug,
          content: pageData.content,
          meta: pageData.meta,
          status: pageData.status,
          publishedAt: new Date().toISOString()
        }
      });

      console.log(`Created page: ${pageData.title}`);
    } catch (error) {
      console.error(`Error creating page ${pageData.title}:`, error);
    }
  }

  console.log('Pages seeding completed!');
}
