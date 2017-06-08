<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Helpers\ServerSideRenderHelper as SSRH;

class AppController extends Controller
{
    use SSRH;

    public function __construct()
    {
    }

    public function getApp(Request $request){
        $url = str_replace(url('/'), '', $request->fullUrl());
        if($url === "") $url = '/';
        return $this->renderRequest($url, [
            'list' => ['Render', 'From', 'Server']
        ]);
    }
}
