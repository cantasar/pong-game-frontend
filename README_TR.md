# Pong Game Frontend

Bu proje, JWT token tabanlı kimlik doğrulama sistemi ile çalışan bir Single Page Application'dır. Modern best practice'lere uygun olarak komponent tabanlı mimari kullanılmıştır.

## 🏗️ Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir UI komponentleri
│   ├── base.component.ts    # Base komponent sınıfı
│   ├── layout/             # Layout komponentleri
│   │   └── sidebar.component.ts
│   ├── ui/                 # UI komponentleri
│   │   └── login-form.component.ts
│   └── index.ts            # Komponent exports
├── core/                # Çekirdek sistem dosyaları
│   ├── app-manager.ts      # Komponent yaşam döngüsü yöneticisi
│   └── index.ts            # Core exports
├── services/            # API servisleri
│   ├── api.service.ts      # HTTP API işlemleri
│   └── index.ts            # Service exports
├── templates/           # HTML template'ler
│   ├── home.template.ts    # Ana sayfa template'i
│   ├── login.template.ts   # Giriş sayfası template'i
│   └── index.ts            # Template exports
├── views/               # Sayfa görünümleri
│   ├── home.ts             # Ana sayfa
│   └── login.ts            # Giriş sayfası
├── main.ts              # Uygulama giriş noktası
└── router.ts            # Routing yönetimi
```

## ✨ Özellikler

- 🔐 JWT token tabanlı kimlik doğrulama
- 📱 Responsive tasarım (Tailwind CSS)
- 🚀 Modern SPA mimarisi
- 🔒 Korumalı rotalar
- 💾 LocalStorage token saklama
- 🧩 Komponent tabanlı mimari
- 🔄 Otomatik komponent yaşam döngüsü yönetimi
- 📦 Modüler kod organizasyonu

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:5173` adresini açın

## Kullanım

### Giriş Yapma
1. Ana sayfada kullanıcı adı ve şifre alanlarını doldurun
2. "Giriş Yap" butonuna tıklayın
3. Başarılı giriş sonrası JWT token localStorage'a kaydedilir
4. Otomatik olarak ana sayfaya yönlendirilirsiniz

### Çıkış Yapma
1. Üst menüdeki "Çıkış Yap" butonuna tıklayın
2. Token ve kullanıcı bilgileri temizlenir
3. Giriş sayfasına yönlendirilirsiniz

## API Entegrasyonu

Uygulama `localhost:4000` adresindeki backend API'si ile çalışır:

- **POST** `/login` - Kullanıcı girişi
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "jwt_token" }`

## Teknolojiler

- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı geliştirme ortamı
- **Tailwind CSS** - Stil framework'ü
- **Vanilla JS** - Saf JavaScript (framework kullanılmadı)

## Proje Yapısı

```
src/
├── main.ts          # Uygulama giriş noktası
├── router.ts        # SPA router
├── utils/
│   └── api.ts       # API yardımcı fonksiyonları
└── views/
    ├── login.ts     # Giriş sayfası
    └── home.ts      # Ana sayfa
```

## Güvenlik

- JWT token'lar localStorage'da saklanır
- Korumalı rotalar için otomatik yönlendirme
- API isteklerinde Authorization header'ı otomatik eklenir 