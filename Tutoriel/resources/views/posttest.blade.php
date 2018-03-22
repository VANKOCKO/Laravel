<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ajouter graph</title>
    </head>
    <body>
        @extends('template')
        @section('contenu')
            <div class="container">
                    <div class="row">
                         
                        <div class="col-2 w-25">
                           
                                    <h1>Ajouter une propriete du graph</h1>
                                    {!! Form::open(['route' => 'getForm']) !!}
                                          <div class="form-group">
                                                  {!! Form::text('label', null, ['class' => 'form-control', 'placeholder' => 'label']) !!}
                                          </div>
                                           <div class="form-group">
                                                  {!! Form::number('value', null, ['class' => 'form-control', 'placeholder' => 'valeur']) !!}
                                          </div>
                                          {!! Form::submit('Enregistrer !', ['class' => 'btn btn-info pull-right']) !!}
                                  {!! Form::close() !!}      
                        </div>
                    </div> 
            </div>    
        @endsection
    </body>
</html>
