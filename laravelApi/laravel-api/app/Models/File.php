<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class File
 * 
 * @property int $idfiles
 * @property string|null $type
 * @property string|null $path
 * @property string $activities_activity
 * 
 * @property Activity $activity
 *
 * @package App\Models
 */
class File extends Model
{
	protected $table = 'files';
	protected $primaryKey = 'idfiles';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idfiles' => 'int'
	];

	protected $fillable = [
		'type',
		'path',
		'activities_activity'
	];

	public function activity()
	{
		return $this->belongsTo(Activity::class, 'activities_activity');
	}
}
