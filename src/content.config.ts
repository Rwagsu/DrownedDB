import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema'
import { blogSchema } from 'starlight-blog/schema'

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ 
		extend: (context) => blogSchema(context).merge(
          z.object({
            giscus: z.boolean().optional().default(true),
          })
        ).merge(topicSchema),
	})}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
