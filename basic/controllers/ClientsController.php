<?php

namespace app\controllers;

use app\models\Clients;
use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use yii\data\Pagination;
use app\models\Departures;
use app\models\Arrivals;
use yii\caching\FileCache;

class ClientsController extends \yii\web\Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index','create','delete'],
                'rules' => [
                    [
                        'allow' => false,
                        'actions' => ['index','create','delete'],
                        'roles' => ['?'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index','create','delete'],
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
        if (Yii::$app->user->can('driver')) {
            $this->redirect('/', 301);
        }
        $rendered_grid = Yii::$app->JqgridTable->jqSimple('jqClients');
        return $this->render('index', [
            'rendered_grid' => $rendered_grid
        ]);

    }

    // Всплывшее модальное окно нового заказа клиента
    public function actionNewclient()
    {
        $model = new Clients();
        return $this->renderAjax('newclient', [
            'model' => $model,
        ]);
    }

    // Всплывшее модальное окно редактирования
    public function actionEditclient()
    {
        $id = intval(Yii::$app->request->post('id'));
        $driver = Clients::find()->where(['id' => $id])->one();
        return $this->renderAjax('editclient', [
            'model' => $driver,
        ]);
    }

    // По нажатию в модальном окне на Отправить - новый клиент сохраняется
    public function actionAddclient()
    {
        $model = new Clients();
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            $model->created = Yii::$app->formatter->asDatetime(Yii::$app->request->post('created'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('newclient', [
                'model' => $model,
            ]);
        }
    }

    // По нажатию в модальном окне на Отправить - клиент обновляется
    public function actionUpdateclient($id)
    {
        $model = Clients::findOne($id);
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            $model->created = Yii::$app->formatter->asDatetime(Yii::$app->request->post('created'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('editclient', [
                'model' => $model,
            ]);
        }
    }

}
