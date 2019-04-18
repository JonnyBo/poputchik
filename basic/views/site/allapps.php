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

    <?php $form = ActiveForm::begin(['options' => ['class' => 'allapps-form']]); ?>
    <h3>Заявки водителей</h3>

    <div class="form-group">
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
                */
            );
            echo GridView::widget([
                'dataProvider' => $dataProvider,
                'summary' => '',
                //'template'=>'{items}',
                'columns' => $columns,
            ]);
            ?>
        </div>
    </div>

    <!--div class="form-group text-right">
        <?= Html::submitButton('Отправить', ['class' => 'btn btn-success btn-update-password']) ?>
    </div-->

    <?php ActiveForm::end(); ?>

</div>