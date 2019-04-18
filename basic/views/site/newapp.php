<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
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

    <?php $form = ActiveForm::begin(['options' => ['class' => 'newapp-form']]); ?>
    <h3>Новая заявка водителя</h3>

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
                echo $form->field($model, 'driver_id')->dropDownList($items, $params);
                ?>
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

    <div class="form-group">
    <?= Html::radio('table', true, ['label' => 'Прилеты', 'value' => 'departures']) ?>
    <?= Html::radio('table', false, ['label' => 'Вылеты', 'value' => 'arrivals']) ?>
    </div>

    <!--div class="form-group">
    <?= Html::checkbox('prev', false, ['label' => 'Предварительная', 'class' => 'prev-order']) ?>
    </div-->

    <? /* $form->field($model, 'flight_number')->textInput(['maxlength' => 255], ['class' => 'input-modal']) */ ?>

    <div class="form-group">
    <?= '<label class="control-label">Дата</label>'; ?>
    <? echo DateTimePicker::widget([
        'name' => 'date',
        'type' => DateTimePicker::TYPE_COMPONENT_PREPEND,
        'value' => date('d.m.Y H:i'),
        'class' => 'input-modal',
            'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'dd.mm.yyyy hh:ii'
        ]
    ]); ?>
    </div>

    <?= $form->field($model, 'place_from')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'place_to')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'quantity')->textInput(['type' => 'number'], ['class' => 'input-modal']) ?>


    <div class="form-group text-right">
        <?= Html::submitButton('Отправить', ['class' => 'btn btn-success btn-update-password']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>