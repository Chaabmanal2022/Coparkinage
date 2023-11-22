@extends('layouts.master')
@section('content') 
<h1> Add new Article </h1>

<form method="post" action="{{route('articles.storeArticle')}}">
  @csrf 

<div>
    <input type="text" name="title" placeholder="titre">
</div>
<br>
<div>
    <input type="text" name="description" placeholder="description">
</div>
<br>
<input type="submit" value="save" />
</form>
@endsection
