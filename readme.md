Laravel SSR
====

#### Dependencies

- Php
- Node

Clone this repo and use it like a **boilerplate**

How to install
---
- Laravel base install
```
composer install
...
```
- Node modules
```
yarn install | npm install
```
- Build vue
```
yarn prod | npm run prod
```
- Start node server
```
node render_server/server.js
```
- Set laravel variable in the .env file
```
APP_RENDER=http://localhost:5005
```
- Serve laravel
```
php artisan serve
```

How it works
---

![larave-ssr](https://user-images.githubusercontent.com/13484843/26917507-d1217aa2-4c2e-11e7-9495-9f6644eac831.jpg)

Bug
---
![687474703a2f2f64726f70732e6b796c65666f782e63612f31637147502b](https://user-images.githubusercontent.com/13484843/26917941-5d9ff5fc-4c30-11e7-8ff9-7199081eb68f.gif)

Just kidding. Please create an issue. Your issue is much more likely to be resolved/merged if it includes a fix & pull request.

Have an idea that improves laravel-ssr? Awesome! Please fork this repository, implement your idea (including documentation, if necessary), and submit a pull request.
