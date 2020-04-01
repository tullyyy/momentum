<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'DESC')->get();
        
        return $todos;
    }

    public function store(Request $request)
    {
        $todos = new \App\Todo;
        $todos->title = $request->input('title');
        $todos->completed = $request->input('completed');
       
        $todos->save();
        return $todos;
    }

    public function update(Request $request, $id)
    {
        $todos = Todo::findOrFail($id);
        $todos->title = $request->input('title');
        $todos->completed = $request->input('completed');

        $todos->save();
    }

    public function delete($id)
    {
    $todos = Todo::find($id);
    $todos->delete();
    }

    public function complete(Request $request, $id)
    {
        $todos = Todo::findOrFail($id);
        $todos->completed = $request->input('completed');

        $todos->save();
    }

}

