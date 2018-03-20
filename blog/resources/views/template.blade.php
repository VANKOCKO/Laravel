<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon joli site</title>
		{!! Html::style('https://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css') !!}
		{!! Html::style('https://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css') !!}
		<style> textarea { resize: none; } </style>
<body>
	@yield('contenu')
</body>
</html>