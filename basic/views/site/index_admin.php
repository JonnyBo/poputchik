<?php

/* @var $this yii\web\View */

use kartik\date\DatePicker;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = 'Попутчик - Прилеты/Вылеты';
?>
<div class="site-index">
    <div class="body-content">
        <div class="row">
            <div class="table-nav">
                <a class="btn btn-success new-order">Новый заказ клиента</a>
                <!--a class="btn btn-success new-app">Новая заявка водителя</a-->
                <button type="button" class="btn btn-success edit-order"  disabled="disabled">Редактировать</button>
                <button type="button" class="btn btn-primary set-driver"  disabled="disabled">Привязать водителя</button>
                <button type="button" class="btn btn-secondary clear-driver"  disabled="disabled">Отвязать водителя</button>
                <button type="button" class="btn btn-primary connect"  disabled="disabled">Связать</button>
                <button type="button" class="btn btn-secondary disconnect" disabled="disabled">Отвязать</button>
                <!--a class="btn btn-success all-apps">Заявки водителей</a-->
                <div class="filter">
                    <div class="col-lg-6">
                        <?php $form = ActiveForm::begin(['action' => '/', 'method' => 'get']); ?>
                        <?php
                        $from_date = $to_date = date('d.m.Y');
                        if (!empty($_GET['from_date'])) {
                            $from_date = strip_tags(trim($_GET['from_date']));
                        }
                        if (!empty($_GET['to_date'])) {
                            $to_date = strip_tags(trim($_GET['to_date']));
                        }
                        ?>
                        <div class="col-xs-10">
                            <?= DatePicker::widget([
                                'name' => 'from_date',
                                'value' => $from_date,
                                'type' => DatePicker::TYPE_RANGE,
                                'name2' => 'to_date',
                                'value2' => $to_date,
                                'pluginOptions' => [
                                    'autoclose' => true,
                                    'format' => 'dd.mm.yyyy'
                                ],
                                'language' => 'ru-RU',
                            ]); ?>
                        </div>
                        <div class="col-xs-2">
                            <?= Html::submitButton('Выбрать', ['class' => 'btn btn-success']); ?>
                        </div>
                        <?php  ActiveForm::end(); ?>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="arrivals">
                    <?php
                    //print_r($driver);
                    $columns = array(
                        //['class' => 'yii\grid\SerialColumn'],
                        array(
                            'label'=>'Дата',
                            'attribute'=>'date',
                            'format' =>  ['date', 'dd.MM.Y HH:mm'],
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
                                //return $model->driver->name;
                            },
                        ),
                    );

                    echo GridView::widget([
                        'dataProvider' => $dataProvider_left,
                        'summary' => '',
                        'caption'=>'Прилеты',
                        'showHeader' => true,
                        'columns' => $columns,
                        'rowOptions' => function($arrivals, $key, $index, $grid) {
                            $class = 'prow';
                            if($arrivals->driver_id == 0){
                                $class .= ' free';
                            }
                            return ['class' => $class, 'data-id' => $arrivals->id];
                        },
                    ]);
                    ?>
                </div>

            </div>
            <div class="col-md-6">
                <div class="arrivals">
                    <?php
                    echo GridView::widget([
                        'dataProvider' => $dataProvider_right,
                        'summary' => '',
                        'caption'=>'Вылеты',
                        'showHeader' => true,
                        'columns' => $columns,
                        'rowOptions' => function($departures, $key, $index, $grid){
                            $class = 'prow';
                            if($departures->driver_id == 0){
                                $class .= ' free';
                            }
                            return ['class' => $class, 'data-id' => $departures->id];
                        },
                    ]);
                    ?>
                </div>
            </div>
        </div>

    </div>
</div>
