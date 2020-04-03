<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Link;

class LinkController extends Controller
{
    public function index()
    {
        $links = Link::orderBy('created_at', 'DESC') ->get();
        
        return $links;
    }

    public function store(Request $request)
    {
        $links = new \App\Link;
        $links->name = $request->input('name');
        $links->link = $request->input('link');
       
        $links->save();

        return $links;
    }

    public function update(Request $request, $id){
        $links = Link::findOrFail($id);
        $links->name = $request->input('name');
        $links->link = $request->input('link');

        $links->save();
    }

    public function delete($id){
    $links = Link::find($id);
    $links->delete();
}
}

