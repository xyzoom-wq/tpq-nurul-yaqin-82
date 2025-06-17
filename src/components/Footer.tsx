
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-islamic-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-islamic-green-800 font-bold text-lg">NY</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Sekolah Islam Nurul Yaqin</h3>
                <p className="font-poppins text-sm text-islamic-green-200">Membangun Generasi Qur'ani Sejak Dini</p>
              </div>
            </div>
            <p className="font-poppins text-islamic-green-100 leading-relaxed max-w-md">
              Mendidik anak dengan pendekatan Islami yang holistik, mengintegrasikan ilmu agama dan ilmu umum untuk membentuk karakter yang berakhlak mulia.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center hover:bg-islamic-green-600 transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center hover:bg-islamic-green-600 transition-colors">
                📱
              </a>
              <a href="#" className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center hover:bg-islamic-green-600 transition-colors">
                📺
              </a>
              <a href="#" className="w-10 h-10 bg-islamic-green-700 rounded-full flex items-center justify-center hover:bg-islamic-green-600 transition-colors">
                📧
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li><a href="#beranda" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#profil" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Profil</a></li>
              <li><a href="#program" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Program</a></li>
              <li><a href="#berita" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Berita</a></li>
              <li><a href="#pendaftaran" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Pendaftaran</a></li>
              <li><a href="#kontak" className="font-poppins text-islamic-green-100 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-islamic-green-300">📍</span>
                <div>
                  <p className="font-poppins text-sm text-islamic-green-100">
                    Jl. Pendidikan No. 123<br />
                    Jakarta Selatan 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-islamic-green-300">📞</span>
                <p className="font-poppins text-sm text-islamic-green-100">(021) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-islamic-green-300">📧</span>
                <p className="font-poppins text-sm text-islamic-green-100">info@nurulyaqin.sch.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-islamic-green-700 mt-8 pt-8 text-center">
          <p className="font-poppins text-sm text-islamic-green-200">
            © {currentYear} Sekolah Islam Nurul Yaqin. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
