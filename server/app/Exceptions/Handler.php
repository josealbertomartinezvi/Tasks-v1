<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use \Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if($exception instanceof ModelNotFoundException){
            return response()->json(['error' => 'Error de Modelo', 'codigo' => 400], 400);
        }

        if($exception instanceof ValidationException){
            return response()->json(['error' => $exception->validator->errors(), 'codigo' => 400], 400);
        }

        if($exception instanceof QueryException){
            return response()->json(['error' => "Error de consulta: ".$exception->getMessage(), 'codigo' => 400], 400);
        }

        if($exception instanceof HttpException){
            return response()->json(['error' => 'Error de ruta', 'codigo' => 404], 404);
        }

        if($exception instanceof AuthenticationException){
            return response()->json(['error' => 'Error de Autenticacion', 'codigo' => 401], 401);
        }

        return parent::render($request, $exception);
    }
}
