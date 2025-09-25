# PRAY AS A SERCIVE

### Overview

This is my 'just-for-fun' backend project using Exspress. The reason why I made this project is to learn more about nodeJs technology and how to make a good design pattern on it. I also have a plan to continuing this project by developing another project and make this project as a microservice.

### Where to access

Cukup Buka https://islam-pray-service.vercel.app
Jika berhasil, maka web akan memberi response json seperti ini:

```json
{
    "message":"Selamat Datang di pray-as-a-service server! Silahkan minta doamu di sini",
    "respond":200
}
```


### Cara Pakai



Cukup kirimkan request ke https://islam-pray-service.vercel.app/pray dengan payload json berisi doa yang ingin diminta 

```json
{
    "doa": "doa sebelum belajar"
}   
```

Nanti return nya adalah doa yang diminta berupa json

```json
{
    "doa": "Rodlittu billahiroba, Wabil islaamidiinaa, Wabimuhammadin nabiyyaa warasuula, Robbi zidnii ilmaan warzuqnii fahmaan",
    "message": "berhasil",
    "response": 200
}
```

Untuk lebih jelasnya bisa dilihat pada gambar dibawah. (Di sini saya pakai postman)

![Contoh Penggunaan](/assets/gbr_1.JPG)