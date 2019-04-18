<?php
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\GridView;
use yii\widgets\ActiveForm;
use app\models\Drivers;


/**
 * @var yii\web\View $this
 * @var app\models\gbUser $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div id="success"> </div> <!-- For success message -->

<div class="gb-user-form">

    <?php $form = ActiveForm::begin(['options' => ['class' => 'setdrivers-form']]); ?>
    <h3>Назначить водителя</h3>

    <?= Html::hiddenInput ( 'arrival_id', $arrival_id, $options = [] ) ?>

    <div class="form-group">
        <h3>Водитель</h3>
        <ul class="nav nav-tabs">
            <li class="active"><a href="#change" data-toggle="tab">Выбрать</a></li>
            <li><a href="#create" data-toggle="tab">Создать</a></li>
        </ul>

        <div class="tab-content">
            <div id="change" class="tab-pane fade in active">
                <?
                // получаем всех авторов
                $drivers = Drivers::find()->where(['blocked' => 0])->all();
                // формируем массив, с ключем равным полю 'id' и значением равным полю 'name'
                //$items = \yii\helpers\ArrayHelper::map($clients,'id','name');
                foreach ($drivers as $driver) {
                    $items[$driver->id] = $driver->name;
                }
                $params = [
                    'prompt' => 'Выберите водителя'
                ];
                echo $form->field($model, 'id')->dropDownList($items, $params);
                ?>
                <div class="app-list">
                    <?php
                    $columns = array(
                        //['class' => 'yii\grid\SerialColumn'],
                        array(
                            //'label'=>$model->getAttributeLabel('project_name'),
                            'attribute'=>'date',
                            'format' =>  ['date', 'dd.MM.YYYY HH:mm'],
                        ),
                        array(
                            //'label'=>$model->getAttributeLabel('start_url'),
                            'attribute'=>'place_from',
                        ),
                        array(
                            //'label'=>'Начало работы',
                            'attribute'=>'place_to',
                        ),

                        array(
                            //'label'=>'Окончание работы',
                            'attribute'=>'driver_id',
                            'value' => function ($model, $key, $index, $widget) {
                                return $model->driver->name;
                            },
                        ),
                        /*
                        array(
                            'label'=>'Осталось',
                            'attribute'=>'time_to_finish',
                        ),

                        array(
                            'class'=>'yii\grid\ActionColumn',
                            'template'=>'{update} {delete}',
                            'deleteButtonUrl'=>'CHtml::normalizeUrl(array("delete","id"=>$data["PROJECT_ID"]))',
                            'buttons' => [
                                'update' => function ($url,$model) {
                                    return Html::a(
                                        '<span class="glyphicon glyphicon-screenshot"></span>',
                                        $url);
                                },
                                'delete' => function ($url,$model) {
                                    return Html::a(
                                        '<span class="glyphicon glyphicon-screenshot"></span>',
                                        $url);
                                },
                                'link' => function ($url,$model,$key) {
                                    return Html::a('Действие', $url);
                                },
                            ],
                        ),
                        */
                        [
                            'class' => 'yii\grid\ActionColumn',
                            'header'=>'Действия',
                            'template' => '{confirm}',
                            'urlCreator'=>function($action, $apps, $key, $index){
                                return \yii\helpers\Url::to(['site/setprevdriver','id'=>$apps->id]);
                            },
                            'buttons' => [
                                'confirm' => function ($url,$apps,$key) {
                                    return Html::a('Выбрать', $url, ['class' => 'btn btn-success btn-xs']);
                                },
                            ],
                        ],
                    );
                    echo '<h3>Заявки водителей</h3>';
                    echo GridView::widget([
                        'dataProvider' => $dataProvider,
                        'summary' => '',
                        //'template'=>'{items}',
                        'columns' => $columns,
                    ]);
                    ?>
                </div>
            </div>
            <div id="create" class="tab-pane fade in">
                <? $driver = new Drivers(); ?>
                <?= $form->field($driver, 'name')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($driver, 'phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($driver, 'auto_model')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($driver, 'auto_number')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($driver, 'auto_color')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($driver, 'places')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
            </div>
        </div>
    </div>

    <div class="form-group text-right">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success btn-update-password']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>