<?php

namespace app\controllers;



use app\models\Drivers;
use Yii;
use yii\db\Query;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\Orders;
use app\models\Apps;
use app\models\Arrivals;
use app\models\User;
use app\models\Departures;
use app\models\Clients;
use yii\data\ArrayDataProvider;

class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        //echo Yii::$app->formatter->asDate('22.02.2019 14:11:00', 'php:Y-m-d H:i:s');
        $userRole = Yii::$app->authManager->getRolesByUser(Yii::$app->user->getId());
        print_r($userRole);
        return $this->render('index');
    }

    /**
     * Login action.
     *
     * @return string
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return string
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Display analyticsPhone
     *
    */
    public function actionDeparturesArrivals($message = 'Прилеты - Вылеты')
    {
        return $this->render('departures-arrivals', ['message' => $message]);
    }

    public function actionDrivers($message = 'Водители')
    {
        return $this->render('drivers', ['message' => $message]);
    }

    public function actionClients($message = 'Клиенты')
    {
        return $this->render('drivers', ['message' => $message]);
    }

    // Всплывшее модальное окно нового заказа клиента
    public function actionNeworder()
    {
        $model = new Arrivals();
        return $this->renderAjax('neworder', [
            'model' => $model,
        ]);
    }

    // Всплывшее модальное окно редактирования заказа клиента
    public function actionEditorder()
    {
        if (!Yii::$app->request->post('id')) {
            die();
        }
        $id = intval(Yii::$app->request->post('id'));
        $order = Arrivals::find()->where(['id' => $id])->one();
        return $this->renderAjax('editorder', [
            'model' => $order,
        ]);
    }

    // Всплывшее модальное окно новой заявки водителя
    public function actionNewapp()
    {
        $model = new Apps();
        //$model->id =$userid;
        return $this->renderAjax('newapp', [
            'model' => $model,
        ]);
    }

    // Всплывшее модальное окно назначения водителя
    public function actionSetdriver()
    {
        $id = intval(Yii::$app->request->post('id'));
        $model = new Drivers();
        $arrival = Arrivals::findOne($id);
        //print_r($arrival);
        $apps = Apps::find()->where(['place_from' => $arrival->departure_point])->all();
        //print_r($apps);
        //exit();
        $dataProvider = new ArrayDataProvider([
            'allModels' => $apps,
            'sort' => [
                'attributes' => ['date'],
            ],
            'pagination' => [
                'pageSize' => 200
            ],
        ]);
        return $this->renderAjax('setdrivers', [
            'model' => $model, 'arrival_id' => $id, 'dataProvider' => $dataProvider, 'apps' => $apps
        ]);
    }

    // Всплывшее модальное окно заявок водителей
    public function actionAllapps()
    {
        $apps = Apps::find()->all();
        //$query = new Query();
        $dataProvider = new ArrayDataProvider([
            'allModels' => $apps,
            'sort' => [
                'attributes' => ['date'],
            ],
            'pagination' => [
                'pageSize' => 200
            ],
        ]);
        return $this->renderAjax('allapps', [
            'model' => $apps, 'dataProvider' => $dataProvider
        ]);
    }

    // Сохранение назначения водителя
    public function actionTiedriver()
    {
        $arrival_id = intval(Yii::$app->request->post('arrival_id'));
        $driver = new Drivers();
        $params = [':arrival_id' => $arrival_id, ':departure_id' => $arrival_id];
        $round = Yii::$app->db->createCommand('SELECT * FROM rounds WHERE arrival_id=:arrival_id OR departure_id=:departure_id')->bindValues($params)->queryOne();
        if ($driver->load(Yii::$app->request->post())) {
            $arrival = Arrivals::findOne($arrival_id);

            $arrival->driver_id = $driver->id;
            if (!empty($driver->name)) {
                $driver->created = date('Y-m-d');
                $driver->save(false);
                $driver_id = $driver->id;
            }
            if ($driver_id > 0) {
                $arrival->driver_id = $driver_id;
            }
            $arrival->save(false);


            if (!empty($round)) {
                if ($arrival_id == $round['arrival_id']) {
                    $sarrival_id = $round['departure_id'];
                } else {
                    $sarrival_id = $round['arrival_id'];
                }
                $sarrival = Arrivals::findOne($sarrival_id);
                $sarrival->driver_id = $arrival->driver_id;
                $sarrival->save();
            }
            return json_encode(true);
        } else {
            return $this->renderAjax('setdrivers', [
                'model' => $driver,
            ]);
        }
    }

    // Отвязывание водителя
    public function actionCleardriver()
    {
        $arrival_id = intval(Yii::$app->request->post('id'));
        $arrival = Arrivals::findOne($arrival_id);
        $arrival->driver_id = 0;
        $arrival->save(false);
        return json_encode(true);
    }

    // По нажатию в модальном окне на Отправить - новый заказ сохраняется
    public function actionAddorder()
    {
        $client_id = 0;
        $client = new Clients();
        if ($client->load(Yii::$app->request->post())) {
            if (!empty($client->name)) {
                $client->created = date('Y-m-d');
                $client->save(false);
                $client_id = $client->id;
            }
        }
        $model = new Arrivals();
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            if ($client_id > 0) {
                $model->client_id = $client_id;
            }
            $model->date = Yii::$app->formatter->asDatetime(Yii::$app->request->post('date'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('neworder', [
            'model' => $model,
            ]);
        }
    }

    // По нажатию в модальном окне на Отправить - заказ обновляется
    public function actionUpdateorder($id)
    {
        //$id = Yii::$app->request->get('id');
        if (!$id) {
            return 'Error!';
        }
        $client_id = 0;
        $client = new Clients();
        if ($client->load(Yii::$app->request->post())) {
            if (!empty($client->name)) {
                $client->created = date('Y-m-d');
                $client->save(false);
                $client_id = $client->id;
            }
        }
        $model = Arrivals::findOne($id);
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            if ($client_id > 0) {
                $model->client_id = $client_id;
            }
            $model->date = Yii::$app->formatter->asDatetime(Yii::$app->request->post('date'), 'php:Y-m-d H:i:s');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('editorder', [
                'model' => $model,
            ]);
        }
    }

    // По нажатию в модальном окне на Отправить - новый заказ сохраняется
    public function actionAddapp()
    {
        $driver_id = 0;
        $model = new Apps();
        $drivers = new Drivers();
        if ($drivers->load(Yii::$app->request->post())) {
            if (!empty($drivers->name)) {
                $drivers->created = date('Y-m-d');
                $drivers->save(false);
                $driver_id = $drivers->id;
            }
        }
        if($model->load(Yii::$app->request->post()) /*&& $model->validate()*/) {
            if ($driver_id > 0) {
                $model->driver_id = $driver_id;
            }
            $model->date = Yii::$app->formatter->asDatetime(Yii::$app->request->post('date'), 'php:Y-m-d H:i:s');
            $model->date_order = date('Y-m-d H:i:s');
            $model->type = Yii::$app->request->post('table');
            $model->save(false);
            return json_encode(true);
        } else {
            return $this->renderAjax('newapp', [
                'model' => $model,
            ]);
        }
    }

    public function actionSetconnect() {
        $did = Yii::$app->request->post('did');
        $aid = Yii::$app->request->post('aid');
        if (!$aid || !$did) {
            return json_encode('Error!');
        }
        $params = [':arrival_id' => intval($aid), ':departure_id' => intval($did)];
        $round = Yii::$app->db->createCommand('SELECT * FROM rounds WHERE arrival_id=:arrival_id OR departure_id=:departure_id')->bindValues($params)->queryOne();
        if ($round) {
            return json_encode('Error!');
        } else {
            Yii::$app->db->createCommand()->insert('rounds', [
                'arrival_id' => intval($aid),
                'departure_id' => intval($did),
            ])->execute();
            return json_encode(true);
        }
    }

    public function actionDisconnect() {
        $did = Yii::$app->request->post('did');
        $aid = Yii::$app->request->post('aid');
        if (!$aid || !$did) {
            return json_encode('Error!');
        }
        $params = [':arrival_id' => intval($aid), ':departure_id' => intval($did)];
        Yii::$app->db->createCommand('DELETE FROM rounds WHERE arrival_id=:arrival_id AND departure_id=:departure_id', $params)->execute();
        return json_encode(true);
    }

    public function actionAddadmin() {
        $model = User::find()->where(['username' => 'admin'])->one();
        if (empty($model)) {
            $user = new User();
            $user->username = 'admin';
            $user->email = 'admin@poputchik.ru';
            $user->setPassword('admin');
            $user->generateAuthKey();
            if ($user->save()) {
                echo 'good';
            }
        }
    }
    public function actionAdddrivers($cnt)
    {
        if (intval($cnt) > 0) {
            for ($i = 1; $i <= $cnt; $i++) {
                $model = User::find()->where(['username' => 'driver'.$i])->one();
                if (empty($model)) {
                    $user = new User();
                    $user->username = 'driver'.$i;
                    $user->email = 'driver'.$i.'@poputchik.ru';
                    $user->setPassword('driver');
                    $user->generateAuthKey();
                    if ($user->save()) {
                        echo 'good';
                    }
                }
            }
        }
    }
}
