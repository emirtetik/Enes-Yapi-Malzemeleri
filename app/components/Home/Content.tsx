'use client'
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation(); // useTranslation hook'u ile çeviri fonksiyonunu alıyoruz

  return (
    <section className="max-w-6xl px-5 mx-auto body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 overflow-hidden bg-gray-200 rounded">
            <div className="w-full h-full bg-red-500"></div>
          </div>
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 text-2xl font-medium sm:w-2/5 title-font sm:mb-0">
              {t('Faaliyetlerimiz')}
            </h1>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              {t('İnşaat Malzemeleri Tedariği: İnşaatınızın her aşamasını kapsayacak geniş ürün yelpazemizle, temelden çatıya kadar tüm gereksinimlerinizi karşılamak için buradayız. Ayrıca, ev tadilatları için ihtiyaç duyacağınız tüm ürünleri de bulabileceğiniz birinci sınıf hizmet sunuyoruz. Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla inşaat projelerinize değer katmak için yanınızdayız.')}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                alt="content"
                className="object-cover object-center w-full h-full"
                src="/assets/content/kaba.webp"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-red-500 title-font">
              {t('Kaba İnşaat')}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {t('İnşaatınıza Uygun Demir ve Beton Tedariği: Bina duvarlarının dayanıklılığı önceliğimizdir. Projenizin gereksinimlerine uygun çeşitlilikteki kaliteli duvar ürünleriyle kaba inşaatınızın her aşamasında sizlere destek sağlıyoruz. Bütçenizi göz önünde bulundurarak, güvenilir malzemelerle en uygun çözümleri sunmak için buradayız.')}
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                alt="content"
                className="object-cover object-center w-full h-full"
                src="/assets/content/dıs.jpg"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-red-500 title-font">
              {t('Isı Yalıtım ve Dış Cephe')}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {t('Binanızın ısı yalıtım süreçlerinde, geniş ürün yelpazemizle bütçenizi korurken, aynı zamanda beklenen ısı yalıtım performansını kesintisiz bir şekilde sizlere sunuyoruz. İhtiyaçlarınıza özel olarak tasarlanan çözümlerimizle, enerji tasarrufunu ve konforu bir araya getiriyoruz. Isı yalıtımı işleminden sonra, binanızı estetik bir şekilde tamamlamak için dekoratif amaçlı boya ve çeşitli ürünlerle size eşsiz seçenekler sunuyoruz. Görsel zevkinizi yansıtan, isteklerinize uygun ve bütçenize dost dekoratif çözümlerle binanızın görünümünü mükemmelleştiriyoruz.')}
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                alt="content"
                className="object-cover object-center w-full h-full"
                src="/assets/content/tadilat.avif"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-red-500 title-font">
              {t('Tadilat')}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {t('Teknik ekibimizle birlikte, yaşam alanınızı hayal ettiğiniz şekilde tasarlamak için özenle çalışıyoruz. Sizin için en uygun değişimleri planlayarak, evinizdeki yeniliklere adım atmanızı kolaylaştırıyoruz.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
