<?php

namespace app\controllers;

use app\models\Drivers;
use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use yii\data\Pagination;
use app\models\Departures;
use app\models\Arrivals;
use yii\caching\FileCache;

class DriversController extends \yii\web\Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index','create','delete','table'],
                'rules' => [
                    [
                        'allow' => false,
                        'actions' => ['index','create','delete','table'],
                        'roles' => ['?'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index','create','delete','table'],
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function beforeAction($action) {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        $rendered_grid = Yii::$app->JqgridTable->jqSimple('jqDrivers');
        return $this->render('index', [
            'rendered_grid' => $rendered_grid
        ]);

    }

    // Всплывшее модальное окно нового водителя
    public function actionNewdriver()
    {
        $model = new Drivers();
        return $this->renderAjax('newdriver', [
            'model' => $model,
        ]);
    }

    // Всплывшее модальное окно редактирования
    public function actionEditdriver()
    {
        $id = intval(Yii::$app->request->post('id'));
        $driver = Drivers::find()->where(['id' => $id])->one();
        return $this->renderAjax('editdriver', [
            'model' => $driver,
        ]);
    }

    // По нажатию в модальном окне на Отправить - новый водитель сохраняется
    public function actionAdddriver()
    {
        $model = new Drivers();
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            $model->created = Yii::$app->formatter->asDatetime(Yii::$app->request->post('created'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('newdriver', [
                'model' => $model,
            ]);
        }
    }

    // По нажатию в модальном окне на Отправить - новый водитель сохраняется
    public function actionUpdatedriver($id)
    {
        $model = Drivers::findOne($id);
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            //$model->date = Yii::$app->formatter->asDatetime(Yii::$app->request->post('date'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('editdriver', [
                'model' => $model,
            ]);
        }
    }

}
