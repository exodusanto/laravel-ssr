<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AppController extends Controller
{
    public function __construct()
    {
    }

    public function getApp(Request $request){

        $template = view('server.app')->render();

        $renderClient = new Client();

        try{
            $response = $renderClient->get('http://127.0.0.1:8080', [
                'query' => [
                    'template' => json_encode($template)
                ]
            ]);

            if($response->getStatusCode() === 200){
                return $response->getBody();
            }
        }catch(\Exception $e){}
        
        return view('app');

        // $ch = curl_init();
        // // curl_setopt($ch, CURLOPT_VERBOSE, true);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_URL, 'http://127.0.0.1');
        // curl_setopt ($ch, CURLOPT_PORT , 8080);
        // $render = curl_exec ($ch);
        // curl_close ($ch);

        // return $render;
    }
}
