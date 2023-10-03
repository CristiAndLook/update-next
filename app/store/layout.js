import Link from 'next/link'

export default function CategoriesLayout({ children }) {
    return <> 
    <h1>StorePage</h1>
        <nav>
            <ul>
                <li><Link href="/store/categories">Categories</Link></li>
                <li><Link href="/store/descriptions">Descriptions</Link></li>
            </ul>
        </nav>  
    {children}
    </>

}