@extends('layouts.master')
@section('content')    
<h1>Liste des categories </h1>
<button type="button" onclick="window.location.href='{{ route('categories.create') }}'" title="Créer un article" class="lien">Add new Category</button>

<div class="container">
        <div class="table-responsive">
            <div class="table-wrapper">
<table border="1" class="table table-striped table-hover table-bordered">
<thead>
    <tr class="trtr">
        <td>id</td>
        <td>titre</td>
        <td>description</td>
        <td>image</td>
        <td>Show</td>
        <td>edit</td>
        <td>delete</td>
    </tr>
</thead>
<tbody>
    @foreach($categories as $categorie )
    <tr>
        <td class="ids">{{$categorie->id}}</td>
        <td class="titres">{{$categorie->title}}</td>
        <td class="description">{{$categorie->description}}</td>
        <td class="images">
          <img src="images/categories/categorie{{$categorie->id}}/{{$categorie->image}}" alt="Blog Image" class="img-blog">
        </td>
        <td>
        @can('aeroport-display')
            <a href="{{ route('categories.show', ['categorie' =>$categorie]) }}" class="btn btn-warning px-2 py-0 waves-effect waves-light">
                <span class="mdi mdi-eye-outline" style="font-size: .90rem"></span>
            </a>

        @endcan
        </td>

        <td>
        @can('aeroport-modification')
                                    <a href="{{ route('categories.edit', ['categorie' =>$categorie]) }}" class="btn btn-primary px-2 py-0 waves-effect waves-light">
                                       <span class="mdi mdi-pencil-outline" style="font-size: .90rem"></span>
                                    </a>
        @endcan

        </td>

        <td>
        <a href="{{ route('categories.delete', ['id' => $categorie->id]) }}" onclick="return confirm('Are you sure you want to delete this category?')">
        <button type="button" class="material-icons your-button-class1">&#xE872;</button>
        </td>
        <td>
        <a href="{{ route('categories.showArticles', ['categorie' =>$categorie]) }}">
        <button type="button" class="material-icons your-button-class3">&#xE315;</button>
        </a>
        </td>
    </tr>
    @endforeach
    </tbody>
</table>
</div>
</div>        
</div> 
@endsection
@section('script')
<script>
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
</script>
@endsection