@extends('layouts.master')
@section('content')
    <h1 style="text-align: center;">infos categorie</h1>
    <div class="showDetails">
      <p>{{$categorie->title}}</p>
      <p>{{$categorie->description}}</p> 
      <img src="{{ asset('images/categories/categorie' . $categorie->id . '/' . $categorie->image) }}" alt="">
    </div>

    <h1>Liste des articles </h1>
    <button type="button" onclick="window.location.href='{{ route('categories.createArticleFromCategorie', ['categorie' =>$categorie]) }}'"  title="Créer un article" class="lien">Add new Article</button>
    <br><br>
    <table border="1" class="table table-striped table-hover table-bordered">
     <tr class="trtr">
        <th>id</th>
        <th>titre</th>
        <th>description</th>
     </tr>
    @foreach($articles as $article )
    <tr>
       <td class="ids">{{$article ->id}}</td>
       <td class="titres">{{$article ->title}}</td>
       <td class="description">{{$article ->description}}</td>
    </tr>
    @endforeach
    </table>
@endsection

@section('script')
<script>
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
</script>
@endsection
