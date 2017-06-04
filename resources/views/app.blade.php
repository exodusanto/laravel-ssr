<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel SSR Test</title>
    </head>
    <body>
        <div id="root"></div>

        <script src="{{ mix('/js/main.js') }}"></script>
    </body>
</html>
