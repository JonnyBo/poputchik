<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "clients".
 *
 * @property int $id
 * @property string $login
 * @property string $password
 * @property string $first_name
 * @property string $second_name
 * @property string $family
 */
class Clients extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'clients';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['login', 'password', 'add_phone', 'phone'], 'string', 'max' => 100],
            [['name', 'company'], 'string'],
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
            'login' => 'Логин',
            'password' => 'Пароль',
            'name' => 'Клиент',
            'company' => 'Компания',
            'phone' => 'Телефон',
            'add_phone' => 'Доп. телефон',
            'created' => 'Дата регистрации',
            'blocked' => 'Заблокирован'
        ];
    }

    public function getArrivals()
    {
        return $this->hasMany(Arrivals::className(), ['id_client' => 'id']);
    }

    public function findNameById($id) {
        $client = Clients::find($id);
        return $client->name;
    }

}
