/**
 * Temporary fix for storyblok-js-client types due to issues with its package.json,
 * see https://github.com/storyblok/storyblok-js-client/issues/965
 */
declare module 'storyblok-js-client' {
  type RelationsType = any;
  type LinksType = any;
  type RichTextResolver = any;
  type ComponentResolverFn = any;
  type ISbLinksParams = any;
  type ISbLinksResult = any;
  type ISbStoriesParams = any;
  type ISbResult = any;
  type ISbStories = any;
  type ISbStoryParams = any;
  type ISbStory = any;
  type ISbCustomFetch = any;
  type ICacheProvider = any;
  type CachedVersions = any;
  type ISbContentMangmntAPI = any;
  type ISbResponseData = any;

  export default class Storyblok {
    public constructor(config: any, pEndpoint?: string);
    public relations: RelationsType;
    public links: LinksType;
    public richTextResolver: RichTextResolver;
    public resolveNestedRelations: boolean;
    public setComponentResolver(resolver: ComponentResolverFn): void;
    public get(slug: 'cdn/links', params?: ISbLinksParams, fetchOptions?: ISbCustomFetch): Promise<ISbLinksResult>;
    public get(slug: string, params?: ISbStoriesParams, fetchOptions?: ISbCustomFetch): Promise<ISbResult>;
    public getAll(slug: string, params: ISbStoriesParams, entity?: string, fetchOptions?: ISbCustomFetch): Promise<any[]>;
    public post(slug: string, params: ISbStoriesParams | ISbContentMangmntAPI, fetchOptions?: ISbCustomFetch): Promise<ISbResponseData>;
    public put(slug: string, params: ISbStoriesParams | ISbContentMangmntAPI, fetchOptions?: ISbCustomFetch): Promise<ISbResponseData>;
    public delete(slug: string, params: ISbStoriesParams | ISbContentMangmntAPI, fetchOptions?: ISbCustomFetch): Promise<ISbResponseData>;
    public getStories(params: ISbStoriesParams, fetchOptions?: ISbCustomFetch): Promise<ISbStories>;
    public getStory(slug: string, params: ISbStoryParams, fetchOptions?: ISbCustomFetch): Promise<ISbStory>;
    public ejectInterceptor(): void;
    public cacheVersions(): CachedVersions;
    public cacheVersion(): number;
    public setCacheVersion(cv: number): void;
    public clearCacheVersion(): void;
    public cacheProvider(): ICacheProvider;
    public flushCache(): Promise<this>;
  }
}
