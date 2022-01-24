<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Activity
 * 
 * @property string $activity
 * @property string|null $coordinates
 * 
 * @property Collection|ActivityCompletion[] $activity_completions
 * @property Collection|File[] $files
 *
 * @package App\Models
 */
class Activity extends Model
{
	protected $table = 'activities';
	protected $primaryKey = 'activity';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'longitud', 'latitud', 'banner_path', 'order', 'title', 'description'
	];

	public function activity_completions()
	{
		return $this->hasMany(ActivityCompletion::class, 'activities_activity');
	}

	public function files()
	{
		return $this->hasMany(File::class, 'activities_activity');
	}
}
