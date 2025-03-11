import qs from "qs";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const CACHE_TAG_POSTS = "posts";

const BACKEND_URL = "http://localhost:1337";

import { marked } from "marked";
marked.use({ gfm: true, headerIds: false, mangle: false });

const formatDateWithDayMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
        weekday: "long", // Nama hari (Senin, Selasa, ...)
        day: "2-digit",
        month: "long", // Nama bulan (Januari, Februari, ...)
        year: "numeric",
    });
};


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
        createdAt: formatDateWithDayMonth(attributes.createdAt),
        publishedAt: formatDateWithDayMonth(attributes.publishedAt),
        updatedAt: formatDateWithDayMonth(attributes.updatedAt),
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


export async function getAllPosts(pageSize, page, search = "") {
    const { data, meta } = await fetchPosts({
        field: ["publishedAt", "createdAt", "updatedAt", "slug", "title", "description", "author"],
        populate: { image: { fields: ["url", "name"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize, page },
        filters: search
            ? {
                $or: [
                    { title: { $containsi: search } }, // Pencarian dalam title (case insensitive)
                    { description: { $containsi: search } }, // Pencarian dalam deskripsi
                    { author: { $containsi: search } }, // Pencarian dalam author
                ],
            }
            : {},
            
    })
    const datas = data.map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        author: item.author,
        createdAt: formatDateWithDayMonth(item.createdAt),
        publishedAt: formatDateWithDayMonth(item.publishedAt),
        updatedAt: formatDateWithDayMonth(item.updatedAt),
        imageUrl: item.image.url,
        imageName: item.image.name,
        tech: item.tech,
    }));
    const pagination = meta.pagination
    // toast.success("Email sent successfully!"); // Notifikasi sukses
    return { datas, pagination }

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