<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
use kartik\date\DatePicker;
use yii\grid\GridView;


//jQuery
//$this->registerJsFile('/jqGrid/js/jquery/1.7.2/jquery.min.js', ['position' => \yii\web\View::POS_HEAD]);

$this->registerJsFile('/js/jquery-1.11.0.min.js', ['position' => \yii\web\View::POS_HEAD]);

//jQuery UI
$this->registerJsFile('/jqGrid/js/jquery-ui/1.8.11/jquery-ui.min.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/js/jquery-ui/1.8.11/themes/redmond/jquery.ui.all.min.css');


$this->registerCssFile('/css/flexslider.css');

/*
$this->registerJsFile('/jqGrid/plugins/ui.multiselect.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/plugins/ui.multiselect.css');

//jqGrid
$this->registerCssFile('/jqGrid/css/ui.jqgrid.css');
$this->registerJsFile('/jqGrid/js/i18n/grid.locale-en.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerJsFile('/jqGrid/js/jquery.jqgrid.min.js',  ['position' => \yii\web\View::POS_HEAD]);

//jqGrid Extension
$this->registerCssFile('/client/jqgrid-ext.css');
$this->registerJsFile('/client/jqgrid-ext.js',  ['position' => \yii\web\View::POS_HEAD]);

//Other plugins
$this->registerJsFile('/jqGrid/js/jquery/form/2.67/jquery.form.min.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerJsFile('/jqGrid/js/jquery/form/2.67/jquery.form.min.js',  ['position' => \yii\web\View::POS_HEAD]);

//range_picker
$this->registerJsFile('/jqGrid/range_picker/js/daterangepicker.jQuery.compressed.edit.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/range_picker/css/ui.daterangepicker.css');

//Code highlighter
$this->registerJsFile('/jqGrid/highlightjs/6.0/highlight.min.js',  ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/highlightjs/6.0/styles/vs.css');
*/
?>
<style>
    .wrap > .container-fluid {padding: 70px 1px 20px 1px;}
    .wrap .table-nav {padding: 15px 1px;}
    .table {font-size: 10px;}
    .table td {padding: 5px 1px !important;}
</style>

<link rel="icon" href="misc/favicon.png" type="image/png">


<h1 style="text-align: center;width: 100%;"> Прилеты / вылеты</h1>

<div class="table-nav">
    <!--a class="btn btn-success new-order">Новый заказ клиента</a>
    <a class="btn btn-success new-app">Новая заявка водителя</a>
    <button type="button" class="btn btn-success edit-order"  disabled="disabled">Редактировать</button>
    <button type="button" class="btn btn-primary set-driver"  disabled="disabled">Привязать водителя</button>
    <button type="button" class="btn btn-secondary clear-driver"  disabled="disabled">Отвязать водителя</button>
    <button type="button" class="btn btn-primary connect"  disabled="disabled">Связать</button>
    <button type="button" class="btn btn-secondary disconnect" disabled="disabled">Отвязать</button>
    <a class="btn btn-success all-apps">Заявки водителей</a-->
    <div class="filter">
        <div class="col-lg-6">
            <?php $form = ActiveForm::begin(['action' => '/departures-arrivals/table', 'method' => 'get']); ?>
            <div class="col-xs-8">
                <?= DatePicker::widget([
                    'name' => 'from_date',
                    'value' => $_GET['from_date'],
                    'type' => DatePicker::TYPE_RANGE,
                    'name2' => 'to_date',
                    'value2' => $_GET['to_date'],
                    'pluginOptions' => [
                        'autoclose' => true,
                        'format' => 'dd.mm.yyyy'
                    ]
                ]); ?>
            </div>
            <div class="col-xs-4">
                <?= Html::submitButton('Выбрать', ['class' => 'btn btn-success']); ?>
            </div>
            <?php  ActiveForm::end(); ?>
        </div>
        <div class="clearfix"></div>
    </div>
</div>

<div id="MainSlider">
    <ul class="slides">
    <li class="sitem">
            <div>
        <?php
        //print_r($departures);
        $columns = array(
            //['class' => 'yii\grid\SerialColumn'],
            array(
                'label'=>'Дата',
                'attribute'=>'date',
                'format' =>  ['date', 'dd.MM.YYYY HH:mm'],
            ),
            array(
                'attribute'=>'flight_number',
                'label'=>'Рейс',
            ),
            array(
                'attribute'=>'departure_point',
                'label'=>'Откуда',
            ),
            array(
                'attribute'=>'arrival_point',
                'label'=>'Куда',
            ),
            array(
                'attribute'=>'quantity',
                'label'=>'Мест',
            ),
            array(
                'attribute'=>'price',
            ),
            array(
                'attribute'=>'client_id',
                'value' => function ($model, $key, $index, $widget) {
                    return $model->client->name;
                },
            ),
            array(
                'attribute'=>'driver_id',
                'value' => function ($model, $key, $index, $widget) {
                    return $model->driver->name;
                },
            ),
        );
        if (Yii::$app->user->can('driver')) {
            $columns = array(
                //['class' => 'yii\grid\SerialColumn'],
                array(
                    'attribute'=>'date',
                    'format' =>  ['date', 'dd.MM.YYYY HH:mm'],
                    'label'=>'Дата',
                ),
                array(
                    'attribute'=>'flight_number',
                    'label'=>'Рейс',
                ),
                array(
                    'attribute'=>'departure_point',
                    'label'=>'Откуда',
                ),
                array(
                    'attribute'=>'arrival_point',
                    'label'=>'Куда',
                ),
                array(
                    'attribute'=>'quantity',
                    'label'=>'Мест',
                ),
                /*
                array(
                    'attribute'=>'price',
                ),
                array(
                    'attribute'=>'client_id',
                    'value' => function ($model, $key, $index, $widget) {
                        return $model->client->name;
                    },
                ),

                array(
                    'attribute'=>'driver_id',
                    'value' => function ($model, $key, $index, $widget) {
                        return $model->driver->name;
                    },
                ),
                */
            );
            //кнопки
            $columns_left = $columns_right = $columns;
            array_push($columns_left, [
                'class' => 'yii\grid\ActionColumn',
                //'header'=>'Действия',
                'template' => '{confirm}',
                'urlCreator'=>function($action, $arrivals, $key, $index){
                    return \yii\helpers\Url::to(['departures-arrivals/driverorder','id'=>$arrivals->id]);
                },
                'buttons' => [
                    'confirm' => function ($url, $arrivals, $key) {
                        if ($arrivals->driver_id == 0) {
                            if ($res = \app\models\Arrivals::getStatus($arrivals->id)) {
                                return Html::tag('p', $res, ['class' => 'app-use']);
                            }
                            return Html::button('Беру', ['class' => 'btn btn-success btn-xs', 'onclick' => 'openDriverOrder("'.$arrivals->id.'");']);
                        }
                    },
                ],
            ]);
            array_push($columns_right, [
                'class' => 'yii\grid\ActionColumn',
                //'header'=>'Действия',
                'template' => '{confirm}',
                'urlCreator'=>function($action, $departures, $key, $index){
                    return \yii\helpers\Url::to(['departures-arrivals/driverorder','id'=>$departures->id]);
                },
                'buttons' => [
                    'confirm' => function ($url, $departures, $key) {
                        if ($departures->driver_id == 0) {
                            if ($res = \app\models\Arrivals::getStatus($departures->id)) {
                                return Html::tag('p', $res, ['class' => 'app-use']);
                            }
                            return Html::button('Беру', ['class' => 'btn btn-success btn-xs', 'onclick' => 'openDriverOrder("'.$departures->id.'");']);
                        }
                    },
                ],
            ]);
        }
        echo GridView::widget([
            'dataProvider' => $dataProvider_left,
            'summary' => '',
            'caption'=>'Прилеты',
            'showHeader' => true,
            'columns' => $columns_left,
            'rowOptions' => function($arrivals, $key, $index, $grid){
                if($arrivals->driver_id == 0){
                    return ['class' => 'danger'];
                }
            },
        ]);
        ?>
    </div>
</li>
    <li class="sitem">
    <div>
        <?php
        echo GridView::widget([
            'dataProvider' => $dataProvider_right,
            'summary' => '',
            'caption'=>'Вылеты',
            'showHeader' => true,
            'columns' => $columns_right,
            'rowOptions' => function($departures, $key, $index, $grid){
                if($departures->driver_id == 0){
                    return ['class' => 'danger'];
                }
            },
        ]);
        ?>
    </div>
</li>
    </ul>
</div>

<?php
$this->registerJsFile('/js/deparr.js',    ['depends'=>'app\assets\AppAsset']);
$this->registerJsFile('/js/slider.js',    ['depends'=>'app\assets\AppAsset']);
$this->registerJsFile('/js/jquery.flexslider-min.js', ['depends'=>'app\assets\AppAsset']);
$this->registerJsFile('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', ['depends'=>'app\assets\AppAsset']);
?>




