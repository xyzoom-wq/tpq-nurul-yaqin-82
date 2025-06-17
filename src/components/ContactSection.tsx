
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here you would typically send the data to your backend
    alert('Terima kasih! Pesan Anda telah terkirim.');
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-800 mb-4">
            Kontak Kami
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang Sekolah Islam Nurul Yaqin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-poppins font-semibold text-2xl text-gray-800">
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nama" className="font-poppins text-gray-700">Nama Lengkap</Label>
                  <Input
                    id="nama"
                    name="nama"
                    type="text"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="mt-1 font-poppins"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-poppins text-gray-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 font-poppins"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>
                <div>
                  <Label htmlFor="pesan" className="font-poppins text-gray-700">Pesan</Label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 font-poppins"
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-islamic-green-600 hover:bg-islamic-green-700 text-white font-poppins font-semibold py-3 rounded-lg"
                >
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-islamic-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">Alamat</h3>
                    <p className="font-poppins text-gray-600">
                      Jl. Pendidikan No. 123<br />
                      Kelurahan Sejahtera, Kecamatan Bahagia<br />
                      Jakarta Selatan 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-blue/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">Telepon</h3>
                    <p className="font-poppins text-gray-600">
                      (021) 123-4567<br />
                      0812-3456-7890
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-blue/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">Email</h3>
                    <p className="font-poppins text-gray-600">
                      info@nurulyaqin.sch.id<br />
                      pendaftaran@nurulyaqin.sch.id
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">Media Sosial</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    📘
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                    📱
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    📺
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="font-poppins text-gray-600 text-center">
                  🗺️ Google Maps<br />
                  <span className="text-sm">Lokasi Sekolah Islam Nurul Yaqin</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
