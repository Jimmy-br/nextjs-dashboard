import "./ui/global.css";
import { montserrat } from "./ui/fonts";  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}

        <footer className="py-10 flex justify-center items-center bg-gray-50  text-gray-500 text-sm">
          Hecho por Jimmy Bogantes
        </footer>
      </body>
    </html>
  );
}
   