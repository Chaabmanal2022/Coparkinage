<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter article </title>
</head>
<body>
    <h1>add article </h1>


<form method="post" action="{{route('articles.store')}}">
         @csrf

<div>
    <input type="text" name="id_categorie" value={{$id_categorie}} style="visibility: hidden;">
</div>
<div>
    <input type="text" name="title" placeholder="titre">
</div>
<div>
    <input type="text" name="description" placeholder="description">
</div>
<input type="submit" value="save" />
</form>


</body>
</html>