<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
//use yii\db\Query;
//use yii\caching\FileCache;

class Arrivals extends ActiveRecord
{
    public static function tableName()
    {
        return 'arrivals';
    }

    public function rules()
    {
        return [
            [['date'], 'safe'],
            [['quantity', 'client_id', 'driver_id'], 'integer'],
            [['price'], 'number'],
            [['flight_number', 'departure_point', 'arrival_point', 'type'], 'string', 'max' => 100],
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
            'type' => 'Прилет/Вылет',
        ];
    }

    public function getDriver() {
        return $this->hasOne(Drivers::className(), ['id' => 'driver_id']);
    }

    public function getClient() {
        return $this->hasOne(Clients::className(), ['id' => 'client_id']);
    }

    public function getStatus($order_id) {
        if (Yii::$app->user->can('driver')) {
            $driver = Drivers::findByUserId();
        }
        $params = [':order_id' => $order_id];
        $apps = Yii::$app->db->createCommand('SELECT * FROM driver_apps WHERE order_id=:order_id')->bindValues($params)->queryAll();
        if (!empty($apps)) {
            foreach ($apps as $app) {
                if ($app['driver_id'] == $driver->id) {
                    return 'подана';
                }
            }
            if (count($apps) >= 5)
                return 'есть 5';
        }
        //return false;
    }

}