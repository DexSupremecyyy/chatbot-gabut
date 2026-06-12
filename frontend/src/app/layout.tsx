
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Absensi Test",
  description: "Sistem Absensi Karyawan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <nav className="border-b bg-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AbsensiApp</h1>
            <div className="space-x-4">
              <a href="#" className="hover:text-primary">Dashboard</a>
              <a href="#" className="hover:text-primary">Riwayat</a>
              <a href="#" className="bg-primary text-white px-4 py-2 rounded-lg">Logout</a>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
