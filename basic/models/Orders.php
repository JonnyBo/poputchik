<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "orders".
 *
 * @property int $id
 * @property string $date
 * @property string $flight_number
 * @property string $place_from
 * @property string $place_to
 * @property int $quantity
 * @property string $price
 */
class Orders extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'orders';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date'], 'safe'],
            [['quantity'], 'integer'],
            [['price'], 'number'],
            [['flight_number', 'place_from', 'place_to'], 'string', 'max' => 100],
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
            'place_from' => 'Пункт отправления',
            'place_to' => 'Пункт прибытия',
            'quantity' => 'Пассажиров',
            'price' => 'Стоимость',
            'client_id' => 'Клиент',
        ];
    }
}
