import "@/app/globals.css";
import HeaderMain from "@/components/Header/HeaderMain";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100">
        <HeaderMain/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
