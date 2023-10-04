'use client'
import Link from 'next/link'

export default function PostCard({ post }) {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.id}. {post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => { alert('More information') }}>Read More</button>
        </div>
    )
}
