import PostCard from "@/update/components/PostCard"

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })

    return posts
}

export default async function PostsPage() {
    const posts = await loadPosts()
    console.log(posts)

    return (
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )

}
