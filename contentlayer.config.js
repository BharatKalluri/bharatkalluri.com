import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        description: {
            type: 'string',
            required: false,
        },
        publishedAt: {
            type: 'string',
            required: true,
        },
        isBlogPost: {
            type: 'boolean',
            required: false,
            default: false,
        },
        draft: {
            type: 'boolean',
            required: false,
            default: false,
        },
        pinned: {
            type: 'boolean',
            required: false,
            default: false,
        },
        tags: {
            type: 'list',
            of: {type: 'string'},
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})