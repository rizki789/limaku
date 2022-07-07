<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExchangeRequest;
use App\Http\Requests\UpdateExchangeRequest;
use App\Models\Account;
use App\Models\Exchange;
use App\Models\Waste;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ExchangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function deposit()
    {
        $account = Account::find(Auth::id());
        return response()->json(array('deposit' => rupiah(round($account->deposit, 2))));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreExchangeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreExchangeRequest $request)
    {
        $exchange = Exchange::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'bank' => $request->bank,
            'account' => $request->account,
            'nominal' => $request->nominal
        ]);

        $account = Account::find(Auth::id());
        $account->deposit = $account->deposit - $request->nominal;
        $account->save();

        return response()->json([
            'error' => false,
            'status' => 'success',
            'message' => 'Store was successfully! Please wait for the response.',
            'deposit' => rupiah($account->deposit),
        ])->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function show(Exchange $exchange)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function edit(Exchange $exchange)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateExchangeRequest  $request
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExchangeRequest $request, Exchange $exchange)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exchange $exchange)
    {
        //
    }
}
