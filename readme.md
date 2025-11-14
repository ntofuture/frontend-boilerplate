# Frontend Boilerplate

<details>
<summary>English</summary>

A starter kit for static front-end projects.  
It compiles SCSS, bundles JavaScript, optimizes images, and serves files with live reload.

## Requirements

- Node 20.15.0
- Yarn v4

## Installation

```bash
yarn install
```

## Scripts

| Command             | Description                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `yarn dev`          | Run development server with file watching and live reload.                                     |
| `yarn build`        | The `app` folder generates the production output.                                              |
| `yarn clean`        | Clears the `app` folder and caches, then generates the production output.                      |
| `yarn release`      | Copy built CSS, JS, and fonts to the `release` folder.                                         |
| `yarn release-full` | Creates a release package containing visuals and videos and copies it to the `release` folder. |

## Project Structure

```
/
├─ config.js       # path and build configuration for project elements
├─ gulpfile.js     # registers gulp tasks
├─ tasks/          # individual gulp task implementations
└─ source/
   ├─ js/
   ├─ scss/
   ├─ template/
   ├─ images/
   ├─ fonts/
   ├─ files/
   └─ videos/
```

## Gulp Tasks

- **browser** – Serves the `app/` folder via localhost:**3000** (config.js:port) using BrowserSync.
- **clean** – Cleans the `app` folder and cache.
- **css** – Compiles SCSS and CSS (library) files without compression.
  - The following steps occur during the **build** process:
    - `gulp-sass` compiles SCSS and CSS (library) files into compressed formats.
    - `gulp-postcss` & `autoprefixer` add the necessary CSS prefixes for browser compatibility.
    - `gulp-purgecss` scans HTML files and removes unused CSS classes.
    - `gulp-clean-css` further optimizes CSS files; it removes unnecessary whitespace, duplicates, and unused rules.
    - `gulp-csso` restructures CSS files and combines media queries to achieve maximum minification in the final output.
- **javascript** – Combines JS files and minifies them if desired.
  - The following steps occur during the **build** process:
    - `gulp-terser` removes unnecessary whitespace and comments from JavaScript files and compresses and minifies the code.
- **image** – Optimizes images and generates WebP outputs.
  - `globby` Searches for and lists files defined within the image path.
  - `getCache` & `setCache` Checks previously processed images, only processing new or changed files.
  - `gulp-filter` Creates filters to extract image files (png, jpg, jpeg) and perform custom processing.
  - `gulp-imagemin` Performs image compression.
    - `gifsicle` Optimizes GIF files.
    - `mozjpeg` Compresses JPG/JPEG files (75% quality).
    - `optipng` Optimizes PNG files (compression based on level).
    - `svgo` Reduces SVG files and cleans up unnecessary features.
  - `gulp-webp` Converts image files (png, jpg, jpeg) to WebP format.
- **font** – Copies font files with cache checking.
- **file** – Copies all files with cache checking.
- **video** – Copies video files with cache checking.
- **template** – Processes HTML templates with `gulp-file-include` and formats all HTML files.
- **compress** – Generates `.gz` and `.br` compression files for CSS/JS.
  - For manually managing compression for **High Traffic** resources.
- **release / release-full** – Extracts compiled files to the `release` folder ready for distribution.

## Dependencies

| Package                 | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `autoprefixer`          | Adds vendor prefixes to CSS.            |
| `browser-sync`          | Development server with live reload.    |
| `del`                   | Deletes files/folders.                  |
| `globby`                | Glob utility for file paths.            |
| `gulp`                  | Task runner orchestrating build steps.  |
| `gulp-brotli`           | Creates Brotli-compressed assets.       |
| `gulp-clean-css`        | Minifies CSS.                           |
| `gulp-concat`           | Concatenates multiple files.            |
| `gulp-convert-encoding` | Converts file encodings.                |
| `gulp-csso`             | Further CSS optimisation.               |
| `gulp-file-include`     | Allows HTML partials.                   |
| `gulp-filter`           | Filters files in streams.               |
| `gulp-format-html`      | Formats HTML output.                    |
| `gulp-gzip`             | Creates Gzip-compressed assets.         |
| `gulp-imagemin`         | Optimizes images.                       |
| `gulp-postcss`          | Runs PostCSS plugins like Autoprefixer. |
| `gulp-purgecss`         | Cleans up unused CSS code.              |
| `gulp-sass` & `sass`    | Compiles SCSS to CSS.                   |
| `gulp-strip-comments`   | Strips comments from files.             |
| `gulp-terser`           | Minifies JavaScript.                    |
| `gulp-webp`             | Converts images to WebP.                |
| `gulp4-run-sequence`    | Runs gulp tasks sequentially.           |
| `postcss`               | CSS transformations framework.          |

</details>

<details>
<summary>Türkçe</summary>

Statik front-end projeleri için başlangıç şablonu.  
SCSS dosyalarını derler, JavaScript'i birleştirir, görselleri optimize eder ve canlı yenilemeli sunucu sağlar.

## Gereksinimler

- Node 20.15.0
- Yarn v4

## Kurulum

```bash
yarn install
```

## Komutlar

| Komut               | Açıklama                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `yarn dev`          | Dosyaları izleyip canlı yenileme yapan geliştirme sunucusu oluşturur.                          |
| `yarn build`        | `app` klasörünü üretim çıktısı oluşturur.                                                      |
| `yarn clean`        | `app` klasörünü ve ön bellekleri temizleyip üretim çıktısı oluşturur.                          |
| `yarn release`      | Derlenen CSS, JS ve fontları `release` klasörüne kopyalar.                                     |
| `yarn release-full` | Görsel ve videoları da içerecek şekilde yayın hazır paket üretir `release` klasörüne kopyalar. |

## Proje Yapısı

```
/
├─ config.js       # proje öğelerine ait yol ve derleme ayarları
├─ gulpfile.js     # gulp görevleri
├─ tasks           # görev dosyaları
└─ source
   ├─ js
   ├─ scss
   ├─ template
   ├─ images
   ├─ fonts
   ├─ files
   └─ videos
```

## Gulp Görevleri

- **browser** – BrowserSync ile `app/` klasörünü localhost:**3000** (config.js:port) üzerinden servis eder.
- **clean** – `app` klasörünü ve ön belleği temizler.
- **css** – SCSS ve CSS (kütüphane) dosyalarını sıkıştırmamış şekilde derler.
  - **build** işlemi sırasında aşağıdaki işlemler gerçekleşir:
    - `gulp-sass` SCSS ve CSS (kütüphane) dosyalarını sıkıştırılmış şekilde derler.
    - `gulp-postcss` & `autoprefixer` tarayıcı uyumluluğu için gerekli CSS prefix’lerini ekler.
    - `gulp-purgecss` HTML dosyalarını tarayıp kullanılmayan CSS sınıflarını temizliyor.
    - `gulp-clean-css` CSS dosyalarını daha da optimize ediyor; gereksiz boşluk, tekrar ve kullanılmayan kuralları siliyor.
    - `gulp-csso` CSS dosyalarını yeniden yapılandırıp medya sorgularını birleştirerek son haliyle maksimum küçültme sağlıyor.
- **javascript** – JS dosyalarını birleştirir ve isterse küçültür.
  - **build** işlemi sırasında aşağıdaki işlemler gerçekleşir:
    - `gulp-terser` JavaScript dosyaları içerisinde gereksiz boşlukları, yorumları kaldırıyor ve kodu sıkıştırıp minify ediyor.
- **image** – Görselleri optimize eder ve WebP çıktıları üretir.
  - `globby` Görsel yolu içerisinde tanımlı dosyaları arayıp listeliyor.
  - `getCache` & `setCache` Daha önce işlenmiş resimleri kontrol ediyor, sadece yeni veya değişen dosyaları işleme alıyor.
  - `gulp-filter` Görsel (png, jpg, jpeg) dosyalarını ayıklayıp özel işlem yapmak için filtre oluşturuyor.
  - `gulp-imagemin` Görsel sıkıştırma işlemlerini yapılıyor.
    - `gifsicle` GIF dosyalarını optimize ediyor.
    - `mozjpeg` JPG/JPEG sıkıştırıyor (%75 kalite).
    - `optipng` PNG dosyalarını optimize ediyor (seviyeye göre sıkıştırma).
    - `svgo` SVG dosyalarını küçültüyor ve gereksiz özellikleri temizliyor.
  - `gulp-webp` Görsel (png, jpg, jpeg) dosyalarını WebP formatına çevirir.
- **font** – Font dosyalarını önbellek kontrolüyle kopyalar.
- **file** – Tüm dosyaları önbellek kontrolüyle kopyalar.
- **video** – Video dosyalarını önbellek kontrolüyle kopyalar.
- **template** – HTML şablonlarını `gulp-file-include` ile işler ve tüm HTML dosyalarını Formatlar.
- **compress** – CSS/JS için `.gz` ve `.br` sıkıştırma dosyaları üretir.
  - **Yüksek Trafik** alan kaynaklar için sıkıştırma işlemini manuel yönetmek içindir.
- **release / release-full** – Derlenen dosyaları dağıtıma hazır `release` klasörüne çıkarır.

## Bağımlılıklar

| Paket                   | Amaç                                                |
| ----------------------- | --------------------------------------------------- |
| `autoprefixer`          | CSS'e tarayıcı ön-ekleri ekler.                     |
| `browser-sync`          | Canlı yenileme sağlayan geliştirme sunucusu.        |
| `del`                   | Dosya ve klasörleri siler.                          |
| `globby`                | Dosya yollarını glob desenleriyle eşler.            |
| `gulp`                  | Derleme adımlarını yöneten görev çalıştırıcısı.     |
| `gulp-brotli`           | Brotli sıkıştırması yapar.                          |
| `gulp-clean-css`        | CSS dosyalarını küçültür.                           |
| `gulp-concat`           | Birden çok dosyayı birleştirir.                     |
| `gulp-convert-encoding` | Dosya kodlamalarını dönüştürür.                     |
| `gulp-csso`             | CSS'i daha fazla optimize eder.                     |
| `gulp-file-include`     | HTML parçalarını birleştirir.                       |
| `gulp-filter`           | Akıştaki dosyaları filtreler.                       |
| `gulp-format-html`      | HTML çıktısını biçimlendirir.                       |
| `gulp-gzip`             | Gzip sıkıştırması yapar.                            |
| `gulp-imagemin`         | Görselleri optimize eder.                           |
| `gulp-postcss`          | Autoprefixer gibi PostCSS eklentilerini çalıştırır. |
| `gulp-purgecss`         | Kullanılmayan CSS kodlarını temizler.               |
| `gulp-sass` & `sass`    | SCSS'i CSS'e dönüştürür.                            |
| `gulp-strip-comments`   | Dosyalardan yorumları temizler.                     |
| `gulp-terser`           | JavaScript'i küçültür.                              |
| `gulp-webp`             | Görselleri WebP formatına çevirir.                  |
| `gulp4-run-sequence`    | Gulp görevlerini sırayla çalıştırır.                |
| `postcss`               | CSS dönüşümleri için çatı.                          |

</details>

<a target="_blank" href="https://nextofuture.com">
    <img src="https://storage.nextofuture.com/images/logo/logo.svg" alt="Next of Future" width="100">
    <p>nextofuture.com</p>
  </a>
