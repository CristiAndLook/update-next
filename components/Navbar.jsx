import Link from 'next/link'
// El componente Navbar es un componente de React que define una barra de navegación para una aplicación web. Este componente utiliza la librería next/link para crear enlaces a diferentes páginas de la aplicación. La barra de navegación se compone de una lista de elementos li, cada uno de los cuales contiene un enlace a una página diferente. El componente Navbar se exporta como un componente por defecto para que pueda ser utilizado en otros archivos de la aplicación.
export default function Navbar() {
  return (
    <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
  )
}
