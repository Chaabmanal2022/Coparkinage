@extends('layouts.master')
@section('content')

<form method="post" action="{{route('articles.update', ['article' => $article])}}">
@csrf 
@method('put')
<div>
    <input type="text" name="title" placeholder="titre" value="{{$article->title}}" class="INPT">
</div>
<div>
    <textarea name="description" class="INPT1">{{$article->description}}</textarea>
</div>
<input type="submit" value="Update" />
</form>
@endsection
