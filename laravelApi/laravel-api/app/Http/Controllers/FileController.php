<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;

class FileController extends Controller
{
    public function index(){
        return File::all();
    }

    public function show(File $idfiles){
        return $idfiles;
    }

    public function store(Request $request){
        $idfiles = File::create($request->all());
        return response()->json($idfiles, 201);
    }

    public function update(Request $request, File $idfiles){
        $idfiles->update($request->all());
        return response()->json($idfiles, 200);
    }

    public function delete (File $idfiles){
        $idfiles->delete();
        return response()->json(null, 204);
    }
}
