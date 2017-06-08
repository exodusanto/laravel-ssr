<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Log;

trait ServerSideRenderHelper
{
    public function __construct()
    {
    }

    public function renderRequest($path = "/", $data = []){
        if(env('APP_RENDER', false)){
            $template = view('server.app')->render();

            $renderClient = new Client();

            $url = env('APP_RENDER');

            if($path !== '/') $url .= '/'.$path;

            try{
                $response = $renderClient->get($url, [
                    'query' => [
                        'renderLaravelTemplate' => json_encode($template),
                        'renderLaravelData' => json_encode($data),
                        'path' => $path
                    ]
                ]);

                if($response->getStatusCode() === 200){
                    return $response->getBody();
                }
            }catch(\Exception $e){
                Log::error($e);
            }
        }
        
        return view('app');
    }
}
