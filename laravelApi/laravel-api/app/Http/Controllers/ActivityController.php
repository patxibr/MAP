<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;

class ActivityController extends Controller
{
    public function index(){
	return Activity ::all();
    }

    public function show(Activity $activity){
        return $activity;
    }

    public function store(Request $request){
        $activity = Activity::create($request->all());
        return response()->json($activity, 201);
    }

    public function update(Request $request, Activity $activity){
        $activity->update($request->all());
        return response()->json($activity, 200);
    }

    public function delete (Activity $activity){
        $activity->delete();
        return response()->json(null, 204);
    }
}
