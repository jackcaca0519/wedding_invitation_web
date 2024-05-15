export const metadata = {
  title: 'jack&angel',
  description: 'wedding_invitation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{height: '100%', width: '100%', backgroundColor: '#e2e2e2'}}>
      <body>{children}</body>
    </html>
  )
}
