import PostsPage from "@/app/posts/page"
import { Suspense } from "react"

const loadPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return post
}

export default async function PostPage({ params }) {
    const post = await loadPost(params.id)

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <h4>Otras publicaciones</h4>

            <Suspense fallback={<div>Cargando...</div>}>
                <PostsPage />
            </Suspense>
        </div>
    )
}
