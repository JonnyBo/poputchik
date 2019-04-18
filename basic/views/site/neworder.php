<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
//use app\models\Departures;
use app\models\Arrivals;
use app\models\Clients;
use yii\web\JsExpression;

/**
 * @var yii\web\View $this
 * @var app\models\gbUser $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div id="success"> </div> <!-- For success message -->

<div class="gb-user-form">

    <?php $form = ActiveForm::begin(['options' => ['class' => 'neworder-form']]); ?>
    <h3>Новый заказ клиента</h3>
    <?php //print_r($model); ?>
    <!--div class="form-group">
    <?= Html::radio('type', true, ['label' => 'Прилеты', 'value' => 'departures']) ?>
    <?= Html::radio('type', false, ['label' => 'Вылеты', 'value' => 'arrivals']) ?>
    </div-->

    <?= $form->field($model, 'type')->label('')->radioList([
        'departures' =>'Прилеты',
        'arrivals' =>'Вылеты'
    ])
    ?>


    <?= $form->field($model, 'flight_number')->textInput(['maxlength' => 100], ['class' => 'input-modal']) ?>

    <div class="form-group">
    <?= '<label class="control-label">Дата</label>'; ?>
    <?
    echo DateTimePicker::widget([
        'name' => 'date',
        'type' => DateTimePicker::TYPE_COMPONENT_PREPEND,
        'value' => date('d.m.Y H:i'),
        'class' => 'input-modal',
        'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'dd.mm.yyyy hh:ii'
        ],
    ]);
    ?>
    </div>

    <?= $form->field($model, 'departure_point')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'arrival_point')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'quantity')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'price')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <div class="form-group">
        <h3>Клиент</h3>
        <ul class="nav nav-tabs">
            <li class="active"><a href="#change" data-toggle="tab">Выбрать</a></li>
            <li><a href="#create" data-toggle="tab">Создать</a></li>
        </ul>

        <div class="tab-content">
            <div id="change" class="tab-pane fade in active">
                <?
                // получаем всех авторов
                $clients = Clients::find()->where(['blocked' => 0])->all();
                // формируем массив, с ключем равным полю 'id' и значением равным полю 'name'
                //$items = \yii\helpers\ArrayHelper::map($clients,'id','name');
                foreach ($clients as $client) {
                    $items[$client->id] = $client->name . ' Компания: ' . $client->company;
                }
                $params = [
                    'prompt' => 'Выберите клиента'
                ];
                echo $form->field($model, 'client_id')->dropDownList($items, $params);
                ?>
            </div>
            <div id="create" class="tab-pane fade in">
                <? $client = new Clients(); ?>
                <?= $form->field($client, 'name')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($client, 'company')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
                <?= $form->field($client, 'phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>
            </div>
        </div>
    </div>

    <div class="form-group text-right">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success btn-update-password']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>