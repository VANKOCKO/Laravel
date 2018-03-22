<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\ChartPie;

class ChartController extends Controller
{   
    
    public function store(Request $request)
    {
        $chart = new ChartPie;
        $chart->label=$request->lable;
        $chart->label=$request->value;  
        $chart->save();
        return response()->json(['success'=>'Bien enregistree']);        
    }
    
}
