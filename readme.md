# tc-kimlik-cli

Geliştirme sırasında test amaçlı ihtiyaç duyulabilen TC kimlik numaralarını üretmek ve valide etmek için bir terminal uygulamasıdır.

### Kurulum

Npm ile kurulum yapılabilir:

`npm install -g tc-kimlik-cli`

### Kullanım

Yeni bir TC kimlik numarası üretmek için

`tc-kimlik`

Herhangi bir TC kimlik numarasının doğruluğunu kontrol içi

`tc-kimlik -d <numara>`

veya

`tc-kimlik --dogrula <numara>`

Yardım için

`tc-kimlik --yardim`

veya

`tc-kimlik --h`

Tüm seçenekler:

```
Kullanım:

    tc-kimlik                         Yeni bir TC Kimlik No üretir
    tc-kimlik -d, --dogrula <numara>  TC Kimlik No geçerliliğini sorgular
    tc-kimlik -h, --help, --yardim    Bu yardım mesajını gösterir
    tc-kimlik -v, --versiyon          Versiyon bilgini gösterir
```
