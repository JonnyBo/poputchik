<?php

namespace app\models;

use Yii;
use app\models\Drivers;

/**
 * This is the model class for table "apps".
 *
 * @property int $id
 * @property string $date
 * @property string $flight_number
 * @property string $place_from
 * @property string $place_to
 * @property int $quantity
 * @property string $price
 */
class Apps extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'apps';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date', 'date_order'], 'safe'],
            [['quantity', 'driver_id'], 'integer'],
            [['place_from', 'place_to', 'type'], 'string', 'max' => 100],
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
            'place_from' => 'Пункт отправления',
            'place_to' => 'Пункт прибытия',
            'quantity' => 'Пассажиров',
            'type' => 'Прилет/Вылет',
            'date_order' => 'Дата заявки',
            'driver_id' => 'Водитель',
        ];
    }

    public function getDriver() {
        return $this->hasOne(Drivers::className(), ['id' => 'driver_id']);
    }
}
