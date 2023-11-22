@extends('layouts.master')
@section('content')
    <h1>informations de l'article  <span>[{{$article->id}}]</span></h1>

    <div class="showDetails">
      <p class="titre">{{$article->title}}</p>
      <p>{{$article->description}}</p>   
    </div>

    <h1>Images de l'article <span>[{{$article->id}}]</span></h1>
    <button type="button" onclick="window.location.href='{{ route('articles.createImages', ['article' => $article]) }}'"  title="Créer un article" class="lien">Add new Article Image</button>
    <div class="button-container">
    </div>
    <table border="1">
        @foreach($articleImages as $data)
        <tr>
           <td><img src="{{ asset('images/articles/' . $data->image) }}" alt=""></td>
           <td>
           <a href="{{ route('articles.deleteImage', ['article' => $article ,'id_image' => $data->id]) }}" onclick= "return confirm('Are you sure you want to delete this article?')">
            <button type="button" class="material-icons your-button-class1">&#xE872;</button>
           </a>
           </td>
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
