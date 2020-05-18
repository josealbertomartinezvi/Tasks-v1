<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'document' => 'required' ,
            // 'name' => 'required',
            // 'last_name' => 'required',
            // 'age' => 'required',
            // 'email' => 'required|email',
            // 'phone' => 'required',
            // 'address' => 'required',
            // 'city' => 'required',
            // 'password' => 'required',
            // 'role' => ''
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'document.required' => ':attribute is required'
        ];
    }

}
