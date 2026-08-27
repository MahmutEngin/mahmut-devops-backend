# Mahmut DevOps Backend API

Bu proje, DevOps eğitimi kapsamında geliştirilmiş ve Ubuntu VPS üzerinde canlıya alınmış Node.js/Express REST API uygulamasıdır.

## 🚀 Proje Bilgileri & Domain
* **Canlı API Adresi:** https://mahmut-backend.team-vit-devops.nl
* **Kullanılan Teknolojiler:** Node.js, Express, PM2, Nginx, Certbot (SSL), GitHub Actions

## 🛠️ Endpoint Listesi
* `GET /` - Uygulama çalışma durumunu döndürür.
* `GET /api/health` - Uygulama sağlık kontrolü (Health Check).
* `GET /api/info` - Versiyon ve ortam bilgilerini sunar.

## 💻 Local Geliştirme Ortamı
1. Bağımlılıkları yükleyin:
   ```bash
   npm install