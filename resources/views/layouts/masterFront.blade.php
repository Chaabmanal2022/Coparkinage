<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="{{ asset('front/css/2.0467dc1a.chunk.css')}}" />

   <link rel="stylesheet" href="{{ asset('front/css/main.0923f4ea.chunk.css')}}" />
   <!-- Icons Css -->
   <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
   <title>Document</title>
</head>
<body>
@include('layouts.navbar')
@yield('contenu')



<script type="text/javascript" src="{{ asset('/front/js/runtime_main.215ee79d.js')}}"></script>


<script type="text/javascript" src="{{ asset('/front/js/main.ad56b556.chunk.js')}}"></script>

</body>
</html>