import qs from "qs";

export const CACHE_TAG_POSTS = "posts";

const BACKEND_URL = "http://localhost:1337";

import { marked } from "marked";
marked.use({ gfm: true, headerIds: false, mangle: false });


export async function getPost(slug) {
    const { data, meta } = await fetchPosts({
        filters: {
            slug: {
                $eq: slug
            }
        },
        field: ["publishedAt", "createdAt", "updatedAt", "slug", "title", "description", "author", "body", "tech"],
        populate: { image: { fields: ["url", "name"] } },
    })


    const attributes = data[0]

    if (!attributes) {
        return null
    }
    // console.log(meta)
    return {
        // pageCount: meta.pagination.pageCount,
        slug: attributes.slug,
        title: attributes.title,
        description: attributes.description,
        author: attributes.author,
        createdAt: attributes.createdAt.slice(0, "yyyy-mm-dd".length),
        publishedAt: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
        updatedAt: attributes.updatedAt.slice(0, "yyyy-mm-dd".length),
        body: marked.parse(attributes.body),
        imageUrl: attributes.image.url,
        imageName: attributes.image.name,
        tech: attributes.tech
    };

}


export async function getSlugs() {
    const { data } = await fetchPosts({
        fields: ["slug"],
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 100 },
    });
    return data.map((attributes) => attributes.slug);
}


export async function getAllPosts() {
    const result = await fetchPosts({
        field: ["publishedAt", "createdAt", "updatedAt", "slug", "title", "description", "author"],
        populate: { image: { fields: ["url", "name"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 5, withCount: true }
    })
    // console.log(result)
    const datas = result.data.map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        author: item.author,
        createdAt: item.createdAt.slice(0, "yyyy-mm-dd".length),
        publishedAt: item.publishedAt.slice(0, "yyyy-mm-dd".length),
        updatedAt: item.updatedAt.slice(0, "yyyy-mm-dd".length),
        imageUrl: item.image.url,
        imageName: item.image.name,
        tech: item.tech,
    }))
    // const pageCount = meta.pagination.pageCount
    return datas
}

async function fetchPosts(parameters) {
    const url =
        `${BACKEND_URL}/api/b-logs?` +
        qs.stringify(parameters, { encodeValuesOnly: true });
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}