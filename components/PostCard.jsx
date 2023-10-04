'use client'

export default function PostCard({ post }) {
    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => { alert('More information') }}>Read More</button>
        </div>
    )
}
