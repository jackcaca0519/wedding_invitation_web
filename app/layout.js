import './style.css';
import './style2.css';

export const metadata = {
  title: 'jack&angel',
  description: 'wedding_invitation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{height: '100vh', width: '100%'}}>
      <body style={{height: '100vh'}}>{children}</body>
    </html>
  )
}
