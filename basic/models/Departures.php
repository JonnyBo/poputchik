<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
//use yii\db\Query;
//use yii\caching\FileCache;

class Departures extends ActiveRecord
{
    public static function tableName()
    {
        return 'departures';
    }

    public function rules()
    {
        return [
            [['date'], 'safe'],
            [['quantity', 'client_id', 'driver_id'], 'integer'],
            [['price'], 'number'],
            [['flight_number', 'departure_point', 'arrival_point'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'date' => 'Дата',
            'flight_number' => 'Номер рейса',
            'departure_point' => 'Пункт отправления',
            'arrival_point' => 'Пункт прибытия',
            'quantity' => 'Пассажиров',
            'price' => 'Стоимость',
            'client_id' => 'Клиент',
            'driver_id' => 'Водитель',
        ];
    }

}