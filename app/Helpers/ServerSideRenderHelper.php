<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

trait ServerSideRenderHelper
{
    public function __construct()
    {
    }

    public function renderRequest($path, $data){

        if(env('APP_RENDER', false)){
            $template = view('server.app')->render();

            $renderClient = new Client();

            $url = 'http://127.0.0.1:8080';

            if($path !== '/') $url .= '/'.$path;

            try{
                $response = $renderClient->get($url, [
                    'query' => [
                        'template' => json_encode($template)
                    ]
                ]);

                if($response->getStatusCode() === 200){
                    return $response->getBody();
                }
            }catch(\Exception $e){}
        }
        
        return view('app');
    }
}
