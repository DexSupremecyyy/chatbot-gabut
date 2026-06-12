
import { Calendar, Clock, User } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Selamat Datang, User</h1>
        <p className="text-gray-600">Silahkan lakukan absensi hari ini.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="text-primary" />
            <span className="text-sm font-medium text-gray-500">Tanggal Hari Ini</span>
          </div>
          <p className="text-2xl font-bold">24 Mei 2024</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Clock className="text-primary" />
            <span className="text-sm font-medium text-gray-500">Jam Sekarang</span>
          </div>
          <p className="text-2xl font-bold">08:30:00</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <User className="text-primary" />
            <span className="text-sm font-medium text-gray-500">Status User</span>
          </div>
          <p className="text-2xl font-bold">Aktif</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-4">Tombol Absensi</h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
          Absen Masuk
        </button>
        <button className="ml-4 bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
          Absen Pulang
        </button>
      </div>
    </div>
  );
}
