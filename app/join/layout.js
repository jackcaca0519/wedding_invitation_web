import Link from 'next/link';

export default function PagesLayout({ children }) {
  return (
    <>
      <Link href="/">返回</Link>
      {children}
    </>
  )
}
