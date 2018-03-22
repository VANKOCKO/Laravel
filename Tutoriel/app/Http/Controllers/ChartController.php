<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\charpie;

class ChartController extends Controller
{   
    
   /** 
    public function getForm()
    {
                  
        return view('posttest');
    }
    * 
    */
    public function store(Request $request)
    {
        $chart = new charpie;
        $chart->label=$request->label;
        $chart->value=$request->value;  
        $chart->save();
        return view('gettest');
       // return response()->json(['success'=>'Bien enregistree']);        
    }
    
    /**
     * Afficher les proprietees des cercles
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $charts = charpie::all();
        return response()->json($charts);
    }
    
    
    
}
