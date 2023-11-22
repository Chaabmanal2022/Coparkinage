<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article Images </title>
    <style>
    img{
           width:200px;
           height:170px;
          }
          img{
            width:300px;
            height:300px;
          }
          span{
            color:blue;
          }

    </style>
</head>
<body>
    <h1>Article Images<span>[{{$Id}}]</span></h1>

    <table border="1">
        @foreach($ArticleImages as $articlemages)
       <tr>
        <td class="images">
            <img src="{{ asset('images/articles/' . $articlemages->image) }}" alt="">
        </td>
       </tr>
        @endforeach
    </table>
</body>
</html>