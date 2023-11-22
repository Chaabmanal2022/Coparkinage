@extends('layouts.master')
@section('content')
<h1>Liste des articles </h1>
<button type="button" onclick="window.location.href='{{ route('articles.createArticle') }}'" title="Créer un article" class="lien">Add new Article</button>

<div class="container">
        <div class="table-responsive">
            <div class="table-wrapper">

<div class="card">
    <div class="card-body">
    <table border="1" class="table table-striped table-hover table-bordered">
<thead>
    <tr class="trtr">
        <td>id</td>
        <td>titre</td>
        <td>description</td>
        <td>Show</td>
        <td>Edit</td>
        <td>Delete</td>

    </tr>
</thead>
<tbody>
    @foreach($articles as $article )
    <tr>
        <td class="ids">{{$article->id}}</td>
        <td class="titres">{{$article->title}}</td>
        <td class="description">{{$article->description}}</td>
        <td>
          @can('aeroport-display')
                <a href="{{ route('articles.show', ['article' =>$article]) }}" class="btn btn-warning px-2 py-0 waves-effect waves-light">
                    <span class="mdi mdi-eye-outline" style="font-size: .90rem"></span>
                </a>
          @endcan
        </td>

        <td>
          @can('aeroport-modification')
                <a href="{{ route('articles.edit', ['article' =>$article]) }}" class="btn btn-primary px-2 py-0 waves-effect waves-light">
                    <span class="mdi mdi-pencil-outline" style="font-size: .90rem"></span>
                </a>
          @endcan
        </td>

        <td>
        <a href="{{ route('articles.delete', ['id' => $article->id]) }}" onclick= "return confirm('Are you sure you want to delete this article?')">
        <button type="button" class="material-icons your-button-class1">&#xE872;</button>
        </a>
        </td>

        <td>
        <a href="{{ route('articles.showImagesArticle', ['article' =>$article]) }}">
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