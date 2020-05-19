<?php		

namespace App\Http\Controllers;		

use App\Http\Requests\SaveUserRequest;
use App\Http\Requests\AuthUserRequest;	
use Illuminate\Support\Facades\Auth;	
use Illuminate\Http\Request;	
use App\User;
// use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Http\Controllers\AuthorizedAccessTokenControlle;

class AuthController extends Controller	{

    public $successStatus = 200;


    public function register(Request $request){
        // return $request;
        $user = User::create( $request->all() );

        if($user){
            return response()->json([
                'status' => 'success',
                'data' => $user
            ], 200);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Wrong validation'
            ], 422);
        }


    }

    public function login(AuthUserRequest $request){

        if($request -> validated()){
            $email = $request->input('email');
            $password = $request->input('password');
            $res = User::where(['email' => $request->input('email'), 'password' => $request->input('password')]) -> get();
            
            if($res){
                if($res[0]->password == $password) {
                    $user =  User::where('email', $email)->get('id')[0]->id;
                    $role =  User::where('email', $email)->get('role')[0]->role;
                    return ['user' => $user, 'role' => $role];
                }else{
                    $data = '0';
                    return $data;
                }  
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Wrong validation'
                ], 422); 
            }
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Wrong validation'
            ], 422);    
        }
        
            
   
    }		    	            
		
}