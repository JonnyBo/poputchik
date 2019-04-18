<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
use app\models\Drivers;
use yii\grid\GridView;

/**
 * @var yii\web\View $this
 * @var app\models\gbUser $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div id="success"> </div> <!-- For success message -->

<div class="gb-user-form">

    <?php $form = ActiveForm::begin(['options' => ['class' => 'driverorder-form']]); ?>
    <h3>Взять заказ</h3>
    <?= Html::input('hidden', 'arrival_id', $model->id) ?>
    <div class="form-group">
        <div class="app-list">
            <?php
            $columns = array(
                //['class' => 'yii\grid\SerialColumn'],
                array(
                    'attribute'=>'date',
                    'format' =>  ['date', 'dd.MM.YYYY HH:mm'],
                ),
                array(
                    'attribute'=>'flight_number',
                ),
                array(
                    'attribute'=>'departure_point',
                ),
                array(
                    'attribute'=>'arrival_point',
                ),
                array(
                    'attribute'=>'quantity',
                ),
                /*
                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Выбрать',
                    'template' => '{confirm}',
                    'buttons' => [
                        'confirm' => function ($url,$apps,$key) {
                            //return Html::a('Выбрать', $url, ['class' => 'btn btn-success btn-xs']);
                            return Html::radio('use', false);
                        },
                    ],
                ],
                */
            );
                echo GridView::widget([
                    'dataProvider' => $dataProvider_order,
                    'showHeader' => true,
                    'summary' => '',
                    //'template'=>'{items}',
                    'columns' => $columns,
                ]);
            ?>
        </div>
    </div>

    <div class="form-group">
        <div class="app-list">
            <?php
            $columns = array(
                //['class' => 'yii\grid\SerialColumn'],
                array(
                    'attribute'=>'date',
                    'format' =>  ['date', 'dd.MM.YYYY HH:mm'],
                ),
                array(
                    'attribute'=>'flight_number',
                ),
                array(
                    'attribute'=>'departure_point',
                ),
                array(
                    'attribute'=>'arrival_point',
                ),
                array(
                    'attribute'=>'quantity',
                ),
                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Выбрать',
                    'template' => '{confirm}',
                    /*
                    'urlCreator'=>function($action, $model, $key, $index){
                        return \yii\helpers\Url::to(['site/setprevdriver','id'=>$apps->id]);
                    },
                    */
                    'buttons' => [
                        'confirm' => function ($url, $model, $key) {
                            //return Html::a('Выбрать', $url, ['class' => 'btn btn-success btn-xs']);
                            return Html::radio('use', false, ['value' => $model->id]);
                        },
                    ],
                ],

            );
            if (!empty($dataProvider->allModels)) {
                echo '<h3>Возможные варианты для круга</h3>';

                //print_r($dataProvider);
                echo GridView::widget([
                    'dataProvider' => $dataProvider,
                    'showOnEmpty' => false,
                    'emptyText' => 'Не найдено подходящих заказов для круга',
                    'showHeader' => true,
                    'summary' => '',
                    //'template'=>'{items}',
                    'columns' => $columns,
                ]);
            }
            ?>
        </div>
    </div>

    <div class="form-group text-right">
        <?= Html::submitButton('Забронировать', ['class' => 'btn btn-success btn-update-password']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>