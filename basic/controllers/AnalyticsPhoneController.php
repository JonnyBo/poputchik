<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use yii\data\Pagination;
use app\models\Departures;
use app\models\Arrivals;
use yii\caching\FileCache;

class AnalyticsPhoneController extends Controller
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

        $stats = Departures::totalStats();


        $rendered_grid_left = Yii::$app->JqgridTable->jqSimple('jqDepartures');
        $rendered_grid_right = Yii::$app->JqgridTable->jqSimple('jqArrivals');
        return $this->render('index', [
            'rendered_grid_left' => $rendered_grid_left,
            'rendered_grid_right' => $rendered_grid_right,
            'stats' => $stats
        ]);

    }

    public function actionTable()
    {
        $rendered_grid_left = Yii::$app->JqgridTable->jqSimple('jqDepartures');
        $rendered_grid_right = Yii::$app->JqgridTable->jqSimple('jqArrivals');
        return $this->render('table', [
            'rendered_grid_left' => $rendered_grid_left,
            'rendered_grid_right' => $rendered_grid_right,
        ]);

    }

    public function actionCreate()
    {
        $needRecords = 10000;

        for($count = 1;$count <= $needRecords;$count ++){
            $number_a = sprintf("38044%'.03d%'.02d%'.02d", rand(0,999),rand(0,99),rand(0,99)) ;
            $number_b = sprintf("38050%'.03d%'.02d%'.02d", rand(0,999),rand(0,99),rand(0,99)) ;

            $date_start =  self::randDate('2016-01-01 00:00:01','2016-12-31 23:59:59');
            $date_connect =  self::randTimePlus($date_start,1,30);
            $date_end =  self::randTimePlus($date_connect,0,1800);

            $fields = array(
                'number_a' => $number_a,
                'number_b' => $number_b,
                'date_start'=> $date_start,
                'date_connect' => $date_connect,
                'date_end'=>$date_end,
                'call_direction' => rand(1,2) ,
                'comment'=> 'Some text '.$count,
            );

           if( AnalyticsPhone::create($fields) ){
               $query[] = "[i] {$count}  Запись успешно добавлена " . self::array2string($fields);
           }else{
               $query[] = "[w] Ошибка добавления " . self::array2string($fields);
           }

        }

        $cache = new FileCache;
        $cacheKey = 'AnalyticsPhone_totalStats';
        $cache->set($cacheKey, false);

        return $this->render('create', [
            'results' => $query,
        ]);
    }

    public function actionDelete()
    {
        //todo: сделать с предупреждением
           if( AnalyticsPhone::delete(true) ){
               $query[] = "[d]  Все данные успешно уделенны " ;
           }else{
               $query[] = "[w] Ошибка удаления " ;
           }

        $cache = new FileCache;
        $cacheKey = 'AnalyticsPhone_totalStats';
        $cache->set($cacheKey, false);

        return $this->render('create', [
            'results' => $query,
        ]);
    }

    static public function randDate($min_date, $max_date)
    {
        $start = strtotime($min_date);
        $end = strtotime($max_date);
        $randomDate = date("Y-m-d H:i:s", rand($start, $end));
        return $randomDate;
    }

    static public function randTimePlus($date,$minTimeSec = 0, $maxTimeSec = '1800')
    {
        $unixTime = strtotime($date);
        $result = $unixTime + rand($minTimeSec, $maxTimeSec);
        return date("Y-m-d H:i:s", $result);

    }

    static public function array2string($data){
        $log_a = "";
        foreach ($data as $key => $value) {
            if(is_array($value))    $log_a .= "[".$key."] => (". array2string($value). ") \n";
            else                    $log_a .= "[".$key."] => ".$value."\n";
        }
        return $log_a;
    }

}