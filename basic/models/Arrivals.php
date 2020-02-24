<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
//use yii\db\Query;
//use yii\caching\FileCache;

class Arrivals extends ActiveRecord
{

    const STATUS_ACCEPT = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_EXECUT = 2;
    const STATUS_PAID =3;

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
            'round' => 'Круг',
            'status' => 'Статус',
            'driver_order' => 'Заказ от водителя',
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

    public function getDriverAppsToOrder($order_id) {
        return count(DriverApps::findAll(['order_id' => $order_id]));
    }

    public static function getOrderStatus($value = false)
    {
        $status = array(
            self::STATUS_ACCEPT => Yii::t('app', 'Принят'),
            self::STATUS_ACTIVE => Yii::t('app', 'Выполняется'),
            self::STATUS_EXECUT => Yii::t('app', 'Исполнен'),
            self::STATUS_PAID => Yii::t('app', 'Оплачен')
        );

        return ($value !== false && $status[$value]) ? $status[$value] : $status;
    }

}