import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Providers from "./providers"
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Enes Insaat',
  description: `Enes İnşaat Yapı Malzemeleri, inşaat sektöründe uzmanlaşmış, kaliteli ve uygun fiyatlı yapı malzemeleri satışı yapan güvenilir bir tedarikçidir. İnşaatınız için ihtiyacınız olan her türlü yapı malzemesini Enes İnşaat Yapı Malzemeleri'nde kolayca bulabilirsiniz. Beton demiri, tuğla, blok,
  izolasyon malzemeleri ve daha fazlası, geniş ürün yelpazemizde mevcuttur.
  Uygun fiyatlarla kaliteli yapı malzemeleri için doğru adres Enes İnşaat Yapı Malzemeleri! İnşaat projenizi başarıya ulaştırmak için ihtiyacınız olan tüm yapı malzemelerini tek bir çatı altında bulabilirsiniz. Yapı marketimiz, en son teknolojiyle üretilmiş ve dayanıklı yapı malzemelerini sizlere sunmaktadır.
  İnşaat malzemelerinde güvenilir çözümler için Enes İnşaat Yapı Malzemeleri'ni tercih edebilirsiniz. Kalite ve uygun fiyat garantisiyle hizmetinizdeyiz. İnşaat kimyasallarından çatı ve cephe kaplama malzemelerine kadar her türlü yapı ürünü için bizi ziyaret edin.
  Enes İnşaat Yapı Malzemeleri, müşteri memnuniyetini ön planda tutarak profesyonel müşteri hizmetleriyle size en iyi alışveriş deneyimini sunmaktadır. Güvenilir ve tercih edilen bir isim olan Enes İnşaat Yapı Malzemeleri, inşaat sektöründe uzun yıllardır hizmet vermektedir.`,
  keywords:'Yapı malzemeleri mağazası,İnşaat kimyasalları,Çatı ve cephe kaplama malzemeleri,Tuğla ve blok satışı,İzolasyon malzemeleri,İnşaat demiri,İnşaat yapım malzemeleri,İnşaat malzemeleri satışı,İnşaat malzeme fiyatları,Yapı market ürünleri'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
       <head>
      </head>
      <body >
        <Providers>
        <Header />
          {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  )
}
