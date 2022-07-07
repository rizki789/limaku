<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWasteRequest;
use App\Http\Requests\UpdateWasteRequest;
use App\Models\Account;
use App\Models\Waste;
use Illuminate\Support\Facades\Auth;

class WasteController extends Controller
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

    public function getTypes()
    {
        return response()->json(['organic', 'inorganic'])->setStatusCode(200);
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
     * @param  \App\Http\Requests\StoreWasteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWasteRequest $request)
    {
        $waste = Waste::create([
            'depositor' => $request->depositor,
            'user_id' => Auth::id(),
            'service_type' => $request->service_type,
            'type' => $request->type,
            'weight' => $request->weight,
            'location' => $request->location,
        ]);

        $account = Account::find(Auth::id());
        $account->deposit = $account->deposit + $waste->weight * 7000;
        $account->save();

        return response()->json([
            'error' => false,
            'status' => 'success',
            'message' => 'Store was successfully'
        ])->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Waste  $waste
     * @return \Illuminate\Http\Response
     */
    public function show(Waste $waste)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Waste  $waste
     * @return \Illuminate\Http\Response
     */
    public function edit(Waste $waste)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWasteRequest  $request
     * @param  \App\Models\Waste  $waste
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWasteRequest $request, Waste $waste)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Waste  $waste
     * @return \Illuminate\Http\Response
     */
    public function destroy(Waste $waste)
    {
        //
    }
}
