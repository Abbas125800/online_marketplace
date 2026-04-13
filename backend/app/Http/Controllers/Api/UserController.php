<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    // گرفتن همه کاربران
    public function index()
    {
        $users = User::select(
            'id',
            'firstName',
            'lastName',
            'phone',
            'email',
            'identityNumber',
            'location',
            'district_id',
            'role',
            'verified',
            'userImage',
            'backgroundImage'
        )->get();

        return response()->json($users);
    }
    
    public function show($id)
    {
        $user = User::with(['province', 'district'])->find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json([
            'id' => $user->id,
            'firstName' => $user->first_name,
            'lastName' => $user->last_name,
            'phone' => $user->phone,
            'email' => $user->email,
            'identityNumber' => $user->identity_number,
            'location' => $user->location,
            'provinceId' => $user->province_id,
            'districtId' => $user->district_id,
            'role' => $user->role,
            'verified' => $user->verified,
            'userImage' => $user->user_image,
            'backgroundImage' => $user->background_image,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|unique:users,email,' . $id,
            'identityNumber' => 'required|string|max:50|unique:users,identityNumber,' . $id,
            'location' => 'required|string|max:255',
            'password' => 'nullable|string|min:6', // اختیاری
            'district' => 'required|string|max:255',
            'role' => 'required|in:admin,vendor,customer',
            'verified' => 'required|boolean',
            'userImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'backgroundImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user->firstName = $request->firstName;
        $user->lastName = $request->lastName;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->identityNumber = $request->identityNumber;
        $user->location = $request->location;
        $user->district_id = $request->district; // ✅
        $user->role = $request->role;
        $user->verified = $request->verified;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        // آپلود عکس‌ها و جایگزینی قبلی
        if ($request->hasFile('userImage')) {
            // حذف تصویر قبلی اگر موجود بود
            if ($user->userImage && file_exists(storage_path('app/public/' . $user->userImage))) {
                unlink(storage_path('app/public/' . $user->userImage));
            }
            $user->userImage = $request->file('userImage')->store('users', 'public');
        }

        if ($request->hasFile('backgroundImage')) {
            if ($user->backgroundImage && file_exists(storage_path('app/public/' . $user->backgroundImage))) {
                unlink(storage_path('app/public/' . $user->backgroundImage));
            }
            $user->backgroundImage = $request->file('backgroundImage')->store('users', 'public');
        }

        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|unique:users,email',
            'identityNumber' => 'required|string|max:50',
            'location' => 'required|string|max:255',
            'password' => 'required|string|min:6',
            'district' => 'required|string|max:255',
            'role' => 'required|in:admin,vendor,customer',
            'verified' => 'required|boolean',
            'userImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'backgroundImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = new User();
        $user->firstName = $request->firstName;
        $user->lastName = $request->lastName;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->identityNumber = $request->identityNumber;
        $user->location = $request->location;
        $user->district_id = $request->district; // ✅        $user->role = $request->role;
        $user->verified = $request->verified;
        $user->password = Hash::make($request->password);

        // آپلود عکس‌ها
        if ($request->hasFile('userImage')) {
            $user->userImage = $request->file('userImage')->store('users', 'public');
        }
        if ($request->hasFile('backgroundImage')) {
            $user->backgroundImage = $request->file('backgroundImage')->store('users', 'public');
        }

        $user->save();

        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }



    // حذف کاربر
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // حذف فایل‌ها از storage
        if ($user->userImage) {
            Storage::disk('public')->delete($user->userImage);
        }
        if ($user->backgroundImage) {
            Storage::disk('public')->delete($user->backgroundImage);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
