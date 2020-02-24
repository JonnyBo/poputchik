<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "driver_apps".
 *
 * @property int $id
 * @property string $date
 * @property int $order_id
 * @property int $driver_id
 */
class DriverApps extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'driver_apps';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date'], 'safe'],
            [['order_id', 'driver_id'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'date' => 'Date',
            'order_id' => 'Order ID',
            'driver_id' => 'Driver ID',
        ];
    }

    public function getDriver() {
        return $this->hasOne(Drivers::className(), ['id' => 'driver_id']);
    }

    public function getOrder() {
        return $this->hasOne(Orders::className(), ['id' => 'order_id']);
    }
}
