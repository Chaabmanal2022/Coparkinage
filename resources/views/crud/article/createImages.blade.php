<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Images Articles</title>
    <style>
        span{
            color:blue;
        }
    </style>
</head>
<body>
    <h1> Add new Image for Article <span>[ {{$article->id}} ]</span> </h1>
<form action="{{route('articles.stockerImages')}}" method="post">
@csrf
<div>
    <input type="text" name="categorie_id" value={{$article->id}}  style="visibility: hidden;">
</div>
<div>
    <input type="file" name="image" placeholder="description">
</div>
<input type="submit" value="save" />
</form>
</body>
</html>