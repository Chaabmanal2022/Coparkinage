@extends('layouts.master')
@section('content')   
<form action="{{route('categories.stockerCategorie')}}" method="post">
@csrf
<div>
    <input type="text" name="title" placeholder="titre">
</div>
<br>
<div>
    <input type="text" name="description" placeholder="description">
</div>
<br>
<div>
    <input type="file" name="image">
</div>
<br>
<input type="submit" value="save" />
</form>
@endsection