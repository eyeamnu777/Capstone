import Footer from "/Volumes/LaCie/CCL/Capstone/capstone/components/shared/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
