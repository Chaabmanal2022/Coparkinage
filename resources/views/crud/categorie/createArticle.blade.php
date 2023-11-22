<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>créer article a partir d'une catégorie</title>
</head>
<body>
    <form action="{{route('categories.storeArticleFromCategorie')}}" method="post">
    @csrf
        <input type="number" value="{{$categorie->id}}" name="categorie_id" style="visibility:hidden;">
        <div>
        <input type="text" name="title" placeholder="Titre">
        </div>
        <br>
        <div>
        <input type="text" name="description" placeholder="Description">
        </div>
        <br>
        <input type="submit" value="save">
    </form>
</body>
</html>