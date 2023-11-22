@extends('layouts.master')
@section('content')
<form method="post" action="{{route('categories.update', ['categorie' => $categorie])}}">
        @csrf 
        @method('put')
<div>
    <input type="text" name="title" placeholder="titre" value="{{$categorie->title}}" class="INPT">
</div>
<div>
    <textarea name="description" class="INPT1">{{$categorie->description}}</textarea>
</div>
<div>
    <input type="file" name="image"  value="{{$categorie->image}}" class="image">
</div>
<input type="submit" value="Update" />
</form>
@endsection
