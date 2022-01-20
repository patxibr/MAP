<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ActivityCompletion
 * 
 * @property string $users_username
 * @property string $activities_activity
 * @property int|null $complete
 * 
 * @property Activity $activity
 * @property User $user
 *
 * @package App\Models
 */
class ActivityCompletion extends Model
{
	protected $table = 'activity_completion';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'complete' => 'int'
	];

	protected $fillable = [
		'complete'
	];

	public function activity()
	{
		return $this->belongsTo(Activity::class, 'activities_activity');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'users_username');
	}
}
