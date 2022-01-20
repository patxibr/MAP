<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property string $username
 * @property string|null $password
 * @property string|null $gender
 * @property int|null $age
 * 
 * @property Collection|ActivityCompletion[] $activity_completions
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';
	protected $primaryKey = 'username';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'age' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'password',
		'gender',
		'age'
	];

	public function activity_completions()
	{
		return $this->hasMany(ActivityCompletion::class, 'users_username');
	}
}
