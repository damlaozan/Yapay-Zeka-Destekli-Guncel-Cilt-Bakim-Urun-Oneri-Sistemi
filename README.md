# Yapay-Zeka-Destekli-Guncel-Cilt-Bakim-Urun-Oneri-Sistemi
Cilt sorunlarını belirleyerek bireylere uygun cilt bakım ürünleri öneren bir yapay zeka tabanlı model ve buna entegre bir mobil uygulama geliştirilmektedir. Proje, TÜBİTAK 2209-A destek programı kapsamında destek almaya hak kazanmıştır.


Bu çalışmada geliştirilen sistem, kullanıcıdan alınan yüz görüntüsü üzerinde derin öğrenme yöntemleri kullanarak cilt sorunlarını (akne, sivilce izi, leke, kırışıklık, koyu halka) tespit etmektedir. Analiz sonucunda, tespit edilen cilt problemine uygun ürünler sistem tarafından önerilmektedir. Önerilen ürünler, Trendyol platformundaki güncel ve yüksek puanlı ürünlerden otomatik olarak seçilmekte ve kullanıcıya sunulmaktadır. Sistem, yalnızca doğru analiz ve öneri yapmakla kalmayıp, aynı zamanda kullanıcı dostu bir mobil arayüz ile herkesin kolayca erişebileceği bir çözüm sunmaktadır.


skin_analysis_model.py dosyası cilt analizinde kullanılacak modelin eğitim kaynak kodlarını içermektedir.


skin_analysis_api klasöründe iki farklı seçenekten oluşan ürün öneri sisteminin kaynak kodları bulunmaktadır. İlk seçenekte kullanıcıdan aldığı yüz görüntüsüyle cilt analizini gerçekleştiren ve analiz sonucuna uygun cilt bakım ürünü öneren sistem bulunmaktadır. İkinci seçenekte ise kullanıcının mobil uygulama anasayfasında bulunan cilt sorunları kartlarına tıklayarak erişebileceği seçilen cilt sorunu özelinde ürün önerileri sunan bir sistem bulunmaktadır.


skin_analysis_app klasöründen ise geliştirilen mobil uygulamanın arayüz tasarımlarının ve kamera erişimi, api entegresi vb. kaynak kodlarına ulaşabililirsiniz. Anasayfa ekranında cilt sorunu kartları, cilt analiz bölümü ve cilt bakımı için ipuçları yer almaktadır. Cilt Tipi ekranı, cilt sorununa yönelik detaylı bilgiler ve uygun ürün önerileri içermektedir. Cilt Analizi ekranı, kullanıcının dilerse fotoğraf çekebileceği dilerse galeriden seçtiği fotoğrafı yükleyebileceği şekilde tasarlanmıştır. Sonuç ekranı ise analiz sonucu tespit edilen sorunlar ve buna uygun kullanılacak ürünlerin listlelendiği bir sayfadır.
