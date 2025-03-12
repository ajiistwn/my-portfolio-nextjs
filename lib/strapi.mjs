import { writeFileSync } from 'fs';
import qs from "qs"


const url = "http://localhost:1337/api/b-logs" + "?" + qs.stringify(
    {
        field: ["createdAt", "updatedAt", "publishedAt", "slug", "title", "author", "description", "body"],
        populate: { image: { fields: ["url", "name"] } }
    }
)


const response = await fetch(url)
const body = await response.json()
const posts = JSON.stringify(body, null, 2)
console.log(posts)
const file = "lib/strapi-response.json"
writeFileSync(file, posts)