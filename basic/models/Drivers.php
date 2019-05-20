<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "drivers".
 *
 * @property int $id
 * @property string $login
 * @property string $password
 * @property string $first_name
 * @property string $second_name
 * @property string $family
 * @property string $auto_model
 * @property string $auto_number
 * @property int $places
 */
class Drivers extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'drivers';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['places', 'id'], 'integer'],
            [['login', 'password', 'phone', 'auto_color', 'auto_model', 'auto_number'], 'string', 'max' => 100],
            [['name'], 'string'],
            [['created'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'Пользователь',
            'login' => 'Логин',
            'password' => 'Пароль',
            'name' => 'Водитель',
            'phone' => 'Телефон',
            'auto_color' => 'Цвет авто',
            'auto_model' => 'Модель авто',
            'auto_number' => 'Номер авто',
            'places' => 'Кол-во мест',
            'created' => 'Дата регистрации',
            'blocked' => 'Заблокирован'
        ];
    }

    public function getApps()
    {
        return $this->hasMany(Apps::className(), ['id_driver' => 'id']);
    }

    public function getArrivals()
    {
        return $this->hasMany(Arrivals::className(), ['id_driver' => 'id']);
    }

    public function getUser() {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    public function findByUserId() {

        return Drivers::find()->where(['user_id' => Yii::$app->user->id])->one();
    }
}
