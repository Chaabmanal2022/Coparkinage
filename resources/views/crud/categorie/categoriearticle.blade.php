<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CATEGORIE ARTICLES</title>
    <style>
        span{
            color:blue;
            font-size:30px;
        }
        .lien{
    height:40px;
    width:170px;
    font-size:17px;
    background:darkgrey;
    border:none;
    color:lightcyan;

}
    </style>
</head>
<body>
    
    <h2>liste des articles de categorie <span> [ {{$id_categorie}} ]</span> </h2>

<br><br>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Titre</td>
            <td>Description</td>
        </tr>
    @foreach($articles as $article)
    <tr>
        <td>{{$article->id}}</td>
        <td>{{$article->title}}</td>
        <td>{{$article->description}}</td>
    </tr>
    @endforeach
    </table>

</body>
</html>